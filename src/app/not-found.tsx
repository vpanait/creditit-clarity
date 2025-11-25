'use client'

import { useRouter } from 'next/navigation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/feature/_landing-page/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <div className="font-syne text-[120px] font-bold text-text-primary mb-6">
            404
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Page not found
          </h1>

          {/* Description */}
          <p className="text-lg text-muted mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-lg border border-text-primary bg-transparent text-text-primary font-medium transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

