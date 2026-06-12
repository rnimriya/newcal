"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="inline-flex items-center justify-center h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary transition-colors">
        <Monitor size={16} />
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const getIcon = () => {
    if (theme === "light") return <Sun size={16} />;
    if (theme === "dark") return <Moon size={16} />;
    return <Monitor size={16} />;
  };

  return (
    <button
      onClick={cycleTheme}
      title={`Theme: ${theme}. Click to change.`}
      className="inline-flex items-center justify-center h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
    >
      {getIcon()}
    </button>
  );
}
