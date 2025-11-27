'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

interface ITestimonialItem {
  quote: string;
  company: string;
  image: string;
  kpi: {
    label: string;
    value: string;
  }[];
}

const testimonials: ITestimonialItem[] = [
  {
    image: "/backgrounds/testimonial-1.png",
    quote:
      "Their reporting and audit trails meet the standards we expect globally. It's rare to find this level of data discipline in the region.",
    company: "Head of Structured Finance, International Bank",
    kpi: [],
  },
  {
    image: "/backgrounds/testimonial-2.jpg",
    quote:
      "We needed a partner who understood local regulatory requirements and data infrastructure. Creditit delivered exactly that: reliable reporting and full audit readiness.",
    company: "Director of Credit Operations, Regional Commercial Bank",
    kpi: [],
  },
];


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="testimonials"
      className={cn("py-12 lg:py-20 lg:min-h-screen flex flex-col lg:flex-row gap-14 justify-center items-center", WIDTH_CONSTRAINT)}>
      {/* <div className={cn("", WIDTH_CONSTRAINT)}> */}
      <motion.div
        className="flex-1 max-w-[570px] lg:h-[740px] bg-white/5 rounded-lg overflow-hidden relative hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={`image-${currentIndex}`}
            src={currentTestimonial.image}
            alt={currentTestimonial.company}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Testimonial Content */}
      <div className="flex-1 flex flex-col gap-10 justify-between lg:h-[740px]">
        {/* Author Info and Navigation */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${currentIndex}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <p className="text-lg font-medium">
                {currentTestimonial.company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={`quote-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-[24px] lg:text-[32px] font-bold leading-[32px] lg:leading-[40px] font-syne "
            >
              <span className="leading-none font-bold inline-block -ml-2">"</span>
              <span className="inline">{currentTestimonial.quote}</span>
              <span className="leading-none font-bold inline-block">"</span>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="space-y-10">
          {currentTestimonial.kpi.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`kpi-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between gap-4"
              >
                {currentTestimonial.kpi.map((kpi) => (
                  <div key={kpi.label} className="flex flex-col gap-2">
                    <p className="text-sm text-standout">{kpi.label}</p>
                    <p className="text-3xl font-syne font-bold">{kpi.value}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {testimonials.length > 1 && (
            <div className="flex items-center gap-4">
              <Button
                variant="dark"
                size="icon"
                onClick={handlePrevious}
                className="size-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                onClick={handleNext}
                className="size-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
