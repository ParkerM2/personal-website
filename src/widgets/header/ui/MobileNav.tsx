import { Link } from "@tanstack/react-router"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { siteConfig } from "@/shared/config"

interface NavItem {
  label: string
  href: string
}

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: NavItem[]
}

export function MobileNav({ open, onOpenChange, items }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => onOpenChange(false)}
              className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
