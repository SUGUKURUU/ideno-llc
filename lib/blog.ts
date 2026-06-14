import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ArticleMeta = {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  ogDescription: string;
  readingTime: string;
  category: string;
  tags: string[];
  relatedArticles: { slug: string; title: string }[];
};

export type Article = ArticleMeta & {
  content: string;
};

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter(
      (name) =>
        name !== "README.md" &&
        fs.statSync(path.join(CONTENT_DIR, name)).isDirectory()
    );
}

export function getArticleBySlug(slug: string): Article {
  const filePath = path.join(CONTENT_DIR, slug, "index.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as ArticleMeta),
    slug,
    content,
  };
}

export function getAllArticles(): Article[] {
  return getAllSlugs()
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => a.metaTitle.localeCompare(b.metaTitle, "ja"));
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export const CATEGORIES: { slug: string; label: string }[] = [
  { slug: "SNS運用", label: "SNS運用" },
  { slug: "HP制作", label: "HP制作" },
  { slug: "動画・社長ブランディング", label: "動画・社長ブランディング" },
  { slug: "社長ブランディング", label: "社長ブランディング" },
  { slug: "総合マーケティング", label: "総合マーケティング" },
];

const CATEGORY_IMAGE_MAP: Record<string, string> = {
  "SNS運用": "/blog/og-sns.svg",
  "HP制作": "/blog/og-website.svg",
  "動画・社長ブランディング": "/blog/og-video.svg",
  "社長ブランディング": "/blog/og-branding.svg",
  "総合マーケティング": "/blog/og-strategy.svg",
  "マーケティング戦略": "/blog/og-strategy.svg",
  "動画マーケティング": "/blog/og-video.svg",
};

export function getCategoryImage(category: string): string {
  return CATEGORY_IMAGE_MAP[category] ?? "/blog/og-strategy.svg";
}
