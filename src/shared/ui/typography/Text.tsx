import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const variantMap = {
  body: "text-base leading-7",
  lead: "text-xl text-muted-foreground",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
} as const

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: keyof typeof variantMap
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "body", ...props }, ref) => (
    <p
      ref={ref}
      className={cn(variantMap[variant], className)}
      {...props}
    />
  ),
)
Text.displayName = "Text"

export { Text }
export type { TextProps }
