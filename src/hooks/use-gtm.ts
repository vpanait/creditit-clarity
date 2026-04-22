import { useCallback, useEffect } from "react";
import { hasAnalyticsConsent, isAnalyticsDebugEnabled } from "@/lib/cookie-consent";

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: unknown[]) => unknown;
  }
}

interface GTMEvent {
  event: string;
  [key: string]: unknown;
}

interface PageViewEvent extends GTMEvent {
  event: "page_view";
  page_title?: string;
  page_location?: string;
  page_path?: string;
  debug_mode?: boolean;
}

interface CustomEvent extends GTMEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
}

export const useGTM = () => {
  // Initialize dataLayer if it doesn't exist
  const initializeDataLayer = useCallback(() => {
    if (typeof window !== "undefined" && !window.dataLayer) {
      window.dataLayer = [];
    }
  }, []);

  // Check if analytics consent is given
  const canTrack = useCallback(() => {
    return hasAnalyticsConsent();
  }, []);

  // Push events to dataLayer only if consent is given
  const pushToDataLayer = useCallback(
    (event: GTMEvent) => {
      console.log("pushToDataLayer :", event);
      if (typeof window !== "undefined" && canTrack()) {
        const debugEnabled = isAnalyticsDebugEnabled();
        initializeDataLayer();
        // GA4 DebugView generally depends on `debug_mode: true`.
        // If GTM maps parameters through to GA4, this should surface in DebugView.
        if (debugEnabled && !("debug_mode" in event)) {
          window.dataLayer.push({ ...event, debug_mode: true });
        } else {
          window.dataLayer.push(event);
        }
      }
    },
    [initializeDataLayer, canTrack],
  );

  // Track page views
  const trackPageView = useCallback(
    (pageData?: Partial<PageViewEvent>) => {
      console.log("trackPageView :", pageData);
      const debugEnabled = isAnalyticsDebugEnabled();
      const pageViewEvent: PageViewEvent = {
        event: "page_view",
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        ...(debugEnabled ? { debug_mode: true } : {}),
        ...pageData,
      };
      pushToDataLayer(pageViewEvent);
    },
    [pushToDataLayer],
  );

  // Track custom events
  const trackEvent = useCallback(
    (eventName: string, eventData?: Partial<CustomEvent>) => {
      console.log("trackEvent :", eventName, eventData);
      const customEvent: CustomEvent = {
        event: eventName,
        ...eventData,
      };
      pushToDataLayer(customEvent);
    },
    [pushToDataLayer],
  );

  // Common tracking functions for your business
  const trackButtonClick = useCallback(
    (buttonName: string, location?: string) => {
      trackEvent("button_click", {
        event_category: "engagement",
        event_label: buttonName,
        button_name: buttonName,
        location: location || window.location.pathname,
      });
    },
    [trackEvent],
  );

  const trackFormSubmit = useCallback(
    (formName: string, success: boolean = true) => {
      trackEvent("form_submit", {
        event_category: "engagement",
        event_label: formName,
        form_name: formName,
        success: success,
      });
    },
    [trackEvent],
  );

  const trackSignUp = useCallback(
    (method: string = "unknown") => {
      trackEvent("sign_up", {
        event_category: "conversion",
        event_label: method,
        sign_up_method: method,
      });
    },
    [trackEvent],
  );

  const trackPlayDemo = useCallback(
    (source: string = "unknown") => {
      trackEvent("play_demo", {
        event_category: "conversion",
        event_label: source,
        demo_source: source,
      });
    },
    [trackEvent],
  );

  const trackContact = useCallback(
    (method: string = "unknown") => {
      trackEvent("contact", {
        event_category: "engagement",
        event_label: method,
        contact_method: method,
      });
    },
    [trackEvent],
  );

  const trackScroll = useCallback(
    (scrollDepth: number) => {
      trackEvent("scroll", {
        event_category: "engagement",
        event_label: `${scrollDepth}%`,
        scroll_depth: scrollDepth,
      });
    },
    [trackEvent],
  );

  const trackTimeOnPage = useCallback(
    (timeInSeconds: number) => {
      trackEvent("time_on_page", {
        event_category: "engagement",
        event_label: `${timeInSeconds}s`,
        time_on_page: timeInSeconds,
      });
    },
    [trackEvent],
  );

  return {
    trackPageView,
    trackEvent,
    trackButtonClick,
    trackFormSubmit,
    trackSignUp,
    trackPlayDemo,
    trackContact,
    trackScroll,
    trackTimeOnPage,
    pushToDataLayer,
    canTrack,
  };
};

export default useGTM;
