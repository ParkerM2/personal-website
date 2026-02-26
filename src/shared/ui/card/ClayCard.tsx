import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

const ClayCard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn("clay clay-interactive border-0", className)}
    {...props}
  />
))
ClayCard.displayName = "ClayCard"

export { ClayCard }
