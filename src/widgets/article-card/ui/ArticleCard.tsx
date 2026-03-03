import { Badge, Card, CardContent } from "@/shared/ui"
import { cn } from "@/lib/utils"

interface ArticleCardProps {
  title: string
  description: string
  date: string
  category: string
  readTime: string
  slug: string
  className?: string
}

export function ArticleCard({
  title,
  description,
  date,
  category,
  readTime,
  slug,
  className,
}: ArticleCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="relative h-48 bg-bg-elevated">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-bg-elevated" />
        <div className="absolute left-3 top-3">
          <Badge variant="accent">{category}</Badge>
        </div>
      </div>
      <CardContent className="pt-4">
        <p className="font-mono text-xs text-fg-muted">{date}</p>
        <a
          href={`/blog/${slug}`}
          className="mt-1 block text-lg font-semibold text-fg transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {title}
        </a>
        <p className="mt-1 line-clamp-2 text-sm text-fg-secondary">
          {description}
        </p>
        <p className="mt-3 font-mono text-xs text-fg-muted">{readTime}</p>
      </CardContent>
    </Card>
  )
}
