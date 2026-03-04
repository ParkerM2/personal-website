import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border",
  {
    variants: {
      variant: {
        accent: "bg-accent/10 text-accent border-accent/20",
        muted: "bg-bg-elevated text-fg-secondary border-border",
        success: "bg-success/10 text-success border-success/20",
        warning: "bg-warning/10 text-warning border-warning/20",
        error: "bg-error/10 text-error border-error/20",
      },
    },
    defaultVariants: {
      variant: "accent",
    },
  }
)

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }
export type { BadgeProps }
