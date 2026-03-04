import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical"
  gap?: "xs" | "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between"
}

function Stack({ className, direction = "vertical", gap = "md", align, justify, ...props }: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-row" : "flex-col",
        {
          xs: "gap-1",
          sm: "gap-2",
          md: "gap-4",
          lg: "gap-6",
          xl: "gap-8",
        }[gap],
        align && { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch" }[align],
        justify && { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" }[justify],
        className
      )}
      {...props}
    />
  )
}

export { Stack }
export type { StackProps }
