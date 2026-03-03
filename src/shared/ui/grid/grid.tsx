import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
}

function Grid({ className, cols = 3, gap = "md", ...props }: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        {
          1: "grid-cols-1",
          2: "grid-cols-1 sm:grid-cols-2",
          3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        }[cols],
        {
          sm: "gap-2",
          md: "gap-4",
          lg: "gap-6",
        }[gap],
        className
      )}
      {...props}
    />
  )
}

export { Grid }
export type { GridProps }
