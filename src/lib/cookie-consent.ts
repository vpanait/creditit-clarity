// Cookie consent utility functions
export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export const getCookieConsent = (): CookiePreferences | null => {
  if (typeof document === 'undefined') return null;
  
  try {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('credititCookieConsent='))
      ?.split('=')[1];
    
    if (cookieValue) {
      return JSON.parse(decodeURIComponent(cookieValue));
    }
  } catch (error) {
    console.warn('Error parsing cookie consent:', error);
  }
  
  return null;
};

export const hasAnalyticsConsent = (): boolean => {
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
  if (typeof window === 'undefined') return;
  
  // Check if GTM is already loaded
  if (window.dataLayer) return;
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Load GTM script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);
  
  // Add noscript fallback
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${containerId}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
  
  // console.info('GTM loaded with container ID:', containerId);
};

export const removeGTM = (): void => {
  if (typeof window === 'undefined') return;
  
  // Remove GTM script
  const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
  scripts.forEach(script => script.remove());
  
  // Remove noscript fallback
  const noscripts = document.querySelectorAll('noscript iframe[src*="googletagmanager.com"]');
  noscripts.forEach(noscript => noscript.parentElement?.remove());
  
  // Clear dataLayer
  if (window.dataLayer) {
    window.dataLayer = [];
  }
  
  // console.info('GTM removed');
};
