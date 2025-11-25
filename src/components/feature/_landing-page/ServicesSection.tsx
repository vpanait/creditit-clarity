import { motion } from "motion/react";
import { BackupServicesIcon, BorrowingBaseMonitoringIcon, DataAgentServicesIcon, RiskIntelligencePlatformIcon } from "@/components/atoms/icon";
import SectionWrapper from "@/components/atoms/SectionWrapper";

const services = [
  {
    icon: <DataAgentServicesIcon />,
    title: "Data Agent Services",
    description: "For asset-backed, structured finance, and receivables-based facilities.",
    items: [
      "Secure data ingestion",
      "Daily/weekly reporting",
      "Borrower compliance checks",
      "Operational resilience",
    ]
  },
  {
    icon: <BackupServicesIcon />,
    title: "Backup Servicing",
    description: "Independent continuity and recovery servicing for lenders in the GCC.",
    items: [
      "Step-in ready procedures",
      "Data continuity",
      "Collection waterfall logic",
      "Independent monitoring",
    ]
  },
  {
    icon: <BorrowingBaseMonitoringIcon />,
    title: "Borrowing Base Monitoring",
    description: "Real-time asset eligibility, concentration checks, and automated BB calculations.",
    items: [
      "Automated Ineligibility logic",
      "Exposure reporting",
      "Facility limit monitoring",
    ]
  },
  {
    icon: <RiskIntelligencePlatformIcon />,
    title: "Risk Intelligence Platform",
    description: "Full analytics layer powering underwriting and post-funding surveillance.",
    items: [
      "Fraud checks",
      "Payment behavior",
      "Merchant scoring",
      "Portfolio analytics",
    ]
  },
];

const ServicesSection = () => {
  return (
    <SectionWrapper
      id="services"
      className="py-20 lg:py-32 border-t border-surface-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-standout mb-2">Services</p>
          <h1>
            What we do
          </h1>
        </motion.div>

        <motion.div
          className="mb-12 lg:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg text-muted max-w-[590px]">
            We support banks, institutional investors, and credit funds with the data, infrastructure, and servicing capabilities required to operate and scale modern lending programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {services.map((benefit, index) => {
            return (
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut"
                  }}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3
                  className="font-medium text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                >
                  {benefit.title}
                </motion.h3>

                <motion.p
                  className="text-base leading-5 text-muted"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.4,
                    ease: "easeOut"
                  }}
                >
                  {benefit.description}
                </motion.p>

                <motion.ul
                  className="list-disc list-inside text-muted"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    ease: "easeOut"
                  }}
                >
                  {benefit.items.map((item, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 + 0.6, ease: "easeOut" }}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
