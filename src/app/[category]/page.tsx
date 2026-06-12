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
  const others   = calcs.filter((c) => !c.hasSchema);

  return (
    <div className="space-y-10 pb-10">
      
      {/* ── Dynamic Category Hero ────────────────────────────────────────────── */}
      <section className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${cat.heroGradient || 'from-indigo-600 to-purple-600'} px-6 py-12 sm:px-12 sm:py-16 shadow-lg`}>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20 pointer-events-none">
          <CategoryIcon id={cat.id} size={250} />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="text-white/80">
            <Breadcrumb crumbs={[{ label: cat.label }]} />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-xl border border-white/20">
              <CategoryIcon id={cat.id} size={40} />
            </span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {cat.label} <span className="opacity-80 font-light">Calculators</span>
              </h1>
              <p className="text-white/90 text-base sm:text-lg mt-3 max-w-xl font-medium">
                {calcs.length} completely free {cat.label.toLowerCase()} calculators. Results update instantly in your browser without reloading.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-2">
        {/* ── Interactive Calculators ──────────────────────────────────────── */}
        {featured.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-extrabold text-slate-900 mb-5 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <Calculator size={18} />
              </span>
              Interactive Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((calc) => (
                <Link key={calc.slug} href={`/${calc.category}/${calc.slug}`}
                  className="calc-card group flex items-start gap-4 p-5 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-indigo-600 shadow-sm border border-slate-100">
                    <CalculatorIcon slug={calc.slug} category={calc.category} size={22} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 text-base group-hover:text-indigo-700 transition-colors leading-tight mb-1">
                      {calc.name}
                    </p>
                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{calc.shortDesc}</p>
                  </div>
                  <ArrowRight size={16} className="shrink-0 mt-1 text-slate-200 group-hover:text-indigo-400 transition-all group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── All Other Calculators ────────────────────────────────────────── */}
        {others.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4">All {cat.label} Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {others.map((calc) => (
                <Link key={calc.slug} href={`/${calc.category}/${calc.slug}`}
                  className="calc-card flex items-center gap-3 p-4 group hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                    <CalculatorIcon slug={calc.slug} category={calc.category} size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors leading-snug">
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
