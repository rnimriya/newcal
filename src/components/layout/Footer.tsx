"use client";

import Link from "next/link";
import { WifiOff, Calculator, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800 mt-16 dark:bg-zinc-950 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* ─── TOP SECTION: Trust Badges & Tagline ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-zinc-800 items-center">
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 text-white font-extrabold text-lg tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                <Calculator size={17} />
              </span>
              <span>CalcUnit<span className="text-indigo-400 font-bold">.net</span></span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              A premium, comprehensive calculator engine hosting 1,000+ specialized conversion and mathematical solvers. Free, offline-first, and ad-free.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* PWA offline badge */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <WifiOff size={18} />
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                  100% Offline PWAs
                </h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Install CalcUnit to your desktop or mobile screen. Fully functional without an internet connection.
                </p>
              </div>
            </div>

            {/* Zero Ads / Privacy badge */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <ShieldCheck size={18} />
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Zero Ads & Tracking
                </h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Fast, clean experience with no pop-ups, logins, or cookies. All calculations run strictly in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MIDDLE SECTION: Organized Links ────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16">
          
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Sparkles size={12} className="text-indigo-400" /> Categories
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Math Calculators", href: "/math" },
                { label: "Algebra Solver", href: "/algebra" },
                { label: "Finance & Tax", href: "/finance" },
                { label: "Loans & EMI", href: "/loans" },
                { label: "Unit Converters", href: "/converters" },
                { label: "Physics Tools", href: "/physics" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Featured Tools
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Scientific Calculator", href: "/" },
                { label: "BMI Calculator", href: "/health/bmi-calculator" },
                { label: "Compound Interest", href: "/finance/compound-interest-calculator" },
                { label: "Ohm's Law Solver", href: "/physics/ohms-law-calculator" },
                { label: "Quadratic Formula", href: "/math/quadratic-formula-calculator" },
                { label: "Kilograms to Pounds", href: "/converters/kg-to-pounds" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "All Categories", href: "/categories" },
                { label: "Saved Tools", href: "/saved" },
                { label: "Preferences", href: "/settings" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Interactive Sitemap", href: "/sitemap.xml" },
                { label: "Keyboard Shortcuts", href: "/settings" },
                { label: "Calculators Directory", href: "/categories" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ─── BOTTOM SECTION: Copyright & Legal Disclaimer ───────────────────────── */}
        <div className="border-t border-zinc-800 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} CalcUnit.net. All rights reserved.</p>
            <p className="max-w-2xl text-zinc-600">
              Disclamer: Calculations are computed locally in the browser. Values should be double-checked for critical professional, financial, or academic decisions.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/settings" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/settings" className="hover:text-zinc-400 transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

