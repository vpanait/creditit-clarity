import SectionWrapper from "@/components/atoms/SectionWrapper";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

const AboutCreditit = () => {
  return (
    <SectionWrapper
      id="benefits"
      className="py-12 lg:py-20 border-t border-surface-border"
    >
      <div className={cn("max-w-7xl mx-auto text-center flex flex-col items-center justify-center", WIDTH_CONSTRAINT)}>
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <p className="text-sm text-standout mb-2">About Creditit</p>
            <h1>
              Who We Are
            </h1>
          </div>

          <p className="text-muted text-lg max-w-[508px]">
            Creditit is an independent data infrastructure provider for institutional lenders. Our team combines deep credit expertise, data engineering, and operational discipline.
          </p>

        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default AboutCreditit;
