"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Globe, Bookmark } from "lucide-react";
import { useSearch } from "@/lib/hooks/useSearch";
import { CATEGORIES } from "@/lib/registry/categories";
import { useCalcStore } from "@/store/calculatorStore";
import { CategoryIcon } from "@/components/ui/FlatIcon";
import { Button } from "@/components/ui/Button";
import { TwitterXIcon, FacebookIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

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
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md">
            <img src="/logo.png" alt="CalcUnit Logo" className="h-full w-full object-contain" />
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
          <Button
            variant="ghost"
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className="flex items-center gap-1.5"
          >
            Categories
            <ChevronDown size={13} className={`transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
          </Button>

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
        <Button
          variant="outline"
          size="sm"
          onClick={() => setUnitSystem(unitSystem === "metric" ? "imperial" : "metric")}
          className="hidden sm:flex items-center gap-1.5"
          title="Toggle unit system"
        >
          <Globe size={14} />
          <span className="text-xs font-bold uppercase">{unitSystem === "metric" ? "SI" : "US"}</span>
        </Button>

        {/* Saved */}
        <Link
          href="/saved"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 h-10 w-10 text-slate-500"
          title="Saved calculators"
        >
          <Bookmark size={18} />
        </Link>

        {/* Social media icons */}
        <div className="hidden lg:flex items-center gap-1 border-l border-slate-200 pl-3">
          {[
            { name: "Twitter / X",  href: "https://x.com",       icon: <TwitterXIcon /> },
            { name: "Facebook",     href: "https://facebook.com", icon: <FacebookIcon /> },
            { name: "LinkedIn",     href: "https://linkedin.com", icon: <LinkedInIcon /> },
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
