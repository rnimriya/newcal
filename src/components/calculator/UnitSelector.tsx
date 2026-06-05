"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { UnitOption } from "@/types/calculator";
import { BottomSheet } from "@/components/ui/BottomSheet";

interface Props {
  units: UnitOption[];
  value: string;
  onChange: (unit: string) => void;
  isMobile?: boolean;
}

export function UnitSelector({ units, value, onChange, isMobile }: Props) {
  const [open, setOpen] = useState(false);
  const selected = units.find((u) => u.value === value) ?? units[0];

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 min-h-[48px] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
        >
          {selected?.label.split(" ")[0]}
          <ChevronDown size={13} />
        </button>

        <BottomSheet
          open={open}
          onClose={() => setOpen(false)}
          title="Select Unit"
        >
          <div className="flex flex-col gap-1">
            {units.map((u) => (
              <button
                key={u.value}
                onClick={() => { onChange(u.value); setOpen(false); }}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors min-h-[48px] ${
                  u.value === value
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                    : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                {u.label}
                {u.value === value && (
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                )}
              </button>
            ))}
          </div>
        </BottomSheet>
      </>
    );
  }

  // Desktop: native select styled to match
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none cursor-pointer rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-3 pr-7 text-sm font-medium text-zinc-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
      >
        {units.map((u) => (
          <option key={u.value} value={u.value}>
            {u.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400"
      />
    </div>
  );
}
