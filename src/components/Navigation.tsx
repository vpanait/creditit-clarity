'use client'

import SectionWrapper from "./atoms/SectionWrapper";
const logoWhite = "/logos/white.png";
import { useRouter, usePathname } from 'next/navigation';
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

interface INavigationItem {
  label: string;
  sectionId: string;
}

const navigationItems: INavigationItem[] = [
  {
    label: "Services",
    sectionId: "services",
  },
  {
    label: "Benefits",
    sectionId: "benefits",
  },
  {
    label: "Track Record",
    sectionId: "testimonials",
  },
  {
    label: "Contact",
    sectionId: "contact",
  },
];

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLElement>(null);


  const handleNavigation = (item: INavigationItem) => {
    // If item has sectionId, handle anchor navigation
    if (item.sectionId) {
      // Try to find the element on the current page first
      const element = document.getElementById(item.sectionId);

      if (element) {
        // Element exists on current page, scroll to it
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Element doesn't exist on current page
        const currentPath = pathname;

        // If we're on home page but element doesn't exist, do nothing
        // Otherwise, navigate to home and scroll
        if (currentPath !== '/') {
          router.push('/');
          // Use setTimeout to ensure the page has loaded before scrolling
          setTimeout(() => {
            const element = document.getElementById(item.sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }
  };


  return (
    <SectionWrapper as="nav" sectionRef={navRef} className="fixed top-8 left-1/2 -translate-x-1/2 z-20">
      <div className={cn(WIDTH_CONSTRAINT, "flex items-center justify-between")}>
        {/* Logo - fades out on scroll */}
        <div className="min-w-24 transition-opacity duration-300 scroll-fade-out">
          <div
            className="flex items-center gap-2.5 hover:cursor-pointer w-fit"
            onClick={() => router.push("/")}
          >
            <img
              className="img-fluid size-6"
              src={logoWhite}
              alt="Creditit"
            />
            <span className={cn("font-medium text-lg text-white hidden md:block")}>Creditit</span>
          </div>
        </div>

        {/* Center navigation - dynamically rendered based on route */}
        {!isMobile && (
          <div className="bg-background/20 backdrop-blur-md rounded-lg hidden lg:flex items-center gap-6 px-6 py-3 transition-all duration-300 scroll-center">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="text-sm font-medium text-text-primary hover:text-muted transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {!isMobile && (<div className="w-24 " />)}
      </div>
    </SectionWrapper>
  );
};

export default Navigation;
