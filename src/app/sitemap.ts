import type { MetadataRoute } from "next";
import { ALL_CALCULATORS } from "@/lib/registry";
import { CATEGORIES } from "@/lib/registry/categories";
import { SITE_URL as BASE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const SITE_LAUNCH = new Date("2025-01-01");
const LAST_MAJOR_UPDATE = new Date("2026-06-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                lastModified: LAST_MAJOR_UPDATE, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/categories`,lastModified: LAST_MAJOR_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`,     lastModified: SITE_LAUNCH,       changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE_URL}/contact`,   lastModified: SITE_LAUNCH,       changeFrequency: "yearly",  priority: 0.4 },
    { url: `${BASE_URL}/blog`,      lastModified: LAST_MAJOR_UPDATE, changeFrequency: "weekly",  priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url:             `${BASE_URL}/${cat.id}`,
    lastModified:    LAST_MAJOR_UPDATE,
    changeFrequency: "monthly" as const,
    priority:        0.7,
  }));

  const calculatorPages: MetadataRoute.Sitemap = ALL_CALCULATORS.map((calc) => ({
    url:             `${BASE_URL}/${calc.category}/${calc.slug}`,
    lastModified:    LAST_MAJOR_UPDATE,
    changeFrequency: "monthly" as const,
    priority:        calc.hasSchema ? 0.9 : 0.6,
  }));

  return [...staticPages, ...categoryPages, ...calculatorPages];
}
