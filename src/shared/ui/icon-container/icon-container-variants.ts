import { cva } from "class-variance-authority"

const iconContainerVariants = cva(
  "inline-flex items-center justify-center rounded-md bg-bg-surface border border-border",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-11 w-11",
        lg: "h-14 w-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export { iconContainerVariants }
