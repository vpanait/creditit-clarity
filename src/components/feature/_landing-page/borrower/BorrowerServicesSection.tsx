import { motion } from "motion/react";
import { LayoutDashboard, Sparkles, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

const services = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "360° Financial Dashboard",
    description: "Every number that drives your business — in one place, live from your accounting data.",
    items: [
      "Cash position, runway, and burn rate",
      "Revenue, margins, and profitability trends",
      "Money in, money out — at a glance",
      "Debt, credit limits, and covenant tracking",
    ],
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "AI Financial Assistant",
    description: "More than dashboards. An AI that reads your books, spots what changed, and tells you why.",
    items: [
      "Ask anything in plain language",
      "Automatic anomaly and trend detection",
      "Instant explanations for every variance",
      "Clear next steps — not just charts",
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "Working Capital Intelligence",
    description: "See the full cash cycle — who owes you, who you owe, and how long your money is tied up.",
    items: [
      "DSO and DPO trended over 12 months",
      "AR vs AP ratio — cash gap at a glance",
      "Customer concentration and revenue risk",
      "AI-driven answers on any invoice, bill, or customer",
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
          <h2>The Financial Brain of Your Business</h2>
        </motion.div>

        <motion.div
          className="mb-12 lg:mb-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg text-muted max-w-[590px]">
            Connect your accounting in one click. Creditit turns raw ledger data into live dashboards,
            working-capital insights, and an AI analyst that answers your questions in seconds — no
            analysts, no spreadsheets, no waiting for month-end.
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
