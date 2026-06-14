import Link from "next/link";
import Image from "next/image";
import { getAllArticles, CATEGORIES, getCategoryImage } from "@/lib/blog";
import type { Metadata } from "next";

const SITE_URL = "https://ideno-llc.vercel.app";

export const metadata: Metadata = {
  title: "ブログ｜SNS運用・HP制作・社長ブランディングのノウハウ",
  description:
    "中小企業経営者・スタートアップ向けに、SNS運用代行・ホームページ制作・社長ブランディングの実践ノウハウを発信しています。",
  openGraph: {
    title: "ブログ｜SNS運用・HP制作・社長ブランディングのノウハウ",
    description:
      "中小企業経営者・スタートアップ向けに、SNS運用代行・ホームページ制作・社長ブランディングの実践ノウハウを発信しています。",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

// JSON-LD for blog list
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "ideno LLC ブログ",
  description: "中小企業・スタートアップ向けSNS運用・HP制作・社長ブランディングの実践メディア",
  url: `${SITE_URL}/blog`,
  publisher: {
    "@type": "Organization",
    name: "合同会社出野",
    url: SITE_URL,
  },
  inLanguage: "ja",
};

const CATEGORY_COLORS: Record<string, string> = {
  "SNS運用": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "HP制作": "bg-green-500/20 text-green-300 border-green-500/30",
  "動画・社長ブランディング": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "社長ブランディング": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "総合マーケティング": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "マーケティング戦略": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "動画マーケティング": "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function BlogPage() {
  const articles = getAllArticles();

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
              <Link href="/blog" className="text-[#c9a84c]">ブログ</Link>
            </nav>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Hero */}
          <div className="mb-16 text-center">
            <p className="text-[#c9a84c] text-sm tracking-widest mb-3 uppercase">Blog</p>
            <h1 className="text-4xl font-bold mb-4">
              経営者・広報担当のための<br className="sm:hidden" />発信戦略メディア
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              SNS運用・ホームページ制作・社長ブランディングの実践ノウハウを、中小企業経営者・スタートアップ向けに発信しています。
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-3 py-1 rounded-full text-xs border border-white/20 bg-white/10 text-white">
              すべて（{articles.length}）
            </span>
            {CATEGORIES.map((cat) => {
              const count = articles.filter((a) => a.category === cat.slug).length;
              if (count === 0) return null;
              return (
                <span
                  key={cat.slug}
                  className={`px-3 py-1 rounded-full text-xs border ${CATEGORY_COLORS[cat.slug] ?? "bg-white/10 text-white/60 border-white/20"}`}
                >
                  {cat.label}（{count}）
                </span>
              );
            })}
          </div>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const heroImage = getCategoryImage(article.category);
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block border border-white/10 rounded-xl overflow-hidden hover:border-[#c9a84c]/50 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="relative h-44 bg-[#0d0d0d] overflow-hidden">
                    <Image
                      src={heroImage}
                      alt={`${article.category}の記事サムネイル`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                    <span className={`absolute bottom-3 left-3 px-2 py-0.5 rounded text-xs border backdrop-blur-sm ${CATEGORY_COLORS[article.category] ?? "bg-white/10 text-white/50 border-white/20"}`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5 group-hover:bg-white/[0.02] transition-colors">
                    <h2 className="text-sm font-semibold leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors line-clamp-3">
                      {article.metaTitle.replace(/｜.*$/, "")}
                    </h2>
                    <p className="text-white/50 text-xs line-clamp-2 mb-4 leading-relaxed">
                      {article.metaDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/30 text-xs flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {article.readingTime}
                      </span>
                      <span className="text-[#c9a84c] text-xs group-hover:translate-x-1 transition-transform">
                        読む →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 border border-[#c9a84c]/30 rounded-2xl p-10 text-center bg-[#c9a84c]/5">
            <p className="text-[#c9a84c] text-sm tracking-widest mb-3">お気軽にご相談ください</p>
            <h2 className="text-2xl font-bold mb-4">
              発信に関するお悩み、<br className="sm:hidden" />まずは無料でご相談を
            </h2>
            <p className="text-white/60 text-sm mb-6">
              SNS運用代行・ホームページ制作・社長の一日（密着ドキュメンタリー）について、<br className="hidden sm:block" />
              どんな小さな疑問でもお気軽にお問い合わせください。
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#c9a84c] text-black font-bold px-8 py-3 rounded-full hover:bg-[#e5c76b] transition-colors"
            >
              無料相談する
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
