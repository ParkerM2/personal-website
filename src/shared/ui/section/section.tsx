import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type SectionProps = HTMLAttributes<HTMLElement>

function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-20", className)}
      {...props}
    />
  )
}

export { Section }
export type { SectionProps }
