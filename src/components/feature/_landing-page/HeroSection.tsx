'use client'

import { AnimatePresence, motion } from "motion/react";
import CookieConsent from "@/components/atoms/CookiesConsent";
import HeroWrapper from "@/components/atoms/HeroWrapper";
import RequestCallButton from "@/components/atoms/RequestCallButton";
import { SECTION_PADDING, WIDTH_CONSTRAINT } from "@/const";
import { cn } from "@/lib/utils";

type SiteMode = 'lender' | 'borrower';

interface HeroSectionProps {
  mode: SiteMode;
  onModeChange: (mode: SiteMode) => void;
}

const heroContent = {
  lender: {
    headline: (
      <>
        Data Infrastructure for
        <br className="hidden xl:block" />
        {" "}Institutional Lending
      </>
    ),
    subheading: (
      <>
        We help banks and credit funds monitor collateral,{" "}
        <br className="hidden xl:block" />
        {" "}manage risk, and scale lending operations.
      </>
    ),
  },
  borrower: {
    headline: (
      <>
        Financial Intelligence,
        <br className="hidden xl:block" />
        {" "}Powered by AI
      </>
    ),
    subheading: (
      <>
        Connect your accounting in one click. Know exactly how your business is performing —{" "}
        <br className="hidden xl:block" />
        {" "}and ask an AI anything about the numbers.
      </>
    ),
  },
};

const HeroSection = ({ mode, onModeChange }: HeroSectionProps) => {
  const content = heroContent[mode];

  return (
    <HeroWrapper className={cn(SECTION_PADDING, "py-32 items-start")}>
      <div className={cn(WIDTH_CONSTRAINT, "flex xl:flex-row flex-col gap-10 xl:gap-0")}>
        <div className="text-text-primary space-y-6 z-10 flex-1 flex flex-col items-center justify-center text-center">

          {/* Mode toggle */}
          <div className="flex items-center bg-surface rounded-full p-1 gap-1">
            <button
              onClick={() => onModeChange('borrower')}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-all duration-200 cursor-pointer",
                mode === 'borrower'
                  ? "bg-accent text-background font-semibold"
                  : "text-muted hover:text-foreground"
              )}
            >
              For Businesses
            </button>
            <button
              onClick={() => onModeChange('lender')}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-all duration-200 cursor-pointer",
                mode === 'lender'
                  ? "bg-accent text-background font-semibold"
                  : "text-muted hover:text-foreground"
              )}
            >
              For Investors
            </button>
          </div>

          {/* Animated hero copy */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              className="space-y-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h1 className="font-syne font-bold text-[32px] xl:text-[44px]">
                {content.headline}
              </h1>
              <p className="text-lg">
                {content.subheading}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-6 mt-4">
            <RequestCallButton size="xl" />
          </div>
        </div>

        <CookieConsent />
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
