import { WEBSITE_URL } from '@/const'
import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/sitemap-viewer'], // Hide the sitemap viewer page from search engines
    },
    sitemap: WEBSITE_URL + '/sitemap.xml',
  }
}

