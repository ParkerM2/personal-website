import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

function Container({ className, size = "lg", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          sm: "max-w-2xl",
          md: "max-w-4xl",
          lg: "max-w-6xl",
          xl: "max-w-7xl",
        }[size],
        className
      )}
      {...props}
    />
  )
}

export { Container }
export type { ContainerProps }
