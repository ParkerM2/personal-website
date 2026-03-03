import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react"

type CommandPaletteProps = HTMLAttributes<HTMLDivElement>

function CommandPalette({ className, ...props }: CommandPaletteProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-border bg-bg-surface shadow-2xl overflow-hidden max-w-lg w-full",
        className
      )}
      {...props}
    />
  )
}

type CommandInputProps = InputHTMLAttributes<HTMLInputElement>

function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div className="flex items-center border-b border-border px-3">
      <Search className="h-4 w-4 shrink-0 text-fg-muted" />
      <input
        className={cn(
          "flex h-11 w-full bg-transparent py-3 px-2 text-sm text-fg outline-none placeholder:text-fg-muted",
          className
        )}
        {...props}
      />
    </div>
  )
}

type CommandGroupProps = HTMLAttributes<HTMLDivElement> & { heading?: string }

function CommandGroup({ heading, className, children, ...props }: CommandGroupProps) {
  return (
    <div className={cn("p-1", className)} {...props}>
      {heading ? (
        <p className="px-2 py-1.5 font-mono text-xs font-medium text-fg-muted uppercase tracking-wider">
          {heading}
        </p>
      ) : null}
      {children}
    </div>
  )
}

interface CommandItemProps extends HTMLAttributes<HTMLDivElement> {
  shortcut?: ReactNode
}

function CommandItem({ shortcut, className, children, ...props }: CommandItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-sm px-2 py-2 text-sm text-fg cursor-pointer hover:bg-bg-elevated transition-colors",
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      {shortcut ? <span className="shrink-0">{shortcut}</span> : null}
    </div>
  )
}

export { CommandPalette, CommandInput, CommandGroup, CommandItem }
export type { CommandPaletteProps, CommandGroupProps, CommandItemProps }
