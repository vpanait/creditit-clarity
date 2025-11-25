import { cn } from "@/lib/utils";

const HeroWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={cn("relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden bg-background", className)}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: '65.24vw',
            height: '65.24vw',
            left: 'calc(50% - 32.62vw - 17.28vw)',
            top: '62.16vh',
            background: '#C4B9FE',
            filter: 'blur(39.40vw)',
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: '44.13vw',
            height: '44.13vw',
            left: 'calc(50% - 22.065vw)',
            top: '75.25vh',
            background: '#DFFF32',
            filter: 'blur(23.64vw)',
          }}
        />
      </div>

      {children}
    </section>
  );
};

export default HeroWrapper;
