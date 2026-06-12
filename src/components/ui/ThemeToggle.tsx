"use client";

import { useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useCalcStore } from "@/store/calculatorStore";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "light") {
    root.classList.remove("dark");
  } else {
    // system
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  }
}

const CYCLE: Theme[] = ["light", "dark", "system"];

export function ThemeToggle() {
  const theme = useCalcStore((s) => s.theme);
  const setTheme = useCalcStore((s) => s.setTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const next = CYCLE[(CYCLE.indexOf(theme) + 1) % CYCLE.length];

  const icons: Record<Theme, React.ReactNode> = {
    light: <Sun size={16} />,
    dark: <Moon size={16} />,
    system: <Monitor size={16} />,
  };

  return (
    <button
      onClick={() => setTheme(next)}
      title={`Theme: ${theme}. Click for ${next}`}
      className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
    >
      {icons[theme]}
    </button>
  );
}
