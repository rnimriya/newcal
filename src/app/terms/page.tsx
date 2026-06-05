import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle, Scale, AlertTriangle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — CalcUnit.net",
  description: "Review CalcUnit's Terms of Service. By accessing our platform, you agree to our policies regarding local browser execution and result checking.",
  alternates: { canonical: "https://calcunit.net/terms" },
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
            All calculators and unit converters are free for student, professional, and commercial use with zero registration requirements.
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
            By using CalcUnit, you agree that you are solely responsible for verifying output values prior to making critical decisions.
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
            By accessing and utilizing CalcUnit.net (&ldquo;CalcUnit&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or the &ldquo;Platform&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <Scale size={16} className="text-indigo-600 dark:text-indigo-400" />
            2. Platform License and Usage Scope
          </h2>
          <p className="text-sm leading-relaxed">
            We grant you a personal, non-exclusive, non-transferable, and revocable license to access our math solvers and converters. You may use our calculators for personal study, homework checking, professional estimation, and office workflows.
          </p>
          <p className="text-sm leading-relaxed">
            However, you agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Scrape calculation routines or reverse-engineer the programmatic topological solver.</li>
            <li>Incorporate our calculator tools in frame sets on other sites without proper attribution.</li>
            <li>Use the platform for any automated spam or server overloading tasks.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <AlertTriangle size={16} className="text-indigo-600 dark:text-indigo-400" />
            3. Disclaimer of Liability
          </h2>
          <p className="text-sm leading-relaxed">
            All calculations and conversions on CalcUnit are processed dynamically inside your browser client using open mathematical models. We make no representations or warranties of any kind, express or implied, about the absolute completeness, accuracy, or suitability of the outputs. Please check our dedicated <Link href="/disclaimer" className="text-indigo-600 hover:underline dark:text-indigo-400">Disclaimer Page</Link> for detailed terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <HelpCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
            4. Revisions & Platform Changes
          </h2>
          <p className="text-sm leading-relaxed">
            CalcUnit is updated frequently to add new specialized calculators and fix routing schemas. We reserve the right to modify these Terms of Service at any time without notice. Your continued use of the platform following updates represents your binding agreement to the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
