import { cn } from "@/lib/utils"
import type { FormHTMLAttributes } from "react"

type FormProps = FormHTMLAttributes<HTMLFormElement>

function Form({ className, ...props }: FormProps) {
  return (
    <form
      className={cn(
        "rounded-lg bg-bg-surface border border-border p-6 space-y-4",
        className
      )}
      {...props}
    />
  )
}

export { Form }
export type { FormProps }
