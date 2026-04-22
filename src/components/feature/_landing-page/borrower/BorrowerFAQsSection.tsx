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
    question: "What does Creditit do?",
    answer:
      "Creditit generates financial intelligence for your business. We connect to your accounting systems and turn your raw data into a live 360° view of your cash, revenue, receivables, and key KPIs — with an AI assistant that explains what's changing and what to do about it.\n\nThe result is that your finance team spends less time assembling numbers and more time acting on them.",
  },
  {
    id: "borrower-kpis",
    question: "What KPIs and metrics does Creditit track?",
    answer:
      "Creditit surfaces the metrics that matter for running the business: cash runway and burn rate, revenue and profitability trends, money in and money out, accounts receivable aging and collection rates, customer concentration, DSO, EBITDA, and financial covenants.\n\nThese are organized into a 360° dashboard with five views: Cash Trends, Profit & Spend, Money In/Out, Customer & Sales Health, and Debts & Limits.",
  },
  {
    id: "borrower-ai",
    question: "What does the AI actually do?",
    answer:
      "The AI reads your financial data and does three things: it detects trends and anomalies automatically, it explains why your metrics are changing in plain language, and it tells you what to act on next.\n\nYou can also ask it questions directly — 'Why did my margin drop this month?', 'Which customers are driving late payment risk?', 'How long will my cash last?' — and get a clear answer, not a chart.",
  },
  {
    id: "borrower-receivables",
    question: "How does Creditit help with collections?",
    answer:
      "For each invoice, our model predicts the expected payment date and the probability of late payment, based on historical behavior per customer. Your team sees a prioritized list of invoices to follow up on — ordered by urgency and recovery likelihood.\n\nEach customer also gets a risk score and grade (D through A+), so you can see which relationships are weakening your AR pool before it becomes a cash problem.",
  },
  {
    id: "borrower-integrations",
    question: "Which systems does Creditit connect to?",
    answer:
      "We connect to leading accounting systems including QuickBooks, Xero, NetSuite, Sage, and Zoho Books, as well as CRMs, data warehouses, and bank feeds. Our team handles the integration setup — your finance team does not need to be technical to get started.",
  },
  {
    id: "borrower-who-is-it-for",
    question: "Which companies is Creditit built for?",
    answer:
      "We focus on B2B SMEs in the UAE and GCC — particularly businesses with meaningful receivables: trading and distribution, logistics, staffing, B2B services, and supply-chain-driven companies.\n\nIf your finance team is currently piecing together cash position and AR health from spreadsheets, Creditit is built for you.",
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
