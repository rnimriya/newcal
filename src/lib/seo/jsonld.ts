import type { RegistryEntry } from "@/lib/registry";
import type { SEOContent } from "@/lib/seo/content";

const SITE_URL = "https://calcunit.net";
const SITE_NAME = "CalcUnit";

export interface JsonLDDocument {
  "@context": string;
  "@graph": Record<string, unknown>[];
}

// ─── Truncation helpers ────────────────────────────────────────────────────────

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ─── Meta title (2I) ──────────────────────────────────────────────────────────

/**
 * Generate meta title for a calculator page — optimized for Google CTR.
 * Cap at 60 characters.
 */
export function buildMetaTitle(entry: RegistryEntry): string {
  const nameHasCalculator = /calculator/i.test(entry.name);
  const preferred = nameHasCalculator
    ? `Free ${entry.name} - Formula & Examples | CalcUnit.net`
    : `${entry.name} - Free Online Calculator | CalcUnit.net`;

  if (preferred.length <= 60) return preferred;

  // fallback: shorter form
  const fallback = `${entry.name} | CalcUnit.net`;
  return truncate(fallback, 60);
}

// ─── Meta description (2H) ────────────────────────────────────────────────────

/**
 * Generate meta description — under 160 chars, includes entity signals.
 */
export function buildMetaDesc(entry: RegistryEntry): string {
  const base = `Free ${entry.name} - ${entry.shortDesc}. Browser-based, no signup required. Includes formula, examples, and step-by-step guide. Accurate to standard references.`;
  return truncate(base, 160);
}

// ─── HowTo schema (2D) ────────────────────────────────────────────────────────

/**
 * Build a HowTo schema from SEOContent.howToSteps.
 */
export function buildHowToSchema(entry: RegistryEntry, content: Pick<SEOContent, "howToSteps">) {
  const url = `${SITE_URL}/${entry.category}/${entry.slug}`;
  const steps = content.howToSteps.map((text, index) => {
    // name = first 6 words of the step
    const name = text.split(" ").slice(0, 6).join(" ");
    return {
      "@type": "HowToStep",
      position: index + 1,
      name,
      text,
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use the ${entry.name}`,
    description: `Step-by-step guide to using the ${entry.name} on CalcUnit.net`,
    tool: {
      "@type": "HowToTool",
      name: entry.name,
      url,
    },
    step: steps,
  };
}

// ─── Main JSON-LD builder (2C, 2E) ───────────────────────────────────────────

/**
 * Generates JSON-LD structured data for a calculator page.
 * Includes WebPage, SoftwareApplication, MathSolver, FAQPage, and BreadcrumbList schemas.
 */
export function buildJsonLD(entry: RegistryEntry, faqs: Array<{ q: string; a: string }>) {
  const url = `${SITE_URL}/${entry.category}/${entry.slug}`;
  const today = new Date().toISOString().split("T")[0];

  // 2E: BreadcrumbList items (shared between webpage and standalone graph node)
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: capitalize(entry.category), item: `${SITE_URL}/${entry.category}` },
    { "@type": "ListItem", position: 3, name: entry.name, item: url },
  ];

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
      itemListElement: breadcrumbItems,
    },
    datePublished: "2024-01-01",
    dateModified: today,
  };

  // 2C: Upgraded SoftwareApplication schema
  const featureList = entry.tags.slice(0, 5).join(", ");
  const softwareApp = {
    "@type": "SoftwareApplication",
    name: entry.name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    description: entry.shortDesc,
    url,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    creator: { "@type": "Organization", name: "CalcUnit", url: SITE_URL },
    datePublished: "2024-01-01",
    dateModified: today,
    inLanguage: "en",
    isAccessibleForFree: true,
    browserRequirements: "Requires JavaScript",
    featureList,
  };

  // 2C: MathSolver schema for calculator pages
  const mathSolver: Record<string, unknown> = {
    "@type": "MathSolver",
    name: entry.name,
    url,
    description: entry.shortDesc,
    educationalLevel: "all",
  };
  if (entry.formula) {
    mathSolver.mathExpression = entry.formula;
  }

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

  // 2E: Standalone BreadcrumbList in the graph
  const breadcrumbGraph = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: breadcrumbItems,
  };

  const graph: unknown[] = [webpage, softwareApp, mathSolver, breadcrumbGraph];
  if (faqPage) graph.push(faqPage);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
