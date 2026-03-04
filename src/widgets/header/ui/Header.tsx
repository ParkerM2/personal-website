import { Link } from "@tanstack/react-router"
import { Menu } from "lucide-react"

import { ThemeToggle } from "@/features/theme-toggle"
import { IconButton, NavLink } from "@/shared/ui"

import { useHeader } from "../model/useHeader"
import { MobileNav } from "./MobileNav"

export function Header() {
  const { isMenuOpen, setIsMenuOpen, navigationItems } = useHeader()

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="font-mono text-accent font-bold tracking-[3px] text-sm hover:opacity-80 transition-opacity"
        >
          PARKER
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <IconButton
            className="md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => { setIsMenuOpen(true) }}
          >
            <Menu className="h-5 w-5" />
          </IconButton>
        </div>
      </div>

      <MobileNav
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        items={navigationItems}
      />
    </header>
  )
}
