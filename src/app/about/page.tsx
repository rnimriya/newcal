import type { Metadata } from 'next';
import { SITE_NAME, SITE_DISPLAY_NAME } from '@/lib/constants';
import { ShieldCheck, Zap, WifiOff } from 'lucide-react';

export const metadata: Metadata = {
  title: `About Us | ${SITE_DISPLAY_NAME}`,
  description: 'Learn about our mission to provide the fastest, most reliable, and entirely offline-capable calculators on the web.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl dark:text-white mb-4">
            About {SITE_NAME}
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400">
            A premium calculation engine built for speed, privacy, and accuracy.
          </p>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p>
            Welcome to {SITE_DISPLAY_NAME}. Our mission is simple: to provide the most comprehensive, accurate, and fastest suite of online calculators and converters, entirely for free.
          </p>
          <p>
            We noticed that most calculator websites are plagued with intrusive popup ads, slow loading times, and aggressive tracking scripts. That's why we built {SITE_NAME} from the ground up to be different.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-6 text-slate-900 dark:text-white">Our Core Principles</h2>
          
          <div className="grid sm:grid-cols-3 gap-6 my-10 not-prose">
            <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <ShieldCheck className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Zero Tracking</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                We don't collect, store, or sell your financial data. All calculations happen entirely in your browser.
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <Zap className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Ad-Free</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                You won't find a single banner ad or popup on our site. We prioritize a clean, distraction-free interface.
              </p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <WifiOff className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Offline First</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Install us as a Progressive Web App (PWA) and use our entire suite of tools without an internet connection.
              </p>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 text-slate-900 dark:text-white">Open Knowledge</h2>
          <p>
            Beyond providing powerful tools, we believe in financial and mathematical literacy. Our extensive blog and detailed formula breakdowns ensure you aren't just getting an answer—you're understanding the math behind it.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 text-slate-900 dark:text-white">Contact Us</h2>
          <p>
            We are constantly adding new calculators and features based on user feedback. If you have a suggestion, found a bug, or just want to say hello, please <a href="/contact" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">reach out to us on our Contact page</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
