/**
 * Utility functions to collect form metadata including:
 * - URL parameters (UTM sources, etc.)
 * - Browser language
 * - IP address
 * - Current page URL
 * - Referrer
 * - Timestamp
 * - Local time and timezone
 * - Location (country, city, region) from IP geolocation
 */

export interface FormMetadata {
  sourceUrl: string;
  timestamp: string; // ISO timestamp (UTC)
  localTime?: string; // Local time in user's timezone
  timezone?: string; // User's timezone (e.g., "America/New_York", "Asia/Dubai")
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  browserLanguage: string;
  referrer: string;
  ipAddress?: string;
  userAgent?: string;
  // Location data from IP geolocation
  location?: string;
}

/**
 * Get all UTM parameters from the current URL
 */
const getUTMParams = (): Record<string, string> => {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};

  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      // Convert utm_source to utmSource for camelCase
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      utmParams[camelKey] = value;
    }
  });

  return utmParams;
};

/**
 * Get browser language
 */
const getBrowserLanguage = (): string => {
  if (typeof window === "undefined") return "en";
  return navigator.language || navigator.languages?.[0] || "en";
};

/**
 * Get local time and timezone information
 */
const getLocalTimeInfo = (): { localTime: string; timezone: string } => {
  if (typeof window === "undefined") {
    return { localTime: new Date().toISOString(), timezone: "UTC" };
  }

  const now = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Get timezone offset in minutes
  const offset = -now.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(offset) / 60);
  const offsetMinutes = Math.abs(offset) % 60;
  const offsetSign = offset >= 0 ? "+" : "-";
  const offsetString = `${offsetSign}${String(offsetHours).padStart(
    2,
    "0"
  )}:${String(offsetMinutes).padStart(2, "0")}`;

  // Create local time string in ISO format with timezone offset
  // Format: YYYY-MM-DDTHH:mm:ss.sss+HH:mm
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  const localISO = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${offsetString}`;

  return {
    localTime: localISO,
    timezone: timezone,
  };
};

/**
 * Get user's IP address and location data using a public API
 * Note: This is client-side, so it may be blocked by some browsers or networks
 */
const getIPAndLocation = async (): Promise<{
  ipAddress?: string;
  location?: string;
}> => {
  // First, get the IP address
  let ipAddress: string | undefined;
  let location: string | undefined;

  try {
    const ipResponse = await fetch("https://api.ipify.org?format=json", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (ipResponse.ok) {
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    }
  } catch (error) {
    console.warn("Failed to fetch IP address:", error);
  }

  // Get country information from country.is API (supports CORS, free, no API key)
  try {
    const response = await fetch("https://api.country.is/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();

      // country.is returns: { ip: string, country: string }
      // where 'country' is the ISO country code (e.g., "US", "AE", "GB")
      if (data.country) {
        location = data.country;

        // If we have IP from previous call, use it; otherwise use the one from country.is
        const finalIp = ipAddress || data.ip;

        ipAddress = finalIp;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch location from api.country.is:", error);
  }

  // Return at least the IP if we have it
  if (ipAddress) {
    return { ipAddress, location };
  }

  return {};
};

/**
 * Get user agent string
 */
const getUserAgent = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  return navigator.userAgent;
};

/**
 * Collect all form metadata
 */
export const collectFormMetadata = async (): Promise<FormMetadata> => {
  const utmParams = getUTMParams();
  const browserLanguage = getBrowserLanguage();
  const userAgent = getUserAgent();
  const { localTime, timezone } = getLocalTimeInfo();

  // Get IP address and location (async, may fail)
  const { ipAddress, location } = await getIPAndLocation();

  return {
    sourceUrl: typeof window !== "undefined" ? window.location.href : "",
    timestamp: new Date().toISOString(), // UTC timestamp
    localTime, // Local time with timezone offset
    timezone, // Timezone name (e.g., "America/New_York")
    referrer: typeof window !== "undefined" ? document.referrer : "",
    browserLanguage,
    userAgent,
    ipAddress,
    location,
    ...utmParams,
  };
};

/**
 * Get form metadata synchronously (without IP address and location)
 * Use this if you need immediate metadata without waiting for IP fetch
 */
export const getFormMetadataSync = (): Omit<
  FormMetadata,
  "ipAddress" | "location"
> => {
  const utmParams = getUTMParams();
  const browserLanguage = getBrowserLanguage();
  const userAgent = getUserAgent();
  const { localTime, timezone } = getLocalTimeInfo();

  return {
    sourceUrl: typeof window !== "undefined" ? window.location.href : "",
    timestamp: new Date().toISOString(),
    localTime,
    timezone,
    referrer: typeof window !== "undefined" ? document.referrer : "",
    browserLanguage,
    userAgent,
    ...utmParams,
  };
};
