import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type TagProps = HTMLAttributes<HTMLSpanElement>

function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-bg-elevated px-2 py-0.5 text-xs text-fg-secondary",
        className
      )}
      {...props}
    />
  )
}

export { Tag }
export type { TagProps }
