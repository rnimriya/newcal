"use client";

import Link from "next/link";
import { WifiOff, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { TwitterXIcon, FacebookIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 text-zinc-600 border-t border-zinc-200 mt-16 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* ─── TOP SECTION: Trust Badges & Tagline ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-zinc-200 items-center dark:border-zinc-800">
          <div className="lg:col-span-5 space-y-3">

            <p className="text-sm text-zinc-500 leading-relaxed max-w-md dark:text-zinc-400">
              A premium, comprehensive calculator engine hosting 1,000+ specialized conversion and mathematical solvers. Free, offline-first, and ad-free.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "Twitter/X", href: "https://x.com",       icon: <TwitterXIcon /> },
                { name: "Facebook",  href: "https://facebook.com", icon: <FacebookIcon /> },
                { name: "LinkedIn",  href: "https://linkedin.com", icon: <LinkedInIcon /> },
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
                  Install {SITE_NAME} to your desktop or mobile screen. Fully functional without an internet connection.
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
                { label: "Blog & Articles", href: "/blog" },
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
            <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
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

