import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type ButtonGroupProps = HTMLAttributes<HTMLDivElement>

function ButtonGroup({ className, ...props }: ButtonGroupProps) {
  return (
    <div
      role="group"
      className={cn(
        "inline-flex rounded-md",
        "[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md",
        "[&>button+button]:border-l-0",
        className
      )}
      {...props}
    />
  )
}

export { ButtonGroup }
export type { ButtonGroupProps }
