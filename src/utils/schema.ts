import { FAQItem, IHowItWorksSection } from "@/types";

/**
 * Generates FAQPage schema markup for SEO and rich results
 * @see https://schema.org/FAQPage
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates HowTo schema markup for step-by-step processes
 * @see https://schema.org/HowTo
 */
export function generateHowToSchema(howItWorks: IHowItWorksSection) {
  if (!howItWorks || !howItWorks.items || howItWorks.items.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howItWorks.title || howItWorks.heading || "How It Works",
    description: howItWorks.heading,
    step: howItWorks.items.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.description,
    })),
  };
}

/**
 * Generates BreadcrumbList schema markup for navigation
 * @see https://schema.org/BreadcrumbList
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
