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
            "flex h-11 w-full appearance-none rounded-xl border bg-transparent px-3 py-2 pr-10 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 cursor-pointer",
            error
              ? "border-destructive focus-visible:ring-destructive bg-destructive/10"
              : "border-input hover:border-ring/50",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute right-3 flex items-center justify-center text-muted-foreground">
          <ChevronDown className="h-4 w-4 opacity-70" />
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
