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

const faqItems: FAQItem[] = [
  {
    id: "borrower-what-is-creditit",
    question: "What exactly is Creditit for SMEs?",
    answer:
      "Creditit is a credit readiness and receivables monitoring platform. We connect to your accounting systems, verify your entity, and turn your receivables and financial data into a live credit profile — giving you the visibility to collect faster, understand your risk, and arrive at the financing conversation already prepared.\n\nWe provide immediate value as software, even before any credit product is involved.",
  },
  {
    id: "borrower-scorecard",
    question: "What is the customer risk scorecard and how is it used?",
    answer:
      "Our AI builds an explainable risk score for each of your customers based on their payment behavior — weighted DSO, share of invoices paid late, collection effectiveness, customer age, and delinquency patterns. Each customer is mapped to a risk grade (D through A+).\n\nThis tells you which customers are weakening your AR pool, where concentration risk is building, and which relationships to watch closely — the same view a lender would use to assess your portfolio.",
  },
  {
    id: "borrower-collections-ai",
    question: "How does AI Collections Prioritization work?",
    answer:
      "For each invoice, our model predicts the expected payment date, the estimated days late, and the probability of late payment. Your team sees a ranked list of invoices to follow up on today — ordered by urgency and likelihood of recovery.\n\nThis is based on historical payment patterns per customer, invoice signals, and time-based behavior, with leakage-safe logic. The result: your collections team knows exactly where to focus, without manual triage.",
  },
  {
    id: "borrower-credit-readiness",
    question: "What does the Credit Readiness workflow give me?",
    answer:
      "Creditit generates a readiness score that reflects how prepared your AR portfolio is for a lender conversation — based on debtor concentration, invoice age, risk grade distribution, and document completeness.\n\nFrom there, you can simulate your estimated borrowing capacity, identify what is limiting it, close document gaps, and export a lender-ready report pack. The goal is to reduce the time between deciding to seek financing and being able to act on it.",
  },
  {
    id: "borrower-integrations",
    question: "Which systems does Creditit connect to?",
    answer:
      "We connect to leading accounting systems (QuickBooks, Xero, NetSuite, Sage, Zoho Books), CRMs, data warehouses, and spreadsheet exports. Our team handles the integration — your finance team does not need to be technical to get started.",
  },
  {
    id: "borrower-who-is-it-for",
    question: "Which companies is Creditit built for?",
    answer:
      "We focus on B2B SMEs in the UAE and GCC that are receivables-heavy: trading and distribution, logistics, staffing and manpower, B2B services with invoice cycles, and supply-chain-driven businesses.\n\nIf your company sends invoices, cares about DSO and collections, and wants better visibility before — or alongside — a financing conversation, Creditit is designed for you.",
  },
];

const BorrowerFAQsSection = () => {
  if (faqItems.length === 0) {
    return null;
  }

  return (
    <SectionWrapper
      id="faqs"
      className="py-12 lg:py-20 border-t border-surface-border"
    >
      {faqItems && faqItems.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema(faqItems))}
        </script>
      )}

      <div className="max-w-[872px] mx-auto">
        <div className="text-center mb-16 space-y-2">
          <p className="text-sm text-standout">FAQs</p>
          <h1>Frequently Asked Questions</h1>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="border-b first:border-t border-surface-border"
            >
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

export default BorrowerFAQsSection;
