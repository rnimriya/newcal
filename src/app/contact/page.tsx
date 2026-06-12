import type { Metadata } from 'next';
import { SITE_DISPLAY_NAME } from '@/lib/constants';
import { Mail, MessageSquare } from 'lucide-react';
import { TwitterXIcon, GitHubIcon } from '@/components/ui/SocialIcons';

export const metadata: Metadata = {
  title: `Contact CalcUnit — Support & Feedback | ${SITE_DISPLAY_NAME}`,
  description: 'Contact CalcUnit.net for support, bug reports, or feature requests. We typically respond within 24 hours. Free calculator platform — no sign-up required.',
  alternates: { canonical: 'https://calcunit.net/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question, feature request, or found a bug? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Form Placeholder */}
          <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Other ways to connect</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Email Support</h3>
                  <p className="text-muted-foreground mt-1">For general inquiries and bug reports.</p>
                  <a href="mailto:support@calcunit.net" className="text-primary font-medium hover:underline mt-2 inline-block">
                    support@calcunit.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400">
                  <TwitterXIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Twitter / X</h3>
                  <p className="text-muted-foreground mt-1">Follow us for updates and math tips.</p>
                  <a href="https://twitter.com" className="text-primary font-medium hover:underline mt-2 inline-block">
                    @CalcUnit
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Feature Requests</h3>
                  <p className="text-muted-foreground mt-1">Need a specific calculator we don't have yet? Let us know!</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-secondary border border-border rounded-2xl text-foreground">
              <h3 className="font-bold text-lg mb-2">Open Source</h3>
              <p className="text-muted-foreground text-base mb-4">
                We believe in open knowledge. Many of our core algorithms are peer-reviewed.
              </p>
              <a href="https://github.com" className="inline-flex items-center gap-2 text-base font-semibold hover:text-primary transition-colors">
                <GitHubIcon className="h-4 w-4" /> View on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
