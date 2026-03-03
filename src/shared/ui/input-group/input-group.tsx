import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

type InputGroupProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-md border border-border bg-bg-surface overflow-hidden",
        "[&>input]:border-0 [&>input]:rounded-none [&>input]:focus:ring-0",
        className
      )}
      {...props}
    />
  )
}

type InputAddonProps = HTMLAttributes<HTMLDivElement>

function InputAddon({ className, ...props }: InputAddonProps) {
  return (
    <div
      className={cn(
        "flex h-11 items-center px-3 bg-bg-elevated text-fg-muted text-sm border-r border-border",
        className
      )}
      {...props}
    />
  )
}

export { InputGroup, InputAddon }
export type { InputGroupProps }
