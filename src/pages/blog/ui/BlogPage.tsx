import { Container, Grid, SectionLabel, Separator } from "@/shared/ui"
import { ArticleCard } from "@/widgets/article-card"
import { useBlogPage } from "../model/useBlogPage"

export function BlogPage() {
  const { featuredArticle, remainingArticles } = useBlogPage()

  return (
    <Container size="lg" className="py-16">
      <SectionLabel label="WRITING" title="Blog & Articles" />
      <div className="mt-10">
        <ArticleCard
          title={featuredArticle.title}
          description={featuredArticle.description}
          date={featuredArticle.date}
          category={featuredArticle.category}
          readTime={featuredArticle.readTime}
          slug={featuredArticle.slug}
          className="col-span-full"
        />
      </div>
      <Separator className="my-10" />
      <Grid cols={3} gap="lg">
        {remainingArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            description={article.description}
            date={article.date}
            category={article.category}
            readTime={article.readTime}
            slug={article.slug}
          />
        ))}
      </Grid>
    </Container>
  )
}
