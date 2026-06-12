"use client";

import { useEffect } from "react";

export function EmbedDetector() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("embed") === "1") {
      document.documentElement.classList.add("embed-mode");
    }
  }, []);

  return null;
}
