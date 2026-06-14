import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getArticleBySlug, getCategoryImage } from "@/lib/blog";
import type { Metadata } from "next";

const SITE_URL = "https://ideno-llc.vercel.app";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = getArticleBySlug(slug);
    const ogImage = getCategoryImage(article.category);
    return {
      title: article.metaTitle,
      description: article.metaDescription,
      keywords: article.tags,
      openGraph: {
        title: article.metaTitle,
        description: article.ogDescription,
        type: "article",
        url: `${SITE_URL}/blog/${slug}`,
        images: [{ url: `${SITE_URL}${ogImage}`, width: 1200, height: 630, alt: article.metaTitle }],
      },
      twitter: {
        card: "summary_large_image",
        title: article.metaTitle,
        description: article.ogDescription,
        images: [`${SITE_URL}${ogImage}`],
      },
      alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  "SNS運用": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "HP制作": "bg-green-500/20 text-green-300 border-green-500/30",
  "動画・社長ブランディング": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "社長ブランディング": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "総合マーケティング": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "マーケティング戦略": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "動画マーケティング": "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  let article;
  try {
    article = getArticleBySlug(slug);
  } catch {
    notFound();
  }

  const heroImage = getCategoryImage(article.category);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metaTitle,
    description: article.metaDescription,
    image: `${SITE_URL}${heroImage}`,
    author: {
      "@type": "Organization",
      name: "合同会社出野",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "合同会社出野",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    keywords: article.tags?.join(", "),
    inLanguage: "ja",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Header */}
        <header className="border-b border-white/10 py-4 px-6 sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-[#c9a84c] font-bold text-lg tracking-widest">
              ideno LLC
            </Link>
            <nav className="flex gap-6 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">トップ</Link>
              <Link href="/services/website" className="hover:text-white transition-colors">HP制作</Link>
              <Link href="/services/shacho-no-ichinichi" className="hover:text-white transition-colors">社長の一日</Link>
              <Link href="/blog" className="hover:text-white transition-colors">ブログ</Link>
            </nav>
          </div>
        </header>

        {/* Hero image */}
        <div className="w-full aspect-[1200/420] sm:aspect-[1200/360] overflow-hidden relative bg-[#0d0d0d]">
          <Image
            src={heroImage}
            alt={`${article.category}に関する記事のヒーロー画像 - ${article.metaTitle}`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          {/* Category badge on image */}
          <div className="absolute bottom-6 left-6">
            <span className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${CATEGORY_COLORS[article.category] ?? "bg-white/10 text-white/70 border-white/20"}`}>
              {article.category}
            </span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav aria-label="パンくずリスト" className="text-xs text-white/40 mb-6 flex gap-2 items-center flex-wrap">
            <Link href="/" className="hover:text-white/70">トップ</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white/70">ブログ</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/60 truncate max-w-[200px] sm:max-w-xs">{article.metaTitle.replace(/｜.*$/, "")}</span>
          </nav>

          {/* Reading time & tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-white/30 text-xs flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {article.readingTime}
            </span>
            {article.tags?.slice(0, 4).map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-white/40">
                #{tag}
              </span>
            ))}
          </div>

          {/* Article body */}
          <article
            itemScope
            itemType="https://schema.org/Article"
            className="prose prose-invert prose-sm sm:prose-base max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h1:text-2xl prose-h1:sm:text-3xl prose-h1:mb-6 prose-h1:leading-snug
              prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
              prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#c9a84c]
              prose-p:text-white/80 prose-p:leading-relaxed
              prose-li:text-white/80 prose-li:marker:text-[#c9a84c]
              prose-strong:text-white
              prose-a:text-[#c9a84c] prose-a:no-underline hover:prose-a:underline
              prose-table:text-sm prose-th:text-white prose-th:bg-white/5 prose-td:text-white/70
              prose-blockquote:border-l-4 prose-blockquote:border-[#c9a84c] prose-blockquote:text-white/60 prose-blockquote:bg-white/3 prose-blockquote:px-4
              prose-hr:border-white/10
              prose-code:text-[#c9a84c] prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
            "
          >
            <MDXRemote source={article.content} />
          </article>

          {/* All tags */}
          {article.tags?.length > 4 && (
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-xs text-white/30 mb-3">タグ</p>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-white/40">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related articles */}
          {article.relatedArticles?.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/10">
              <h2 className="text-lg font-bold mb-6 text-white/80">関連記事</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {article.relatedArticles.map((rel) => {
                  let relArticle;
                  try { relArticle = getArticleBySlug(rel.slug); } catch { return null; }
                  const relImage = getCategoryImage(relArticle.category);
                  return (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="block border border-white/10 rounded-xl overflow-hidden hover:border-[#c9a84c]/40 transition-all group"
                    >
                      <div className="relative h-28 bg-[#0d0d0d]">
                        <Image
                          src={relImage}
                          alt={relArticle.category}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-xs border backdrop-blur-sm ${CATEGORY_COLORS[relArticle.category] ?? "bg-white/10 text-white/50 border-white/20"}`}>
                          {relArticle.category}
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-white/70 group-hover:text-[#c9a84c] transition-colors line-clamp-3 leading-snug">
                          {relArticle.metaTitle.replace(/｜.*$/, "")}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 border border-[#c9a84c]/30 rounded-2xl p-8 text-center bg-[#c9a84c]/5">
            <p className="text-[#c9a84c] text-xs tracking-widest mb-2">お気軽にご相談ください</p>
            <h2 className="text-xl font-bold mb-3">まずは無料でご相談を</h2>
            <p className="text-white/60 text-sm mb-5">
              SNS運用代行・ホームページ制作・社長の一日について、<br className="hidden sm:block" />
              どんな小さな疑問でもお気軽にどうぞ。
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#c9a84c] text-black font-bold px-8 py-3 rounded-full hover:bg-[#e5c76b] transition-colors text-sm"
            >
              無料相談する
            </a>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-white/40 hover:text-white text-sm transition-colors">
              ← ブログ一覧へ戻る
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
