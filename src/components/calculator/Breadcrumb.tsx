import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
  dark?: boolean;
}

export function Breadcrumb({ crumbs, dark = false }: Props) {
  const textPrimary = "text-foreground font-semibold";
  const textSecondary = "text-muted-foreground";
  const textHover = "hover:text-primary";
  const iconColor = "text-muted-foreground/40";

  return (
    <nav aria-label="Breadcrumb" className="mb-2">
      <ol className={`flex flex-wrap items-center gap-1 text-xs ${textSecondary}`}>
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 ${textHover} transition-colors`}
          >
            <Home size={12} />
            <span>Home</span>
          </Link>
        </li>

        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={12} className={iconColor} />
            {crumb.href ? (
              <Link
                href={crumb.href}
                className={`${textHover} transition-colors capitalize`}
              >
                {crumb.label}
              </Link>
            ) : (
              <span className={textPrimary}>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
