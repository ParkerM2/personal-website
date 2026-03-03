import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type KbdProps = HTMLAttributes<HTMLElement>

function Kbd({ className, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 items-center rounded border border-border bg-bg-elevated px-1.5 font-mono text-[10px] font-medium text-fg-muted",
        className
      )}
      {...props}
    />
  )
}

export { Kbd }
export type { KbdProps }
