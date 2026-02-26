import type { ReactNode, ButtonHTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactNode
  label: string
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, label, className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      aria-label={label}
      className={cn(className)}
      {...props}
    >
      {icon}
    </Button>
  ),
)
IconButton.displayName = "IconButton"

export { IconButton }
export type { IconButtonProps }
