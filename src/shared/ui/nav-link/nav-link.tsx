import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

type NavLinkProps = ComponentPropsWithoutRef<typeof Link>

function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "text-sm font-medium text-fg-secondary transition-colors hover:text-fg",
        className
      )}
      activeProps={{
        className: "text-accent",
      }}
      {...props}
    />
  )
}

export { NavLink }
export type { NavLinkProps }
