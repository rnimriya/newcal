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
  heroGradient: string;
}

export const THEMES: Record<string, CategoryTheme> = {
  math: {
    primary: "primary",
    accentBorder: "border-t-primary",
    bgSubtle: "bg-secondary/50",
    textAccent: "text-primary",
    textAccentDark: "dark:text-primary",
    focusRing: "focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary",
    badge: "bg-primary text-primary-foreground",
    outputBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
    outputBorder: "border-primary/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-primary/10",
    activeBar: "bg-primary",
    hoverBg: "hover:bg-secondary",
    hoverBorder: "hover:border-primary/50",
    tabActive: "bg-background text-primary shadow-sm",
    iconBg: "bg-primary/10 text-primary",
    buttonAccent: "bg-primary hover:bg-primary/90 text-primary-foreground",
    problemBadge: "bg-destructive/10 text-destructive",
    mathBlock: "bg-secondary border-l-4 border-primary text-foreground",
    heroGradient: "bg-primary/50",
  },
  algebra: {
    primary: "primary",
    accentBorder: "border-t-primary",
    bgSubtle: "bg-secondary/50",
    textAccent: "text-primary",
    textAccentDark: "dark:text-primary",
    focusRing: "focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary",
    badge: "bg-primary text-primary-foreground",
    outputBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
    outputBorder: "border-primary/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-primary/10",
    activeBar: "bg-primary",
    hoverBg: "hover:bg-secondary",
    hoverBorder: "hover:border-primary/50",
    tabActive: "bg-background text-primary shadow-sm",
    iconBg: "bg-primary/10 text-primary",
    buttonAccent: "bg-primary hover:bg-primary/90 text-primary-foreground",
    problemBadge: "bg-destructive/10 text-destructive",
    mathBlock: "bg-secondary border-l-4 border-primary text-foreground",
    heroGradient: "bg-primary/50",
  },
  physics: {
    primary: "primary",
    accentBorder: "border-t-primary",
    bgSubtle: "bg-secondary/50",
    textAccent: "text-primary",
    textAccentDark: "dark:text-primary",
    focusRing: "focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary",
    badge: "bg-primary text-primary-foreground",
    outputBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
    outputBorder: "border-primary/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-primary/10",
    activeBar: "bg-primary",
    hoverBg: "hover:bg-secondary",
    hoverBorder: "hover:border-primary/50",
    tabActive: "bg-background text-primary shadow-sm",
    iconBg: "bg-primary/10 text-primary",
    buttonAccent: "bg-primary hover:bg-primary/90 text-primary-foreground",
    problemBadge: "bg-destructive/10 text-destructive",
    mathBlock: "bg-secondary border-l-4 border-primary text-foreground",
    heroGradient: "bg-primary/50",
  },
  converters: {
    primary: "primary",
    accentBorder: "border-t-primary",
    bgSubtle: "bg-secondary/50",
    textAccent: "text-primary",
    textAccentDark: "dark:text-primary",
    focusRing: "focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary",
    badge: "bg-primary text-primary-foreground",
    outputBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
    outputBorder: "border-primary/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-primary/10",
    activeBar: "bg-primary",
    hoverBg: "hover:bg-secondary",
    hoverBorder: "hover:border-primary/50",
    tabActive: "bg-background text-primary shadow-sm",
    iconBg: "bg-primary/10 text-primary",
    buttonAccent: "bg-primary hover:bg-primary/90 text-primary-foreground",
    problemBadge: "bg-destructive/10 text-destructive",
    mathBlock: "bg-secondary border-l-4 border-primary text-foreground",
    heroGradient: "bg-primary/50",
  },
  statistics: {
    primary: "primary",
    accentBorder: "border-t-primary",
    bgSubtle: "bg-secondary/50",
    textAccent: "text-primary",
    textAccentDark: "dark:text-primary",
    focusRing: "focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary",
    badge: "bg-primary text-primary-foreground",
    outputBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
    outputBorder: "border-primary/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-primary/10",
    activeBar: "bg-primary",
    hoverBg: "hover:bg-secondary",
    hoverBorder: "hover:border-primary/50",
    tabActive: "bg-background text-primary shadow-sm",
    iconBg: "bg-primary/10 text-primary",
    buttonAccent: "bg-primary hover:bg-primary/90 text-primary-foreground",
    problemBadge: "bg-destructive/10 text-destructive",
    mathBlock: "bg-secondary border-l-4 border-primary text-foreground",
    heroGradient: "bg-primary/50",
  },
  default: {
    primary: "primary",
    accentBorder: "border-t-primary",
    bgSubtle: "bg-secondary/50",
    textAccent: "text-primary",
    textAccentDark: "dark:text-primary",
    focusRing: "focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary",
    badge: "bg-primary text-primary-foreground",
    outputBg: "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
    outputBorder: "border-primary/20",
    glowShadow: "shadow-sm hover:shadow-md hover:shadow-primary/10",
    activeBar: "bg-primary",
    hoverBg: "hover:bg-secondary",
    hoverBorder: "hover:border-primary/50",
    tabActive: "bg-background text-primary shadow-sm",
    iconBg: "bg-primary/10 text-primary",
    buttonAccent: "bg-primary hover:bg-primary/90 text-primary-foreground",
    problemBadge: "bg-destructive/10 text-destructive",
    mathBlock: "bg-secondary border-l-4 border-primary text-foreground",
    heroGradient: "bg-primary/50",
  }
};

export function getCategoryTheme(category: string): CategoryTheme {
  return THEMES[category] || THEMES.default;
}
