import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_MAP } from "@/lib/registry/categories";
import { BY_CATEGORY } from "@/lib/registry";
import { SITE_URL, SITE_DISPLAY_NAME } from "@/lib/constants";
import { Breadcrumb } from "@/components/calculator/Breadcrumb";
import { CategoryGrid } from "@/components/category/CategoryGrid";

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

  return (
    <div className="space-y-8 pb-10">

      <div className="px-4 sm:px-0">
        <Breadcrumb crumbs={[{ label: cat.label }]} />
      </div>

      {/* ── Category Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background border-b border-border px-6 py-5 sm:px-10 sm:py-6 -mx-4 sm:-mx-8 lg:-mx-12 -mt-2 mb-8">
        <div className="relative z-10 space-y-2">
          <h1 className="text-4xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            {cat.label} Calculators
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {cat.description ||
              `Explore our comprehensive suite of ${cat.label.toLowerCase()} calculators.`}
          </p>
        </div>
      </section>

      {/* ── Calculator grid with pagination ───────────────────────────────── */}
      <div className="px-2">
        <CategoryGrid calcs={calcs} categoryLabel={cat.label} />
      </div>
    </div>
  );
}
