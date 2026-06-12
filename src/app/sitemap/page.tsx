import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/registry/categories";
import { BY_CATEGORY } from "@/lib/registry";
import { CategoryIcon } from "@/components/ui/FlatIcon";
import { Layers, ArrowRight } from "lucide-react";
import { SITE_URL, SITE_DISPLAY_NAME, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sitemap Directory — ${SITE_DISPLAY_NAME}`,
  description: `Browse the HTML directory map of all free online calculators, math solvers, and unit converters on ${SITE_NAME}. Grouped by category.`,
  alternates: { canonical: `${SITE_URL}/sitemap` },
  robots: { index: false, follow: false },
};

export default function SitemapPage() {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 py-3 space-y-10 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-base font-bold text-primary">
          <Layers size={13} /> HTML Directory Map
        </span>
        <h1 className="text-3xl font-black text-foreground tracking-tight">
          Sitemap
        </h1>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          Browse all specialized solvers, math calculators, and unit converters available on CalcUnit. Grouped by core categories.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="space-y-12">
        {CATEGORIES.map((cat) => {
          const calcsInCat = BY_CATEGORY[cat.id] ?? [];
          return (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-2.5 border-b border-border pb-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0`}>
                  <CategoryIcon id={cat.id} size={15} />
                </span>
                <Link href={`/${cat.id}`} className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                  {cat.label}
                </Link>
                <span className="text-base text-muted-foreground mt-1">({calcsInCat.length} calculators)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {calcsInCat.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.category}/${calc.slug}`}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:border-border/80 hover:shadow-sm transition-all group cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="text-base font-bold text-foreground truncate group-hover:text-primary transition-colors">
                        {calc.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate mt-0.5">
                        {calc.shortDesc}
                      </p>
                    </div>
                    <ArrowRight size={12} className="text-muted-foreground shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
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
