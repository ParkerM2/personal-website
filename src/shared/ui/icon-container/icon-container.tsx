import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"
import { iconContainerVariants } from "./icon-container-variants"

interface IconContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconContainerVariants> {}

function IconContainer({ className, size, ...props }: IconContainerProps) {
  return (
    <div className={cn(iconContainerVariants({ size, className }))} {...props} />
  )
}

export { IconContainer }
export type { IconContainerProps }
