import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import RequestCallButton from "@/components/atoms/RequestCallButton";
import { cn } from "@/lib/utils";
import { WIDTH_CONSTRAINT } from "@/const";

interface Tier {
  label: string;
  name: string;
  outcome: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const tiers: Tier[] = [
  {
    label: "Tier 1",
    name: "Creditit Insights",
    outcome: "Visibility",
    description: "Connect your accounting data and immediately see your financial position — cash, revenue, AR health — in one place.",
    features: [
      "Company onboarding and KYC/KYB",
      "Accounting system connection",
      "360° financial dashboard",
      "Cash runway and burn visibility",
      "Basic AI assistant",
    ],
    cta: "Get Started Free",
  },
  {
    label: "Tier 2",
    name: "Creditit Monitor",
    outcome: "Intelligence",
    description: "Full AI-powered financial intelligence — proactive alerts, customer risk, payment prediction, and an AI that explains what's changing.",
    features: [
      "Everything in Insights",
      "Customer risk scorecard and grading",
      "Invoice payment prediction",
      "Proactive alerts (cash, late payments, concentration)",
      "AI assistant with financial explanations",
      "Exports and reporting",
      "Document vault",
    ],
    featured: false,
    cta: "Start Monitoring",
  },
  // {
  //   label: "Tier 3",
  //   name: "Creditit Ready",
  //   outcome: "Financing Access",
  //   description: "Turn your financial intelligence into financing readiness — with a credit profile, borrowing simulation, and lender-ready pack.",
  //   features: [
  //     "Everything in Monitor",
  //     "Credit readiness score",
  //     "Borrowing capacity simulation",
  //     "Document gap detection",
  //     "Lender-ready report pack",
  //     "Financing submission workflow",
  //   ],
  //   cta: "Get Credit Ready",
  // },
];

const BorrowerTiersSection = () => {
  return (
    <SectionWrapper
      id="tiers"
      className="py-20 lg:py-32 border-t border-surface-border"
    >
      <div className={cn(WIDTH_CONSTRAINT, "flex flex-col items-center")}>
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-standout mb-2">How It Works</p>
          <h1>Start Simple. Go Deep.</h1>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg text-muted max-w-[560px]">
            Get immediate value from your data on day one. Every tier builds on the last —
            from financial visibility to full AI intelligence to financing readiness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={cn(
                "rounded-lg p-8 flex flex-col gap-6 border",
                "bg-surface border-accent/40 ring-1 ring-accent/20",
                "bg-surface/50 border-surface-border"
              )}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="space-y-1">
                {/* <p className="text-xs text-standout font-medium">{tier.label}</p> */}
                <h3 className="text-lg font-medium">{tier.name}</h3>
                <p className="text-xs text-muted uppercase tracking-widest">{tier.outcome}</p>
              </div>

              <p className="text-sm text-muted leading-relaxed">{tier.description}</p>

              <ul className="space-y-2.5 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check
                      className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        tier.featured ? "text-accent" : "text-muted"
                      )}
                      strokeWidth={2}
                    />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <RequestCallButton
                variant={tier.featured ? "default" : "outline"}
                className="w-full"
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BorrowerTiersSection;
