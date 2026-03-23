import { motion } from "motion/react";
import { LayoutDashboard, Sparkles, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

const services = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "360° Financial Dashboard",
    description: "One place for every number that drives your business — updated in real time from your accounting data.",
    items: [
      "Cash runway and burn rate",
      "Revenue, margins, and profitability trends",
      "Money in / money out visibility",
      "Debts, limits, and financial covenants",
    ],
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "AI Financial Assistant",
    description: "Not just dashboards — an AI that reads your data, spots what changed, and tells you why it matters.",
    items: [
      "Ask questions in plain language",
      "Automatic trend and anomaly detection",
      "AI-generated variance explanations",
      "Actionable next steps, not just charts",
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "Receivables Intelligence",
    description: "Understand your AR the way a lender would — and collect faster before cash becomes a problem.",
    items: [
      "Customer risk scoring and grading",
      "Invoice payment prediction",
      "AI collections prioritization",
      "Debtor concentration and aging alerts",
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
          <h1>The Financial Brain of Your Business</h1>
        </motion.div>

        <motion.div
          className="mb-12 lg:mb-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg text-muted max-w-[590px]">
            Creditit connects to your accounting systems and generates financial intelligence —
            the KPIs, cash insights, and AI analysis you need to make confident decisions.
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
