import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, HTMLAttributes } from "react"

type PaginationProps = HTMLAttributes<HTMLElement>

function Pagination({ className, ...props }: PaginationProps) {
  return <nav aria-label="Pagination" className={cn("flex items-center justify-center gap-1", className)} {...props} />
}

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

function PaginationButton({ className, isActive, ...props }: PaginationButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm transition-colors",
        isActive
          ? "bg-accent text-[#0A0A0A] font-semibold"
          : "text-fg-secondary hover:bg-bg-surface hover:text-fg",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-label="Previous page"
      className={cn("inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-secondary hover:bg-bg-surface hover:text-fg transition-colors", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  )
}

function PaginationNext({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-label="Next page"
      className={cn("inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-secondary hover:bg-bg-surface hover:text-fg transition-colors", className)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  )
}

export { Pagination, PaginationButton, PaginationPrevious, PaginationNext }
export type { PaginationProps, PaginationButtonProps }
