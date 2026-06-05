import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, EyeOff, Key, ServerOff, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — CalcUnit.net",
  description: "Learn about CalcUnit's strict privacy policy. Zero tracking, zero cookies, and 100% offline local-only calculations in your browser.",
  alternates: { canonical: "https://calcunit.net/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8 px-4 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/30 dark:border-emerald-900/30 dark:text-emerald-400">
          <ShieldCheck size={13} /> Privacy First Platform
        </span>
        <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: June 5, 2026
        </p>
      </div>

      {/* Core Privacy Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="calc-card p-5 bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-850">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
              <ServerOff size={16} />
            </span>
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Local Computations</h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            All variables, math formulas, and calculation loops execute 100% inside your browser. Your input numbers never leave your device.
          </p>
        </div>

        <div className="calc-card p-5 bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-850">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
              <EyeOff size={16} />
            </span>
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm">No Ads or Tracking</h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            CalcUnit does not host third-party advertisement networks, cookie trackers, pixel tags, or user registration modules.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-6 text-zinc-650 dark:text-zinc-300">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <Key size={16} className="text-indigo-600 dark:text-indigo-400" />
            1. Information We Do NOT Collect
          </h2>
          <p className="text-sm leading-relaxed">
            We believe that your data belongs to you. Because CalcUnit functions as an offline-first client application, we do not require account creation, logins, profile configuration, or contact info to use our tools. 
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li><strong>No Input Logs</strong>: We do not log, review, or store values you enter in the inputs.</li>
            <li><strong>No IP Storage</strong>: Standard hosting logs do not compile user IP databases.</li>
            <li><strong>No Profile Details</strong>: There is no registration system, which means zero database breaches.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <ShieldCheck size={16} className="text-indigo-600 dark:text-indigo-400" />
            2. Local Browser Storage & Saved Tools
          </h2>
          <p className="text-sm leading-relaxed">
            If you choose to use the &ldquo;Save Calculator&rdquo; bookmark option, this preference is stored locally on your device via standard browser storage (<code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs font-mono">localStorage</code>). This local database is fully sandboxed in your browser client and is never transmitted to our servers. You can clear this data at any time by resetting your browser history or clicking &ldquo;Reset preferences&rdquo; on the settings page.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <EyeOff size={16} className="text-indigo-600 dark:text-indigo-400" />
            3. Hosting & Server Log Statistics
          </h2>
          <p className="text-sm leading-relaxed">
            To serve static pages quickly, CalcUnit utilizes standard global Content Delivery Network (CDN) servers. Standard non-identifying server statistics (request counts, path queries, and basic referral analytics) are handled through the hosting dashboard simply to review layout performance and fix 404 page routing errors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <HelpCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
            4. Frequently Asked Questions
          </h2>
          <div className="space-y-4 pt-2">
            <div className="bg-zinc-50 border border-zinc-150 rounded-xl p-4 dark:bg-zinc-900/40 dark:border-zinc-800">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Is it safe to use this tool for medical or financial calculations?</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                Yes, completely safe because your private data stays on your machine. However, keep in mind that calculations are served as tools of convenience and should be verified for crucial decisions. See our <Link href="/disclaimer" className="text-indigo-600 hover:underline dark:text-indigo-400">Disclaimer Page</Link> for details.
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-150 rounded-xl p-4 dark:bg-zinc-900/40 dark:border-zinc-800">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Who can I contact if I have concerns?</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                If you have privacy-related concerns or wish to submit feedback regarding this static platform, you can access the platform repository links inside our footer block.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
