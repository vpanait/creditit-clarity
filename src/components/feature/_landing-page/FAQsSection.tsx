import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "@/components/atoms/SectionWrapper";

interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

const faqItems: FAQItem[] = [{
  id: "services-financial-institutions",
  question: "What services does Creditit provide?",
  answer: "We provide data agent services, backup servicing, borrowing base monitoring, and risk intelligence for banks and credit funds. Our platform ensures real-time transparency, full audit trails, and regulatory compliance.",
}, {
  id: "data-agent-backup-servicer",
  question: "How does Creditit act as a Data Agent or Backup Servicer?",
  answer: "As a Data Agent, we collect and validate financial data from borrowers and provide real-time reporting to lenders. As a Backup Servicer, we maintain comprehensive records and can step in to manage servicing operations if needed.",
}, {
  id: "data-security",
  question: "How secure is the data on Creditit's platform?",
  answer: "We use bank-grade security with encryption in transit and at rest, strict access controls, and comprehensive audit logging. Regular security audits ensure we meet institutional standards.",
}, {
  id: "types-lenders-institutions",
  question: "What types of institutions work with Creditit?",
  answer: "We work with commercial banks, credit funds, venture debt providers, and regulated lenders offering invoice financing, working capital facilities, trade finance, and receivables-based lending.",
}, {
  id: "implementation-timeline",
  question: "How long does implementation take?",
  answer: "The platform comes with many ready-to-use features. Custom configurations or data integrations are handled by our team and are typically delivered within 2–4 weeks.",
}];


const FAQsSection = () => {
  if (faqItems.length === 0) {
    return null;
  }

  return (
    <SectionWrapper
      id="faqs"
      className="py-12 lg:py-20 border-t border-surface-border"
    >
      {/* FAQ Schema */}
      {faqItems && faqItems.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema(faqItems))}
        </script>
      )}

      <div className="max-w-[872px] mx-auto">
        <div className="text-center mb-16 space-y-2">
          <p className="text-sm text-standout">FAQs</p>
          <h1>
            Frequently Asked Questions
          </h1>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b first:border-t border-surface-border">
              <AccordionTrigger className="text-lg font-medium text-text-primary py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted pb-6 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FAQsSection;
