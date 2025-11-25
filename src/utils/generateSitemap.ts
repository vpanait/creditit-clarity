import { ROUTE, WEBSITE_URL } from "@/const";

export const generateSitemap = (): string => {
  const baseUrl = WEBSITE_URL;

  const allPages = [
    "",
    ROUTE.TERMS_OF_USE,
    ROUTE.PRIVACY_POLICY,
    ROUTE.COOKIES,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((path) => {
    const url = `${baseUrl}${path}`;
    const changefreq = path === "" ? "weekly" : "monthly";
    const priority = path === "" ? "1.0" : "0.5";

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return sitemap;
};

export const exportSitemap = (): void => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sitemap.xml";
  a.click();
  URL.revokeObjectURL(url);
};
