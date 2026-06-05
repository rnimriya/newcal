"use client";

import Link from "next/link";
import { WifiOff, Calculator, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 text-zinc-600 border-t border-zinc-200 mt-16 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* ─── TOP SECTION: Trust Badges & Tagline ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-zinc-200 items-center dark:border-zinc-800">
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 text-zinc-900 font-extrabold text-lg tracking-tight dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                <Calculator size={17} />
              </span>
              <span>CalcUnit<span className="text-indigo-600 font-bold dark:text-indigo-400">.net</span></span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-md dark:text-zinc-400">
              A premium, comprehensive calculator engine hosting 1,000+ specialized conversion and mathematical solvers. Free, offline-first, and ad-free.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  name: "Twitter/X",
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
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-100 hover:text-indigo-600 transition-all shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-indigo-400 cursor-pointer active:scale-95"
                  title={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* PWA offline badge */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-300 transition-colors dark:bg-zinc-900/40 dark:border-zinc-800/80 dark:hover:border-zinc-700">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <WifiOff size={18} />
              </span>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 flex items-center gap-1.5 dark:text-white">
                  100% Offline PWAs
                </h4>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed dark:text-zinc-400">
                  Install CalcUnit to your desktop or mobile screen. Fully functional without an internet connection.
                </p>
              </div>
            </div>

            {/* Zero Ads / Privacy badge */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-300 transition-colors dark:bg-zinc-900/40 dark:border-zinc-800/80 dark:hover:border-zinc-700">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <ShieldCheck size={18} />
              </span>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Zero Ads & Tracking
                </h4>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed dark:text-zinc-400">
                  Fast, clean experience with no pop-ups, logins, or cookies. All calculations run strictly in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MIDDLE SECTION: Organized Links ────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16">
          
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1.5 dark:text-white">
              <Sparkles size={12} className="text-indigo-600 dark:text-indigo-400" /> Categories
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
                  <Link href={link.href} className="text-zinc-500 hover:text-indigo-600 transition-colors flex items-center gap-1 group dark:text-zinc-400 dark:hover:text-white">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-600 dark:text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
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
                  <Link href={link.href} className="text-zinc-500 hover:text-indigo-600 transition-colors flex items-center gap-1 group dark:text-zinc-400 dark:hover:text-white">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-600 dark:text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Platform
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "All Categories", href: "/categories" },
                { label: "Saved Tools", href: "/saved" },
                { label: "Preferences", href: "/settings" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-500 hover:text-indigo-600 transition-colors flex items-center gap-1 group dark:text-zinc-400 dark:hover:text-white">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-600 dark:text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "HTML Sitemap", href: "/sitemap" },
                { label: "Keyboard Shortcuts", href: "/settings" },
                { label: "Calculators Directory", href: "/categories" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-500 hover:text-indigo-600 transition-colors flex items-center gap-1 group dark:text-zinc-400 dark:hover:text-white">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-600 dark:text-indigo-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ─── BOTTOM SECTION: Copyright & Legal Disclaimer ───────────────────────── */}
        <div className="border-t border-zinc-200 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 dark:border-zinc-800">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} CalcUnit.net. All rights reserved.</p>
            <p className="max-w-2xl text-zinc-400 dark:text-zinc-600">
              Disclaimer: Calculations are computed locally in the browser. Values should be double-checked for critical professional, financial, or academic decisions.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 flex-wrap justify-center md:justify-end">
            <Link href="/privacy" className="hover:text-zinc-800 transition-colors dark:hover:text-zinc-300">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-zinc-800 transition-colors dark:hover:text-zinc-300">Terms of Use</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-zinc-800 transition-colors dark:hover:text-zinc-300">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

