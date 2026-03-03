import { Link } from "@tanstack/react-router"
import { useHomePage } from "../model/useHomePage"
import type { ProjectCard, ArticleCard } from "../model/useHomePage"

export function HomePage() {
  const { projectCards, latestArticles, skillTags } = useHomePage()

  return (
    <div className="flex gap-[60px] px-10 py-10 lg:px-20">
      {/* ── Profile Column (Left) ── */}
      <div className="flex w-full flex-col items-center gap-6 lg:w-[480px] lg:shrink-0">
        {/* Ring Background + Avatar */}
        <div className="relative h-[320px] w-full overflow-hidden">
          {/* Animated rings */}
          <Ring
            size={44}
            outerSize={76}
            x={30}
            y={50}
            color="#555555"
            innerOpacity={0.5}
            outerOpacity={0.25}
            delay={0}
          />
          <Ring
            size={40}
            outerSize={70}
            x={380}
            y={60}
            color="var(--accent)"
            innerOpacity={0.4}
            outerOpacity={0.2}
            delay={2}
          />
          <Ring
            size={36}
            outerSize={62}
            x={60}
            y={240}
            color="var(--accent)"
            innerOpacity={0.35}
            outerOpacity={0.18}
            delay={4}
          />
          <Ring
            size={44}
            outerSize={76}
            x={400}
            y={230}
            color="#555555"
            innerOpacity={0.5}
            outerOpacity={0.25}
            delay={1}
          />
          {/* Avatar */}
          <div
            className="absolute left-1/2 top-[80px] h-[140px] w-[140px] -translate-x-1/2 rounded-full border-[3px] border-accent bg-gradient-to-b from-bg-elevated to-bg-surface"
            aria-hidden="true"
          />
        </div>

        {/* Name Badge */}
        <div className="group flex items-center gap-2 rounded-full border border-accent bg-bg-surface px-4 py-1.5 transition-shadow hover:shadow-[0_0_20px_var(--accent-glow)]">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-base font-semibold text-fg">
            Parker Manning
          </span>
        </div>

        {/* Tagline */}
        <p className="font-mono text-xl text-fg opacity-50">
          Software Developer
        </p>

        {/* Description */}
        <p className="text-center text-base leading-relaxed text-fg opacity-70">
          Building intelligent tools for developers — from autonomous coding
          agents to design systems that scale.
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {skillTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-bg-surface px-3 py-1 font-mono text-[11px] text-fg opacity-60 transition-all hover:border-accent hover:opacity-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Content Column (Right) ── */}
      <div className="flex min-w-0 flex-1 flex-col gap-12">
        {/* Featured Work */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[13px] font-semibold text-accent opacity-80">
              // FEATURED WORK
            </span>
            <h2 className="font-display text-2xl font-bold text-fg">
              Recent Projects
            </h2>
          </div>

          {/* Card Row 1 */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projectCards.slice(0, 2).map((card) => (
              <ProjectCardItem key={card.slug} card={card} />
            ))}
          </div>
          {/* Card Row 2 */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projectCards.slice(2, 4).map((card) => (
              <ProjectCardItem key={card.slug} card={card} />
            ))}
          </div>
        </section>

        {/* Writing / Timeline */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[13px] font-semibold text-accent opacity-80">
              // WRITING
            </span>
            <h2 className="font-display text-2xl font-bold text-fg">
              Latest Articles
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {latestArticles.map((article) => (
              <ArticleCardItem key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

/* ── Sub-components ── */

function Ring({
  size,
  outerSize,
  x,
  y,
  color,
  innerOpacity,
  outerOpacity,
  delay,
}: {
  size: number
  outerSize: number
  x: number
  y: number
  color: string
  innerOpacity: number
  outerOpacity: number
  delay: number
}) {
  const outerOffset = (outerSize - size) / 2
  return (
    <>
      <div
        className="animate-ring-float absolute rounded-full border-2"
        style={{
          width: size,
          height: size,
          left: x,
          top: y,
          borderColor: color,
          opacity: innerOpacity,
          animationDelay: `${String(delay)}s`,
        }}
      />
      <div
        className="animate-ring-float absolute rounded-full border-2"
        style={{
          width: outerSize,
          height: outerSize,
          left: x - outerOffset,
          top: y - outerOffset,
          borderColor: color,
          opacity: outerOpacity,
          animationDelay: `${String(delay + 0.5)}s`,
        }}
      />
    </>
  )
}

function ProjectCardItem({ card }: { card: ProjectCard }) {
  return (
    <Link
      to="/projects/$projectSlug"
      params={{ projectSlug: card.slug }}
      className="group flex flex-col gap-3.5 rounded-xl border border-fg/10 bg-bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_4px_24px_var(--accent-glow)]"
    >
      <h3 className="font-display text-base font-bold text-fg">
        {card.title}
      </h3>
      <p className="text-[13px] leading-relaxed text-fg opacity-60">
        {card.description}
      </p>
      <span className="font-mono text-[11px] text-accent opacity-70">
        {card.techTags}
      </span>
      <span className="font-mono text-xs font-medium text-accent transition-all group-hover:translate-x-0.5">
        View Project →
      </span>
    </Link>
  )
}

function ArticleCardItem({ article }: { article: ArticleCard }) {
  return (
    <Link
      to="/blog/$postSlug"
      params={{ postSlug: article.slug }}
      className="group flex flex-col gap-3 rounded-xl border border-fg/10 bg-bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_4px_24px_var(--accent-glow)]"
    >
      <span className="font-mono text-[11px] text-accent opacity-70">
        {article.date}
      </span>
      <h3 className="font-display text-base font-bold leading-snug text-fg">
        {article.title}
      </h3>
      <p className="text-[13px] leading-relaxed text-fg opacity-60">
        {article.description}
      </p>
      <span className="font-mono text-xs font-medium text-accent transition-all group-hover:translate-x-0.5">
        Read More →
      </span>
    </Link>
  )
}
