import { cn } from "@/lib/utils";

const LegalHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <h2 className={cn("!font-medium text-base text-foreground mb-4", className)}>{children}</h2>
  );
};

export default LegalHeader;
