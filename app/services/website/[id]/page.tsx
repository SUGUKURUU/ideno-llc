"use client";

import { getPortfolioCaseById } from "@/lib/website-portfolio";
import WebHeader from "@/components/website/WebHeader";
import PortfolioDetail from "@/components/website/PortfolioDetail";
import RelatedPortfolios from "@/components/website/RelatedPortfolios";
import WebsiteFinalCta from "@/components/website/WebsiteFinalCta";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [portfolioCase, setPortfolioCase] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const caseData = getPortfolioCaseById(id);
      setPortfolioCase(caseData);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">読み込み中...</div>
      </div>
    );
  }

  if (!portfolioCase) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">ページが見つかりません</div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: portfolioCase.metaTitle,
    description: portfolioCase.metaDescription,
    image: "/og-image.png",
    datePublished: new Date().toISOString().split('T')[0],
    author: {
      "@type": "Organization",
      name: "合同会社出野",
    },
    publisher: {
      "@type": "Organization",
      name: "合同会社出野",
      logo: {
        "@type": "ImageObject",
        url: "/logo.svg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebHeader />
      <main>
        <PortfolioDetail portfolioCase={portfolioCase} />
        <RelatedPortfolios currentCaseId={id} />
        <WebsiteFinalCta />
      </main>
      <Footer />
    </>
  );
}
