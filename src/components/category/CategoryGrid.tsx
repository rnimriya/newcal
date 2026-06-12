"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ChevronLeft, ChevronRight } from "lucide-react";
import { CalculatorIcon } from "@/components/ui/FlatIcon";
import type { RegistryEntry } from "@/lib/registry";

const PAGE_SIZE = 21;

interface Props {
  calcs: RegistryEntry[];
  categoryLabel: string;
}

export function CategoryGrid({ calcs, categoryLabel }: Props) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(calcs.length / PAGE_SIZE);
  const paginated = calcs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const featured = paginated.filter((c) => c.hasSchema);
  const others = paginated.filter((c) => !c.hasSchema);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-10">
      {/* ── Interactive Calculators ───────────────────────────────────────── */}
      {featured.length > 0 && (
        <section>
          <h2 className="text-xl font-extrabold text-foreground mb-5 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Calculator size={18} />
            </span>
            Interactive Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((calc) => (
              <Link
                key={calc.slug}
                href={`/${calc.category}/${calc.slug}`}
                className="calc-card group flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary shadow-sm border border-border">
                  <CalculatorIcon slug={calc.slug} category={calc.category} size={22} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors leading-tight mb-1">
                    {calc.name}
                  </p>
                  <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed">
                    {calc.shortDesc}
                  </p>
                </div>
                <ArrowRight size={16} className="shrink-0 mt-1 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── All Other Calculators ─────────────────────────────────────────── */}
      {others.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4">
            All {categoryLabel} Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {others.map((calc) => (
              <Link
                key={calc.slug}
                href={`/${calc.category}/${calc.slug}`}
                className="calc-card flex items-center gap-3 p-4 bg-card border border-border rounded-2xl group hover:border-primary/50 hover:bg-secondary transition-all shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <CalculatorIcon slug={calc.slug} category={calc.category} size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-base group-hover:text-primary transition-colors leading-snug">
                    {calc.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Pagination ────────────────────────────────────────────────────── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          {/* Prev */}
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={15} /> Prev
          </button>

          {/* Page numbers */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              const isEllipsisBefore = p === 2 && page > 4;
              const isEllipsisAfter = p === totalPages - 1 && page < totalPages - 3;
              const isVisible =
                p === 1 ||
                p === totalPages ||
                Math.abs(p - page) <= 1;

              if (!isVisible && (isEllipsisBefore || isEllipsisAfter)) {
                return (
                  <span key={p} className="px-1 text-muted-foreground text-sm">…</span>
                );
              }
              if (!isVisible) return null;

              return (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  className={`h-9 w-9 rounded-xl text-sm font-bold transition-all ${
                    p === page
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Next <ChevronRight size={15} />
          </button>
        </div>
      )}

      {/* Results count */}
      {totalPages > 1 && (
        <p className="text-center text-sm text-muted-foreground -mt-4">
          Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, calcs.length)} of {calcs.length} calculators
        </p>
      )}
    </div>
  );
}
