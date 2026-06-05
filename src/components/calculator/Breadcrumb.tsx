import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
}

export function Breadcrumb({ crumbs }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
          >
            <Home size={13} />
            <span>Home</span>
          </Link>
        </li>

        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={13} className="text-slate-300" />
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-indigo-600 transition-colors capitalize"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-700 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
