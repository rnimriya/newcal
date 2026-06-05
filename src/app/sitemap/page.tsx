import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/registry/categories";
import { ALL_CALCULATORS } from "@/lib/registry";
import { CategoryIcon } from "@/components/ui/FlatIcon";
import { Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap Directory — CalcUnit.net",
  description: "Browse the HTML directory map of all free online calculators, math solvers, and unit converters on CalcUnit.net. Grouped by category.",
  alternates: { canonical: "https://calcunit.net/sitemap" },
};

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-10 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-900/30 dark:text-indigo-400">
          <Layers size={13} /> HTML Directory Map
        </span>
        <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          Sitemap
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
          Browse all specialized solvers, math calculators, and unit converters available on CalcUnit.net. Grouped by core categories.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="space-y-12">
        {CATEGORIES.map((cat) => {
          const calcsInCat = ALL_CALCULATORS.filter((c) => c.category === cat.id);
          return (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-2.5 border-b border-zinc-150 pb-2 dark:border-zinc-800">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${cat.color} text-zinc-900 shrink-0`}>
                  <CategoryIcon id={cat.id} size={15} />
                </span>
                <Link href={`/${cat.id}`} className="text-lg font-bold text-zinc-900 hover:text-indigo-650 transition-colors dark:text-white dark:hover:text-indigo-400">
                  {cat.label}
                </Link>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">({calcsInCat.length} calculators)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {calcsInCat.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.category}/${calc.slug}`}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-350 hover:shadow-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 group cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="text-xs font-bold text-zinc-800 truncate dark:text-zinc-200 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                        {calc.name}
                      </p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                        {calc.shortDesc}
                      </p>
                    </div>
                    <ArrowRight size={12} className="text-zinc-300 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-zinc-600 dark:group-hover:text-indigo-400" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
