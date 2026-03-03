import { siteConfig } from "@/shared/config"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-fg-muted text-sm">
          &copy; {year} {siteConfig.name}
        </p>
        <p className="font-mono text-fg-muted text-xs mt-1">
          Made with Pencil + Claude
        </p>
      </div>
    </footer>
  )
}
