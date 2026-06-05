import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/registry/categories";
import { ALL_CALCULATORS } from "@/lib/registry";
import { CategoryIcon, CalculatorIcon } from "@/components/ui/FlatIcon";

export const metadata: Metadata = {
  title: "All Calculator Categories — CalcUnit.net",
  description: "Browse 1000+ free online calculators by category: Math, Finance, Converters, Statistics, Health, Time, Physics, and more.",
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">All Categories</h1>
        <p className="text-slate-500 text-sm mt-1">
          Browse all {ALL_CALCULATORS.length} free calculators organized by topic.
        </p>
      </div>

      {CATEGORIES.map((cat) => {
        const catCalcs = ALL_CALCULATORS.filter((c) => c.category === cat.id);
        return (
          <section key={cat.id} id={cat.id} className="scroll-mt-20">
            <Link href={`/${cat.id}`} className="group inline-flex items-center gap-3 mb-4">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.color} shadow-sm`}>
                <CategoryIcon id={cat.id} size={20} />
              </span>
              <div>
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {cat.label}
                </h2>
                <p className="text-xs text-slate-400">{catCalcs.length} calculators</p>
              </div>
            </Link>

            {catCalcs.length === 0 ? (
              <p className="text-sm text-slate-400 italic">More calculators coming soon.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                {catCalcs.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.category}/${calc.slug}`}
                    className="calc-card flex items-center gap-3 p-3 group"
                  >
                    <span className="shrink-0 text-indigo-600">
                      <CalculatorIcon slug={calc.slug} category={calc.category} size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-800 text-xs group-hover:text-indigo-600 transition-colors leading-snug line-clamp-1">
                        {calc.name}
                      </p>
                      {calc.hasSchema && (
                        <span className="text-[10px] text-emerald-600 font-medium">● Interactive</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
