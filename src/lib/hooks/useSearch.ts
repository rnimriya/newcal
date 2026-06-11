"use client";

import { useMemo, useState, useEffect, useRef } from "react";
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
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!query) {
      setDebouncedQuery("");
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDebouncedQuery(query), 200);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query]);

  const results = useMemo<CalculatorSchema[]>(() => {
    if (!debouncedQuery.trim()) return [];
    return fuse.search(debouncedQuery).map((r) => r.item);
  }, [debouncedQuery]);

  return { query, setQuery, results };
}
