import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const elevationMap = {
  sm: "clay-sm",
  md: "clay",
  lg: "clay-lg",
} as const

interface ClayContainerProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: keyof typeof elevationMap
  interactive?: boolean
}

const ClayContainer = forwardRef<HTMLDivElement, ClayContainerProps>(
  ({ className, elevation = "md", interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl",
        elevationMap[elevation],
        interactive && "clay-interactive",
        className,
      )}
      {...props}
    />
  ),
)
ClayContainer.displayName = "ClayContainer"

export { ClayContainer }
export type { ClayContainerProps }
