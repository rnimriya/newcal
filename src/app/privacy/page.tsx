import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, EyeOff, Key, ServerOff, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - CalcUnit.net",
  description: "CalcUnit collects no personal data. All calculations run in your browser. No cookies, no tracking, no accounts.",
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
            Every calculation runs inside your browser. The numbers you type never leave your device.
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
            CalcUnit has no ads, no third-party trackers, no cookies, and no sign-up system.
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
            CalcUnit works without an account. We do not log the numbers you enter, store your IP address, or create any user profile.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>We do not log or store values you enter in the inputs.</li>
            <li>Standard server hosting logs do not record or store user IPs.</li>
            <li>There is no registration system, so there is no database that can be breached.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <ShieldCheck size={16} className="text-indigo-600 dark:text-indigo-400" />
            2. Local Browser Storage & Saved Tools
          </h2>
          <p className="text-sm leading-relaxed">
            If you save a calculator using the bookmark button, that preference is stored in your browser’s local storage. It stays on your device and is never sent to our servers. Clear it any time from your browser settings or the Settings page on this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
            <EyeOff size={16} className="text-indigo-600 dark:text-indigo-400" />
            3. Hosting & Server Log Statistics
          </h2>
          <p className="text-sm leading-relaxed">
            Pages are served from a global CDN. The hosting platform collects basic, non-personal server stats (page request counts, URL paths, referral sources). This is used only to catch broken links and monitor page load times - not to track individual users.
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
                Yes. Your numbers stay on your machine and are never sent anywhere. That said, treat any calculator result as a starting point, not a final answer, for medical or financial decisions. See our <Link href="/disclaimer" className="text-indigo-600 hover:underline dark:text-indigo-400">Disclaimer</Link> for details.
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-150 rounded-xl p-4 dark:bg-zinc-900/40 dark:border-zinc-800">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Who can I contact if I have concerns?</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                For privacy questions or feedback, use the GitHub link in the footer to open an issue or contact the project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
