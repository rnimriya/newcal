import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle, Scale, AlertTriangle, HelpCircle } from "lucide-react";
import { SITE_URL, SITE_DISPLAY_NAME, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service - ${SITE_DISPLAY_NAME}`,
  description: `${SITE_NAME}'s terms of use. Free for personal and professional use. Verify results before using them for critical decisions.`,
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8 px-4 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-900/30 dark:text-indigo-400">
          <FileText size={13} /> Terms & Conditions
        </span>
        <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: June 5, 2026
        </p>
      </div>

      {/* Core Rules Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="calc-card p-5 bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-850">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
              <CheckCircle size={16} />
            </span>
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Free to Use</h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Every calculator on CalcUnit is free to use. No account, no payment, no restrictions for students, professionals, or businesses.
          </p>
        </div>

        <div className="calc-card p-5 bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-850">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
              <Scale size={16} />
            </span>
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Verify Outcomes</h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            You are responsible for checking results before using them in real decisions. CalcUnit provides tools, not professional advice.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-6 text-zinc-650 dark:text-zinc-300">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <CheckCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
            1. Acceptance of Terms
          </h2>
          <p className="text-sm leading-relaxed">
            Using CalcUnit.net means you accept these terms. If you do not agree, stop using the site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <Scale size={16} className="text-indigo-600 dark:text-indigo-400" />
            2. Platform License and Usage Scope
          </h2>
          <p className="text-sm leading-relaxed">
            You can use CalcUnit for personal study, homework, professional estimates, and work tasks. You agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Scrape or copy the calculation engine to use on another site without permission.</li>
            <li>Embed CalcUnit tools inside frames on other websites without linking back to the source.</li>
            <li>Use the site for automated bots or anything that overloads the servers.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <AlertTriangle size={16} className="text-indigo-600 dark:text-indigo-400" />
            3. Disclaimer of Liability
          </h2>
          <p className="text-sm leading-relaxed">
            CalcUnit runs calculations in your browser using standard math models. We do not guarantee that every result is perfect. Always double-check outputs before using them for anything important. Read the <Link href="/disclaimer" className="text-indigo-600 hover:underline dark:text-indigo-400">Disclaimer</Link> for more detail.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <HelpCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
            4. Revisions & Platform Changes
          </h2>
          <p className="text-sm leading-relaxed">
            We add new calculators and fix bugs regularly. These terms can change at any time. Continuing to use the site after an update means you accept the new terms.
          </p>
        </section>
      </div>
    </div>
  );
}
