import type { Category } from "@/types/calculator";

export const CATEGORIES: Category[] = [
  { id: "math",       label: "Math",           icon: "🧮", color: "bg-violet-100 text-violet-700",  calculators: [] },
  { id: "algebra",    label: "Algebra",         icon: "🔢", color: "bg-blue-100 text-blue-700",      calculators: [] },
  { id: "finance",    label: "Finance",         icon: "💰", color: "bg-emerald-100 text-emerald-700",calculators: [] },
  { id: "loans",      label: "Loans",           icon: "🏦", color: "bg-teal-100 text-teal-700",      calculators: [] },
  { id: "converters", label: "Unit Converters", icon: "🔄", color: "bg-amber-100 text-amber-700",    calculators: [] },
  { id: "statistics", label: "Statistics",      icon: "📊", color: "bg-pink-100 text-pink-700",      calculators: [] },
  { id: "health",     label: "Health",          icon: "❤️", color: "bg-red-100 text-red-700",        calculators: [] },
  { id: "time",       label: "Time & Date",     icon: "🕐", color: "bg-indigo-100 text-indigo-700",  calculators: [] },
  { id: "physics",    label: "Physics",         icon: "⚛️", color: "bg-sky-100 text-sky-700",        calculators: [] },
  { id: "retirement", label: "Retirement",      icon: "🏖️", color: "bg-orange-100 text-orange-700",  calculators: [] },
  { id: "stocks",     label: "Stocks",          icon: "📈", color: "bg-green-100 text-green-700",    calculators: [] },
  { id: "credit",     label: "Credit Cards",    icon: "💳", color: "bg-purple-100 text-purple-700",  calculators: [] },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
