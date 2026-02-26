import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const elevationMap = {
  sm: "clay-sm",
  md: "clay",
  lg: "clay-lg",
} as const

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const

interface ClaySurfaceProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: keyof typeof elevationMap
  padding?: keyof typeof paddingMap
}

const ClaySurface = forwardRef<HTMLDivElement, ClaySurfaceProps>(
  ({ className, elevation = "md", padding = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-card",
        elevationMap[elevation],
        paddingMap[padding],
        className,
      )}
      {...props}
    />
  ),
)
ClaySurface.displayName = "ClaySurface"

export { ClaySurface }
export type { ClaySurfaceProps }
