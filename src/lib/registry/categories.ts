export interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;
  gradient: string;
  heroGradient: string;
  description?: string;
  calculators: any[]; // Avoid circular dependency issues
}

export const CATEGORIES: Category[] = [
  { id: "math",       label: "Math",           icon: "🧮", color: "bg-violet-100 text-violet-700",  gradient: "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white", heroGradient: "bg-violet-500/50", calculators: [] },
  { id: "algebra",    label: "Algebra",         icon: "🔢", color: "bg-blue-100 text-blue-700",      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500 text-white", heroGradient: "bg-blue-500/50", calculators: [] },
  { id: "finance",    label: "Finance",         icon: "💰", color: "bg-emerald-100 text-emerald-700",gradient: "bg-gradient-to-br from-emerald-500 to-teal-500 text-white", heroGradient: "bg-emerald-500/50", calculators: [] },
  { id: "loans",      label: "Loans",           icon: "🏦", color: "bg-teal-100 text-teal-700",      gradient: "bg-gradient-to-br from-teal-500 to-emerald-500 text-white", heroGradient: "bg-teal-500/50", calculators: [] },
  { id: "converters", label: "Unit Converters", icon: "🔄", color: "bg-amber-100 text-amber-700",    gradient: "bg-gradient-to-br from-amber-500 to-orange-500 text-white", heroGradient: "bg-amber-500/50", calculators: [] },
  { id: "statistics", label: "Statistics",      icon: "📊", color: "bg-pink-100 text-pink-700",      gradient: "bg-gradient-to-br from-pink-500 to-rose-500 text-white", heroGradient: "bg-pink-500/50", calculators: [] },
  { id: "health",     label: "Health",          icon: "❤️", color: "bg-red-100 text-red-700",        gradient: "bg-gradient-to-br from-red-500 to-rose-500 text-white", heroGradient: "bg-red-500/50", calculators: [] },
  { id: "time",       label: "Time & Date",     icon: "🕐", color: "bg-indigo-100 text-indigo-700",  gradient: "bg-gradient-to-br from-indigo-500 to-blue-500 text-white", heroGradient: "bg-indigo-500/50", calculators: [] },
  { id: "physics",    label: "Physics",         icon: "⚛️", color: "bg-sky-100 text-sky-700",        gradient: "bg-gradient-to-br from-sky-500 to-blue-500 text-white", heroGradient: "bg-sky-500/50", calculators: [] },
  { id: "retirement", label: "Retirement",      icon: "🏖️", color: "bg-orange-100 text-orange-700",  gradient: "bg-gradient-to-br from-orange-400 to-amber-500 text-white", heroGradient: "bg-orange-500/50", calculators: [] },
  { id: "stocks",     label: "Stocks",          icon: "📈", color: "bg-green-100 text-green-700",    gradient: "bg-gradient-to-br from-green-500 to-emerald-500 text-white", heroGradient: "bg-green-500/50", calculators: [] },
  { id: "credit",     label: "Credit Cards",    icon: "💳", color: "bg-purple-100 text-purple-700",  gradient: "bg-gradient-to-br from-purple-500 to-indigo-500 text-white", heroGradient: "bg-purple-500/50", calculators: [] },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
