import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  label?: string
  showValue?: boolean
}

const Progress = forwardRef<React.ComponentRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  function Progress({ className, value, label, showValue, ...props }, ref) {
    return (
      <div className="space-y-1">
        {(label != null || showValue === true) ? (
          <div className="flex items-center justify-between">
            {label ? <span className="font-mono text-xs text-fg-secondary">{label}</span> : null}
            {showValue === true ? <span className="font-mono text-xs text-fg-muted">{value ?? 0}%</span> : null}
          </div>
        ) : null}
        <ProgressPrimitive.Root
          ref={ref}
          className={cn("relative h-2 w-full overflow-hidden rounded-full bg-bg-elevated", className)}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className="h-full bg-accent transition-all duration-300 ease-in-out"
            style={{ width: `${value ?? 0}%` }}
          />
        </ProgressPrimitive.Root>
      </div>
    )
  }
)

export { Progress }
export type { ProgressProps }
