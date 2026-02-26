import { Github, Linkedin, Twitter } from "lucide-react"
import { Container, IconButton } from "@/shared/ui"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/shared/config"

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: <Github className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    label: "Twitter",
    href: siteConfig.twitter,
    icon: <Twitter className="h-5 w-5" />,
  },
]

export function Footer() {
  return (
    <footer className="py-8">
      <Container>
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton icon={link.icon} label={link.label} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
