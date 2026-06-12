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
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link href="/blog" className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors">
          &larr; Back to Blog
        </Link>
        {post.toolSlug && post.toolCategory && (
          <Link
            href={`/${post.toolCategory}/${post.toolSlug}`}
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 hover:scale-105 transition-all"
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
                <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-[12px] font-bold text-primary uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-base text-muted-foreground font-medium">
            <span>By {post.author || 'CalcUnit Expert'}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </header>

        {post.image && (
          <div className="mb-14 overflow-hidden rounded-2xl shadow-md border border-border bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: content }} />
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-secondary/50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold text-foreground mb-10">
              Related Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <article key={rp.slug} className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${rp.slug}`} className="block overflow-hidden h-48 bg-secondary">
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
                          <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link href={`/blog/${rp.slug}`}>
                      <h3 className="font-display font-bold text-foreground leading-snug group-hover:text-primary transition-colors text-lg">
                        {rp.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-base text-muted-foreground line-clamp-2 flex-1">
                      {rp.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-base text-muted-foreground font-medium">
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
