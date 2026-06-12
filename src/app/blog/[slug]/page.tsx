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
    post = getPostBySlug(slug, ['title', 'date', 'slug', 'author', 'content', 'excerpt', 'toolSlug', 'toolCategory']);
  } catch {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://calcunit.net/blog/${post.slug}`
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="mb-8 flex items-center justify-between">
        <Link href="/blog" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          &larr; Back to Blog
        </Link>
        {post.toolSlug && post.toolCategory && (
          <Link 
            href={`/${post.toolCategory}/${post.toolSlug}`} 
            className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 hover:bg-indigo-100 transition-colors"
          >
            Open Calculator
          </Link>
        )}
      </div>

      <article className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:rounded-xl">
        <header className="mb-14 not-prose border-b border-slate-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>By {post.author || 'CalcUnit Expert'}</span>
          </div>
        </header>

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </main>
  );
}
