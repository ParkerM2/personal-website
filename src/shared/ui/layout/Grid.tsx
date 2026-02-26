import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const gapMap = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
} as const

const smColsMap: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
}

const mdColsMap: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
}

const lgColsMap: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
}

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: { sm?: number; md?: number; lg?: number }
  gap?: keyof typeof gapMap
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap = "md", ...props }, ref) => {
    const sm = cols?.sm ?? 1
    const md = cols?.md ?? 2
    const lg = cols?.lg ?? 3

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1",
          smColsMap[sm],
          mdColsMap[md],
          lgColsMap[lg],
          gapMap[gap],
          className,
        )}
        {...props}
      />
    )
  },
)
Grid.displayName = "Grid"

export { Grid }
export type { GridProps }
