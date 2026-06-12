"use client";

import Link from "next/link";
import { WifiOff, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { TwitterXIcon, FacebookIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-16">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6">

        {/* ─── TOP SECTION: Trust Badges & Tagline ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border items-center">
          <div className="lg:col-span-5 space-y-3">

            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              A premium, comprehensive calculator engine hosting 1,000+ specialized conversion and mathematical solvers. Free, offline-first, and ad-free.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "Twitter/X", href: "https://x.com", icon: <TwitterXIcon /> },
                { name: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
                { name: "LinkedIn", href: "https://linkedin.com", icon: <LinkedInIcon /> },
              ].map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-background hover:border-input hover:bg-muted hover:text-primary transition-all shadow-sm cursor-pointer active:scale-95"
                  title={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* PWA offline badge */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <WifiOff size={18} />
              </span>
              <div>
                <h4 className="text-base font-semibold text-card-foreground flex items-center gap-1.5">
                  100% Offline PWAs
                </h4>
                <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                  Install {SITE_NAME} to your desktop or mobile screen. Fully functional without an internet connection.
                </p>
              </div>
            </div>

            {/* Zero Ads / Privacy badge */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck size={18} />
              </span>
              <div>
                <h4 className="text-base font-semibold text-card-foreground">
                  Zero Ads & Tracking
                </h4>
                <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                  Fast, clean experience with no pop-ups, logins, or cookies. All calculations run strictly in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MIDDLE SECTION: Organized Links ────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16">

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Sparkles size={12} className="text-primary" /> Categories
            </h3>
            <ul className="space-y-3 text-base">
              {[
                { label: "Math Calculators", href: "/math" },
                { label: "Algebra Solver", href: "/algebra" },
                { label: "Finance & Tax", href: "/finance" },
                { label: "Loans & EMI", href: "/loans" },
                { label: "Unit Converters", href: "/converters" },
                { label: "Physics Tools", href: "/physics" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-foreground">
              Featured Tools
            </h3>
            <ul className="space-y-3 text-base">
              {[
                { label: "Scientific Calculator", href: "/" },
                { label: "BMI Calculator", href: "/health/bmi-calculator" },
                { label: "Compound Interest", href: "/finance/compound-interest-calculator" },
                { label: "Ohm's Law Solver", href: "/physics/ohms-law-calculator" },
                { label: "Quadratic Formula", href: "/math/quadratic-formula-calculator" },
                { label: "Kilograms to Pounds", href: "/converters/kg-to-pounds" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-foreground">
              Platform
            </h3>
            <ul className="space-y-3 text-base">
              {[
                { label: "All Categories", href: "/categories" },
                { label: "Saved Tools", href: "/saved" },
                { label: "Preferences", href: "/settings" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-3 text-base">
              {[
                { label: "Blog & Articles", href: "/blog" },
                { label: "Calculators Directory", href: "/categories" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "HTML Sitemap", href: "/sitemap" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ─── BOTTOM SECTION: Copyright & Legal Disclaimer ───────────────────────── */}
        <div className="border-t border-border py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-muted-foreground">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
            <p className="max-w-2xl text-muted-foreground/60">
              Disclaimer: Calculations are computed locally in the browser. Values should be double-checked for critical professional, financial, or academic decisions.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 flex-wrap justify-center md:justify-end">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

