import type { Metadata } from 'next';
import { SITE_NAME, SITE_DISPLAY_NAME } from '@/lib/constants';
import { ShieldCheck, Zap, WifiOff } from 'lucide-react';

export const metadata: Metadata = {
  title: `About CalcUnit — Free Online Calculator Platform | ${SITE_DISPLAY_NAME}`,
  description: `${SITE_NAME} is a free, ad-free, offline-capable calculator platform with 1,000+ tools for math, finance, health, and physics. No sign-up. No tracking.`,
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
            We noticed that most calculator websites are plagued with intrusive popup ads, slow loading times, and aggressive tracking scripts. That's why we built {SITE_NAME} from the ground up to be different.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-6 text-foreground">Our Core Principles</h2>

          <div className="grid sm:grid-cols-3 gap-6 my-10 not-prose">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <ShieldCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Zero Tracking</h3>
              <p className="text-base text-muted-foreground">
                We don't collect, store, or sell your financial data. All calculations happen entirely in your browser.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <Zap className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="font-bold text-foreground mb-2">Ad-Free</h3>
              <p className="text-base text-muted-foreground">
                You won't find a single banner ad or popup on our site. We prioritize a clean, distraction-free interface.
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

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 text-foreground">Contact Us</h2>
          <p>
            We are constantly adding new calculators and features based on user feedback. If you have a suggestion, found a bug, or just want to say hello, please <a href="/contact" className="text-primary font-semibold hover:underline">reach out to us on our Contact page</a>.
          </p>
        </div>
      </div>
    </main >
  );
}
