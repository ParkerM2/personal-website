import { X, Bell, CheckCircle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "error"
  title: string
  description?: string
  onClose?: () => void
}

const toastIcons = {
  default: Bell,
  success: CheckCircle,
  error: XCircle,
}

const toastIconColors = {
  default: "text-fg-muted",
  success: "text-success",
  error: "text-error",
}

function Toast({ variant = "default", title, description, onClose, className, ...props }: ToastProps) {
  const Icon = toastIcons[variant]

  return (
    <div
      className={cn(
        "flex items-start gap-3 w-[360px] rounded-md border border-border bg-bg-surface p-4 shadow-lg",
        className
      )}
      role="alert"
      {...props}
    >
      <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", toastIconColors[variant])} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-fg">{title}</p>
        {description ? <p className="mt-1 text-sm text-fg-secondary">{description}</p> : null}
      </div>
      {onClose ? (
        <button
          onClick={onClose}
          className="shrink-0 rounded-sm text-fg-muted hover:text-fg transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  )
}

export { Toast }
export type { ToastProps }
