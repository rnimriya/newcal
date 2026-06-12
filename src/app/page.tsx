import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/registry/categories";
import { ALL_CALCULATORS, BY_CATEGORY } from "@/lib/registry";
import { SITE_URL, SITE_DISPLAY_NAME } from "@/lib/constants";
import { ArrowRight, Zap, Wifi, Smartphone, Sparkles, BadgePlus } from "lucide-react";
import { ScientificCalculator } from "@/components/calculator/ScientificCalculator";
import { CategoryIcon, CalculatorIcon } from "@/components/ui/FlatIcon";
import { RecentlyViewedSection } from "@/components/calculator/RecentlyViewedSection";

export const metadata: Metadata = {
  title: `Free Online Calculators - Math, Finance, Health | ${SITE_DISPLAY_NAME}`,
  description:
    "1,000+ free online calculators for math, finance, health, physics, and unit conversion. Results update as you type. No account needed. Works offline as a PWA.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `Free Online Calculators — ${SITE_DISPLAY_NAME}`,
    description:
      "1,000+ free calculators — math, finance, health, physics & converters. Instant answers as you type. No sign-up. Works offline.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_DISPLAY_NAME,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "CalcUnit — Free Online Calculators" }],
  },
  twitter: { card: "summary_large_image", title: `Free Online Calculators | ${SITE_DISPLAY_NAME}`, description: "1,000+ free calculators. Instant results as you type. No sign-up. Works offline." },
  keywords: "free online calculator, math calculator, finance calculator, BMI calculator, compound interest calculator, unit converter, loan calculator",
};

// Last 12 added calculators — newest entries sit at the top of ALL_CALCULATORS
const trendingCalcs = ALL_CALCULATORS.slice(0, 24);

export default function HomePage() {
  return (
    <div className="space-y-14 pb-10">

      {/* ── Light Full-Screen Hero ──────────────────────────────────────────────────────── */}
      <section 
        className="relative overflow-hidden py-12 sm:py-16 -mt-5 sm:-mt-8 mb-14 flex items-center border-b border-border bg-background/50"
        style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
      >
        {/* Abstract decorative blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full max-w-7xl mx-auto px-4 sm:px-6">
          {/* Left Column: Title & details */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border px-4 py-1.5 text-base font-black text-primary shadow-sm uppercase tracking-wider">
              <Sparkles size={14} className="text-yellow-500" /> 1,000+ Free Tools
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight drop-shadow-sm">
              Any calculation, <br />
              <span className="text-primary">answered instantly.</span>
            </h1>

            <p className="text-lg text-foreground/80 max-w-lg leading-relaxed font-semibold">
              Math, finance, health, physics, and unit conversion — all free. Type a number and the result appears right away.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 text-base font-medium text-foreground/90 pt-2">
              {[
                { icon: <Zap size={16} className="text-amber-500" />, label: "Results as you type" },
                { icon: <Wifi size={16} className="text-emerald-500" />, label: "Works offline" },
                { icon: <Smartphone size={16} className="text-sky-500" />, label: "Mobile native" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-2 rounded-xl bg-card/60 backdrop-blur-sm border border-border px-3 py-1.5 shadow-sm">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Scientific Calculator */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <ScientificCalculator />
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
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.id}`}
              className={`group relative overflow-hidden rounded-2xl ${cat.gradient} p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 opacity-90 hover:opacity-100`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                <CategoryIcon id={cat.id} size={80} />
              </div>
              <div className="relative z-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md shadow-sm mb-4">
                  <CategoryIcon id={cat.id} size={24} />
                </span>
                <p className="font-bold text-white text-lg sm:text-xl tracking-wide drop-shadow-md">
                  {cat.label}
                </p>
                <p className="text-base text-white font-medium mt-1 drop-shadow-md">
                  {(BY_CATEGORY[cat.id] ?? []).length} calculators
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Trending / Newly Added Calculators ──────────────────────────────── */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
            <BadgePlus size={22} className="text-primary" /> Trending Calculators
          </h2>
          <Link href="/categories" className="text-base font-bold text-primary hover:text-primary/80 flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full transition-colors">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {trendingCalcs.map((calc) => (
            <Link
              key={calc.slug}
              href={`/${calc.category}/${calc.slug}`}
              className="calc-card group relative flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-bold text-emerald-700">
                New
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary shadow-sm">
                <CalculatorIcon slug={calc.slug} category={calc.category} size={22} />
              </span>
              <div className="min-w-0 flex-1 pr-10">
                <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors leading-tight mb-1">
                  {calc.name}
                </p>
                <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed">
                  {calc.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
