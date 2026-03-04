import { Link } from "@tanstack/react-router"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/shared/ui"

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: { label: string; href: string }[]
}

export function MobileNav({ open, onOpenChange, items }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent id="mobile-nav">
        <SheetHeader>
          <SheetTitle className="font-mono text-accent tracking-[3px] text-sm">
            PARKER
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block rounded-md px-3 py-3 text-sm font-medium text-fg-secondary transition-colors hover:bg-bg-elevated hover:text-fg"
              activeProps={{ className: "text-accent bg-bg-elevated" }}
              onClick={() => { onOpenChange(false) }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
