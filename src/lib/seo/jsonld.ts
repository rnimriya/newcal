import type { RegistryEntry } from "@/lib/registry";

const SITE_URL = "https://calcunit.net";
const SITE_NAME = "CalcUnit";

/**
 * Generates JSON-LD structured data for a calculator page.
 * Includes WebPage, SoftwareApplication, FAQPage, and BreadcrumbList schemas.
 */
export function buildJsonLD(entry: RegistryEntry, faqs: Array<{q: string; a: string}>) {
  const url = `${SITE_URL}/${entry.category}/${entry.slug}`;

  const webpage = {
    "@type": "WebPage",
    "@id": url,
    name: `${entry.name} | ${SITE_NAME}`,
    description: entry.shortDesc,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": SITE_URL },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",       item: SITE_URL },
        { "@type": "ListItem", position: 2, name: capitalize(entry.category), item: `${SITE_URL}/${entry.category}` },
        { "@type": "ListItem", position: 3, name: entry.name,   item: url },
      ],
    },
  };

  const softwareApp = {
    "@type": "SoftwareApplication",
    name: entry.name,
    applicationCategory: "CalculatorApplication",
    operatingSystem: "Web Browser",
    description: entry.shortDesc,
    url,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqPage = faqs.length
    ? {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }
    : null;

  const graph: unknown[] = [webpage, softwareApp];
  if (faqPage) graph.push(faqPage);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Generate meta title for a calculator page — optimized for Google CTR.
 */
export function buildMetaTitle(entry: RegistryEntry): string {
  return `${entry.name} - Free Online Calculator | CalcUnit.net`;
}

/**
 * Generate meta description — under 160 chars, includes keyword naturally.
 */
export function buildMetaDesc(entry: RegistryEntry): string {
  const base = `Use the free ${entry.name} online. ${entry.shortDesc}`;
  return base.length > 155 ? base.slice(0, 152) + "…" : base;
}
