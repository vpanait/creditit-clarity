'use client'

import SectionWrapper from "../../atoms/SectionWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LINKEDIN_URL, ROUTE, WIDTH_CONSTRAINT } from "@/const";
import { Button } from "@/components/ui/button";
const logoWhite = "/logos/white.png";

const Footer = () => {
  return (
    <SectionWrapper
      as="footer"
      className={cn("bg-surface-dark border-t border-surface-dark-border py-6")}
    >
      <div className={cn(WIDTH_CONSTRAINT)}>
        {/* Bottom Links */}

        <div className="flex flex-col justify-between items-center gap-6 px-4 lg:px-0">
          <div className="flex flex-row justify-between items-center gap-10 text-sm w-full">
            <div className="min-w-24 transition-opacity duration-300">
              <div className="flex items-center gap-2.5 w-fit">
                <img
                  className="img-fluid size-6"
                  src={logoWhite}
                  alt="Creditit"
                />
                <span className={cn("font-medium text-lg text-white hidden md:block")}>Creditit</span>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center gap-8">
              <FooterLinks />
            </div>

            <p className="min-w-[210px] text-standout">{new Date().getFullYear()} © Creditit Technologies, Inc.</p>
          </div>

          <div className="lg:hidden flex justify-center items-center gap-6 w-full">
            <FooterLinks />
          </div>
        </div>
      </div >
    </SectionWrapper >
  );
};

const FooterLinks = () => {
  return (
    <>
      <Link href={ROUTE.TERMS_OF_USE} className="text-standout text-sm hover:text-muted transition-colors">Terms of Use</Link>
      <Link href={ROUTE.PRIVACY_POLICY} className="text-standout text-sm hover:text-muted transition-colors">Privacy Policy</Link>
      <Link href={ROUTE.COOKIES} className="text-standout text-sm hover:text-muted transition-colors">Cookies</Link>
      <Button
        variant="ghost"
        className="p-0 hover:cursor-pointer hover:bg-transparent text-standout text-sm font-regular"
        onClick={() => {
          const linkedinUrl = LINKEDIN_URL;
          window.open(linkedinUrl, '_blank');
        }}
      >
        LinkedIn
      </Button>
    </>
  );
};

export default Footer;
