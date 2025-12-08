'use client'

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/feature/_landing-page/HeroSection";
import ServicesSection from "@/components/feature/_landing-page/ServicesSection";
import LogosSection from "@/components/feature/_landing-page/LogosSection";
import FAQsSection from "@/components/feature/_landing-page/FAQsSection";
import ContactSection from "@/components/feature/_landing-page/ContactSection";
import Footer from "@/components/feature/_landing-page/Footer";
import BenefitsSection from "@/components/feature/_landing-page/BenefitsSection";
import TestimonialsSection from "@/components/feature/_landing-page/TestimonialsSection";
import AboutCreditit from "@/components/feature/_landing-page/AboutCreditit";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <AboutCreditit />
      <FAQsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

