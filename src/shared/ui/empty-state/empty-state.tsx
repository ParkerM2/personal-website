import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
}

function EmptyState({ icon, title, description, action, className, ...props }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 text-center", className)} {...props}>
      {icon ? (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-bg-surface border border-border text-fg-muted">
          {icon}
        </div>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-fg">{title}</h3>
      {description ? <p className="mt-1 text-sm text-fg-secondary max-w-sm">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  )
}

export { EmptyState }
export type { EmptyStateProps }
