import type { Metadata } from 'next'
import Script from 'next/script'
import '../index.css'
import ClientProviders from './providers'
import ScrollToTop from '@/components/ScrollToTop'
import { META, WEBSITE_URL } from '@/const'

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: META.TITLE,
  description: META.DESCRIPTION,
  keywords: META.KEYWORDS,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: WEBSITE_URL,
  },
  openGraph: {
    title: META.SHARE_TITLE,
    description: META.SHARE_DESCRIPTION,
    type: 'website',
    url: WEBSITE_URL,
    siteName: 'Creditit',
    locale: 'en_US',
    images: [{ url: '/logos/black_white.png', width: 1200, height: 630, alt: 'Creditit – Data Infrastructure for Institutional Lending' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@creditit_ai',
    title: META.SHARE_TITLE,
    description: META.SHARE_DESCRIPTION,
    images: ['/logos/black_white.png'],
  },
  authors: [{ name: 'Creditit' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${WEBSITE_URL}/#organization`,
  name: 'Creditit',
  alternateName: 'Creditit Technologies',
  url: WEBSITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${WEBSITE_URL}/logos/white.png`,
  },
  description: 'Independent data infrastructure provider for institutional lenders. We help banks, credit funds, and regulated lenders monitor collateral, manage risk, and scale lending operations in the GCC.',
  sameAs: ['https://www.linkedin.com/company/creditit/'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971504946720',
    email: 'team@creditit.ai',
    contactType: 'sales',
    areaServed: 'AE',
    availableLanguage: 'English',
  },
  areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
  foundingLocation: { '@type': 'Country', name: 'United Arab Emirates' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${WEBSITE_URL}/#website`,
  name: 'Creditit',
  url: WEBSITE_URL,
  publisher: { '@id': `${WEBSITE_URL}/#organization` },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Creditit Services',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Data Agent Services',
      description: 'Secure data collection and reporting for asset-backed lending facilities. Includes daily/weekly reporting, borrower compliance checks, and operational resilience.',
      provider: { '@id': `${WEBSITE_URL}/#organization` },
      serviceType: 'Financial Data Services',
      areaServed: 'AE',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Backup Servicing',
      description: 'Business continuity and recovery services if your primary servicer fails. Step-in ready procedures, continuous data access, and collections management.',
      provider: { '@id': `${WEBSITE_URL}/#organization` },
      serviceType: 'Financial Backup Servicing',
      areaServed: 'AE',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Borrowing Base Monitoring',
      description: 'Real-time asset eligibility checks, concentration limits, and automated borrowing base calculations for lenders.',
      provider: { '@id': `${WEBSITE_URL}/#organization` },
      serviceType: 'Lending Risk Monitoring',
      areaServed: 'AE',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Risk Intelligence Platform',
      description: 'Analytics for underwriting decisions and ongoing portfolio monitoring including fraud checks, payment behavior analysis, and merchant scoring.',
      provider: { '@id': `${WEBSITE_URL}/#organization` },
      serviceType: 'Financial Risk Analytics',
      areaServed: 'AE',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured data – Organization, WebSite, Services */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
        {/* GTM Container ID - Set early before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.GTM_CONTAINER_ID = 'GTM-K4H528HR';
            `,
          }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Preload Syne so it’s ready by first paint – no FOUT, SEO-safe */}
        <link
          rel="preload"
          href="/fonts/syne-latin-700-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preconnect + Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=block"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Font loading optimization - inline styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Prevent layout shift by setting consistent font metrics */
              
              * {
                  font-display: swap;
              }
              
              body {
                  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                  /* Set explicit line height to prevent layout shift */
                  line-height: 1.5;
              }
              
              
              .font-syne {
                  font-family: 'Syne', 'Arial Black', Arial, sans-serif;
                  line-height: 1.2;
                  /* Prevent font swap by using similar metrics */
                  letter-spacing: -0.01em;
              }
              
              .font-roboto {
                  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                  line-height: 1.5;
              }
            `,
          }}
        />
        <ClientProviders>
          <ScrollToTop />
          {children}
        </ClientProviders>

        {/* Font loading detection */}
        <Script
          id="font-loading-detection"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Mark fonts as loaded to show content
              if (typeof document !== 'undefined') {
                if ('fonts' in document) {
                    document.fonts.ready.then(() => {
                        document.documentElement.classList.add('fonts-loaded');
                    }).catch(() => {
                        // Fallback: show content even if font loading fails
                        document.documentElement.classList.add('fonts-loaded');
                    });
                } else {
                    // Browser doesn't support Font Loading API
                    document.documentElement.classList.add('fonts-loaded');
                }
              }
            `,
          }}
        />

        {/* Scroll-based navigation effects */}
        <Script
          id="scroll-navigation-effects"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Add scroll detection for navigation effects
              if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                let isScrolled = false;

                function handleScroll() {
                    const scrollY = window.scrollY;
                    const shouldBeScrolled = scrollY > 100; // Start effect after 100px scroll

                    if (shouldBeScrolled !== isScrolled) {
                        isScrolled = shouldBeScrolled;
                        document.body.classList.toggle('scrolled', isScrolled);
                    }
                }

                // Throttle scroll events for better performance
                let ticking = false;

                function requestTick() {
                    if (!ticking) {
                        requestAnimationFrame(handleScroll);
                        ticking = true;
                    }
                }

                function onScroll() {
                    ticking = false;
                    requestTick();
                }

                window.addEventListener('scroll', onScroll, {
                    passive: true
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}

