"use client";

export interface CategoryTheme {
  primary: string;
  accentBorder: string;
  bgSubtle: string;
  textAccent: string;
  textAccentDark: string;
  focusRing: string;
  badge: string;
  outputBg: string;
  outputBorder: string;
  glowShadow: string;
  activeBar: string;
  hoverBg: string;
  hoverBorder: string;
  tabActive: string;
  iconBg: string;
  buttonAccent: string;
  problemBadge: string;
  mathBlock: string;
}

export const THEMES: Record<string, CategoryTheme> = {
  math: {
    primary: "violet",
    accentBorder: "border-t-violet-600 dark:border-t-violet-500",
    bgSubtle: "bg-violet-50/50 dark:bg-violet-950/20",
    textAccent: "text-violet-600 dark:text-violet-400",
    textAccentDark: "dark:text-violet-300",
    focusRing: "focus-within:ring-4 focus-within:ring-violet-500/10 focus-within:border-violet-500 dark:focus-within:border-violet-500",
    badge: "bg-violet-600 text-white dark:bg-violet-500/20 dark:text-violet-400",
    outputBg: "bg-gradient-to-br from-violet-50/90 via-violet-100/30 to-white dark:from-violet-950/45 dark:via-violet-900/15 dark:to-zinc-900/40",
    outputBorder: "border-violet-500/30 dark:border-violet-500/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10",
    activeBar: "bg-violet-500 dark:bg-violet-400",
    hoverBg: "hover:bg-violet-50/40 dark:hover:bg-violet-950/10",
    hoverBorder: "hover:border-violet-400 dark:hover:border-violet-500",
    tabActive: "bg-white text-violet-700 shadow-sm dark:bg-zinc-700 dark:text-violet-300",
    iconBg: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400",
    buttonAccent: "bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600",
    problemBadge: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400",
    mathBlock: "bg-violet-50/50 border-l-4 border-violet-500 text-violet-700 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-400",
  },
  algebra: {
    primary: "violet",
    accentBorder: "border-t-violet-600 dark:border-t-violet-500",
    bgSubtle: "bg-violet-50/50 dark:bg-violet-950/20",
    textAccent: "text-violet-600 dark:text-violet-400",
    textAccentDark: "dark:text-violet-300",
    focusRing: "focus-within:ring-4 focus-within:ring-violet-500/10 focus-within:border-violet-500 dark:focus-within:border-violet-500",
    badge: "bg-violet-600 text-white dark:bg-violet-500/20 dark:text-violet-400",
    outputBg: "bg-gradient-to-br from-violet-50/90 via-violet-100/30 to-white dark:from-violet-950/45 dark:via-violet-900/15 dark:to-zinc-900/40",
    outputBorder: "border-violet-500/30 dark:border-violet-500/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10",
    activeBar: "bg-violet-500 dark:bg-violet-400",
    hoverBg: "hover:bg-violet-50/40 dark:hover:bg-violet-950/10",
    hoverBorder: "hover:border-violet-400 dark:hover:border-violet-500",
    tabActive: "bg-white text-violet-700 shadow-sm dark:bg-zinc-700 dark:text-violet-300",
    iconBg: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400",
    buttonAccent: "bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600",
    problemBadge: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400",
    mathBlock: "bg-violet-50/50 border-l-4 border-violet-500 text-violet-700 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-400",
  },
  physics: {
    primary: "teal",
    accentBorder: "border-t-teal-600 dark:border-t-teal-500",
    bgSubtle: "bg-teal-50/50 dark:bg-teal-950/20",
    textAccent: "text-teal-600 dark:text-teal-400",
    textAccentDark: "dark:text-teal-300",
    focusRing: "focus-within:ring-4 focus-within:ring-teal-500/10 focus-within:border-teal-500 dark:focus-within:border-teal-500",
    badge: "bg-teal-600 text-white dark:bg-teal-500/20 dark:text-teal-400",
    outputBg: "bg-gradient-to-br from-teal-50/90 via-teal-100/30 to-white dark:from-teal-950/45 dark:via-teal-900/15 dark:to-zinc-900/40",
    outputBorder: "border-teal-500/30 dark:border-teal-500/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-teal-500/5 dark:hover:shadow-teal-500/10",
    activeBar: "bg-teal-500 dark:bg-teal-400",
    hoverBg: "hover:bg-teal-50/40 dark:hover:bg-teal-950/10",
    hoverBorder: "hover:border-teal-400 dark:hover:border-teal-500",
    tabActive: "bg-white text-teal-700 shadow-sm dark:bg-zinc-700 dark:text-teal-300",
    iconBg: "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400",
    buttonAccent: "bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600",
    problemBadge: "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400",
    mathBlock: "bg-teal-50/50 border-l-4 border-teal-500 text-teal-700 dark:bg-teal-950/20 dark:text-teal-300 dark:border-teal-400",
  },
  converters: {
    primary: "amber",
    accentBorder: "border-t-amber-600 dark:border-t-amber-500",
    bgSubtle: "bg-amber-50/50 dark:bg-amber-950/20",
    textAccent: "text-amber-600 dark:text-amber-400",
    textAccentDark: "dark:text-amber-300",
    focusRing: "focus-within:ring-4 focus-within:ring-amber-500/10 focus-within:border-amber-500 dark:focus-within:border-amber-500",
    badge: "bg-amber-600 text-white dark:bg-amber-500/20 dark:text-amber-400",
    outputBg: "bg-gradient-to-br from-amber-50/90 via-amber-100/30 to-white dark:from-amber-950/45 dark:via-amber-900/15 dark:to-zinc-900/40",
    outputBorder: "border-amber-500/30 dark:border-amber-500/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-amber-500/5 dark:hover:shadow-amber-500/10",
    activeBar: "bg-amber-500 dark:bg-amber-400",
    hoverBg: "hover:bg-amber-50/40 dark:hover:bg-amber-950/10",
    hoverBorder: "hover:border-amber-400 dark:hover:border-amber-500",
    tabActive: "bg-white text-amber-700 shadow-sm dark:bg-zinc-700 dark:text-amber-300",
    iconBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    buttonAccent: "bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600",
    problemBadge: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    mathBlock: "bg-amber-50/50 border-l-4 border-amber-500 text-amber-700 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-400",
  },
  statistics: {
    primary: "rose",
    accentBorder: "border-t-rose-600 dark:border-t-rose-500",
    bgSubtle: "bg-rose-50/50 dark:bg-rose-950/20",
    textAccent: "text-rose-600 dark:text-rose-400",
    textAccentDark: "dark:text-rose-300",
    focusRing: "focus-within:ring-4 focus-within:ring-rose-500/10 focus-within:border-rose-500 dark:focus-within:border-rose-500",
    badge: "bg-rose-600 text-white dark:bg-rose-500/20 dark:text-rose-400",
    outputBg: "bg-gradient-to-br from-rose-50/90 via-rose-100/30 to-white dark:from-rose-950/45 dark:via-rose-900/15 dark:to-zinc-900/40",
    outputBorder: "border-rose-500/30 dark:border-rose-500/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-rose-500/5 dark:hover:shadow-rose-500/10",
    activeBar: "bg-rose-500 dark:bg-rose-400",
    hoverBg: "hover:bg-rose-50/40 dark:hover:bg-rose-950/10",
    hoverBorder: "hover:border-rose-400 dark:hover:border-rose-500",
    tabActive: "bg-white text-rose-700 shadow-sm dark:bg-zinc-700 dark:text-rose-300",
    iconBg: "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400",
    buttonAccent: "bg-rose-600 hover:bg-rose-700 text-white dark:bg-rose-500 dark:hover:bg-rose-600",
    problemBadge: "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400",
    mathBlock: "bg-rose-50/50 border-l-4 border-rose-500 text-rose-700 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-400",
  },
  default: {
    primary: "indigo",
    accentBorder: "border-t-indigo-600 dark:border-t-indigo-500",
    bgSubtle: "bg-indigo-50/50 dark:bg-indigo-950/20",
    textAccent: "text-indigo-600 dark:text-indigo-400",
    textAccentDark: "dark:text-indigo-300",
    focusRing: "focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500 dark:focus-within:border-indigo-500",
    badge: "bg-indigo-600 text-white dark:bg-indigo-500/20 dark:text-indigo-400",
    outputBg: "bg-gradient-to-br from-indigo-50/90 via-indigo-100/30 to-white dark:from-indigo-950/45 dark:via-indigo-900/15 dark:to-zinc-900/40",
    outputBorder: "border-indigo-500/30 dark:border-indigo-500/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10",
    activeBar: "bg-indigo-500 dark:bg-indigo-400",
    hoverBg: "hover:bg-indigo-50/40 dark:hover:bg-indigo-950/10",
    hoverBorder: "hover:border-indigo-400 dark:hover:border-indigo-500",
    tabActive: "bg-white text-indigo-700 shadow-sm dark:bg-zinc-700 dark:text-indigo-300",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400",
    buttonAccent: "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600",
    problemBadge: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400",
    mathBlock: "bg-indigo-50/50 border-l-4 border-indigo-500 text-indigo-700 dark:bg-indigo-950/20 dark:text-indigo-300 dark:border-indigo-400",
  }
};

export function getCategoryTheme(category: string): CategoryTheme {
  return THEMES[category] || THEMES.default;
}
