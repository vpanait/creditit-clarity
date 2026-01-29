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

const quiqup = "/partners/quiqup_white.png";
const nebula = "/partners/nebula_white.png";
const mawarid = "/partners/mawarid_white.png";

const logos = [
  { image: quiqup, name: "Quiqup" },
  { image: nebula, name: "Nebula Capital" },
  { image: mawarid, name: "Mawarid" },
];

const LogosSection = () => {
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
          Institutions we work with
        </motion.p>

        <div className="overflow-hidden px-2">
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
              {[...logos, ...logos].map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="group flex flex-col gap-4 items-center justify-center p-5 min-h-[8rem]"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{
                      scale: 1.05,
                      opacity: 1,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="w-60 h-28 object-contain"
                    />
                    <span className="text-sm text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {logo.name}
                    </span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LogosSection;
