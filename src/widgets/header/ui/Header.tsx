import { Link } from "@tanstack/react-router"
import { Menu } from "lucide-react"
import { Container, IconButton, NavLink } from "@/shared/ui"
import { siteConfig } from "@/shared/config"
import { ThemeToggle } from "@/features/theme-toggle"
import { useHeader } from "../model/useHeader"
import { MobileNav } from "./MobileNav"

export function Header() {
  const { isMenuOpen, setIsMenuOpen, navigationItems } = useHeader()

  return (
    <header className="clay-sm sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <Link
            to="/"
            className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navigationItems.map((item) => (
              <NavLink key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <IconButton
                icon={<Menu className="h-5 w-5" />}
                label="Open menu"
                onClick={() => setIsMenuOpen(true)}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Sheet */}
      <MobileNav
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        items={navigationItems}
      />
    </header>
  )
}
