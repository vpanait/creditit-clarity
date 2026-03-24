import type { Metadata } from 'next'
import Script from 'next/script'
import '../index.css'
import ClientProviders from './providers'
import ScrollToTop from '@/components/ScrollToTop'
import { META, WEBSITE_URL } from '@/const'

export const metadata: Metadata = {
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
    images: ['/logos/black_white.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@creditit_ai',
    title: META.SHARE_TITLE,
    description: META.SHARE_DESCRIPTION,
    images: ['/logos/black_white.png'],
  },
  authors: [{ name: 'Creditit' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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

