'use client'

import SectionWrapper from "@/components/atoms/SectionWrapper";
import RequestCallButton from "@/components/atoms/RequestCallButton";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

const steps = [
  {
    number: "01",
    text: "Connect your accounting data and share a bit about your business.",
  },
  {
    number: "02",
    text: "We build your 360° financial dashboard and configure your AI assistant.",
  },
  {
    number: "03",
    text: "A Creditit expert reaches out within one business day to walk you through your insights.",
  },
];

const BorrowerContactSection = () => {
  return (
    <SectionWrapper
      id="contact"
      className="py-12 lg:py-20 bg-surface border-b border-background"
    >
      <div className={cn(WIDTH_CONSTRAINT, "flex flex-col lg:flex-row items-center justify-between gap-12")}>
        <div className="space-y-6 flex-1">
          <div className="mb-6 space-y-2">
            <p className="text-sm text-standout">Contact</p>
            <h2>See Your Business from Every Angle</h2>
          </div>

          <p className="text-muted text-lg max-w-[508px] mb-10">
            Connect your data and let our AI assistant surface what matters — cash runway,
            receivable trends, and the insights your team needs to move faster.
            Submit your details and we'll have you up and running within one business day.
          </p>

          <RequestCallButton variant="reverse" className="w-full lg:w-auto" />
        </div>

        <div className="flex flex-col flex-1 items-center">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold leading-[14px]">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-[72px] bg-background"></div>
                )}
              </div>
              <p className="text-lg leading-6 max-w-[271px]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BorrowerContactSection;
