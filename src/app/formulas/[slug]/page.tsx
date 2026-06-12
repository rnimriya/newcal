import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_CALCULATORS } from "@/lib/registry";
import { SITE_DISPLAY_NAME, SITE_URL } from "@/lib/constants";
import { Calculator } from "lucide-react";

export async function generateStaticParams() {
  return ALL_CALCULATORS.filter(
    (c) => c.formula && c.formula.trim().length > 5
  ).map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = ALL_CALCULATORS.find((c) => c.slug === slug);
  if (!entry) return {};
  const formulaName = entry.name.replace(" Calculator", "");
  return {
    title: `How to Calculate ${formulaName} — Formula & Examples | ${SITE_DISPLAY_NAME}`,
    description: `Learn how to calculate ${formulaName.toLowerCase()} step by step. Formula: ${entry.formula?.slice(0, 80) ?? ""}. Free worked examples and explanation.`,
    alternates: { canonical: `${SITE_URL}/formulas/${slug}` },
    openGraph: {
      title: `${formulaName} Formula — Step-by-Step Guide`,
      description: entry.shortDesc,
      type: "article",
      url: `${SITE_URL}/formulas/${slug}`,
    },
  };
}

function explainFormula(formula: string, calcName: string): string {
  const name = calcName.replace(" Calculator", "").toLowerCase();
  const clean = formula
    .replace(/\*\*/g, "^")
    .replace(/Math\./g, "")
    .slice(0, 120);
  return `The ${name} formula uses the mathematical relationship: ${clean}. Each variable in the formula represents a measurable quantity that affects the final result.`;
}

function getFormulaSteps(entry: {
  name: string;
  formula?: string;
  shortDesc: string;
  tags: string[];
}): string[] {
  const name = entry.name.replace(" Calculator", "").toLowerCase();
  return [
    `Identify all input values needed for the ${name} calculation.`,
    `Substitute your known values into the formula: ${(entry.formula ?? "the formula").slice(0, 60)}.`,
    "Perform the arithmetic operations in the correct order (PEMDAS/BODMAS).",
    "Check that your result has the correct units and is within a reasonable range.",
    `Verify using the interactive ${entry.name} to confirm your answer.`,
  ];
}

export default async function FormulaPage({ params }: Props) {
  const { slug } = await params;
  const entry = ALL_CALCULATORS.find((c) => c.slug === slug);
  if (!entry || !entry.formula) notFound();

  const formulaName = entry.name.replace(" Calculator", "");
  const steps = getFormulaSteps(entry);
  const explanation = explainFormula(entry.formula, entry.name);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Calculate ${formulaName}`,
    description: entry.shortDesc,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="max-w-3xl mx-auto space-y-10 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/formulas"
            className="hover:text-primary transition-colors"
          >
            Formulas
          </Link>
          <span>/</span>
          <span className="text-foreground">{formulaName}</span>
        </nav>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mb-3">
            How to Calculate {formulaName}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {entry.shortDesc}
          </p>
        </div>

        {/* Formula box */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            The Formula
          </h2>
          <div className="bg-secondary border border-border rounded-2xl p-5">
            <code className="text-primary font-mono text-base break-all">
              {entry.formula}
            </code>
          </div>
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">
            {explanation}
          </p>
        </section>

        {/* Step-by-step */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Step-by-Step Method
          </h2>
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-base text-muted-foreground leading-relaxed pt-0.5">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              Related Topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="font-bold text-foreground text-lg mb-1">
              Use the Interactive Calculator
            </h2>
            <p className="text-base text-muted-foreground">
              Skip the manual math — get instant results with our free{" "}
              {formulaName} calculator.
            </p>
          </div>
          <Link
            href={`/${entry.category}/${entry.slug}`}
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            <Calculator size={18} />
            Open Calculator
          </Link>
        </div>

        {/* Related calculators in same category */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Related Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ALL_CALCULATORS.filter(
              (c) => c.category === entry.category && c.slug !== entry.slug
            )
              .slice(0, 6)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.category}/${c.slug}`}
                  className="border border-border rounded-xl p-3 bg-card hover:border-primary/50 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {c.name}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
