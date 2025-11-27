'use client'

import SectionWrapper from "../../atoms/SectionWrapper";
import RequestCallButton from "../../atoms/RequestCallButton";
import WhatsappButton from "../../atoms/WhatsappButton";

const steps = [
  {
    number: "01",
    text: "Tell us about your institution and your requirements.",
  },
  {
    number: "02",
    text: "Our team reviews your request and prepares next steps.",
  },
  {
    number: "03",
    text: "We reach out within one business day to schedule a conversation.",
  },
];

const ContactSection = () => {
  return (
    <SectionWrapper
      id="contact"
      className="py-12 lg:py-20 bg-surface border-b border-background"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="space-y-6 flex-1">
          <div className="mb-6 space-y-2">
            <p className="text-sm text-standout">
              Contact
            </p>
            <h1>
              Schedule a Consultation
            </h1>
          </div>


          <p className="text-muted text-lg max-w-[508px] mb-10">
            Built for banks, credit funds, and regulated lenders. Submit your details and our team will contact you within one business day.
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
              <p className="text-lg leading-6 max-w-[271px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
