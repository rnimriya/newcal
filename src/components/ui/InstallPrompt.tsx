"use client";

import { Download, X, Wifi } from "lucide-react";
import { useState } from "react";

interface Props {
  show: boolean;
  onInstall: () => void;
}

export function InstallPrompt({ show, onInstall }: Props) {
  const [dismissed, setDismissed] = useState(false);

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-6 inset-x-4 z-50 sm:left-auto sm:right-6 sm:max-w-[340px] animate-fade-in">
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-[0_8px_32px_rgba(79,70,229,0.45)] text-white">
        {/* Subtle highlight strip */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="flex items-center gap-3.5 px-4 py-3.5">
          {/* Icon */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20 backdrop-blur-sm">
            <Download size={20} className="text-white" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-bold text-base text-white leading-tight">
              Install CalcUnit
            </p>
            <p className="text-base text-indigo-200 mt-0.5 flex items-center gap-1.5">
              <Wifi size={10} className="shrink-0" />
              Works offline · No account needed
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onInstall}
              className="rounded-xl bg-white px-3.5 py-1.5 text-base font-bold text-indigo-600 hover:bg-indigo-50 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              Install
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white cursor-pointer"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
