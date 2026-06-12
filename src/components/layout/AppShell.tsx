"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";
import { OfflineBanner } from "@/components/ui/OfflineBanner";
import { InstallPrompt } from "@/components/ui/InstallPrompt";
import { usePWA } from "@/lib/hooks/usePWA";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { installPrompt, isInstalled, isOffline, triggerInstall } = usePWA();
  const [isMobileOrPWA, setIsMobileOrPWA] = useState(false);

  useEffect(() => {
    const check = () => {
      const isPWA = window.matchMedia("(display-mode: standalone)").matches;
      const isMobile = window.innerWidth < 768;
      setIsMobileOrPWA(isPWA || isMobile);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="min-h-screen">
      <OfflineBanner show={isOffline} />

      {/* Desktop header */}
      {!isMobileOrPWA && <Header />}

      {/* Main content */}
      <main
        className={`mx-auto max-w-7xl w-full px-4 sm:px-6 ${isMobileOrPWA ? "pb-24 pt-5" : "py-3"
          }`}
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile bottom nav */}
      {isMobileOrPWA && <BottomNav />}

      {/* PWA install prompt */}
      {!isInstalled && (
        <InstallPrompt show={installPrompt} onInstall={triggerInstall} />
      )}
    </div>
  );
}
