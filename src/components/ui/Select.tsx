import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { ChevronDown } from "lucide-react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center">
        <select
          className={cn(
            "flex h-11 w-full appearance-none rounded-xl border bg-transparent px-3 py-2 pr-10 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:focus-visible:ring-indigo-300 transition-colors duration-200 cursor-pointer",
            error
              ? "border-red-500 focus-visible:ring-red-500 dark:border-red-500 dark:focus-visible:ring-red-500 bg-red-50/20 dark:bg-red-900/10"
              : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute right-3 flex items-center justify-center text-zinc-500">
          <ChevronDown className="h-4 w-4 opacity-70" />
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
