import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSchemaBySlug } from "@/lib/schemas";
import { getEntry, getRelated, ALL_CALCULATORS } from "@/lib/registry";
import { getSEOContent } from "@/lib/seo/content";
import { buildJsonLD, buildMetaTitle, buildMetaDesc } from "@/lib/seo/jsonld";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { Breadcrumb } from "@/components/calculator/Breadcrumb";
import { TableOfContents, STANDARD_TOC } from "@/components/calculator/TableOfContents";
import { FAQSection } from "@/components/calculator/FAQSection";
import { RelatedCalculators } from "@/components/calculator/RelatedCalculators";
import { ReferenceTable } from "@/components/calculator/ReferenceTable";
import { JsonLD } from "@/components/seo/JsonLD";
import { CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ category: string; calculator: string }>;
}

// Pre-generate ALL known calculator paths
export async function generateStaticParams() {
  return ALL_CALCULATORS.map((c) => ({
    category:   c.category,
    calculator: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { calculator } = await params;
  const entry = getEntry(calculator);
  if (!entry) return { title: "Calculator Not Found" };

  return {
    title:       buildMetaTitle(entry),
    description: buildMetaDesc(entry),
    alternates: { canonical: `https://calcunit.net/${entry.category}/${entry.slug}` },
    openGraph: {
      title:       buildMetaTitle(entry),
      description: buildMetaDesc(entry),
      type:        "website",
      url:         `https://calcunit.net/${entry.category}/${entry.slug}`,
      siteName:    "CalcUnit.net",
    },
    twitter: {
      card:        "summary_large_image",
      title:       buildMetaTitle(entry),
      description: buildMetaDesc(entry),
    },
    keywords: entry.tags?.join(", "),
    robots: { index: true, follow: true },
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { category, calculator: calcSlug } = await params;

  const entry  = getEntry(calcSlug);
  if (!entry || entry.category !== category) notFound();

  const schema  = getSchemaBySlug(calcSlug);   // may be undefined for non-schema calcs
  const content = getSEOContent(entry);
  const related = getRelated(entry, 6);
  const jsonLD  = buildJsonLD(entry, content.faqs);

  return (
    <>
      <JsonLD data={jsonLD as Record<string, unknown>} />

      {/* Three-column layout on desktop: TOC | Main | (right on calc page) */}
      <div className="flex gap-6 items-start">

        {/* Sticky TOC — hidden on mobile */}
        <aside className="hidden xl:block w-52 shrink-0">
          <TableOfContents items={STANDARD_TOC} />
        </aside>

        {/* Main content column */}
        <div className="flex-1 min-w-0 space-y-8">

          {/* Breadcrumb */}
          <Breadcrumb crumbs={[
            { label: entry.category, href: `/${entry.category}` },
            { label: entry.name },
          ]} />

          {/* ── SECTION 1: Calculator ──────────────────────────────────────── */}
          <section id="calculator" className="scroll-mt-20">
            {schema ? (
              <CalculatorLayout schema={schema} />
            ) : (
              <StaticCalculatorCard entry={entry} />
            )}
          </section>

          {/* ── SECTION 2: Description ────────────────────────────────────── */}
          <section id="description" className="scroll-mt-20">
            <h2 className="section-title">What is the {entry.name}?</h2>
            <div className="space-y-3">
              {content.description.split("\n\n").map((para, i) => (
                para.trim() ? (
                  <p key={i} className="text-sm text-slate-600 leading-relaxed">{para.trim()}</p>
                ) : null
              ))}
            </div>
          </section>

          {/* ── SECTION 3: How to Use ─────────────────────────────────────── */}
          <section id="how-to-use" className="scroll-mt-20">
            <h2 className="section-title">How to Use the {entry.name}</h2>
            <ol className="space-y-3">
              {content.howToSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* ── SECTION 4: Formula + Examples ────────────────────────────── */}
          <ReferenceTable
            formulaText={content.formulaText}
            examples={content.examples}
            sqrtTable={content.sqrtTable}
            name={entry.name}
          />

          {/* ── SECTION 5: Key facts (featured snippet bait) ─────────────── */}
          <section className="calc-card p-5 bg-indigo-50 border-indigo-100">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-indigo-600" />
              Quick Facts
            </h3>
            <ul className="space-y-2">
              {entry.formula && (
                <li className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Formula:</span>{" "}
                  <code className="bg-white px-2 py-0.5 rounded text-indigo-700 text-xs">{entry.formula}</code>
                </li>
              )}
              <li className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Category:</span>{" "}
                <span className="capitalize">{entry.category}</span>
              </li>
              <li className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Uses:</span>{" "}
                {entry.tags.slice(0, 4).join(", ")}
              </li>
              <li className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Price:</span>{" "}
                Free — no account needed
              </li>
            </ul>
          </section>

          {/* ── SECTION 6: FAQ ────────────────────────────────────────────── */}
          <FAQSection faqs={content.faqs} />

          {/* ── SECTION 7: Related ───────────────────────────────────────── */}
          <RelatedCalculators entries={related} />

        </div>
      </div>
    </>
  );
}

// ─── Fallback for calculators without a full schema ───────────────────────────

function StaticCalculatorCard({ entry }: { entry: ReturnType<typeof getEntry> }) {
  if (!entry) return null;
  return (
    <div className="calc-card p-6 space-y-4">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{entry.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 leading-tight">{entry.name}</h1>
          <p className="text-slate-500 text-sm mt-1">{entry.shortDesc}</p>
        </div>
      </div>

      {entry.formula && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Formula</p>
          <div className="formula-block">{entry.formula}</div>
        </div>
      )}

      <div className="rounded-xl bg-amber-50 border border-amber-100 px-4 py-3">
        <p className="text-sm text-amber-800 font-medium">
          Full interactive calculator coming soon. Use the formula above or check the examples below.
        </p>
      </div>
    </div>
  );
}
