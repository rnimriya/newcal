import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/registry/categories";
import { ALL_CALCULATORS, BY_CATEGORY } from "@/lib/registry";
import { SITE_DISPLAY_NAME } from "@/lib/constants";
import { CategoryIcon, CalculatorIcon } from "@/components/ui/FlatIcon";

export const metadata: Metadata = {
  title: `All Calculator Categories — ${SITE_DISPLAY_NAME}`,
  description:
    "Browse 1,000+ free online calculators by category: Math, Finance, Converters, Statistics, Health, Time, Physics, and more. All free, instant, and offline-ready.",
  alternates: { canonical: "https://calcunit.net/categories" },
  openGraph: {
    title: `All Calculator Categories — ${SITE_DISPLAY_NAME}`,
    description: "Browse 1,000+ free online calculators by category. No sign-up. Works offline.",
    type: "website",
    url: "https://calcunit.net/categories",
    siteName: "CalcUnit.net",
  },
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-foreground">All Categories</h1>
        <p className="text-muted-foreground text-base mt-1">
          Browse all {ALL_CALCULATORS.length} free calculators organized by topic.
        </p>
      </div>

      {CATEGORIES.map((cat) => {
        const catCalcs = BY_CATEGORY[cat.id] ?? [];
        return (
          <section key={cat.id} id={cat.id} className="scroll-mt-20">
            <Link href={`/${cat.id}`} className="group inline-flex items-center gap-3 mb-4">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.color} shadow-sm`}>
                <CategoryIcon id={cat.id} size={20} />
              </span>
              <div>
                <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {cat.label}
                </h2>
                <p className="text-base text-muted-foreground">{catCalcs.length} calculators</p>
              </div>
            </Link>

            {catCalcs.length === 0 ? (
              <p className="text-base text-muted-foreground italic">More calculators coming soon.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                {catCalcs.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.category}/${calc.slug}`}
                    className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  flex items-center gap-3 p-3 group"
                  >
                    <span className="shrink-0 text-primary">
                      <CalculatorIcon slug={calc.slug} category={calc.category} size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-base group-hover:text-primary transition-colors leading-snug line-clamp-1">
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
