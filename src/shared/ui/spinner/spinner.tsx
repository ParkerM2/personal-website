import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default"
}

function Spinner({ className, size = "default", ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin rounded-full border-2 border-border border-t-accent",
        size === "sm" ? "h-4 w-4" : "h-6 w-6",
        className
      )}
      {...props}
    />
  )
}

export { Spinner }
export type { SpinnerProps }
