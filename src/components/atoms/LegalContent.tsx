import { cn } from "@/lib/utils";

const LegalContent = ({ children, className, header }: { children: React.ReactNode, className?: string, header?: string }) => {
  return (
    <div className={cn("text-base font-light text-muted mb-3", className)}>
      {header && <div className="text-text-primary font-normal mb-1">{header}</div>}
      {children}
    </div>
  );
};

export default LegalContent;
