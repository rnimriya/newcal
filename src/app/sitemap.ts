import type { MetadataRoute } from "next";
import { ALL_CALCULATORS } from "@/lib/registry";
import { CATEGORIES } from "@/lib/registry/categories";

const BASE_URL = "https://calcunit.net";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/categories`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/saved`,   lastModified: new Date(), changeFrequency: "never",   priority: 0.3 },
    { url: `${BASE_URL}/settings`,lastModified: new Date(), changeFrequency: "never",   priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url:             `${BASE_URL}/${cat.id}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        0.7,
  }));

  const calculatorPages: MetadataRoute.Sitemap = ALL_CALCULATORS.map((calc) => ({
    url:             `${BASE_URL}/${calc.category}/${calc.slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        calc.hasSchema ? 0.9 : 0.6,
  }));

  return [...staticPages, ...categoryPages, ...calculatorPages];
}
