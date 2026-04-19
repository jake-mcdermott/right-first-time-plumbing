import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  // Single-page site — only the root URL is a real crawlable page.
  // Hash fragments (/#services etc.) are not indexable and should NOT appear here.
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
