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
  const [isEmbed, setIsEmbed] = useState(false);

  useEffect(() => {
    const check = () => {
      const isPWA    = window.matchMedia("(display-mode: standalone)").matches;
      const isMobile = window.innerWidth < 768;
      setIsMobileOrPWA(isPWA || isMobile);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setIsEmbed(new URLSearchParams(window.location.search).get('embed') === '1');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {!isEmbed && <OfflineBanner show={isOffline} />}

      {/* Desktop header */}
      {!isMobileOrPWA && !isEmbed && <Header />}

      {/* Main content */}
      <main
        className={isEmbed ? "px-4 py-3" : `mx-auto max-w-7xl px-4 sm:px-6 ${
          isMobileOrPWA ? "pb-24 pt-5" : "py-8"
        }`}
      >
        {children}
      </main>

      {/* Footer */}
      {!isEmbed && <Footer />}

      {/* Mobile bottom nav */}
      {isMobileOrPWA && !isEmbed && <BottomNav />}

      {/* PWA install prompt */}
      {!isInstalled && !isEmbed && (
        <InstallPrompt show={installPrompt} onInstall={triggerInstall} />
      )}
    </div>
  );
}
