import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSchemaBySlug } from "@/lib/schemas";
import { getEntry, getRelated, ALL_CALCULATORS } from "@/lib/registry";
import { getSEOContent } from "@/lib/seo/content";
import { buildJsonLD, buildMetaTitle, buildMetaDesc, buildHowToSchema } from "@/lib/seo/jsonld";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { Breadcrumb } from "@/components/calculator/Breadcrumb";
import { TableOfContents } from "@/components/calculator/TableOfContents";
import { FAQSection } from "@/components/calculator/FAQSection";
import { RelatedCalculators } from "@/components/calculator/RelatedCalculators";
import { ReferenceTable } from "@/components/calculator/ReferenceTable";
import { JsonLD } from "@/components/seo/JsonLD";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { generateDynamicContent } from "@/lib/seo/dynamic-content";
import { ShareButtons } from "@/components/calculator/ShareButtons";

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
      images: [
        {
          url:    `https://calcunit.net/og-image.png`,
          width:  1200,
          height: 630,
          alt:    `${entry.name} - Free Calculator on CalcUnit.net`,
        },
      ],
    },
    twitter: {
      card:        "summary_large_image",
      title:       buildMetaTitle(entry),
      description: buildMetaDesc(entry),
    },
    keywords: entry.tags?.join(", "),
    robots: { index: true, follow: true },
    other: {
      "article:modified_time":   new Date().toISOString(),
      "article:published_time":  "2024-01-01T00:00:00.000Z",
    },
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { category, calculator: calcSlug } = await params;

  const entry  = getEntry(calcSlug);
  if (!entry || entry.category !== category) notFound();

  const schema  = getSchemaBySlug(calcSlug);   // may be undefined for non-schema calcs
  const content = getSEOContent(entry);
  const related = getRelated(entry, 6);
  const jsonLD    = buildJsonLD(entry, content.faqs);
  const howToLD   = buildHowToSchema(entry, content);

  const dynamicContent = generateDynamicContent(schema || { name: entry.name, slug: entry.slug, fields: [], formulas: {} });

  const customTOC = [
    { id: "calculator",  label: "Calculator",           level: 2 as const },
    { id: "description", label: "What is it?",          level: 2 as const },
    { id: "how-to-use",  label: "How to Use",           level: 2 as const },
    { id: "formula",     label: "Formula",              level: 2 as const },
    { id: "examples",    label: "Common Examples",      level: 2 as const },
    ...(dynamicContent.table ? [{ id: "reference-table-10", label: "Value Reference Table", level: 2 as const }] : []),
    { id: "practice-problems", label: "Practice Problems", level: 2 as const },
    { id: "progression-chart", label: "Calculation Roadmap", level: 2 as const },
    { id: "real-world-examples", label: "Real-World Examples", level: 2 as const },
    { id: "faq",         label: "Frequently Asked",     level: 2 as const },
    { id: "related",     label: "Related Calculators",  level: 2 as const },
  ];

  return (
    <>
      <JsonLD data={jsonLD as Record<string, unknown>} />
      <JsonLD data={howToLD as Record<string, unknown>} />

      {/* Three-column layout on desktop: TOC | Main | (right on calc page) */}
      <div className="flex gap-6 items-start">

        {/* Sticky TOC — hidden on mobile */}
        <aside className="hidden xl:block w-52 shrink-0">
          <TableOfContents items={customTOC} />
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

          {/* ── SECTION 5: 10-Row Value Reference Table ───────────────────────── */}
          {dynamicContent.table && (
            <section id="reference-table-10" className="scroll-mt-20 space-y-4">
              <h2 className="section-title">Value Reference Table</h2>
              <p className="text-sm text-slate-600">
                Explore calculated outputs for standard inputs. Calculated in real time using the formula.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="calc-table min-w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">{dynamicContent.table.inputHeader}</th>
                      {dynamicContent.table.outputHeaders.map((header, i) => (
                        <th key={i} className="px-4 py-3 text-left font-semibold text-slate-700">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {dynamicContent.table.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 odd:bg-white even:bg-slate-50/10">
                        <td className="px-4 py-3 font-medium text-slate-900">{row.inputVal}</td>
                        {row.outputs.map((out, j) => (
                          <td key={j} className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{out}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ── SECTION 6: Practice Problems ────────────────────────────────── */}
          <section id="practice-problems" className="scroll-mt-20 space-y-4">
            <h2 className="section-title">Practice Problems</h2>
            <p className="text-sm text-slate-600">
              Check your understanding with these practice problems. Click a problem to reveal its correct calculated answer.
            </p>
            <div className="space-y-3">
              {dynamicContent.practiceProblems.map((prob, i) => (
                <div key={i} className="calc-card p-5 bg-white border border-slate-200 hover:border-indigo-200 transition-all">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600 mt-0.5">
                      Q{i + 1}
                    </span>
                    <div className="space-y-2.5 w-full">
                      <h4 className="font-semibold text-slate-900 text-sm leading-relaxed">{prob.question}</h4>
                      <details className="group">
                        <summary className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer list-none flex items-center gap-1.5 focus:outline-none">
                          <HelpCircle size={14} className="text-indigo-600" />
                          <span className="group-open:hidden">Show Answer</span>
                          <span className="hidden group-open:inline">Hide Answer</span>
                        </summary>
                        <div className="mt-3 text-xs bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-slate-700 leading-relaxed font-medium">
                          {prob.answer}
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: Progression Chart ─────────────────────────────────── */}
          <section id="progression-chart" className="scroll-mt-20 space-y-4">
            <h2 className="section-title">Calculation Progression Roadmap</h2>
            <p className="text-sm text-slate-600">
              The internal flow diagram outlining how the calculator processes and solves input values.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {dynamicContent.progression.map((step, i) => (
                <div key={i} className="calc-card p-4 bg-white border border-slate-200 relative flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-indigo-500/25 tracking-wider">{step.step}</span>
                      {i < 4 && (
                        <span className="hidden md:inline text-indigo-200 text-lg font-black absolute right-[-12px] top-1/2 -translate-y-1/2 z-10">
                          →
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs tracking-wide uppercase">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 8: Real-World Power 5 Examples ───────────────────────── */}
          <section id="real-world-examples" className="scroll-mt-20 space-y-4">
            <h2 className="section-title">Real-World Examples</h2>
            <p className="text-sm text-slate-600">
              Discover how this formula applies to active professional, academic, and industrial workflows.
            </p>
            <div className="space-y-3">
              {dynamicContent.powerExamples.map((ex, i) => (
                <div key={i} className="calc-card p-5 bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-700 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{ex.scenario}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{ex.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 9: Key facts (featured snippet bait) ─────────────── */}
          <section className="calc-card p-5 bg-indigo-50 border-indigo-100 dark:bg-zinc-900/35 dark:border-zinc-800">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 dark:text-zinc-100">
              <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400" />
              Quick Facts
            </h3>
            <ul className="space-y-2 pb-2">
              {entry.formula && (
                <li className="text-sm text-slate-600 dark:text-zinc-400">
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">Formula:</span>{" "}
                  <code className="bg-white px-2 py-0.5 rounded text-indigo-700 text-xs dark:bg-zinc-800 dark:text-indigo-300">{entry.formula}</code>
                </li>
              )}
              <li className="text-sm text-slate-600 dark:text-zinc-400">
                <span className="font-semibold text-slate-800 dark:text-zinc-200">Category:</span>{" "}
                <span className="capitalize">{entry.category}</span>
              </li>
              <li className="text-sm text-slate-600 dark:text-zinc-400">
                <span className="font-semibold text-slate-800 dark:text-zinc-200">Uses:</span>{" "}
                {entry.tags.slice(0, 4).join(", ")}
              </li>
              <li className="text-sm text-slate-600 dark:text-zinc-400">
                <span className="font-semibold text-slate-800 dark:text-zinc-200">Price:</span>{" "}
                Free — no account needed
              </li>
            </ul>
            <ShareButtons
              url={`https://calcunit.net/${entry.category}/${entry.slug}`}
              title={`Check out the ${entry.name} on CalcUnit!`}
            />
          </section>

          {/* ── SECTION 10: FAQ ────────────────────────────────────────────── */}
          <FAQSection faqs={content.faqs} />

          {/* ── SECTION 11: Related ───────────────────────────────────────── */}
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
