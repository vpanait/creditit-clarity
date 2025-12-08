'use client'

import { WIDTH_CONSTRAINT } from "@/const";
import { cn } from "@/lib/utils";

interface LogoCloudProps {
  logos: Array<{
    name: string;
    image: string;
  }>;
  description?: string;
}

const LogoCloud = ({ logos, description }: LogoCloudProps) => {
  return (
    <div className={cn(WIDTH_CONSTRAINT, "px-4 lg:px-[120px]")}>
      <div className="flex flex-col gap-6 lg:gap-8 max-w-[1200px] mx-auto">
        {description && (
          <p className="text-sm text-standout leading-[18px]">
            {description}
          </p>
        )}
        
        {/* Logo Row */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 lg:gap-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-5 h-[84px]"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-w-[114px] max-h-[44px] opacity-60 mix-blend-exclusion"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;

