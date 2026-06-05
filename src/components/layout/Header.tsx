"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Globe, Bookmark, Calculator } from "lucide-react";
import { useSearch } from "@/lib/hooks/useSearch";
import { CATEGORIES } from "@/lib/registry/categories";
import { useCalcStore } from "@/store/calculatorStore";
import { CategoryIcon } from "@/components/ui/FlatIcon";

export function Header() {
  const { query, setQuery, results } = useSearch();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { unitSystem, setUnitSystem } = useCalcStore();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setQuery]);

  return (
    <header className="relative z-30 border-b border-slate-200 bg-white/98 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Calculator size={17} />
          </div>
          <span className="font-extrabold text-slate-900 text-lg hidden sm:block tracking-tight">
            CalcUnit<span className="text-indigo-600">.net</span>
          </span>
        </Link>

        {/* Search */}
        <div ref={searchRef} className="relative flex-1 max-w-xl">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 1000+ calculators…"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all"
          />

          {results.length > 0 && (
            <div className="absolute top-full mt-1.5 w-full rounded-xl border border-slate-200 bg-white shadow-xl z-50 overflow-hidden">
              {results.slice(0, 7).map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.category}/${s.slug}`}
                  onClick={() => setQuery("")}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                >
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{s.name}</p>
                    <p className="text-xs text-slate-400 capitalize">{s.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Category Mega Menu */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            Categories
            <ChevronDown size={13} className={`transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
          </button>

          {megaMenuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMegaMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/${cat.id}`}
                    onClick={() => setMegaMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${cat.color}`}>
                      <CategoryIcon id={cat.id} size={15} />
                    </span>
                    <span className="text-sm font-medium text-slate-700">{cat.label}</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Unit toggle */}
        <button
          onClick={() => setUnitSystem(unitSystem === "metric" ? "imperial" : "metric")}
          className="hidden sm:flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200"
          title="Toggle unit system"
        >
          <Globe size={14} />
          <span className="text-xs font-bold uppercase">{unitSystem === "metric" ? "SI" : "US"}</span>
        </button>

        {/* Saved */}
        <Link
          href="/saved"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          title="Saved calculators"
        >
          <Bookmark size={18} />
        </Link>

        {/* Social media icons */}
        <div className="hidden lg:flex items-center gap-1 border-l border-slate-200 pl-3">
          {[
            {
              name: "Twitter / X",
              href: "https://x.com",
              icon: (
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
            {
              name: "Facebook",
              href: "https://facebook.com",
              icon: (
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              ),
            },
            {
              name: "LinkedIn",
              href: "https://linkedin.com",
              icon: (
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              ),
            },
            {
              name: "GitHub",
              href: "https://github.com/rnimriya/newcal",
              icon: (
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
          ].map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="rounded-lg p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
