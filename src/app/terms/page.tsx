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
    <div className="max-w-3xl mx-auto space-y-8 py-3 px-4 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-base font-bold text-primary">
          <FileText size={13} /> Terms & Conditions
        </span>
        <h1 className="text-3xl font-black text-foreground tracking-tight">
          Terms of Service
        </h1>
        <p className="text-base text-muted-foreground">
          Last updated: June 5, 2026
        </p>
      </div>

      {/* Core Rules Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  p-5 bg-card border border-border">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CheckCircle size={16} />
            </span>
            <h3 className="font-bold text-foreground text-base">Free to Use</h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every calculator on CalcUnit is free to use. No account, no payment, no restrictions for students, professionals, or businesses.
          </p>
        </div>

        <div className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  p-5 bg-card border border-border">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Scale size={16} />
            </span>
            <h3 className="font-bold text-foreground text-base">Verify Outcomes</h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            You are responsible for checking results before using them in real decisions. CalcUnit provides tools, not professional advice.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <CheckCircle size={16} className="text-primary" />
            1. Acceptance of Terms
          </h2>
          <p className="text-base leading-relaxed">
            Using CalcUnit.net means you accept these terms. If you do not agree, stop using the site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Scale size={16} className="text-primary" />
            2. Platform License and Usage Scope
          </h2>
          <p className="text-base leading-relaxed">
            You can use CalcUnit for personal study, homework, professional estimates, and work tasks. You agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-base">
            <li>Scrape or copy the calculation engine to use on another site without permission.</li>
            <li>Embed CalcUnit tools inside frames on other websites without linking back to the source.</li>
            <li>Use the site for automated bots or anything that overloads the servers.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <AlertTriangle size={16} className="text-primary" />
            3. Disclaimer of Liability
          </h2>
          <p className="text-base leading-relaxed">
            CalcUnit runs calculations in your browser using standard math models. We do not guarantee that every result is perfect. Always double-check outputs before using them for anything important. Read the <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> for more detail.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <HelpCircle size={16} className="text-primary" />
            4. Revisions & Platform Changes
          </h2>
          <p className="text-base leading-relaxed">
            We add new calculators and fix bugs regularly. These terms can change at any time. Continuing to use the site after an update means you accept the new terms.
          </p>
        </section>
      </div>
    </div>
  );
}
