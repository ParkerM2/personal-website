import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-display font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-[#0A0A0A] hover:bg-accent/90",
        secondary: "bg-transparent border border-border text-fg hover:bg-bg-surface",
        ghost: "bg-transparent text-fg hover:bg-bg-surface",
        destructive: "bg-error text-white hover:bg-error/90",
      },
      size: {
        sm: "py-2 px-4 text-xs rounded-sm",
        md: "py-3 px-6 text-sm rounded-md",
        lg: "py-4 px-8 text-base rounded-md",
        icon: "h-11 w-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// IconButton - 44px square, surface bg, border, centered icon
function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-md bg-bg-surface border border-border text-fg-secondary transition-colors hover:text-fg hover:bg-bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, IconButton, buttonVariants }
export type { ButtonProps }
