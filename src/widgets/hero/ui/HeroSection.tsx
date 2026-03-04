import { Link } from "@tanstack/react-router"

import { siteConfig } from "@/shared/config"
import { Avatar, AvatarFallback, Button } from "@/shared/ui"

import { useHeroSection } from "../model/useHeroSection"

export function HeroSection() {
  const { title, subtitle, ctaLinks } = useHeroSection()
  const [primaryCta, secondaryCta] = ctaLinks

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-2xl px-6 flex flex-col items-center text-center">
        {/* Avatar */}
        <Avatar size={120}>
          <AvatarFallback className="text-2xl font-bold text-fg">
            P
          </AvatarFallback>
        </Avatar>

        {/* Name */}
        <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-fg">
          {title}
        </h1>

        {/* Title */}
        <p className="mt-2 font-mono text-accent text-sm tracking-wide">
          {siteConfig.title}
        </p>

        {/* Bio */}
        <p className="mt-4 text-fg-secondary text-lg leading-relaxed">
          {subtitle}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          {primaryCta !== undefined && (
            <Button variant="primary" size="lg" asChild>
              <Link to={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta !== undefined && (
            <Button variant="secondary" size="lg" asChild>
              <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
