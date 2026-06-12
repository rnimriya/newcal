import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/registry/categories";
import { ALL_CALCULATORS, BY_CATEGORY } from "@/lib/registry";
import { SITE_URL, SITE_DISPLAY_NAME } from "@/lib/constants";
import { ArrowRight, Zap, Wifi, Smartphone, Sparkles } from "lucide-react";
import { ScientificCalculator } from "@/components/calculator/ScientificCalculator";
import { CategoryIcon, CalculatorIcon } from "@/components/ui/FlatIcon";
import { RecentlyViewedSection } from "@/components/calculator/RecentlyViewedSection";

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
    <div className="space-y-14 pb-10">

      {/* ── Vibrant Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 px-6 py-12 sm:py-20 lg:px-12 shadow-2xl shadow-fuchsia-500/20">
        {/* Abstract decorative blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Title & details */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-xs font-bold text-white shadow-sm uppercase tracking-wider">
              <Sparkles size={14} className="text-yellow-300" /> 1,000+ Free Tools
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Any calculation, <br />
              <span className="text-fuchsia-200">answered instantly.</span>
            </h1>

            <p className="text-lg text-white/90 max-w-lg leading-relaxed font-medium">
              Math, finance, health, physics, and unit conversion — all free. Type a number and the result appears right away.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 text-sm font-medium text-white/90 pt-2">
              {[
                { icon: <Zap size={16} className="text-yellow-400" />, label: "Results as you type" },
                { icon: <Wifi size={16} className="text-emerald-300" />, label: "Works offline" },
                { icon: <Smartphone size={16} className="text-sky-300" />, label: "Mobile native" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-2 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 px-3 py-1.5 shadow-sm">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Scientific Calculator (Glassmorphism) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="p-1 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <div className="bg-white rounded-[1.8rem] overflow-hidden">
                <ScientificCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recently Viewed ─────────────────────────────────────────────────── */}
      <div className="px-4">
        <RecentlyViewedSection />
      </div>

      {/* ── Colorful Category Grid ──────────────────────────────────────────── */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.id}`}
              className={`group relative overflow-hidden rounded-2xl ${cat.gradient} p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                <CategoryIcon id={cat.id} size={80} />
              </div>
              <div className="relative z-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md shadow-sm mb-4">
                  <CategoryIcon id={cat.id} size={24} />
                </span>
                <p className="font-bold text-white text-lg sm:text-xl tracking-wide">
                  {cat.label}
                </p>
                <p className="text-sm text-white/80 font-medium mt-1">
                  {(BY_CATEGORY[cat.id] ?? []).length} calculators
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Calculators ─────────────────────────────────────────────── */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Trending Calculators</h2>
          <Link href="/categories" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 bg-indigo-50 px-3 py-1.5 rounded-full transition-colors">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {featuredCalcs.map((calc) => (
            calc && (
              <Link
                key={calc.slug}
                href={`/${calc.category}/${calc.slug}`}
                className="calc-card group flex items-start gap-4 p-5 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-indigo-600 shadow-sm">
                  <CalculatorIcon slug={calc.slug} category={calc.category} size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-slate-900 text-base group-hover:text-indigo-700 transition-colors leading-tight mb-1">
                    {calc.name}
                  </p>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {calc.shortDesc}
                  </p>
                </div>
              </Link>
            )
          ))}
        </div>
      </section>

    </div>
  );
}
