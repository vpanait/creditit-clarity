import { cn } from "@/lib/utils";
import { ElementType } from "react";
import { SECTION_PADDING } from "@/const";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
  as?: ElementType;
}

const SectionWrapper = ({
  children,
  className,
  id,
  sectionRef,
  as: Component = "section"
}: SectionWrapperProps) => {
  return (
    <Component
      {...(id && { id })}
      {...(sectionRef && { ref: sectionRef })}
      className={
        cn(
          "w-full relative",
          SECTION_PADDING,
          className
        )
      }
    >
      {children}
    </Component>
  );
};

export default SectionWrapper;
