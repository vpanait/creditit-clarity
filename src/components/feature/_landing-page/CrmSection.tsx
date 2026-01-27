import { cn } from "@/lib/utils";
import SectionWrapper from "../../atoms/SectionWrapper";
import { motion } from "motion/react";
import { WIDTH_CONSTRAINT } from "@/const";

const crms = [
  {
    image: "/integrations/zoho-books.png",
    name: "Zoho Books",
  },
  {
    image: "/integrations/netsuite.png",
    name: "NetSuite",
  },
  {
    image: "/integrations/quickbooks.png",
    name: "QuickBooks",
  },
  {
    image: "/integrations/xero.png",
    name: "Xero",
  }
];

const CrmSection = () => {
  return (
    <SectionWrapper className="py-20 border-b  border-surface-border">
      <div className={cn(WIDTH_CONSTRAINT, "space-y-8")}>
        <motion.p
          className="text-sm text-standout"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          We integrate with all major systems to give you real time access to data
        </motion.p>

        <div className="flex flex-wrap justify-around items-center gap-4">
          {crms.map((crm, index) => (
            <motion.div
              key={index}
              className="group flex flex-col gap-4 items-center justify-center p-5"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 0.6, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                scale: 1.05,
                opacity: 1,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <img
                src={crm.image}
                alt={crm.name}
                className="size-20 object-contain grayscale group-hover:grayscale-0 transition-[filter] duration-200"
              />
              <span className="text-sm text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {crm.name}
              </span>
            </motion.div>
          ))}
          <motion.div
            className="flex flex-col items-center justify-center p-5 min-h-[7rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: crms.length * 0.1, ease: "easeOut" }}
          >
            <span className="text-lg text-standout italic">and many more</span>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CrmSection;
