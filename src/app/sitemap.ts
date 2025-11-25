import { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/const";

// Required for static export
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = WEBSITE_URL;

  const allPages = [
    { path: "", priority: 1.0, changefreq: "weekly" as const },
    { path: "/terms-of-use", priority: 0.5, changefreq: "monthly" as const },
    { path: "/privacy-policy", priority: 0.5, changefreq: "monthly" as const },
    { path: "/cookies", priority: 0.5, changefreq: "monthly" as const },
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
