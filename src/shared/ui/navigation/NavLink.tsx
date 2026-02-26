import type { ComponentProps } from "react"
import { forwardRef } from "react"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

interface NavLinkProps extends ComponentProps<typeof Link> {
  active?: boolean
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ active, className, ...props }, ref) => (
    <Link
      ref={ref}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        active
          ? "font-bold text-primary underline underline-offset-4"
          : "text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
)
NavLink.displayName = "NavLink"

export { NavLink }
export type { NavLinkProps }
