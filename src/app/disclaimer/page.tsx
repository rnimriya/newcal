import type { Metadata } from "next";
import { AlertOctagon, Scale, ShieldAlert, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer — CalcUnit.net",
  description: "Please read CalcUnit's legal disclaimer. Calculated results are served for educational reference and check validation only.",
  alternates: { canonical: "https://calcunit.net/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8 px-4 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-100 px-3.5 py-1 text-xs font-bold text-amber-700 dark:bg-amber-950/30 dark:border-amber-900/30 dark:text-amber-400">
          <AlertOctagon size={13} /> Legal Disclaimer
        </span>
        <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          Disclaimer
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: June 5, 2026
        </p>
      </div>

      {/* Warning Alert Banner */}
      <div className="rounded-2xl border-l-4 border-l-amber-500 bg-amber-50/50 p-5 shadow-sm dark:bg-amber-950/10 dark:border-l-amber-500 text-amber-950 dark:text-amber-300">
        <div className="flex items-start gap-3.5">
          <ShieldAlert size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Educational and Convenience Reference Only</h4>
            <p className="text-xs text-amber-800/90 dark:text-amber-400 mt-1 leading-relaxed">
              All outputs and numbers compiled on CalcUnit are processed client-side. The formulas should NOT be relied upon for critical structural designs, medical evaluations, financial investments, or high-stakes academic examinations without independent verification.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-6 text-zinc-650 dark:text-zinc-300">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <Scale size={16} className="text-indigo-600 dark:text-indigo-400" />
            1. Accuracy of Calculations
          </h2>
          <p className="text-sm leading-relaxed">
            While we strive to ensure that all formulas are coded and parsed correctly (following standard reference books, NIST parameters, and mathematical conventions), errors can happen. Math formulas evaluate dynamic floating-point variables, which are subject to minor precision limitations inside standard browser runtimes. CalcUnit makes no warranties regarding the absolute correctness of results.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <AlertOctagon size={16} className="text-indigo-600 dark:text-indigo-400" />
            2. Category Disclaimers
          </h2>
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl border border-zinc-150 bg-zinc-50/30 dark:border-zinc-800 dark:bg-zinc-900/35">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Financial & Loans</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                Loan, interest, tax, and EMI calculations are estimates. Lending institutions apply different compounding frequencies, fees, and calculations. Always confirm rates with your lender before signing documents.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-150 bg-zinc-50/30 dark:border-zinc-800 dark:bg-zinc-900/35">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Physics & Materials Engineering</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                Material values (elastic modulus, compressive strength, flexural tests) are solved using standard theoretical equations. Actual laboratory specimen conditions vary based on moisture, material defects, and ambient temperatures.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-150 bg-zinc-50/30 dark:border-zinc-800 dark:bg-zinc-900/35">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Health & BMI</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                Body Mass Index (BMI) is a general sizing standard and does not account for muscle mass, bone density, or general athletic compositions. It does not replace professional medical evaluations.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <CheckCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
            3. Limitation of Liability
          </h2>
          <p className="text-sm leading-relaxed">
            In no event shall CalcUnit, its builders, contributors, or repository hosters be held liable for any direct, indirect, incidental, special, or consequential damages (including, but not limited to, loss of profits, commercial impact, academic penalties, or structural failures) arising out of the use or inability to use this platform.
          </p>
        </section>
      </div>
    </div>
  );
}
