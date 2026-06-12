"use client";

import { useState } from "react";
import { Link, Check } from "lucide-react";

interface Props {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    {
      name: "X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bgClass: "bg-foreground hover:bg-foreground/90 text-background",
      icon: (
        <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgClass: "bg-blue-600 hover:bg-blue-700 text-white",
      icon: (
        <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgClass: "bg-blue-700 hover:bg-blue-800 text-white",
      icon: (
        <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bgClass: "bg-emerald-500 hover:bg-emerald-600 text-white",
      icon: (
        <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.967a9.8 9.8 0 0 0-6.96-2.871c-5.439 0-9.865 4.42-9.869 9.856-.001 1.748.463 3.456 1.343 4.977l-.986 3.6 3.693-.969zm11.233-5.437c-.31-.155-1.838-.907-2.11-.1-.271.1-.465.31-.57.426-.104.116-.21.174-.52.019-.309-.155-1.31-.483-2.495-1.54-1.223-1.092-1.223-1.092-1.397-1.397-.174-.31-.018-.477.137-.631.139-.139.31-.36.465-.541.155-.181.206-.309.309-.516.104-.206.052-.387-.026-.541-.078-.155-.705-1.7-.966-2.329-.253-.615-.51-.53-.705-.54-.181-.01-.387-.01-.594-.01-.206 0-.541.077-.825.387-.284.31-1.084 1.058-1.084 2.581 0 1.523 1.11 2.994 1.265 3.2.155.206 2.184 3.335 5.291 4.675 2.298.99 2.99 1.13 4.053 1.018 1.084-.116 2.684-1.097 3.058-2.162.375-1.065.375-1.974.263-2.162-.113-.188-.423-.342-.733-.497z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-4 mt-4 border-t border-border">
      <p className="text-base font-bold uppercase tracking-wider text-muted-foreground mb-3">
        Share this Calculator
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 w-9 items-center justify-center rounded-xl shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 ${p.bgClass}`}
            title={`Share on ${p.name}`}
          >
            {p.icon}
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopy}
          className={`flex h-9 items-center gap-1.5 px-3.5 rounded-xl border border-border bg-background hover:bg-secondary hover:border-ring text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm text-base font-bold cursor-pointer min-h-[36px]`}
          title="Copy direct calculator link"
        >
          {copied ? (
            <span className="flex items-center gap-1.5 text-primary animate-copy-pop">
              <Check size={14} className="stroke-[3]" />
              <span>Copied Link</span>
            </span>
          ) : (
            <>
              <Link size={14} />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
