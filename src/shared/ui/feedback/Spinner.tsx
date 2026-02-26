import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
} as const

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin rounded-full border-current border-t-transparent",
        sizeMap[size],
        className,
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  ),
)
Spinner.displayName = "Spinner"

export { Spinner }
export type { SpinnerProps }
