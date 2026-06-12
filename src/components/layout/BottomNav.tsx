"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid2X2, Bookmark, Settings } from "lucide-react";

const NAV = [
  { href: "/",          label: "Home",    icon: Home      },
  { href: "/categories",label: "Explore", icon: Grid2X2   },
  { href: "/saved",     label: "Saved",   icon: Bookmark  },
  { href: "/settings",  label: "Settings",icon: Settings  },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 border-t border-border bg-background/98 backdrop-blur-sm pb-safe shadow-lg">
      <div className="flex items-center justify-around h-16">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-4 py-2 text-[10px] font-medium transition-colors min-w-[56px] ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
