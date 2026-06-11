import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/registry/categories";
import { ALL_CALCULATORS, BY_CATEGORY } from "@/lib/registry";
import { SITE_URL, SITE_DISPLAY_NAME } from "@/lib/constants";
import { ArrowRight, Zap, Wifi, Smartphone } from "lucide-react";
import { ScientificCalculator } from "@/components/calculator/ScientificCalculator";
import { CategoryIcon, CalculatorIcon } from "@/components/ui/FlatIcon";

export const metadata: Metadata = {
  title: `Free Online Calculators - Math, Finance, Health | ${SITE_DISPLAY_NAME}`,
  description: "1,000+ free calculators for math, finance, health, physics, and unit conversion. Results update as you type. No sign-up. Works offline.",
  alternates: { canonical: SITE_URL },
};

// Featured calculators with schema (interactive)
const FEATURED_SLUGS = [
  "bmi-calculator",
  "compound-interest-calculator",
  "celsius-to-fahrenheit",
  "km-to-miles",
  "quadratic-formula-calculator",
  "discount-calculator",
  "loan-calculator",
  "percentage-calculator",
  "square-root-calculator",
  "slope-calculator",
  "kg-to-pounds",
  "simple-interest-calculator",
];

const featuredCalcs = FEATURED_SLUGS
  .map((slug) => ALL_CALCULATORS.find((c) => c.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <div className="space-y-14">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-6 px-4">
        {/* Left Column: Title & details */}
        <div className="lg:col-span-7 text-left space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
            <Zap size={12} /> 1,000+ free calculators. No sign-up.
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Any calculation,{" "}
            <span className="text-indigo-600">answered instantly.</span>
          </h1>

          <p className="text-base text-slate-500 max-w-lg leading-relaxed">
            Math, finance, health, physics, and unit conversion — all free. Type a number and the result appears right away.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 text-xs text-slate-500">
            {[
              { icon: <Zap size={11} className="text-indigo-500" />, label: "Results as you type" },
              { icon: <Wifi size={11} className="text-emerald-500" />, label: "Works offline" },
              { icon: <Smartphone size={11} className="text-violet-500" />, label: "Works on mobile" },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 shadow-sm">
                {icon} {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Scientific Calculator */}
        <div className="lg:col-span-5 w-full">
          <ScientificCalculator />
        </div>
      </section>

      {/* ── Category Grid ───────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Pick a Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.id}`}
              className="calc-card group flex flex-col items-center gap-2.5 p-5 text-center hover:border-indigo-200"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${cat.color} shadow-sm`}>
                <CategoryIcon id={cat.id} size={22} />
              </span>
              <p className="font-semibold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                {cat.label}
              </p>
              <p className="text-xs text-slate-400">
                {(BY_CATEGORY[cat.id] ?? []).length} calculators
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Calculators ─────────────────────────────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Most Used Calculators</h2>
          <Link href="/categories" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            View all <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredCalcs.map((calc) => (
            calc && (
              <Link
                key={calc.slug}
                href={`/${calc.category}/${calc.slug}`}
                className="calc-card group flex items-start gap-3.5 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-indigo-50 transition-colors text-indigo-600">
                  <CalculatorIcon slug={calc.slug} category={calc.category} size={20} />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 text-sm group-hover:text-indigo-700 transition-colors leading-snug">
                    {calc.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                    {calc.shortDesc}
                  </p>
                  {calc.formula && (
                    <code className="mt-1 inline-block text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                      {calc.formula}
                    </code>
                  )}
                </div>
                <ArrowRight size={13} className="shrink-0 mt-0.5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
              </Link>
            )
          ))}
        </div>
      </section>

      {/* ── SEO Content Block ─────────────────────────────────────────────────── */}
      <section className="prose prose-sm max-w-none">
        <div className="calc-card p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 mb-2">About {SITE_DISPLAY_NAME}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {SITE_DISPLAY_NAME} has over 1,000 free calculators for math, finance, health, physics, and unit conversion. Every tool runs inside your browser. No downloads. No ads. No accounts.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Change any input and the answer updates right away. You can also switch units (kg to lbs, Celsius to Fahrenheit) without retyping your numbers. Install the site as an app and it works even without an internet connection.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { n: "1,000+", label: "Calculators" },
              { n: "9",      label: "Categories" },
              { n: "100%",   label: "Free forever" },
              { n: "0",      label: "Sign-ups needed" },
            ].map(({ n, label }) => (
              <div key={label} className="rounded-xl bg-indigo-50 p-3 text-center">
                <p className="text-xl font-extrabold text-indigo-700">{n}</p>
                <p className="text-xs text-slate-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
