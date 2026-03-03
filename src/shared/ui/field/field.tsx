import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
  htmlFor?: string
  error?: string
  helper?: string
  children: ReactNode
}

function Field({ label, htmlFor, error, helper, children, className, ...props }: FieldProps) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {label ? (
        <label
          htmlFor={htmlFor}
          className={cn(
            "block font-mono text-xs font-medium uppercase tracking-wider",
            error ? "text-error" : "text-fg-secondary"
          )}
        >
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <p className="text-xs text-error">{error}</p>
      ) : helper ? (
        <p className="text-xs text-fg-muted">{helper}</p>
      ) : null}
    </div>
  )
}

export { Field }
export type { FieldProps }
