interface NavItem {
  label: string
  href: string
}

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: NavItem[]
}

export function MobileNav({ open }: MobileNavProps) {
  if (!open) return null
  return <div className="p-4 text-fg-secondary">[MobileNav placeholder]</div>
}
