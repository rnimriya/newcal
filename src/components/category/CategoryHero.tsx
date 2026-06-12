import { CATEGORY_DESCRIPTIONS } from "@/lib/categoryDescriptions";

interface Props {
  categoryId: string;
  label: string;
  color: string;
  count: number;
}

export function CategoryHero({ categoryId, label, color, count }: Props) {
  const desc = CATEGORY_DESCRIPTIONS[categoryId];
  if (!desc) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
      {/* Tagline */}
      <p className="text-lg font-semibold text-slate-800 leading-snug">{desc.tagline}</p>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className={`inline-flex h-5 w-5 items-center justify-center rounded-md ${color} text-[10px] font-bold`}>
            {count}
          </span>
          {count} {label.toLowerCase()} calculators
        </span>
        <span className="text-slate-300">•</span>
        <span>Free</span>
        <span className="text-slate-300">•</span>
        <span>No sign-up</span>
        <span className="text-slate-300">•</span>
        <span>Works offline</span>
      </div>

      {/* Use case cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {desc.useCases.map((uc) => (
          <div
            key={uc.title}
            className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4"
          >
            <span className="text-2xl shrink-0" aria-hidden="true">{uc.icon}</span>
            <div>
              <p className="text-sm font-semibold text-slate-800 leading-snug">{uc.title}</p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{uc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
