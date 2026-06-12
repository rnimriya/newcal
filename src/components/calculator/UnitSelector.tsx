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
          className="flex items-center gap-1 rounded-xl border border-border bg-secondary px-3 py-2 text-base font-medium text-foreground min-h-[48px]"
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
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors min-h-[48px] ${u.value === value
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
                  }`}
              >
                {u.label}
                {u.value === value && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
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
        className="appearance-none cursor-pointer rounded-xl border border-border bg-secondary py-2 pl-3 pr-7 text-base font-medium text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
      >
        {units.map((u) => (
          <option key={u.value} value={u.value}>
            {u.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
}
