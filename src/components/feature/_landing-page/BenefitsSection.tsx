'use client'

import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import RequestCallButton from "@/components/atoms/RequestCallButton";

interface IBenefit {
  title: string;
  description: string;
  image: string;
}

const benefits: IBenefit[] = [
  {
    title: "Deployed in Live Transactions",
    description: "Trusted by banks and financial institutions to operate in complex structured lending environments.",
    image: "/backgrounds/benefit-1.png",
  },
  {
    title: "Independent, Reliable, Audit-Ready",
    description: "Every workflow is documented, auditable, and designed for institutional due-diligence processes.",
    image: "/backgrounds/benefit-2.png",
  },
  {
    title: "Built for the GCC",
    description: "Purpose-built for regional regulatory frameworks, local data infrastructure, and operational standards.",
    image: "/backgrounds/benefit-3.png",
  },
]
  ;

const BenefitsSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  // Create scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to active feature index
  const activeFeatureIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  // Update active feature based on scroll
  activeFeatureIndex.on("change", (latest) => {
    const newIndex = Math.floor(latest);
    if (newIndex !== activeFeature && newIndex >= 0 && newIndex < benefits.length) {
      setActiveFeature(newIndex);
    }
  });

  return (
    <SectionWrapper
      sectionRef={sectionRef}
      id="benefits"
      className="h-[300vh] border-t border-b border-surface-border"
    >
      <div
        className="sticky top-0 min-h-screen flex items-center py-10 lg:py-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-20 w-full">
          <motion.div
            className="flex-1 pt-0 space-y-6 lg:space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <p className="text-sm text-standout mb-2">Benefits</p>
              <h1 className="max-w-[290px]">
                Why Institutions Choose Creditit
              </h1>
            </div>

            <div className="space-y-0">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "border-t border-surface-border py-5 pr-8 flex gap-6 items-start cursor-pointer transition-all duration-500",
                    activeFeature === index ? "opacity-100" : "opacity-60"
                  )}
                  onClick={() => setActiveFeature(index)}
                  animate={{
                    scale: activeFeature === index ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className={cn("text-xs font-bold leading-[14px]",
                      activeFeature === index ? "text-muted" : "text-surface"
                    )}
                    animate={{
                      scale: activeFeature === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {`0${index + 1}`}
                  </motion.span>
                  <div className="flex-1 space-y-4">
                    <motion.h3
                      className={cn(
                        "font-medium text-lg leading-6",
                        activeFeature === index ? "text-white" : "text-surface"
                      )}
                      animate={{
                        x: activeFeature === index ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className={cn(
                        "text-base lg:text-lg leading-6",
                        activeFeature === index ? "text-muted" : "text-surface"
                      )}
                      animate={{
                        x: activeFeature === index ? 10 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ scale: activeFeature === 2 ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <RequestCallButton variant="default" className="w-full lg:w-auto" />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 h-[740px] bg-white/5 rounded-lg overflow-hidden relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={benefits[activeFeature]?.image} alt={benefits[activeFeature]?.title} className="w-full h-full object-cover rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BenefitsSection;
