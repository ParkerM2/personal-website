import { Link } from "@tanstack/react-router"
import { useHomePage } from "../model/useHomePage"
import type {
  BentoCard,
  BgCircle,
  ContactData,
  GitHubActivityCard,
  ProjectCard,
  TechBadge,
  TimelineArticle,
} from "../model/useHomePage"

export function HomePage() {
  const {
    hero,
    currentlyCard,
    githubActivity,
    interestsCard,
    techStack,
    projects,
    timelineArticles,
    contact,
    bgCircles,
  } = useHomePage()

  return (
    <div className="relative overflow-hidden">
      {/* ── Animated Circle Background ── */}
      <CircleBackground circles={bgCircles} />

      {/* ── Content Layer ── */}
      <div className="relative z-10 mx-auto flex max-w-[2400px] flex-col gap-6 px-4 py-5 sm:px-6 md:px-10 lg:px-16">
        {/* ── Hero Zone ── */}
        <section className="flex flex-col gap-8 min-[1700px]:flex-row min-[1700px]:items-start min-[1700px]:justify-between">
          {/* Hero Left */}
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start min-[1700px]:min-w-0 min-[1700px]:flex-1">
            {/* Avatar */}
            <div className="h-[200px] w-[200px] shrink-0 overflow-hidden rounded-full border-2 border-accent bg-gradient-to-b from-bg-elevated to-bg-surface">
              <img
                src={hero.avatarUrl}
                alt={hero.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            </div>

            {/* Hero Text */}
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-4xl font-bold leading-[1.1] text-fg sm:text-[44px]">
                {hero.name}
              </h1>
              <p className="font-display text-lg leading-[1.4] text-fg-secondary sm:text-xl">
                {hero.title}
              </p>

              {/* About Row */}
              <div className="flex flex-wrap items-center gap-3">
                {hero.aboutItems.map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="font-mono text-xs text-fg-muted">
                        ·
                      </span>
                    )}
                    <span className="font-mono text-xs leading-relaxed text-fg-muted">
                      {item}
                    </span>
                  </span>
                ))}
              </div>

              {/* Available Badge */}
              <div className="flex items-center gap-1.5 self-start rounded-full bg-accent px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0A0A0A]" />
                <span className="font-mono text-sm font-bold text-[#0A0A0A] sm:text-[15px]">
                  {hero.badge}
                </span>
              </div>

              {/* Links Row */}
              <div className="flex items-center gap-6">
                {hero.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-mono text-[15px] font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-8 sm:gap-12">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-1.5">
                    <span className="font-display text-2xl font-extrabold text-accent sm:text-[28px]">
                      {stat.value}
                    </span>
                    <span className="font-mono text-sm text-fg-muted sm:text-base">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Bento Cards */}
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 min-[1700px]:mx-0 min-[1700px]:shrink-0 min-[1700px]:overflow-visible min-[1700px]:px-0">
            <BentoCardComponent card={currentlyCard} width="w-[300px] min-[1700px]:w-[320px]" />
            <GitHubActivityCardComponent card={githubActivity} />
            <BentoCardComponent card={interestsCard} width="w-[300px] min-[1700px]:w-[320px]" />
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-border" />

        {/* ── Tech Stack Marquee ── */}
        <TechStackMarquee badges={techStack} />

        {/* ── Projects Row ── */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCardComponent key={project.slug} project={project} />
          ))}
        </section>

        {/* ── Writing + Contact Row ── */}
        <section className="flex flex-col gap-6 lg:flex-row">
          {/* Writing Card */}
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <span className="font-mono text-xs font-bold tracking-[3px] text-accent">
              LATEST WRITING
            </span>
            <TimelineComponent articles={timelineArticles} />
          </div>

          {/* Contact Card */}
          <ContactCardComponent contact={contact} />
        </section>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════════════════ */

/* ── Circle Background ── */

function CircleBackground({ circles }: { circles: BgCircle[] }) {
  const designWidth = 1440
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {circles.map((c, i) => {
        const leftPercent = ((c.x + c.size / 2) / designWidth) * 100
        const topPercent = (c.y / 500) * 100
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: c.size,
              height: c.size,
              left: `${String(leftPercent)}%`,
              top: `${String(topPercent)}%`,
              borderWidth: c.strokeWidth,
              borderStyle: "solid",
              borderColor:
                c.color === "accent" ? "var(--accent)" : "#555555",
              opacity: c.opacity,
              transform: "translate(-50%, -50%)",
            }}
          />
        )
      })}
    </div>
  )
}

/* ── Bento Card (CURRENTLY / INTERESTS) ── */

