import {
  IHowItWorksSection,
  IWhyCredititSection,
  ITLDRSection,
  SlugCommon,
  IIndustryBenchmarks,
} from ".";

export interface Industry extends SlugCommon {
  hero: {
    heading: string;
    subheading: string;
  };
  tldr: ITLDRSection; // Quick summary for LLM/GEO visibility
  howItWorks: IHowItWorksSection;
  why: IWhyCredititSection;
  benchmarks?: IIndustryBenchmarks; // Optional: Industry-specific financial benchmarks
  finalCta: {
    heading: string;
    subheading?: string; // Optional additional context
  };
  faqIds: string[]; // References to FAQ IDs
  testimonialIds: string[]; // References to testimonial IDs (1-2 per industry)
}
