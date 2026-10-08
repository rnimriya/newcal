import type { Metadata } from 'next';
import { SITE_NAME, SITE_DISPLAY_NAME } from '@/lib/constants';
import { ShieldCheck, Zap, WifiOff } from 'lucide-react';

export const metadata: Metadata = {
  title: `About CalcUnit — Free Online Calculator Platform | ${SITE_DISPLAY_NAME}`,
  description: `${SITE_NAME} is a free, offline-capable calculator platform with 1,000+ tools for math, finance, health, and physics. No sign-up required; supported by minimal, non-intrusive ads.`,
  alternates: { canonical: 'https://calcunit.net/about' },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl mb-4">
            About {SITE_NAME}
          </h1>
          <p className="text-lg text-muted-foreground">
            A premium calculation engine built for speed, privacy, and accuracy.
          </p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
          <p>
            Welcome to {SITE_DISPLAY_NAME}. Our mission is simple: to provide the most comprehensive, accurate, and fastest suite of online calculators and converters, entirely for free.
          </p>
          <p>
            We noticed that most calculator websites are plagued with intrusive popup ads, slow loading times, and aggressive tracking scripts. That's why we built {SITE_NAME} from the ground up to be different — fast, respectful of your attention, and transparent about how it stays free.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-6 text-foreground">Our Core Principles</h2>

          <div className="grid sm:grid-cols-3 gap-6 my-10 not-prose">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <ShieldCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Privacy-Conscious</h3>
              <p className="text-base text-muted-foreground">
                No accounts, no sign-ups, and we never sell your data. All calculations happen entirely in your browser. We only use cookies for basic analytics and ads, as explained in our <a href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <Zap className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="font-bold text-foreground mb-2">Minimal, Non-Intrusive Ads</h3>
              <p className="text-base text-muted-foreground">
                To keep every tool free, we show a small number of non-intrusive ads. No popups, no autoplay videos, no disruptive formats — just a clean, distraction-free interface.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <WifiOff className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="font-bold text-foreground mb-2">Offline First</h3>
              <p className="text-base text-muted-foreground">
                Install us as a Progressive Web App (PWA) and use our entire suite of tools without an internet connection.
              </p>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 text-foreground">Open Knowledge</h2>
          <p>
            Beyond providing powerful tools, we believe in financial and mathematical literacy. Our extensive blog and detailed formula breakdowns ensure you aren't just getting an answer—you're understanding the math behind it.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 text-foreground">Who Operates {SITE_NAME}</h2>
          <p>
            {SITE_DISPLAY_NAME} is operated by {SITE_NAME}, an independent team that builds and maintains this platform. We are developers and content reviewers focused on practical math, finance, and science tools — not a large corporation, which is exactly why we can keep the experience simple and the tools free.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 text-foreground">How We Ensure Accuracy</h2>
          <p>
            Every calculator on this site is built from documented, standard formulas — the same ones you will find in established textbooks, reference tables, and official sources (such as national standards bodies and widely used scientific references). Each tool goes through a review process before it is published:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Formula verification:</strong> the underlying equations are cross-checked against standard references to confirm they are correct and up to date.
            </li>
            <li>
              <strong className="text-foreground">Result testing:</strong> outputs are validated against known worked examples, so edge cases behave as expected.
            </li>
            <li>
              <strong className="text-foreground">Content review:</strong> explanations, units, and labels are reviewed for clarity and correctness by a member of the team.
            </li>
          </ul>
          <p>
            No process is perfect, so if you ever spot a wrong result or an unclear explanation, please tell us — reports from users are one of the fastest ways we catch and fix issues. For important decisions, always double-check results; see our <a href="/disclaimer" className="text-primary font-semibold hover:underline">Disclaimer</a>.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 text-foreground">Contact Us</h2>
          <p>
            We are constantly adding new calculators and features based on user feedback. If you have a suggestion, found a bug, spotted an error in a calculation, or just want to say hello, please <a href="/contact" className="text-primary font-semibold hover:underline">reach out to us on our Contact page</a> — we read every message.
          </p>
        </div>
      </div>
    </main >
  );
}
