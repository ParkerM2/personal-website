import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const spacingMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal"
  spacing?: keyof typeof spacingMap
  align?: keyof typeof alignMap
  justify?: keyof typeof justifyMap
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = "vertical",
      spacing = "md",
      align,
      justify,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        spacingMap[spacing],
        align && alignMap[align],
        justify && justifyMap[justify],
        className,
      )}
      {...props}
    />
  ),
)
Stack.displayName = "Stack"

export { Stack }
export type { StackProps }
