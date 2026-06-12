import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | CalcUnit.net',
  description: 'In-depth guides, explanations, and tutorials for the best online calculators and converters.',
};

export default function BlogIndex() {
  const posts = getAllPosts(['title', 'date', 'excerpt', 'slug']);

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
          CalcUnit Blog
        </h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl">
          Deep dives, step-by-step formulas, and expert financial/mathematical guides.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
        {posts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 bg-white">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-slate-500 font-medium">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <div className="group relative mt-4">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-x-4">
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Read full article <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-slate-500">No articles published yet.</p>
        )}
      </div>
    </main>
  );
}
