"use client";

import { useEffect } from "react";
import { useCalcStore } from "@/store/calculatorStore";

interface Props {
  slug: string;
}

export function ViewTracker({ slug }: Props) {
  const addRecentlyViewed = useCalcStore((s) => s.addRecentlyViewed);

  useEffect(() => {
    addRecentlyViewed(slug);
  }, [slug, addRecentlyViewed]);

  return null;
}
