import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import { BlogListClient } from '@/components/blog/BlogListClient';

export const metadata: Metadata = {
  title: 'Blog | CalcUnit.net',
  description: 'In-depth guides, explanations, and tutorials for the best online calculators and converters.',
};

export default function BlogIndex() {
  const posts = getAllPosts(['title', 'date', 'excerpt', 'slug', 'image', 'tags', 'author']);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <section className="border-b border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-zinc-900 py-14 px-6 text-center">
        <h1 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          CalcUnit Blog
        </h1>
        <p className="mt-3 text-base text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
          Deep dives, step-by-step formulas, and expert financial/mathematical guides.
          <span className="ml-1 font-medium">{posts.length} articles and counting.</span>
        </p>
      </section>

      <BlogListClient initialPosts={posts} />
    </main>
  );
}
