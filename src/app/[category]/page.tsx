import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, CATEGORY_MAP } from "@/lib/registry/categories";
import { BY_CATEGORY } from "@/lib/registry";
import { SITE_URL, SITE_DISPLAY_NAME } from "@/lib/constants";
import { Breadcrumb } from "@/components/calculator/Breadcrumb";
import { ArrowRight, Calculator } from "lucide-react";
import { CategoryIcon, CalculatorIcon } from "@/components/ui/FlatIcon";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORY_MAP[category];
  if (!cat) return { title: "Not Found" };

  const count = (BY_CATEGORY[category] ?? []).length;

  return {
    title: `Free ${cat.label} Calculators — ${SITE_DISPLAY_NAME}`,
    description: `${count} free online ${cat.label.toLowerCase()} calculators. Instant results, no sign-up required. Try ${SITE_DISPLAY_NAME}.`,
    alternates: { canonical: `${SITE_URL}/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORY_MAP[category];
  if (!cat) notFound();

  const calcs = BY_CATEGORY[category] ?? [];
  const featured = calcs.filter((c) => c.hasSchema);
  const others = calcs.filter((c) => !c.hasSchema);

  return (
    <div className="space-y-8 pb-10">

      <div className="px-4 sm:px-0">
        <Breadcrumb crumbs={[{ label: cat.label }]} />
      </div>

      {/* ── Dynamic Category Hero ────────────────────────────────────────────── */}
      <section className={`relative overflow-hidden bg-background border-b border-border px-6 py-5 sm:px-10 sm:py-6 -mx-4 sm:-mx-8 lg:-mx-12 -mt-2 mb-8`}>
        <div className="relative z-10 space-y-6">

          <div className="flex flex-col gap-2 relative z-10">
            <h1 className="text-4xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {cat.label} Calculators
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {cat.description || `Explore our comprehensive suite of ${cat.label.toLowerCase()} calculators.`}
            </p>
          </div>
        </div>
      </section>

      <div className="px-2">
        {/* ── Interactive Calculators ──────────────────────────────────────── */}
        {featured.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-extrabold text-foreground mb-5 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Calculator size={18} />
              </span>
              Interactive Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((calc) => (
                <Link key={calc.slug} href={`/${calc.category}/${calc.slug}`}
                  className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  group flex items-start gap-4 p-5 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary shadow-sm border border-border">
                    <CalculatorIcon slug={calc.slug} category={calc.category} size={22} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors leading-tight mb-1">
                      {calc.name}
                    </p>
                    <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed">{calc.shortDesc}</p>
                  </div>
                  <ArrowRight size={16} className="shrink-0 mt-1 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── All Other Calculators ────────────────────────────────────────── */}
        {others.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-foreground mb-4">All {cat.label} Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {others.map((calc) => (
                <Link key={calc.slug} href={`/${calc.category}/${calc.slug}`}
                  className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  flex items-center gap-3 p-4 group hover:border-primary/50 hover:bg-secondary transition-all shadow-sm">
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
      </div>
    </div>
  );
}
