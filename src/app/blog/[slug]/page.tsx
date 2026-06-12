import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug, ['title', 'excerpt', 'author']);
    return {
      title: `${post.title} | CalcUnit.net`,
      description: post.excerpt,
    };
  } catch {
    return {
      title: 'Post Not Found | CalcUnit.net',
    };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug, ['title', 'date', 'slug', 'author', 'content', 'excerpt', 'toolSlug', 'toolCategory', 'image', 'tags']);
  } catch {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  // Get 3 related posts
  const allPosts = getAllPosts(['title', 'date', 'excerpt', 'slug', 'image', 'tags', 'toolCategory', 'author']);
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.toolCategory === post.toolCategory)
    .slice(0, 3);
  
  // If not enough related by category, just fill with newest
  if (relatedPosts.length < 3) {
    const filler = allPosts.filter(p => p.slug !== post.slug && !relatedPosts.find(rp => rp.slug === p.slug));
    relatedPosts.push(...filler.slice(0, 3 - relatedPosts.length));
  }

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: [{
      '@type': 'Person',
      name: post.author || 'CalcUnit Expert',
      url: 'https://calcunit.net/about'
    }],
    publisher: {
      '@type': 'Organization',
      name: 'CalcUnit.net',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calcunit.net/logo.png'
      }
    },
    description: post.excerpt,
    image: post.image,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://calcunit.net/blog/${post.slug}`
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link href="/blog" className="text-sm font-semibold text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white transition-colors">
          &larr; Back to Blog
        </Link>
        {post.toolSlug && post.toolCategory && (
          <Link 
            href={`/${post.toolCategory}/${post.toolSlug}`} 
            className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-all"
          >
            Open Calculator
          </Link>
        )}
      </div>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
        <header className="mb-10 text-center">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 text-[12px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-zinc-400 font-medium">
            <span>By {post.author || 'CalcUnit Expert'}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </header>

        {post.image && (
          <div className="mb-14 overflow-hidden rounded-2xl shadow-md border border-slate-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
          </div>
        )}

        <div className="prose prose-slate prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: content }} />
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-10">
              Related Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <article key={rp.slug} className="group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-lg dark:hover:shadow-white/5 transition-shadow">
                  <Link href={`/blog/${rp.slug}`} className="block overflow-hidden h-48 bg-zinc-100 dark:bg-zinc-800">
                    {rp.image && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img 
                        src={rp.image} 
                        alt={rp.title} 
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    )}
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    {rp.tags && rp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {rp.tags.map(tag => (
                          <span key={tag} className="rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-2 py-0.5 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link href={`/blog/${rp.slug}`}>
                      <h3 className="font-display font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-lg">
                        {rp.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 line-clamp-2 flex-1">
                      {rp.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500 font-medium">
                      <span>{rp.author || 'CalcUnit Expert'}</span>
                      <span>{new Date(rp.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
