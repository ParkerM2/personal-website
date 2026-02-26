import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const maxWidthMap = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
} as const

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof maxWidthMap
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthMap[size],
        className,
      )}
      {...props}
    />
  ),
)
Container.displayName = "Container"

export { Container }
export type { ContainerProps }
