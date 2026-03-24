// Cookie consent utility functions
export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export const isAnalyticsDebugEnabled = (): boolean => {
  // Enable debug by default in non-production environments so local testing works
  if (process.env.NODE_ENV !== "production") return true;

  // Optional explicit opt-in via env vars (NEXT_PUBLIC_* is inlined at build time)
  if (
    process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true" ||
    process.env.NEXT_PUBLIC_GTM_DEBUG === "true"
  ) {
    return true;
  }

  // Optional explicit opt-in via URL params or localStorage (useful for production debugging)
  try {
    if (typeof window === "undefined") return false;

    const params = new URLSearchParams(window.location.search);
    const raw =
      params.get("analytics_debug") ??
      params.get("gtm_debug") ??
      params.get("debug_analytics");

    if (raw && (raw === "1" || raw.toLowerCase() === "true")) return true;

    const stored = window.localStorage?.getItem?.("credititAnalyticsDebug");
    if (stored === "1" || stored === "true") return true;
  } catch {
    // Ignore debug detection errors
  }

  return false;
};

export const getCookieConsent = (): CookiePreferences | null => {
  if (typeof document === "undefined") return null;

  try {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("credititCookieConsent="))
      ?.split("=")[1];

    if (cookieValue) {
      return JSON.parse(decodeURIComponent(cookieValue));
    }
  } catch (error) {
    console.warn("Error parsing cookie consent:", error);
  }

  return null;
};

export const hasAnalyticsConsent = (): boolean => {
  console.log("isAnalyticsDebugEnabled() :", isAnalyticsDebugEnabled());
  if (isAnalyticsDebugEnabled()) return true;
  const consent = getCookieConsent();
  return consent?.analytics === true;
};

export const hasMarketingConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent?.marketing === true;
};

export const hasFunctionalConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent?.functional === true;
};

export const hasEssentialConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent?.essential === true;
};

// GTM loading functions
export const loadGTM = (containerId: string): void => {
  if (typeof window === "undefined") return;

  const debugEnabled = isAnalyticsDebugEnabled();
  const cookieConsent = getCookieConsent();

  // Consent Mode v2: ensure GTM/GA4 can legally send tags immediately.
  // Without initializing consent, many GTM setups default to "denied" and GA4 won't send hits.
  const analyticsStorage =
    debugEnabled || cookieConsent?.analytics === true ? "granted" : "denied";
  const adStorage =
    debugEnabled || cookieConsent?.marketing === true ? "granted" : "denied";
  const personalizationStorage =
    debugEnabled || cookieConsent?.functional === true ? "granted" : "denied";

  // Check if GTM is already loaded by checking for dataLayer and GTM script
  if (
    window.dataLayer &&
    document.querySelector(
      `script[src*="googletagmanager.com/gtm.js?id=${containerId}"]`,
    )
  ) {
    return;
  }

  // Initialize dataLayer with the gtm.start event — this is required by GTM
  // to begin processing triggers. Without it, the script loads but no tags fire.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  window.dataLayer.push({
    event: "consent_update",
    analytics_storage: analyticsStorage,
    ad_storage: adStorage,
    ad_user_data: adStorage,
    ad_personalization: adStorage,
    personalization_storage: personalizationStorage,
  });

  if (debugEnabled) {
    // Helps confirm in browser console that debug mode is engaged.
    // GTM also supports `gtm_debug` URL params, which is what we append below.
    window.dataLayer.push({ event: "creditit_analytics_debug", debug: true });
    console.info(
      "[Analytics Debug] Consent bypass enabled. Loading GTM in debug mode.",
    );
  }

  // Load GTM script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);

  // Add noscript fallback
  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${containerId}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);

  // console.info('GTM loaded with container ID:', containerId);
};

export const removeGTM = (): void => {
  if (typeof window === "undefined") return;

  // Remove GTM script
  const scripts = document.querySelectorAll(
    'script[src*="googletagmanager.com"]',
  );
  scripts.forEach((script) => script.remove());

  // Remove noscript fallback
  const noscripts = document.querySelectorAll(
    'noscript iframe[src*="googletagmanager.com"]',
  );
  noscripts.forEach((noscript) => noscript.parentElement?.remove());

  // Clear dataLayer
  if (window.dataLayer) {
    window.dataLayer = [];
  }

  // console.info('GTM removed');
};
