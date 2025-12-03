import { useEffect } from 'react';
import { loadGTM, removeGTM, hasAnalyticsConsent } from '@/lib/cookie-consent';

interface GTMProviderProps {
  children: React.ReactNode;
}

const GTMProvider = ({ children }: GTMProviderProps) => {
  useEffect(() => {
    // Check if GTM container ID is available
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const containerId = (window as any).GTM_CONTAINER_ID;
    
    if (!containerId || containerId === 'GTM-XXXXXXX') {
      console.warn('GTM Container ID not configured. Please replace GTM-XXXXXXX with your actual container ID.');
      return;
    }
    
    // Check current consent status
    if (hasAnalyticsConsent()) {
      loadGTM(containerId);
    }

    // Track previous consent state to avoid unnecessary calls
    let previousConsent = hasAnalyticsConsent();

    // Listen for cookie consent changes
    const handleCookieConsentChange = () => {
      const currentConsent = hasAnalyticsConsent();
      
      // Only act if consent state actually changed
      if (currentConsent !== previousConsent) {
        previousConsent = currentConsent;
        if (currentConsent) {
          loadGTM(containerId);
        } else {
          removeGTM();
        }
      }
    };

    // Listen for storage events (cookie changes)
    window.addEventListener('storage', handleCookieConsentChange);
    
    // Also listen for custom events (in case cookies are set via JavaScript)
    // Check less frequently to reduce unnecessary calls
    const checkConsentInterval = setInterval(() => {
      handleCookieConsentChange();
    }, 2000);

    return () => {
      window.removeEventListener('storage', handleCookieConsentChange);
      clearInterval(checkConsentInterval);
    };
  }, []);

  return <>{children}</>;
};

export default GTMProvider;
