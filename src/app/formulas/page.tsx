import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CALCULATORS } from "@/lib/registry";
import { CATEGORIES } from "@/lib/registry/categories";
import { SITE_DISPLAY_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Math Formulas & Calculation Guides — ${SITE_DISPLAY_NAME}`,
  description:
    "Step-by-step formula explanations, worked examples, and calculation guides for math, finance, health, and physics. Understand the math behind every calculator.",
  alternates: { canonical: `${SITE_URL}/formulas` },
  openGraph: {
    title: `Math Formulas & Calculation Guides — ${SITE_DISPLAY_NAME}`,
    description:
      "Understand the math behind every calculator. Free formula guides with worked examples.",
    type: "website",
    url: `${SITE_URL}/formulas`,
  },
};

export default function FormulasPage() {
  const withFormulas = ALL_CALCULATORS.filter(
    (c) => c.formula && c.formula.trim().length > 5
  );

  const byCategory = CATEGORIES.map((cat) => ({
    ...cat,
    calcs: withFormulas.filter((c) => c.category === cat.id),
  })).filter((cat) => cat.calcs.length > 0);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Formula Guides</h1>
        <p className="text-muted-foreground text-base mt-1">
          Step-by-step explanations for {withFormulas.length}+ mathematical
          formulas and calculation methods.
        </p>
      </div>

      {byCategory.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-20">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <span>{cat.icon}</span> {cat.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {cat.calcs.map((calc) => (
              <Link
                key={calc.slug}
                href={`/formulas/${calc.slug}`}
                className="border border-border rounded-2xl p-3 bg-card hover:border-primary/50 transition-colors flex flex-col gap-1 group"
              >
                <span className="font-medium text-foreground text-base group-hover:text-primary transition-colors line-clamp-1">
                  {calc.name.replace(" Calculator", "")} Formula
                </span>
                <span className="text-sm text-muted-foreground line-clamp-2">
                  {calc.shortDesc}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
