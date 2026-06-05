"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { schemas } from "@/lib/schemas";
import type { CalculatorSchema } from "@/types/calculator";

const fuse = new Fuse(schemas, {
  keys: [
    { name: "name",        weight: 0.5 },
    { name: "tags",        weight: 0.3 },
    { name: "description", weight: 0.2 },
  ],
  threshold: 0.35,
  includeScore: true,
});

export function useSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo<CalculatorSchema[]>(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((r) => r.item);
  }, [query]);

  return { query, setQuery, results };
}
