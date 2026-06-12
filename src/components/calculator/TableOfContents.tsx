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
    <nav className="calc-card border border-border rounded-2xl  p-2 bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl  p-4 sticky top-24">
      <div className="flex items-center gap-2 mb-3">
        <List size={15} className="text-primary" />
        <h3 className="text-base font-semibold text-foreground">Contents</h3>
      </div>
      <ol className="space-y-1">
        {items.map(({ id, label, level }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`text-left w-full rounded-md px-2 py-1 text-base transition-colors ${level === 3 ? "pl-4" : ""
                } ${activeId === id
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary"
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
