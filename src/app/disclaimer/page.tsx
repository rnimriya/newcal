import type { Metadata } from "next";
import { AlertOctagon, Scale, ShieldAlert, CheckCircle } from "lucide-react";
import { SITE_URL, SITE_DISPLAY_NAME, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Disclaimer - ${SITE_DISPLAY_NAME}`,
  description: `${SITE_NAME} results are for reference only. Always verify numbers before using them for medical, financial, or engineering decisions.`,
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-3 px-4 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-base font-bold text-amber-600 dark:text-amber-400">
          <AlertOctagon size={13} /> Legal Disclaimer
        </span>
        <h1 className="text-3xl font-black text-foreground tracking-tight">
          Disclaimer
        </h1>
        <p className="text-base text-muted-foreground">
          Last updated: June 5, 2026
        </p>
      </div>

      {/* Warning Alert Banner */}
      <div className="rounded-2xl border-l-4 border-l-amber-500 bg-amber-500/10 p-5 shadow-sm text-amber-800 dark:text-amber-400">
        <div className="flex items-start gap-3.5">
          <ShieldAlert size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base">For reference only - not a substitute for expert advice</h4>
            <p className="text-base text-amber-700 dark:text-amber-300 mt-1 leading-relaxed">
              All results on CalcUnit are computed in your browser. Do not rely on them alone for structural designs, medical decisions, financial investments, or high-stakes exams. Always verify with a qualified professional.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Scale size={16} className="text-primary" />
            1. Accuracy of Calculations
          </h2>
          <p className="text-base leading-relaxed">
            We write every formula based on standard reference books, NIST parameters, and accepted math conventions. Even so, errors can occur. Floating-point arithmetic in browsers has small precision limits. CalcUnit does not guarantee that every result is correct to the last decimal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <AlertOctagon size={16} className="text-primary" />
            2. Category Disclaimers
          </h2>
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl border border-border bg-card">
              <h4 className="font-bold text-base text-foreground">Financial & Loans</h4>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                Loan, interest, tax, and EMI figures are estimates. Banks and lenders use different compounding methods, fees, and rate structures. Confirm exact numbers with your lender before signing anything.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card">
              <h4 className="font-bold text-base text-foreground">Physics & Materials Engineering</h4>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                Values like elastic modulus and compressive strength come from standard theoretical equations. Real-world results vary based on moisture, defects, and temperature. Test your actual materials in a lab.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card">
              <h4 className="font-bold text-base text-foreground">Health & BMI</h4>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                BMI is a rough size indicator. It does not account for muscle mass, bone density, or athletic build. It is not a medical diagnosis. Talk to a doctor for health assessments.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <CheckCircle size={16} className="text-primary" />
            3. Limitation of Liability
          </h2>
          <p className="text-base leading-relaxed">
            CalcUnit, its contributors, and hosting providers are not responsible for any loss, penalty, or damage that results from using results from this site. That includes financial loss, academic penalties, or any structural failure.
          </p>
        </section>
      </div>
    </div>
  );
}
