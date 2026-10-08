import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Cookie, BarChart3, Megaphone, HelpCircle } from "lucide-react";
import { SITE_URL, SITE_DISPLAY_NAME, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_DISPLAY_NAME}`,
  description: `${SITE_DISPLAY_NAME} privacy policy: what cookies we use, how Google Analytics and Google AdSense advertising work on this free calculator site, and how your data is handled.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-3 px-4 animate-fade-in">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-base font-bold text-primary">
          <ShieldCheck size={13} /> Transparent Privacy Practices
        </span>
        <h1 className="text-3xl font-black text-foreground tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base text-muted-foreground">
          Last updated: October 8, 2026
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          {SITE_DISPLAY_NAME} is a free calculator platform. To keep it free, we use
          advertising and analytics services that set cookies on your device. This
          page explains exactly what data is collected, by whom, and the choices
          you have.
        </p>
      </div>

      {/* Core Privacy Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="calc-card border border-border rounded-2xl p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl p-5 bg-card border border-border">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck size={16} />
            </span>
            <h3 className="font-bold text-foreground text-base">Local Computations</h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every calculation runs inside your browser. The numbers you type into a
            calculator are processed on your device and are not sent to our servers.
          </p>
        </div>

        <div className="calc-card border border-border rounded-2xl p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl p-5 bg-card border border-border">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Cookie size={16} />
            </span>
            <h3 className="font-bold text-foreground text-base">Cookies: Yes, and Disclosed</h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            We use cookies for analytics and advertising (details below). You can
            control or delete them from your browser settings at any time.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <BarChart3 size={16} className="text-primary" />
            1. Analytics: Google Analytics
          </h2>
          <p className="text-base leading-relaxed">
            We use Google Analytics (GA4) to understand aggregate site usage — for
            example, which calculators are popular and whether pages load quickly.
            Google Analytics sets cookies on your device (such as <code>_ga</code>
            and <code>_ga_*</code>) and may collect information such as the pages
            you visit, your device and browser type, approximate location, and your
            IP address. IP addresses are subject to Google&apos;s own retention and
            anonymization practices. This data is processed in aggregate; we do not
            build individual user profiles and we do not combine analytics data with
            any personally identifying information.
          </p>
          <p className="text-base leading-relaxed">
            You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Megaphone size={16} className="text-primary" />
            2. Advertising: Google AdSense
          </h2>
          <p className="text-base leading-relaxed">
            {SITE_NAME} is free to use. To support the site, we display ads served
            by Google AdSense. Google uses cookies — including the DoubleClick
            cookie — to serve ads based on your prior visits to our site and other
            sites on the internet, and to measure ad performance. These cookies may
            record which ads you viewed, which you clicked, and your approximate
            location, in order to show relevant advertising.
          </p>
          <p className="text-base leading-relaxed">
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Ads Settings
            </a>{" "}
            or{" "}
            <a
              href="https://optout.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              the Digital Advertising Alliance opt-out page
            </a>
            . Third-party vendors, including Google, may also serve ads; their use
            of cookies is governed by their own privacy policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Cookie size={16} className="text-primary" />
            3. Cookies We Use
          </h2>
          <p className="text-base leading-relaxed">
            In summary, cookies on this site fall into these groups:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-base">
            <li>
              <strong className="text-foreground">Analytics cookies</strong> — set
              by Google Analytics to measure site usage (<code>_ga</code>,{" "}
              <code>_ga_*</code>).
            </li>
            <li>
              <strong className="text-foreground">Advertising cookies</strong> — set
              by Google AdSense / DoubleClick for ad personalization and measurement.
            </li>
            <li>
              <strong className="text-foreground">Preference storage</strong> — your
              saved calculators and site settings (such as theme) are stored in
              your browser&apos;s local storage. This stays on your device and is
              never sent to our servers. You can clear it any time from your browser
              settings or the Settings page on this site.
            </li>
          </ul>
          <p className="text-base leading-relaxed">
            You can block or delete cookies through your browser settings. Note that
            blocking cookies may affect how some site features behave.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <ShieldCheck size={16} className="text-primary" />
            4. What We Do NOT Collect
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-base">
            <li>{SITE_NAME} has no accounts, sign-ups, or user profiles.</li>
            <li>We do not log or store the values you enter into calculator inputs on our servers.</li>
            <li>We do not sell personal information to anyone.</li>
          </ul>
          <p className="text-base leading-relaxed">
            Pages are served from a global CDN. The hosting platform collects basic,
            non-personal server statistics (such as page request counts and referral
            sources) used only to detect broken links and monitor performance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <HelpCircle size={16} className="text-primary" />
            5. Frequently Asked Questions
          </h2>
          <div className="space-y-4 pt-2">
            <div className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-base text-foreground">Is it safe to use this tool for medical or financial calculations?</h4>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                Your numbers are computed on your device and are not stored by us.
                That said, treat any calculator result as a starting point, not a
                final answer, for medical or financial decisions. See our{" "}
                <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> for details.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-base text-foreground">Who can I contact if I have concerns?</h4>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                For privacy questions or feedback, please reach out via our{" "}
                <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
