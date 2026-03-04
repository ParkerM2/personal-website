import { cn } from "@/lib/utils"
import { forwardRef, type InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, error, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-md bg-bg-surface px-4 text-sm text-fg border border-border transition-colors",
          "placeholder:text-fg-muted",
          "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus:border-error focus:ring-error",
          className
        )}
        {...props}
      />
    )
  }
)

export { Input }
export type { InputProps }
