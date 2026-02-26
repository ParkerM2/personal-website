import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const spacingMap = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
} as const

interface SectionProps extends HTMLAttributes<HTMLElement> {
  clay?: boolean
  spacing?: keyof typeof spacingMap
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, clay = false, spacing = "md", ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        spacingMap[spacing],
        clay && "clay rounded-3xl",
        className,
      )}
      {...props}
    />
  ),
)
Section.displayName = "Section"

export { Section }
export type { SectionProps }
