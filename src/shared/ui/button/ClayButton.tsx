import type { ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const ClayButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn("clay-sm clay-interactive rounded-2xl", className)}
      {...props}
    />
  ),
)
ClayButton.displayName = "ClayButton"

export { ClayButton }
