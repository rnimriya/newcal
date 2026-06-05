import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, CATEGORY_MAP } from "@/lib/registry/categories";
import { ALL_CALCULATORS } from "@/lib/registry";
import { Breadcrumb } from "@/components/calculator/Breadcrumb";
import { ArrowRight } from "lucide-react";
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

  const count = ALL_CALCULATORS.filter((c) => c.category === category).length;

  return {
    title: `Free ${cat.label} Calculators — CalcUnit.net`,
    description: `${count} free online ${cat.label.toLowerCase()} calculators. Instant results, no sign-up required. Try CalcUnit.net.`,
    alternates: { canonical: `https://calcunit.net/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORY_MAP[category];
  if (!cat) notFound();

  const calcs = ALL_CALCULATORS.filter((c) => c.category === category);
  const featured = calcs.filter((c) => c.hasSchema);
  const others   = calcs.filter((c) => !c.hasSchema);

  return (
    <div className="space-y-8">
      <Breadcrumb crumbs={[{ label: cat.label }]} />

      {/* Header */}
      <div className="flex items-start gap-4">
        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${cat.color} shadow-sm`}>
          <CategoryIcon id={cat.id} size={28} />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{cat.label} Calculators</h1>
          <p className="text-slate-500 text-sm mt-1">
            {calcs.length} free calculators — all work in your browser, no download required.
          </p>
        </div>
      </div>

      {/* Interactive calculators first */}
      {featured.length > 0 && (
        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Interactive Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featured.map((calc) => (
              <Link key={calc.slug} href={`/${calc.category}/${calc.slug}`}
                className="calc-card group flex items-start gap-3 p-4">
                <span className="shrink-0 text-indigo-600">
                  <CalculatorIcon slug={calc.slug} category={calc.category} size={20} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm group-hover:text-indigo-700 transition-colors">
                    {calc.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{calc.shortDesc}</p>
                  {calc.formula && (
                    <code className="mt-1 inline-block text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {calc.formula}
                    </code>
                  )}
                </div>
                <ArrowRight size={13} className="shrink-0 mt-1 text-slate-300 group-hover:text-indigo-400" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All other calculators */}
      {others.length > 0 && (
        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">All {cat.label} Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {others.map((calc) => (
              <Link key={calc.slug} href={`/${calc.category}/${calc.slug}`}
                className="calc-card flex items-center gap-3 p-3 group">
                <span className="shrink-0 text-indigo-600">
                  <CalculatorIcon slug={calc.slug} category={calc.category} size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-slate-800 text-xs group-hover:text-indigo-600 transition-colors leading-snug">
                    {calc.name}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{calc.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
