"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  date: string;
  tags?: string[];
  author?: string;
}

interface Props {
  initialPosts: BlogPost[];
}

const POSTS_PER_PAGE = 12;

export function BlogListClient({ initialPosts }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return initialPosts;
    
    const query = searchQuery.toLowerCase();
    return initialPosts.filter((post) => {
      const matchTitle = post.title.toLowerCase().includes(query);
      const matchTags = post.tags?.some((tag) => tag.toLowerCase().includes(query)) || false;
      return matchTitle || matchTags;
    });
  }, [initialPosts, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Reset to page 1 when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      
      {/* Search Bar */}
      <div className="mb-10 max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            <Search size={20} />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
            placeholder="Search articles by title or tag..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {searchQuery && (
          <p className="mt-3 text-sm text-slate-500 dark:text-zinc-400 text-center animate-fade-in">
            Found {filteredPosts.length} result{filteredPosts.length !== 1 && 's'} for "{searchQuery}"
          </p>
        )}
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 min-h-[500px] content-start">
          {currentPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden h-48 bg-zinc-100 dark:bg-zinc-800 relative">
                {post.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-6">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-display font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-xl">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-3 text-sm text-slate-500 dark:text-zinc-400 line-clamp-3 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500 font-medium">
                  <span>{post.author || 'CalcUnit Expert'}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 min-h-[500px]">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
          <p className="text-slate-500 dark:text-zinc-400 max-w-md mx-auto">
            We couldn't find any articles matching "{searchQuery}". Try using different keywords or clearing your search.
          </p>
          <button 
            onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
            className="mt-6 font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-1 mx-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              // Simple pagination logic to show max 5 pages
              if (
                totalPages > 5 &&
                page !== 1 &&
                page !== totalPages &&
                Math.abs(currentPage - page) > 1
              ) {
                if (page === 2 || page === totalPages - 1) {
                  return <span key={page} className="px-2 text-slate-400">...</span>;
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    currentPage === page
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                      : "text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
