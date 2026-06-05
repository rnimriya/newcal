"use client";

import Link from "next/link";
import { Zap, Activity, Calculator } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-[#F2F0EB] text-[#4E4844] mt-16 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Info & Branding */}
          <div className="md:col-span-5 space-y-4 text-left">
            <Link href="/" className="flex items-center gap-2 text-[#1C1917] dark:text-white font-extrabold text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Calculator size={16} />
              </span>
              <span>CalcUnit<span className="text-indigo-600 font-bold">.net</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-[#706A65] dark:text-zinc-400 max-w-sm">
              CalcUnit.net is a comprehensive, free online calculator platform offering 1,000+ interactive tools for math, algebra, finance, health, physics, statistics, and unit conversion. Engineered for speed and utility, our platform features real-time, bi-directional calculations and works completely offline as an installable Progressive Web App (PWA).
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#706A65] dark:text-zinc-500">
              <span className="flex items-center gap-1">
                <Zap size={11} className="text-indigo-600" /> Fast solving
              </span>
              <span className="flex items-center gap-1">
                <Activity size={11} className="text-indigo-600" /> No ads / sign-up
              </span>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="md:col-span-2.5 sm:col-span-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1C1917] dark:text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Math Calculators", href: "/math" },
                { label: "Algebra Solver", href: "/algebra" },
                { label: "Finance & Tax", href: "/finance" },
                { label: "Loans & EMI", href: "/loans" },
                { label: "Unit Converters", href: "/converters" },
                { label: "Physics Tools", href: "/physics" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Tools */}
          <div className="md:col-span-2.5 sm:col-span-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1C1917] dark:text-white mb-4">
              Featured Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Scientific Calculator", href: "/" },
                { label: "BMI Calculator", href: "/health/bmi-calculator" },
                { label: "Compound Interest", href: "/finance/compound-interest-calculator" },
                { label: "Ohm's Law Solver", href: "/physics/ohms-law-calculator" },
                { label: "Quadratic Formula", href: "/math/quadratic-formula-calculator" },
                { label: "Kilograms to Pounds", href: "/converters/kg-to-pounds" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Platform */}
          <div className="md:col-span-2 sm:col-span-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1C1917] dark:text-white mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "All Categories", href: "/categories" },
                { label: "Saved Tools", href: "/saved" },
                { label: "Preferences", href: "/settings" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="mt-12 border-t border-zinc-300 pt-8 text-center text-xs text-[#706A65] dark:border-zinc-800 dark:text-zinc-500">
          <p>© {currentYear} CalcUnit.net. All rights reserved.</p>
          <p className="mt-1">
            Calculations are for informational purposes. Double-check all critical values.
          </p>
        </div>
      </div>
    </footer>
  );
}
