import { SlugCommon, IWhyCredititSection } from ".";

export interface Integration extends SlugCommon {
  logo: string;
  hero: {
    heading: string;
    subheading: string[];
  };
  thePowerOf: {
    title?: string;
    items: string[];
  };
  why: IWhyCredititSection;
  testimonialIds: string[];
  faqIds: string[];
}
