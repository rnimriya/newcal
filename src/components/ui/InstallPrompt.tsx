"use client";

import { Download, X } from "lucide-react";
import { useState } from "react";

interface Props {
  show: boolean;
  onInstall: () => void;
}

export function InstallPrompt({ show, onInstall }: Props) {
  const [dismissed, setDismissed] = useState(false);

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-20 inset-x-4 z-50 flex items-center gap-3 rounded-2xl bg-indigo-600 p-4 shadow-2xl text-white sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
        <Download size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">Install CalcUnit</p>
        <p className="text-xs text-indigo-200 mt-0.5">
          Add to home screen for offline access
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onInstall}
          className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
        >
          Install
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="rounded-full p-1 text-indigo-300 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
