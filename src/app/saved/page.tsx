"use client";

import Link from "next/link";
import { useCalcStore } from "@/store/calculatorStore";
import { schemaMap } from "@/lib/schemas";
import { Bookmark, ArrowRight } from "lucide-react";
import { CalculatorIcon } from "@/components/ui/FlatIcon";

export default function SavedPage() {
  const { savedCalculators, removeCalculator } = useCalcStore();

  if (savedCalculators.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
        <Bookmark size={40} className="text-muted-foreground opacity-50" />
        <h1 className="text-xl font-bold text-foreground">
          No saved calculators
        </h1>
        <p className="text-base text-muted-foreground">
          Bookmark calculators to quickly access them here.
        </p>
        <Link
          href="/categories"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          Browse calculators <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        Saved Calculators
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedCalculators.map((slug) => {
          const schema = schemaMap[slug];
          if (!schema) return null;
          return (
            <div
              key={slug}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <Link href={`/${schema.category}/${schema.slug}`} className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="shrink-0 text-indigo-600">
                    <CalculatorIcon slug={schema.slug} category={schema.category} size={28} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                      {schema.name}
                    </p>
                    <p className="text-base text-muted-foreground mt-0.5 line-clamp-1">
                      {schema.description}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => removeCalculator(slug)}
                  className="shrink-0 rounded-xl p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                  title="Remove from saved"
                >
                  ×
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
