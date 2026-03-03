import { cva, type VariantProps } from "class-variance-authority"
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

const alertVariants = cva(
  "relative rounded-md border border-border bg-bg-surface p-4 pl-12",
  {
    variants: {
      variant: {
        info: "border-l-4 border-l-info",
        success: "border-l-4 border-l-success",
        warning: "border-l-4 border-l-warning",
        error: "border-l-4 border-l-error",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
}

const iconColorMap = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
}

interface AlertProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title: string
  children?: ReactNode
}

function Alert({ title, children, variant = "info", className, ...props }: AlertProps) {
  const variantKey = variant ?? "info"
  const Icon = iconMap[variantKey]

  return (
    <div className={cn(alertVariants({ variant, className }))} {...props}>
      <Icon className={cn("absolute left-4 top-4 h-5 w-5", iconColorMap[variantKey])} />
      <h5 className="font-display text-sm font-semibold text-fg">{title}</h5>
      {children ? <p className="mt-1 text-sm text-fg-secondary">{children}</p> : null}
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Alert, alertVariants }
export type { AlertProps }
