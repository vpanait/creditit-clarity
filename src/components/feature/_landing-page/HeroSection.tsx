'use client'

import CookieConsent from "@/components/atoms/CookiesConsent";
import HeroWrapper from "@/components/atoms/HeroWrapper";
import RequestCallButton from "@/components/atoms/RequestCallButton";

import { SECTION_PADDING } from "@/const";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <HeroWrapper className={cn(SECTION_PADDING, "py-32 items-start")}>
      <div className="w-full max-w-7xl mx-auto flex xl:flex-row flex-col gap-10 xl:gap-0">

        <div className="text-text-primary space-y-6 z-10 flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="font-syne font-bold  text-[32px] xl:text-[44px]">
            Intelligent Data Systems
            <br className="hidden xl:block" />
            {" "}for Institutional Credit
          </h1>

          <p className="text-lg">
            Creditit provides regulated lenders with secure data {" "}
            <br className="hidden xl:block" />
            {" "}agent services, real-time collateral monitoring, {" "}
            <br className="hidden xl:block" />
            {" "}and automated risk intelligence for asset-backed {" "}
            <br className="hidden xl:block" />
            {" "}and structured finance transactions.{" "}
          </p>

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
