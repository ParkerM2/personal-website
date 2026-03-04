import { Button, IconButton, SectionLabel } from "@/shared/ui"
import { siteConfig } from "@/shared/config"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ContactCard() {
  return (
    <div className="space-y-8">
      <SectionLabel label="CONTACT" title="Get In Touch" />
      <p className="text-fg-secondary">
        Have a project idea or want to collaborate? I&apos;d love to hear from you.
      </p>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button variant="primary" size="lg" asChild>
          <a href={`mailto:${siteConfig.email}`} aria-label="Send an email">
            <Mail className="mr-2 h-5 w-5" />
            {siteConfig.email}
          </a>
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <IconButton
          aria-label="GitHub profile"
          onClick={() => window.open(siteConfig.github, "_blank")}
        >
          <Github className="h-5 w-5" />
        </IconButton>
        <IconButton
          aria-label="LinkedIn profile"
          onClick={() => window.open(siteConfig.linkedin, "_blank")}
        >
          <Linkedin className="h-5 w-5" />
        </IconButton>
        <IconButton
          aria-label="Twitter profile"
          onClick={() => window.open(siteConfig.twitter, "_blank")}
        >
          <Twitter className="h-5 w-5" />
        </IconButton>
      </div>
      <p className="font-mono text-xs text-fg-muted">
        Usually responds within 24 hours
      </p>
    </div>
  )
}
