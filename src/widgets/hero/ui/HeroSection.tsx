import { Link } from "@tanstack/react-router"
import { Section, Stack, Heading, Text, ClayButton } from "@/shared/ui"
import { Button } from "@/components/ui/button"
import { useHeroSection } from "../model/useHeroSection"

export function HeroSection() {
  const { title, subtitle, ctaLinks } = useHeroSection()

  return (
    <Section clay spacing="lg" className="py-24 lg:py-32">
      <Stack
        spacing="lg"
        align="start"
        className="text-center md:text-left"
      >
        <Heading as="h1">{title}</Heading>
        <Text variant="lead" className="max-w-2xl">
          {subtitle}
        </Text>
        <Stack direction="horizontal" spacing="md" className="mt-4">
          <Link to={ctaLinks[0].href}>
            <ClayButton size="lg">{ctaLinks[0].label}</ClayButton>
          </Link>
          <Link to={ctaLinks[1].href}>
            <Button variant="outline" size="lg">
              {ctaLinks[1].label}
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Section>
  )
}
