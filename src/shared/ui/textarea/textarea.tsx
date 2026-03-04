import { cn } from "@/lib/utils"
import { forwardRef, type TextareaHTMLAttributes } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, error, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full rounded-md bg-bg-surface px-4 py-3 text-sm text-fg border border-border leading-relaxed transition-colors",
          "placeholder:text-fg-muted",
          "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          error && "border-error focus:border-error focus:ring-error",
          className
        )}
        {...props}
      />
    )
  }
)

export { Textarea }
export type { TextareaProps }
