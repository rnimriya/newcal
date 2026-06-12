"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, ChevronDown, Globe, Bookmark, ArrowRight, X } from "lucide-react";
import { useSearch } from "@/lib/hooks/useSearch";
import { CATEGORIES } from "@/lib/registry/categories";
import { ALL_CALCULATORS } from "@/lib/registry";
import { useCalcStore } from "@/store/calculatorStore";
import { CategoryIcon, CalculatorIcon } from "@/components/ui/FlatIcon";
import { Button } from "@/components/ui/Button";
import { TwitterXIcon, FacebookIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// Top 4 calculator slugs shown per category in the mega menu
const CATEGORY_PICKS: Record<string, string[]> = {
  math:       ["quadratic-formula-calculator", "square-root-calculator", "percentage-calculator", "slope-calculator"],
  algebra:    ["polynomial", "factoring", "logarithm", "quadratic-vertex"],
  finance:    ["compound-interest-calculator", "tip-calculator", "inflation-calculator", "paycheck-calculator"],
  loans:      ["loan-emi", "emi", "sip", "step-up-sip-calculator"],
  converters: ["celsius-to-fahrenheit", "km-to-miles", "kg-to-pounds", "aspect-ratio-calculator"],
  statistics: ["mean-median-mode", "standard-deviation", "normal-distribution", "z-score"],
  health:     ["bmi-calculator", "bac-calculator", "ovulation-calculator", "dog-age-calculator"],
  time:       ["age-calculator", "date-difference", "time-zone-calculator", "hours-calculator"],
  physics:    ["ohms-law-calculator", "kinetic-energy-calculator", "force-calculator", "velocity-calculator"],
  retirement: ["retirement-planner", "401k-contribution-calculator", "rmd-calculator", "annuity-calculator"],
  stocks:     ["stock-return-calculator", "capm-calculator", "wacc-calculator", "black-scholes-calculator"],
  credit:     ["credit-card-payoff-calculator", "credit-card-minimum-calculator"],
};

export function Header() {
  const { query, setQuery, results } = useSearch();
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const { unitSystem, setUnitSystem } = useCalcStore();
  const [mounted, setMounted] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close mega menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setQuery]);

  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];
  const pickSlugs = CATEGORY_PICKS[activeCategory] ?? [];
  const picks = pickSlugs
    .map((slug) => ALL_CALCULATORS.find((c) => c.slug === slug))
    .filter(Boolean) as (typeof ALL_CALCULATORS)[number][];

  return (
    <header className="relative z-30 border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl flex h-16 w-full items-center gap-4 px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-1">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-xs">
            <img src="/logo.png" alt="CalcUnit Logo" className="h-full w-full object-contain" />
          </div>
          <span className="font-extrabold text-foreground text-3xl hidden sm:block tracking-tight">
            CalcUnit<span className="text-primary">.net</span>
          </span>
        </Link>

        {/* Search */}
        <div ref={searchRef} className="relative flex-1 max-w-xl">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search calculators or describe your problem…"
            className="w-full rounded-xl border border-input bg-secondary py-2.5 pl-9 pr-4 text-base text-foreground placeholder:text-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 focus:bg-background transition-all"
          />
          {results.length > 0 && (
            <div className="absolute top-full mt-1.5 w-full rounded-xl border border-border bg-popover shadow-xl z-50 overflow-hidden">
              {results.slice(0, 7).map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.category}/${s.slug}`}
                  onClick={() => setQuery("")}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors border-b border-border last:border-0"
                >
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="text-base font-medium text-popover-foreground">{s.name}</p>
                    <p className="text-base text-muted-foreground capitalize">{s.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ── Mega Menu trigger ─────────────────────────────────────────────── */}
        <div ref={megaRef} className="relative hidden md:block">
          <Button
            variant="ghost"
            onClick={() => setMegaOpen((v) => !v)}
            className="flex items-center gap-1.5"
          >
            Categories
            <ChevronDown size={13} className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
          </Button>

          {megaOpen && (
            <>
              {/* full-page backdrop */}
              <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]" onClick={() => setMegaOpen(false)} />

              {/* Mega panel — full viewport width */}
              <div
                className="fixed left-0 right-0 top-[65px] z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="border-b border-border bg-popover shadow-2xl overflow-hidden">
                  <div className="mx-auto max-w-7xl flex">

                  {/* Left: category list */}
                  <nav className="w-64 shrink-0 border-r border-border bg-muted/40 py-3">
                    <p className="px-4 pb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Browse
                    </p>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          activeCategory === cat.id
                            ? "bg-primary/10 text-primary"
                            : "text-popover-foreground hover:bg-muted"
                        }`}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${cat.color} transition-colors`}
                        >
                          <CategoryIcon id={cat.id} size={14} />
                        </span>
                        <span className="text-sm font-semibold">{cat.label}</span>
                        {activeCategory === cat.id && (
                          <ArrowRight size={13} className="ml-auto text-primary" />
                        )}
                      </button>
                    ))}
                  </nav>

                  {/* Right: featured calculators for active category */}
                  <div className="flex-1 p-6">
                    {/* Category header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${activeCat.color}`}>
                          <CategoryIcon id={activeCat.id} size={20} />
                        </span>
                        <div>
                          <h3 className="font-bold text-foreground text-base">{activeCat.label}</h3>
                          <p className="text-xs text-muted-foreground">Popular calculators</p>
                        </div>
                      </div>
                      <Link
                        href={`/${activeCat.id}`}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-1 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/20 transition-colors"
                      >
                        View all <ArrowRight size={12} />
                      </Link>
                    </div>

                    {/* Calculator picks grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {picks.map((calc) => (
                        <Link
                          key={calc.slug}
                          href={`/${calc.category}/${calc.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                            <CalculatorIcon slug={calc.slug} category={calc.category} size={17} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">
                              {calc.name}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                              {calc.shortDesc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom quick links */}
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {CATEGORIES.slice(0, 6).map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/${cat.id}`}
                            onClick={() => setMegaOpen(false)}
                            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                          >
                            {cat.icon} {cat.label}
                          </Link>
                        ))}
                      </div>
                      <button
                        onClick={() => setMegaOpen(false)}
                        className="rounded-xl p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <X size={15} />
                      </button>
                    </div>
                  </div>
                  </div>{/* end max-w-7xl flex */}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Unit toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setUnitSystem(unitSystem === "metric" ? "imperial" : "metric")}
          className="hidden sm:flex items-center gap-1.5 min-w-[64px]"
          title="Toggle unit system"
        >
          <Globe size={14} />
          {mounted ? (
            <span className="text-base font-bold uppercase">{unitSystem === "metric" ? "SI" : "US"}</span>
          ) : (
            <span className="text-base font-bold uppercase text-transparent">SI</span>
          )}
        </Button>

        {/* Saved */}
        <Link
          href="/saved"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-medium transition-colors hover:bg-secondary hover:text-foreground h-10 w-10 text-muted-foreground"
          title="Saved calculators"
        >
          <Bookmark size={18} />
        </Link>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Social media icons */}
        <div className="hidden lg:flex items-center gap-1 border-l border-border pl-3">
          {[
            { name: "Twitter / X", href: "https://x.com", icon: <TwitterXIcon /> },
            { name: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
            { name: "LinkedIn", href: "https://linkedin.com", icon: <LinkedInIcon /> },
          ].map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="rounded-xl p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
