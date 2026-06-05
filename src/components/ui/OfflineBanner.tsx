"use client";

import { WifiOff } from "lucide-react";

export function OfflineBanner({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-center gap-2 bg-amber-500 py-2 text-sm font-medium text-white">
      <WifiOff size={14} />
      You&apos;re offline — calculators loaded from cache
    </div>
  );
}