function BentoCardComponent({
  card,
  width,
}: {
  card: BentoCard
  width: string
}) {
  return (
    <div
      className={`${width} shrink-0 overflow-hidden rounded-lg border border-border bg-bg-surface`}
    >
      {/* Header */}
      <div className="px-6 pb-2 pt-5">
        <span className="font-mono text-xs font-bold tracking-[3px] text-accent">
          {card.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5 px-6 pb-2">
        {card.items.map((item) => (
          <div key={item.text} className="flex flex-col gap-1">
            <span className="font-display text-[15px] leading-relaxed text-fg">
              {item.text}
            </span>
            <div className="overflow-hidden rounded-md border border-border px-2.5 py-1">
              <span className="font-display text-xs leading-relaxed text-fg-muted">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── GitHub Activity Card ── */

function GitHubActivityCardComponent({
  card,
}: {
  card: GitHubActivityCard
}) {
  return (
    <div className="w-[340px] shrink-0 overflow-hidden rounded-lg border border-border bg-bg-surface min-[1700px]:w-[360px]">
      {/* Header */}
      <div className="px-6 pb-2 pt-5">
        <span className="font-mono text-xs font-bold tracking-[3px] text-accent">
          {card.label}
        </span>
      </div>

      {/* Heatmap sections */}
      <div className="flex flex-col gap-4 px-6 pb-5">
        {card.sections.map((section) => (
          <div key={section.label} className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] text-fg-muted">
              {section.label}
            </span>
            <HeatmapGrid columns={section.columns} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Heatmap Grid ── */

function HeatmapGrid({ columns }: { columns: number }) {
  const rows = 7
  return (
    <div
      className="flex gap-0.5 overflow-hidden"
      style={{ height: 56 }}
    >
      {Array.from({ length: columns }).map((_, col) => (
        <div key={col} className="flex flex-col gap-0.5">
          {Array.from({ length: rows }).map((_, row) => {
            const seed = (col * 7 + row * 13 + col * row) % 5
            const opacity =
              seed === 0
                ? 0.1
                : seed === 1
                  ? 0.25
                  : seed === 2
                    ? 0.5
                    : seed === 3
                      ? 0.75
                      : 1
            return (
              <div
                key={row}
                className="heatmap-cell"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--accent) ${String(opacity * 100)}%, transparent)`,
                }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

/* ── Tech Stack Marquee ── */

function TechStackMarquee({ badges }: { badges: TechBadge[] }) {
  const allBadges = [...badges, ...badges]
  return (
    <section className="overflow-hidden py-3" style={{ height: 72 }}>
      <div className="animate-marquee flex w-max items-center gap-6">
        {allBadges.map((badge, i) => (
          <div
            key={`${badge.name}-${String(i)}`}
            className="flex shrink-0 items-center gap-2 border-[3px] border-accent bg-bg-elevated px-3.5 py-1.5"
            style={{
              boxShadow: "6px 8px 0 #0A0A0A",
            }}
          >
            <span
              className="h-6 w-6 shrink-0 rounded-full"
              style={{ backgroundColor: badge.color }}
            />
            <span className="font-mono text-[15px] font-medium text-fg-secondary">
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Project Card ── */

function ProjectCardComponent({ project }: { project: ProjectCard }) {
  return (
    <Link
      to="/projects/$projectSlug"
      params={{ projectSlug: project.slug }}
      className="group flex h-[400px] flex-col overflow-hidden rounded-lg border border-border bg-bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_4px_24px_var(--accent-glow)]"
    >
      {/* Screenshot Area */}
      <div className="flex-1 overflow-hidden bg-bg-elevated">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-1.5 px-5 py-4">
        <span
          className={`font-mono text-[11px] font-bold tracking-[3px] ${
            project.labelColor === "accent"
              ? "text-accent"
              : "text-fg-muted"
          }`}
        >
          {project.label}
        </span>
        <h3 className="font-display text-base font-semibold text-fg">
          {project.title}
        </h3>
        <p className="font-display text-[15px] leading-relaxed text-fg-secondary">
          {project.description}
        </p>
        <div className="flex gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-bg-elevated px-2.5 py-1 font-mono text-xs text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

/* ── Timeline Component ── */

function TimelineComponent({ articles }: { articles: TimelineArticle[] }) {
  const row1 = articles.slice(0, 4)
  const row2 = articles.slice(4, 8)

  return (
    <>
      {/* ── Mobile: vertical timeline (<md) ── */}
      <div className="flex flex-col md:hidden">
        <div className="relative flex flex-col gap-4 pl-6">
          {/* Vertical connecting line */}
          <div className="absolute bottom-0 left-[5px] top-0 w-0.5 bg-accent" />
          {articles.map((article) => (
            <div key={article.slug} className="relative flex items-start">
              {/* Dot on the line */}
              <div className="absolute -left-6 top-4 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
              <TimelineCard article={article} isMobile />
            </div>
          ))}
          {/* View All at the end */}
          <div className="relative flex items-start">
            <div className="absolute -left-6 top-3 h-2.5 w-2.5 rounded-full border-2 border-accent bg-accent" />
            <ViewAllButton isMobile />
          </div>
        </div>
      </div>

      {/* ── Tablet: 2-col grid (md to xl) ── */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4 xl:hidden">
        {articles.map((article) => (
          <TimelineCard key={article.slug} article={article} />
        ))}
        <ViewAllButton />
      </div>

      {/* ── Desktop: horizontal 2-row snake (xl+) ── */}
      <div className="hidden xl:flex xl:flex-col xl:gap-0">
        {/* Row 1 */}
        <div className="flex items-center pb-4">
          {row1.map((article, i) => (
            <div key={article.slug} className="flex items-center">
              {i > 0 && (
                <div className="h-0.5 w-[68px] shrink-0 bg-accent" />
              )}
              <TimelineCard article={article} />
            </div>
          ))}
        </div>

        {/* Wrap Connector — uses full width instead of hardcoded value */}
        <div className="relative h-[54px] w-full">
          {/* Right vertical — drops down from end of Row 1 */}
          <div
            className="absolute right-0 top-0 bg-accent"
            style={{ width: 3, height: 30 }}
          />
          {/* Horizontal — spans full width at mid-height */}
          <div
            className="absolute inset-x-0 bg-accent"
            style={{ height: 3, top: 27 }}
          />
          {/* Left vertical — rises up to Row 2 start */}
          <div
            className="absolute left-0 bg-accent"
            style={{ width: 3, height: 24, top: 27 }}
          />
        </div>

        {/* Row 2 */}
        <div className="flex items-center">
          {row2.map((article, i) => (
            <div key={article.slug} className="flex items-center">
              {i > 0 && (
                <div className="h-0.5 w-[68px] shrink-0 bg-accent" />
              )}
              <TimelineCard article={article} />
            </div>
          ))}
          {/* View All connector + button */}
          <div className="h-0.5 w-[68px] shrink-0 bg-accent" />
          <ViewAllButton />
        </div>
      </div>
    </>
  )
}

/* ── Timeline Card (Neo-Brutalist) ── */

function TimelineCard({
  article,
  isMobile,
}: {
  article: TimelineArticle
  isMobile?: boolean
}) {
  return (
    <Link
      to="/blog/$postSlug"
      params={{ postSlug: article.slug }}
      className={`timeline-card group relative shrink-0 ${isMobile === true ? "w-full" : "w-[280px]"}`}
    >
      {/* Neo-brutalist shadow (behind, offset) */}
      <div className="neo-shadow neo-scanlines rounded-none" />

      {/* Corner ticks */}
      <span className="corner-tick tr" />
      <span className="corner-tick bl" />
      <span className="corner-tick br" />

      {/* Main card */}
      <div className="relative overflow-hidden border-[3px] border-accent bg-[#0A0A0A]">
        <div className="flex flex-col gap-2 px-4 py-3">
          {/* Date */}
          <span className="font-mono text-[11px] font-bold tracking-[2px] text-accent">
            {article.date}
          </span>
          {/* Title */}
          <h4 className="font-display text-[13px] font-semibold text-fg">
            {article.title}
          </h4>
          {/* Preview */}
          <div className="flex gap-2 overflow-hidden rounded bg-bg-elevated p-2">
            <div className="w-0.5 shrink-0 self-stretch bg-accent" />
            <p className="line-clamp-2 font-mono text-[10px] leading-[1.4] text-fg-secondary">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

/* ── View All Button (Neo-Brutalist) ── */

function ViewAllButton({ isMobile }: { isMobile?: boolean }) {
  return (
    <Link
      to="/blog"
      className={`timeline-card group relative shrink-0 ${isMobile === true ? "w-full" : "w-[170px]"}`}
    >
      {/* Neo shadow */}
      <div
        className="neo-shadow neo-scanlines rounded-none"
        style={{ height: 44 }}
      />

      {/* Corner ticks */}
      <span className="corner-tick tr" />
      <span className="corner-tick bl" />
      <span className="corner-tick br" />

      {/* Button */}
      <div className="relative flex h-[44px] items-center justify-center border-[3px] border-accent bg-bg-surface transition-colors group-hover:bg-accent/10">
        <span className="font-display text-sm font-semibold text-fg">
          View all
        </span>
      </div>
    </Link>
  )
}

/* ── Contact Card ── */

function ContactCardComponent({ contact }: { contact: ContactData }) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border border-border bg-bg-surface p-6 lg:w-[440px] lg:shrink-0">
      <span className="font-mono text-[11px] font-bold tracking-[3px] text-accent">
        {contact.label}
      </span>

      <p className="whitespace-pre-line font-display text-lg leading-relaxed text-fg">
        {contact.text}
      </p>

      {/* Email button */}
      <a
        href={`mailto:${contact.email}`}
        className="flex items-center gap-2 self-start rounded-lg bg-accent px-5 py-2.5 transition-opacity hover:opacity-90"
      >
        <span className="font-mono text-[15px] text-[#0A0A0A]">
          {contact.email}
        </span>
        <span className="font-mono text-[15px] text-[#0A0A0A]">→</span>
      </a>

      {/* Social links */}
      <div className="flex gap-5">
        {contact.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="font-mono text-[13px] text-fg-muted transition-colors hover:text-accent"
          >
            {social.label}
          </a>
        ))}
      </div>

      <span className="font-mono text-xs leading-relaxed text-fg-muted">
        {contact.responseNote}
      </span>
    </div>
  )
}
