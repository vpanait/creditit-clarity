'use client'

import { generateSitemap } from '@/utils/generateSitemap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/feature/_landing-page/Footer';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function SitemapViewerPage() {
  const [sitemap, setSitemap] = useState<string>('')

  useEffect(() => {
    setSitemap(generateSitemap())
  }, [])

  const handleDownload = () => {
    if (typeof window === 'undefined') return
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6">Sitemap</h1>

        <div className="p-6 rounded-lg border border-border mb-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            View and Download Sitemap
          </h2>

          <Button onClick={handleDownload}>
            Download sitemap.xml
          </Button>
        </div>

        <div className="p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Preview
          </h2>

          <pre className="text-xs text-white bg-surface-dark p-4 rounded overflow-x-auto">
            {sitemap}
          </pre>
        </div>

        <div className="mt-6 text-sm text-muted">
          <p>
            <strong>Note:</strong> For production, generate this file and place it at{' '}
            <code className="px-2 py-1 rounded">/public/sitemap.xml</code>
          </p>
          <p className="mt-2">
            Or use a dynamic route handler to serve this XML dynamically.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

