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

  const paginationControls = totalPages > 1 ? (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-xl border border-border text-muted-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center gap-1 mx-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          if (
            totalPages > 5 &&
            page !== 1 &&
            page !== totalPages &&
            Math.abs(currentPage - page) > 1
          ) {
            if (page === 2 || page === totalPages - 1) {
              return <span key={page} className="px-2 text-muted-foreground">...</span>;
            }
            return null;
          }

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl text-base font-bold transition-all ${currentPage === page
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "text-muted-foreground hover:bg-secondary"
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
        className="p-2 rounded-xl border border-border text-muted-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  ) : null;

  return (
    <section className="mx-auto w-full px-6 py-6 sm:py-12">

      {/* Top Pagination */}
      {paginationControls && (
        <div className="mb-8 animate-fade-in">
          {paginationControls}
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search size={20} />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
            placeholder="Search articles by title or tag..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {searchQuery && (
          <p className="mt-3 text-base text-muted-foreground text-center animate-fade-in">
            Found {filteredPosts.length} result{filteredPosts.length !== 1 && 's'} for "{searchQuery}"
          </p>
        )}
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 min-h-[500px] content-start">
          {currentPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden h-48 bg-secondary relative">
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
                      <span key={tag} className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-display font-bold text-foreground leading-snug group-hover:text-primary transition-colors text-xl">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-3 text-base text-muted-foreground line-clamp-3 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-base text-muted-foreground font-medium">
                  <span>{post.author || 'CalcUnit Expert'}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 min-h-[500px]">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-muted-foreground mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We couldn't find any articles matching "{searchQuery}". Try using different keywords or clearing your search.
          </p>
          <button
            onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
            className="mt-6 font-semibold text-primary hover:text-primary/90 transition-colors"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Bottom Pagination */}
      {paginationControls && (
        <div className="mt-14 animate-fade-in">
          {paginationControls}
        </div>
      )}
    </section>
  );
}
