import type { Metadata } from 'next';
import { SITE_DISPLAY_NAME } from '@/lib/constants';
import { Mail, MessageSquare, Twitter, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_DISPLAY_NAME}`,
  description: 'Get in touch with our team for support, feature requests, or business inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a question, feature request, or found a bug? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form Placeholder */}
          <div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Other ways to connect</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Email Support</h3>
                  <p className="text-slate-500 dark:text-zinc-400 mt-1">For general inquiries and bug reports.</p>
                  <a href="mailto:support@calcunit.net" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline mt-2 inline-block">
                    support@calcunit.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400">
                  <Twitter size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Twitter / X</h3>
                  <p className="text-slate-500 dark:text-zinc-400 mt-1">Follow us for updates and math tips.</p>
                  <a href="https://twitter.com" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline mt-2 inline-block">
                    @CalcUnit
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Feature Requests</h3>
                  <p className="text-slate-500 dark:text-zinc-400 mt-1">Need a specific calculator we don't have yet? Let us know!</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-900 dark:bg-zinc-900 rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-2">Open Source</h3>
              <p className="text-slate-400 text-sm mb-4">
                We believe in open knowledge. Many of our core algorithms are peer-reviewed.
              </p>
              <a href="https://github.com" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-indigo-400 transition-colors">
                <Github size={16} /> View on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
