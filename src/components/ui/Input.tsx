import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, iconLeft, iconRight, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center">
        {iconLeft && (
          <div className="absolute left-3 flex items-center justify-center text-muted-foreground pointer-events-none">
            {iconLeft}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-xl border bg-transparent px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
            error
              ? "border-destructive focus-visible:ring-destructive bg-destructive/10"
              : "border-input hover:border-ring/50",
            iconLeft && "pl-10",
            iconRight && "pr-10",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {iconRight && (
          <div className="absolute right-3 flex items-center justify-center text-muted-foreground pointer-events-none">
            {iconRight}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
