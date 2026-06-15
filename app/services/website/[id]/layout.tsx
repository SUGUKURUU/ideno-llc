import { Metadata } from "next";
import { getPortfolioCaseById, getAllPortfolioCaseIds } from "@/lib/website-portfolio";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const portfolioCase = getPortfolioCaseById(id);

  if (!portfolioCase) {
    return {
      title: "ページが見つかりません",
      description: "お探しのページは見つかりませんでした。",
    };
  }

  const pageTitle = portfolioCase.metaTitle;
  const pageDescription = portfolioCase.metaDescription;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "ホームページ制作",
      portfolioCase.category,
      portfolioCase.industry,
      "実績",
      "ケーススタディ",
      "成功事例",
    ],
    authors: [{ name: "株式会社エグゼクティブサポート" }],
    creator: "株式会社エグゼクティブサポート",
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `https://ideno-llc.jp/services/website/${id}`,
      title: pageTitle,
      description: pageDescription,
      siteName: "株式会社エグゼクティブサポート | EXECUTIVE SUPPORT",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://ideno-llc.jp/services/website/${id}`,
    },
  };
}

export async function generateStaticParams() {
  const ids = getAllPortfolioCaseIds();
  return ids.map((id) => ({
    id,
  }));
}

export default function PortfolioDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
