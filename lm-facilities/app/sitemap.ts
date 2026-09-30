import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/servicos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ url: `${site.url}/servicos/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
