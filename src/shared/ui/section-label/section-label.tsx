import { cn } from "@/lib/utils"
import { Separator } from "../separator"
import type { HTMLAttributes } from "react"

interface SectionLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  title: string
}

function SectionLabel({ label, title, className, ...props }: SectionLabelProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {"// "}{label}
      </span>
      <h2 className="font-display text-2xl font-bold text-fg">{title}</h2>
      <Separator />
    </div>
  )
}

export { SectionLabel }
export type { SectionLabelProps }
