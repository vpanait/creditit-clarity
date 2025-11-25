import { SlugCommon, IWhyCredititSection, IHowItWorksSection } from ".";

export interface UseCase extends SlugCommon {
  hero: {
    heading: string;
    subheading: string[];
  };
  howItWorks: IHowItWorksSection;
  why: IWhyCredititSection;
  testimonialIds: string[];
  faqIds: string[];
}
