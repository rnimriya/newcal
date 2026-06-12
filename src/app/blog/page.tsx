import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import { BlogListClient } from '@/components/blog/BlogListClient';

export const metadata: Metadata = {
  title: 'Calculator Guides & Math Tutorials | CalcUnit.net Blog',
  description: 'Free in-depth guides on compound interest, BMI, loan repayment, unit conversion, and more. Learn the math behind every calculator on CalcUnit.net.',
  alternates: { canonical: 'https://calcunit.net/blog' },
  openGraph: {
    title: 'Calculator Guides & Math Tutorials | CalcUnit.net Blog',
    description: 'Free in-depth guides on compound interest, BMI, loan repayment, unit conversion, and more.',
    type: 'website',
    url: 'https://calcunit.net/blog',
    siteName: 'CalcUnit.net',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts(['title', 'date', 'excerpt', 'slug', 'image', 'tags', 'author']);

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-secondary py-14 px-6 text-center">
        <h1 className="font-display text-4xl font-extrabold text-foreground tracking-tight">
          CalcUnit Blog
        </h1>
        <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
          Deep dives, step-by-step formulas, and expert financial/mathematical guides.
          <span className="ml-1 font-medium">{posts.length} articles and counting.</span>
        </p>
      </section>

      <BlogListClient initialPosts={posts} />
    </main>
  );
}
