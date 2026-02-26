import { useContactPage } from "../model/useContactPage"

export function ContactPage() {
  useContactPage()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        This page is under construction.
      </p>
    </div>
  )
}
