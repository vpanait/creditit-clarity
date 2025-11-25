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
  question: "What services does Creditit provide to financial institutions?",
  answer: "Creditit provides comprehensive credit operations and data management services to financial institutions including banks, lenders, and credit providers. Our platform offers real-time credit assessment, automated risk analysis, receivables monitoring, and working capital facility management. We act as a Data Agent and Backup Servicer, ensuring data discipline, transparency, and auditability that meets international standards. Our services help institutions make faster, more informed lending decisions while maintaining strict compliance with regional and global financial regulations.",
}, {
  id: "data-agent-backup-servicer",
  question: "How does Creditit act as a Data Agent or Backup Servicer ?",
  answer: "As a Data Agent, Creditit collects, validates, and manages financial data from borrowers' accounting systems, bank statements, and other sources. We provide real-time data feeds to lenders, ensuring transparency and accuracy throughout the credit lifecycle. As a Backup Servicer, we maintain comprehensive records and can seamlessly step in to manage servicing operations if needed, ensuring business continuity. Our platform provides standardized reporting cadence, audit trails, and data validation that significantly exceeds local standards, giving lenders confidence in their credit operations.",
}, {
  id: "data-security",
  question: "How secure is the data processed through Creditit's platform?",
  answer: "Creditit employs bank-grade security standards to protect all financial data. All information is encrypted both in transit and at rest using industry-standard encryption protocols. Our platform is built with strict access controls, role-based permissions, and comprehensive audit logging. We comply with international data protection regulations and regional financial standards, ensuring that sensitive borrower and lender information remains confidential and secure. Regular security audits, penetration testing, and compliance certifications ensure our platform meets the highest security standards expected by financial institutions.",
}, {
  id: "types-lenders-institutions",
  question: "What types of lenders and institutions typically work with Creditit?",
  answer: "Creditit works with a diverse range of financial institutions including commercial banks, regional lenders, credit unions, alternative finance providers, and specialized lending institutions. Our platform serves both traditional banks operating in the GCC region and international financial institutions with regional operations. We support institutions offering various credit products including invoice financing, working capital facilities, trade finance, and receivables-based lending. Whether you're a large global bank or a regional commercial lender, Creditit's platform scales to meet your operational needs and regulatory requirements.",
}, {
  id: "risk-monitoring-improvement",
  question: "How does Creditit improve risk monitoring for receivables and working-capital facilities?",
  answer: "Creditit's AI-powered platform provides real-time risk monitoring and early warning systems for receivables and working capital facilities. Our system continuously analyzes borrower financial data, payment patterns, invoice quality, and customer creditworthiness to identify potential risks before they materialize. We provide automated alerts for payment delays, deteriorating financial health, or changes in borrower behavior. Our comprehensive dashboards give lenders visibility into portfolio performance, concentration risk, and facility utilization. This real-time transparency enables proactive risk management, faster decision-making, and improved portfolio quality, reducing defaults and improving overall facility performance.",
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
            Security, Data, and Credit Operations
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
