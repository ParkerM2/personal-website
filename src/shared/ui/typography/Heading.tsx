import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const headingSizeMap = {
  h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
  h5: "text-lg font-semibold",
  h6: "text-base font-semibold",
} as const

type HeadingLevel = keyof typeof headingSizeMap

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = "h2", className, ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn(headingSizeMap[Tag], className)}
      {...props}
    />
  ),
)
Heading.displayName = "Heading"

export { Heading }
export type { HeadingProps }
