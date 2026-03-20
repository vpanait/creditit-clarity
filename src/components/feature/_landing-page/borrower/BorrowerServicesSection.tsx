import { motion } from "motion/react";
import { BarChart3, TrendingUp, Landmark } from "lucide-react";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

const services = [
  {
    icon: <BarChart3 className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "Receivables & Risk Intelligence",
    description: "Understand your AR position and customer risk the way a lender would — before they ask.",
    items: [
      "360° receivables dashboard",
      "Customer risk scorecard and grading",
      "DSO, collections effectiveness, debtor concentration",
      "AI assistant over your financial data",
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "AI Collections Prioritization",
    description: "Know exactly which invoices to chase today — and in what order — to maximize what you collect.",
    items: [
      "Invoice-level payment prediction",
      "Likelihood-to-pay scoring",
      "Recommended follow-up priority",
      "Suggested outreach timing",
    ],
  },
  {
    icon: <Landmark className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "Credit Readiness Workflow",
    description: "Go from accounting data to a lender-ready profile with a clear picture of your borrowing capacity.",
    items: [
      "Credit readiness score",
      "Borrowing base simulation",
      "Lender-ready report pack",
      "Document gap detection",
    ],
  },
];

const BorrowerServicesSection = () => {
  return (
    <SectionWrapper
      id="services"
      className="py-20 lg:py-32 border-t border-b border-surface-border"
    >
      <div className={cn(WIDTH_CONSTRAINT, "flex flex-col items-center justify-center")}>
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-standout mb-2">Platform</p>
          <h1>From Data to Financing-Ready</h1>
        </motion.div>

        <motion.div
          className="mb-12 lg:mb-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg text-muted max-w-[590px]">
            Creditit connects your accounting and receivables data and turns it into a live credit profile —
            with the risk intelligence and workflow to collect faster and access financing sooner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
              >
                {service.icon}
              </motion.div>

              <motion.h3
                className="font-medium text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-base leading-5 text-muted"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4, ease: "easeOut" }}
              >
                {service.description}
              </motion.p>

              <motion.ul
                className="list-disc list-inside text-muted"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
              >
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.6, ease: "easeOut" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BorrowerServicesSection;
