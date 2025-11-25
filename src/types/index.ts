import { LucideIcon } from "lucide-react";

export interface SlugCommon {
  slug: string;
  name: string;
  isPublished: boolean;
  meta: MetaInfo;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface IHowItWorksSection {
  title?: string;
  heading: string;
  items: HowItem[];
}

export interface IWhyCredititSection {
  title: string;
  heading: string;
  description?: string;
  items: IWhyItem[];
}

export interface IWhyItem {
  image: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface HowItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ITestimonialItem {
  quote: string;
  company: string;
  kpi: {
    label: string;
    value: string;
  }[];
}

export interface MetaInfo {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface IBenchmarkMetric {
  label: string;
  value: string;
  description: string;
  source: {
    text: string;
    url: string;
  };
}

export interface IIndustryBenchmarks {
  title: string;
  heading: string;
  metrics: IBenchmarkMetric[];
}

export interface ITLDRSection {
  title?: string;
  heading?: string;
  summary: string; // 40-60 word quick answer with qualified language
  keyPoints: string[]; // 4 bullet points with conservative claims
  disclaimer?: string; // Optional disclaimer text (e.g., "Subject to credit approval")
  cta?: string; // Optional custom CTA text
}
