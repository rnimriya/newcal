"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
  level: 2 | 3;
}

interface Props {
  items: TocItem[];
}

export function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="calc-card p-4 sticky top-24">
      <div className="flex items-center gap-2 mb-3">
        <List size={15} className="text-indigo-600" />
        <h3 className="text-sm font-semibold text-slate-800">Contents</h3>
      </div>
      <ol className="space-y-1">
        {items.map(({ id, label, level }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`text-left w-full rounded-md px-2 py-1 text-xs transition-colors ${
                level === 3 ? "pl-4" : ""
              } ${
                activeId === id
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-500 hover:text-indigo-600 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
