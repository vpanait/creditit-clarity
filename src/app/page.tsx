'use client'

import { AnimatePresence, motion } from "motion/react";
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
import CrmSection from "@/components/feature/_landing-page/CrmSection";
import BorrowerServicesSection from "@/components/feature/_landing-page/borrower/BorrowerServicesSection";
import BorrowerBenefitsSection from "@/components/feature/_landing-page/borrower/BorrowerBenefitsSection";
import BorrowerFAQsSection from "@/components/feature/_landing-page/borrower/BorrowerFAQsSection";
import BorrowerContactSection from "@/components/feature/_landing-page/borrower/BorrowerContactSection";
import BorrowerTiersSection from "@/components/feature/_landing-page/borrower/BorrowerTiersSection";
import { SiteModeProvider, useSiteMode } from "@/hooks/use-site-mode";

function HomePageContent() {
  const { mode, setMode } = useSiteMode();

  const handleModeChange = (newMode: 'lender' | 'borrower') => {
    setMode(newMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation mode={mode} />
      <HeroSection mode={mode} onModeChange={handleModeChange} />

      <AnimatePresence mode="wait">
        {mode === 'lender' ? (
          <motion.div
            key="lender"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LogosSection />
            <ServicesSection />
            <CrmSection />
            <BenefitsSection />
            <TestimonialsSection />
            <AboutCreditit />
            <FAQsSection />
            <ContactSection />
          </motion.div>
        ) : (
          <motion.div
            key="borrower"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LogosSection />
            <BorrowerServicesSection />
            <CrmSection />
            <BorrowerBenefitsSection />
            <BorrowerTiersSection />
            <BorrowerFAQsSection />
            <BorrowerContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteModeProvider>
      <HomePageContent />
    </SiteModeProvider>
  );
}
