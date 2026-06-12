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
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const { query, setQuery, results } = useSearch();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { unitSystem, setUnitSystem } = useCalcStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
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
    <header className="relative z-30 border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl flex h-16 w-full items-center gap-4 px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-1">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md">
            <img src="/logo.png" alt="CalcUnit Logo" className="h-full w-full object-contain" />
          </div>
          <span className="font-extrabold text-foreground text-lg hidden sm:block tracking-tight">
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
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-border bg-popover p-2 shadow-2xl z-50">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/${cat.id}`}
                    onClick={() => setMegaMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted transition-colors"
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl ${cat.color}`}>
                      <CategoryIcon id={cat.id} size={15} />
                    </span>
                    <span className="text-base font-medium text-popover-foreground">{cat.label}</span>
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
