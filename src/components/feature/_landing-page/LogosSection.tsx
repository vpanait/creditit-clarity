import { cn } from "@/lib/utils";
import SectionWrapper from "../../atoms/SectionWrapper";
import { motion } from "motion/react";
import { WIDTH_CONSTRAINT } from "@/const";

const quiqup = "/partners/quiqup_white.png";
const nebula = "/partners/nebula_white.png";
const mawarid = "/partners/mawarid_white.png";

const logos = [
  {
    image: quiqup,
    name: "Quiqup",
  },
  {
    image: nebula,
    name: "Nebula Capital",
  },
  {
    image: mawarid,
    name: "Mawarid",
  },
];

const LogosSection = () => {
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
          Institutions we work with
        </motion.p>

        <div className="flex flex-wrap justify-around items-center gap-4">
          {logos.map((logo, index) => (
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
              <img src={logo.image} alt={logo.name} className="w-60 h-28 object-contain" />
              <span className="text-sm text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LogosSection;
