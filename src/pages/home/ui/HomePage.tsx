import { Link } from "@tanstack/react-router"
import { useHomePage } from "../model/useHomePage"
import type { InfoCard, TechBadge, WritingItem } from "../model/useHomePage"

export function HomePage() {
  const {
    featuredProjects,
    isLoading,
    heroStats,
    infoCards,
    techStack,
    latestWriting,
    siteConfig,
  } = useHomePage()

  return (
    <div className="flex flex-col gap-6 px-5 py-5 md:px-12">
      {/* ── Hero Zone ── */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Hero Left: Avatar + Text */}
        <div className="flex items-center gap-7">
          <div className="h-[180px] w-[180px] shrink-0 rounded-full bg-bg-elevated" />
          <div className="flex flex-col gap-3.5">
            <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-2px] text-fg">
              {siteConfig.name}
            </h1>
            <p className="text-lg text-fg-secondary">
              Full-Stack Developer &amp; Design Engineer
            </p>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-fg-muted">
              <span>Software Engineer</span>
              <span>·</span>
              <span>CS grad</span>
              <span>·</span>
              <span>Based in San Francisco</span>
            </div>
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-bg" />
              <span className="font-mono text-sm font-bold text-bg">
                Available for Work
              </span>
            </div>
            <div className="flex gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[15px] font-medium text-accent transition-opacity hover:opacity-80"
              >
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[15px] font-medium text-accent transition-opacity hover:opacity-80"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-[15px] font-medium text-accent transition-opacity hover:opacity-80"
              >
                Email
              </a>
            </div>
            <div className="flex gap-12">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-[28px] font-extrabold text-accent">
                    {stat.value}
                  </span>
                  <span className="font-mono text-base text-fg-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Right: Info Cards */}
        <div className="flex shrink-0 gap-3.5">
          {infoCards.map((card) => (
            <InfoCardBlock key={card.label} card={card} />
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-border" />

      {/* ── Tech Stack Marquee ── */}
      <div className="relative h-[68px] overflow-hidden">
        <div className="flex h-full animate-marquee items-center gap-5">
          {[...techStack, ...techStack].map((tech, i) => (
            <TechBadgeChip
              key={`${tech.name}-${String(i)}`}
              badge={tech}
            />
          ))}
        </div>
      </div>

      {/* ── Row 2: Projects ── */}
      <div className="grid h-[340px] grid-cols-1 gap-6 md:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`skel-${String(i)}`}
                className="animate-pulse rounded-md bg-bg-surface"
              />
            ))
          : featuredProjects.map((project, i) => (
              <div
                key={project.slug}
                className="flex flex-col overflow-hidden rounded-md border border-border bg-bg-surface"
              >
                <div className="flex-1 bg-gradient-to-br from-accent/20 to-bg-elevated" />
                <div className="flex flex-col gap-1.5 px-5 py-3.5">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[3px] text-accent">
                    {i === 0
                      ? "FEATURED PROJECT"
                      : i === 1
                        ? "SIDE PROJECT"
                        : "DESIGN"}
                  </span>
                  <span className="text-base font-semibold text-fg">
                    {project.title}
                  </span>
                  <span className="text-sm leading-relaxed text-fg-secondary">
                    {project.description}
                  </span>
                </div>
              </div>
            ))}
      </div>

      {/* ── Row 3: Writing + Contact ── */}
      <div className="flex h-[280px] gap-6">
        {/* Writing Card */}
        <div className="flex flex-1 flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[3px] text-accent">
            LATEST WRITING
          </span>
          <div className="flex flex-col gap-2.5">
            {latestWriting.map((item) => (
              <WritingLink key={item.slug} item={item} />
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="flex w-[400px] shrink-0 flex-col gap-4 rounded-md border border-border bg-bg-surface p-6">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[3px] text-accent">
            GET IN TOUCH
          </span>
          <p className="text-lg leading-relaxed text-fg">
            I&apos;m always open to interesting
            <br />
            projects and conversations.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-mono text-[15px] text-bg transition-opacity hover:opacity-90"
          >
            {siteConfig.email}
            <span>→</span>
          </a>
          <div className="flex gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-fg-muted transition-colors hover:text-fg-secondary"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-fg-muted transition-colors hover:text-fg-secondary"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-fg-muted transition-colors hover:text-fg-secondary"
            >
              Twitter
            </a>
          </div>
          <span className="font-mono text-xs leading-relaxed text-fg-muted">
            Usually responds within 24 hours.
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Sub-components ── */

function InfoCardBlock({ card }: { card: InfoCard }) {
  return (
    <div className="flex w-[280px] flex-col overflow-hidden border border-border bg-bg-surface">
      <div className="px-5 pb-1.5 pt-4">
        <span className="font-mono text-[11px] font-bold tracking-[3px] text-accent">
          {card.label}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-5 pb-3.5">
        {card.items.map((item) => (
          <span
            key={item.text}
            className={`text-[13px] leading-relaxed ${item.muted ? "text-fg-secondary" : "text-fg"}`}
          >
            → {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}

function TechBadgeChip({ badge }: { badge: TechBadge }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-sm border-[3px] border-accent bg-bg-elevated px-3.5 py-1.5 shadow-[5px_7px_0_#0A0A0A]">
      <div
        className="h-[22px] w-[22px] rounded-full"
        style={{ backgroundColor: badge.color }}
      />
      <span className="font-mono text-sm font-medium text-fg-secondary">
        {badge.name}
      </span>
    </div>
  )
}

function WritingLink({ item }: { item: WritingItem }) {
  return (
    <Link
      to="/blog/$postSlug"
      params={{ postSlug: item.slug }}
      className={`text-[15px] leading-relaxed transition-colors hover:text-accent ${
        item.muted ? "text-fg-secondary" : "text-fg"
      }`}
    >
      → {item.title}
    </Link>
  )
}
