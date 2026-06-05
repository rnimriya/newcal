"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

// Inline YouTube SVG (lucide-react doesn't ship a Youtube icon in this version)
function YoutubeIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
import type { CategoryTheme } from "./theme";

interface Props {
  calcName: string;
  category: string;
  theme: CategoryTheme;
}

// Category-specific search query suffixes for better results
const CATEGORY_HINTS: Record<string, string> = {
  math:       "math tutorial explained",
  finance:    "finance calculator tutorial",
  health:     "health calculator guide",
  physics:    "physics formula explained",
  algebra:    "algebra tutorial step by step",
  converters: "unit conversion explained",
  loans:      "loan calculation tutorial",
  statistics: "statistics explained simply",
  time:       "calculator tutorial",
};

// Curated YouTube video IDs for the most popular calculators
// Format: slug → YouTube video ID
const CURATED_VIDEOS: Record<string, { id: string; title: string; channel: string }> = {
  "bmi-calculator":                { id: "XjTH41Q5rrQ", title: "BMI Calculator Explained",             channel: "Doctor Mike" },
  "compound-interest-calculator":  { id: "MBInXeAEfhA", title: "Compound Interest Explained",          channel: "Khan Academy" },
  "simple-interest-calculator":    { id: "OkALqM4HBGM", title: "Simple Interest Formula",              channel: "Math Antics" },
  "loan-calculator":               { id: "4V1NNlbMcxE", title: "How Loan Amortization Works",          channel: "Khan Academy" },
  "quadratic-formula-calculator":  { id: "TV0kml9C3rY", title: "Quadratic Formula",                    channel: "Math Antics" },
  "percentage-calculator":         { id: "JeVSmq1Nrpw", title: "Percentages Made Easy",                channel: "Math Antics" },
  "celsius-to-fahrenheit":         { id: "yBgC8FRJ3ZM", title: "Celsius to Fahrenheit Conversion",     channel: "Learn Math" },
  "discount-calculator":           { id: "JeVSmq1Nrpw", title: "Calculating Discounts",                channel: "Math Antics" },
  "square-root-calculator":        { id: "mbc3_e5lWTo", title: "Square Roots",                         channel: "Math Antics" },
  "kg-to-pounds":                  { id: "RkbfPMCLMxo", title: "kg to lbs Conversion",                 channel: "Learn Math" },
  "km-to-miles":                   { id: "UJBFGFxFaGc", title: "Kilometers to Miles Explained",        channel: "Learn Math" },
  "slope-calculator":              { id: "6xkTVkRFWZI", title: "Slope of a Line",                      channel: "Khan Academy" },
  "ohms-law-calculator":           { id: "kcL2_D33k3o", title: "Ohm's Law Explained",                  channel: "Engineering Mindset" },
};

export function YouTubeSection({ calcName, category, theme }: Props) {
  const [expanded, setExpanded] = useState(false);

  // Build a search query for the calculator
  const hint = CATEGORY_HINTS[category] ?? "tutorial explained";
  const searchQuery = encodeURIComponent(`${calcName} ${hint}`);
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

  // Find slug from calc name for curated lookup (best effort)
  const slugKey = calcName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const curated = CURATED_VIDEOS[slugKey];

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 bg-red-50 dark:bg-red-950/20 border-b border-red-100 dark:border-red-900/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm">
            <YoutubeIcon size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-white">Related Videos</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Learn with visual tutorials</p>
          </div>
        </div>
        <a
          href={youtubeSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
        >
          View all <ExternalLink size={11} />
        </a>
      </div>

      <div className="p-5 space-y-4">
        {/* Curated embed if available */}
        {curated && expanded && (
          <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${curated.id}?rel=0&modestbranding=1`}
              title={curated.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        )}

        {curated && !expanded ? (
          /* Curated video card — click to expand embed */
          <button
            onClick={() => setExpanded(true)}
            className="w-full group flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 p-3 hover:border-red-300 dark:hover:border-red-700 hover:bg-red-50/30 dark:hover:bg-red-950/10 transition-all text-left"
          >
            <div className="shrink-0 relative w-24 h-[54px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <img
                src={`https://img.youtube.com/vi/${curated.id}/mqdefault.jpg`}
                alt={curated.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play size={12} fill="white" className="text-white ml-0.5" />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 leading-snug line-clamp-2 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                {curated.title}
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">{curated.channel}</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 dark:text-red-400 mt-1">
                <Play size={9} fill="currentColor" /> Click to watch
              </span>
            </div>
          </button>
        ) : !curated ? (
          /* Search card for calculators without curated video */
          <a
            href={youtubeSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 hover:border-red-300 dark:hover:border-red-700 hover:bg-red-50/40 dark:hover:bg-red-950/10 transition-all group"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm group-hover:bg-red-700 transition-colors">
              <Play size={20} fill="white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                Watch {calcName} tutorials
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Step-by-step video explanations on YouTube
              </p>
            </div>
            <ExternalLink size={15} className="text-zinc-400 group-hover:text-red-500 transition-colors shrink-0" />
          </a>
        ) : null}

        {/* Extra search suggestions */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Also search for</p>
          <div className="flex flex-wrap gap-2">
            {[
              `${calcName} formula`,
              `${calcName} example`,
              `${calcName} step by step`,
            ].map((q) => (
              <a
                key={q}
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 px-2.5 py-1 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 hover:border-red-300 hover:text-red-600 dark:hover:border-red-700 dark:hover:text-red-400 transition-all"
              >
                <YoutubeIcon size={9} /> {q}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
