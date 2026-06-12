import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

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

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-lg dark:hover:shadow-white/5 transition-shadow">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden h-48 bg-zinc-100 dark:bg-zinc-800">
                {post.image && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                )}
              </Link>
              <div className="flex flex-1 flex-col p-5">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-2 py-0.5 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-display font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-lg">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500 font-medium">
                  <span>{post.author || 'CalcUnit Expert'}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-center text-slate-500 mt-10">No articles published yet.</p>
        )}
      </section>
    </main>
  );
}
