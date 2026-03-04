import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

type BreadcrumbProps = HTMLAttributes<HTMLElement>

function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return <nav aria-label="Breadcrumb" className={cn("flex items-center", className)} {...props} />
}

type BreadcrumbListProps = HTMLAttributes<HTMLOListElement>

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return <ol className={cn("flex items-center gap-1.5 text-sm", className)} {...props} />
}

interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  isCurrentPage?: boolean
}

function BreadcrumbItem({ className, isCurrentPage, ...props }: BreadcrumbItemProps) {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      aria-current={isCurrentPage ? "page" : undefined}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("text-fg-muted", className)} aria-hidden="true" {...props}>
      <ChevronRight className="h-3.5 w-3.5" />
    </span>
  )
}

interface BreadcrumbLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string
  children: ReactNode
}

function BreadcrumbLink({ className, ...props }: BreadcrumbLinkProps) {
  return <a className={cn("text-fg-secondary hover:text-fg transition-colors", className)} {...props} />
}

function BreadcrumbPage({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("font-medium text-fg", className)} {...props} />
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage }
export type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbLinkProps }
