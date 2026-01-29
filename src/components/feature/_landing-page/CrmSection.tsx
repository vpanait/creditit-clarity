'use client'

import { cn } from "@/lib/utils";
import SectionWrapper from "../../atoms/SectionWrapper";
import { motion } from "motion/react";
import { WIDTH_CONSTRAINT } from "@/const";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const crms = [
  { image: "/integrations/zoho-books.png", name: "Zoho Books" },
  { image: "/integrations/netsuite.png", name: "NetSuite" },
  { image: "/integrations/quickbooks.png", name: "QuickBooks" },
  { image: "/integrations/xero.png", name: "Xero" },
  { image: "/integrations/clearbooks.png", name: "ClearBooks" },
  { image: "/integrations/sage.png", name: "Sage" },
  { image: "/integrations/exact.png", name: "Exact" },
  { image: "/integrations/workday.png", name: "Workday" },
];

const CrmSection = () => {
  return (
    <SectionWrapper className="py-20 border-b border-surface-border">
      <div className={cn(WIDTH_CONSTRAINT, "space-y-8")}>
        <motion.p
          className="text-sm text-standout"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          We integrate with all major systems to give you real time access to data
        </motion.p>

        <div className="flex flex-col items-center gap-3 px-2">
          <div className="overflow-hidden w-full">
            <Carousel
              opts={{
                loop: true,
                align: "center",
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnFocusIn: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[...crms, ...crms].map((crm, index) => (
                  <CarouselItem
                    key={`${crm.name}-${index}`}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      className="group flex flex-col gap-4 items-center justify-center p-5 min-h-[7rem]"
                      whileHover={{
                        scale: 1.05,
                        opacity: 1,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      <img
                        src={crm.image}
                        alt={crm.name}
                        className="size-20 object-contain grayscale group-hover:grayscale-0 transition-[filter] duration-200"
                      />
                      <span className="text-sm text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {crm.name}
                      </span>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <motion.div
            className="flex shrink-0 items-center justify-center min-h-[7rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-lg text-standout italic">and many more</span>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CrmSection;
