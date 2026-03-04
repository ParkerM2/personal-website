export interface Article {
  title: string
  description: string
  date: string
  category: string
  readTime: string
  slug: string
}

const articles: Article[] = [
  {
    title: "Building a Design System from Scratch",
    description:
      "How I approached creating a cohesive design system for my portfolio using Radix UI, Tailwind CSS, and custom tokens.",
    date: "2024-03-01",
    category: "Design",
    readTime: "8 min read",
    slug: "building-design-system",
  },
  {
    title: "AI-Powered Development Workflows",
    description:
      "Exploring how AI coding assistants are changing the way we build software, from prototyping to production.",
    date: "2024-02-15",
    category: "AI",
    readTime: "6 min read",
    slug: "ai-dev-workflows",
  },
  {
    title: "TypeScript Patterns for React Apps",
    description:
      "Advanced TypeScript patterns that make React applications more type-safe and maintainable.",
    date: "2024-02-01",
    category: "TypeScript",
    readTime: "10 min read",
    slug: "typescript-react-patterns",
  },
  {
    title: "The Future of Web Components",
    description:
      "Why web components matter and how they complement modern frameworks like React and Vue.",
    date: "2024-01-20",
    category: "Web",
    readTime: "5 min read",
    slug: "future-web-components",
  },
]

export function useBlogPage() {
  const featuredArticle = articles[0]
  const remainingArticles = articles.slice(1)

  return {
    featuredArticle,
    remainingArticles,
    allArticles: articles,
  }
}
