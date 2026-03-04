import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  trailing?: ReactNode
  children: ReactNode
}

function Item({ icon, trailing, children, className, ...props }: ItemProps) {
  return (
    <div className={cn("flex items-center gap-3 rounded-md px-3 py-3", className)} {...props}>
      {icon ? <div className="shrink-0">{icon}</div> : null}
      <div className="flex-1 min-w-0">{children}</div>
      {trailing ? <div className="shrink-0 text-fg-muted">{trailing}</div> : null}
    </div>
  )
}

export { Item }
export type { ItemProps }
