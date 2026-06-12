import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, EyeOff, Key, ServerOff, HelpCircle } from "lucide-react";
import { SITE_URL, SITE_DISPLAY_NAME, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_DISPLAY_NAME}`,
  description: `${SITE_NAME} collects no personal data. All calculations run in your browser. No cookies, no tracking, no accounts.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-3 px-4 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-base font-bold text-emerald-600 dark:text-emerald-400">
          <ShieldCheck size={13} /> Privacy First Platform
        </span>
        <h1 className="text-3xl font-black text-foreground tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base text-muted-foreground">
          Last updated: June 5, 2026
        </p>
      </div>

      {/* Core Privacy Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  p-5 bg-card border border-border">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ServerOff size={16} />
            </span>
            <h3 className="font-bold text-foreground text-base">Local Computations</h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every calculation runs inside your browser. The numbers you type never leave your device.
          </p>
        </div>

        <div className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  p-5 bg-card border border-border">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <EyeOff size={16} />
            </span>
            <h3 className="font-bold text-foreground text-base">No Ads or Tracking</h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            CalcUnit has no ads, no third-party trackers, no cookies, and no sign-up system.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Key size={16} className="text-primary" />
            1. Information We Do NOT Collect
          </h2>
          <p className="text-base leading-relaxed">
            CalcUnit works without an account. We do not log the numbers you enter, store your IP address, or create any user profile.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-base">
            <li>We do not log or store values you enter in the inputs.</li>
            <li>Standard server hosting logs do not record or store user IPs.</li>
            <li>There is no registration system, so there is no database that can be breached.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <ShieldCheck size={16} className="text-primary" />
            2. Local Browser Storage & Saved Tools
          </h2>
          <p className="text-base leading-relaxed">
            If you save a calculator using the bookmark button, that preference is stored in your browser’s local storage. It stays on your device and is never sent to our servers. Clear it any time from your browser settings or the Settings page on this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <EyeOff size={16} className="text-primary" />
            3. Hosting & Server Log Statistics
          </h2>
          <p className="text-base leading-relaxed">
            Pages are served from a global CDN. The hosting platform collects basic, non-personal server stats (page request counts, URL paths, referral sources). This is used only to catch broken links and monitor page load times - not to track individual users.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <HelpCircle size={16} className="text-primary" />
            4. Frequently Asked Questions
          </h2>
          <div className="space-y-4 pt-2">
            <div className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-base text-foreground">Is it safe to use this tool for medical or financial calculations?</h4>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                Yes. Your numbers stay on your machine and are never sent anywhere. That said, treat any calculator result as a starting point, not a final answer, for medical or financial decisions. See our <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> for details.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-base text-foreground">Who can I contact if I have concerns?</h4>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                For privacy questions or feedback, use the GitHub link in the footer to open an issue or contact the project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
