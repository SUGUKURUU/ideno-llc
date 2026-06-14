"use client";

import WebHeader from "@/components/website/WebHeader";
import WebsiteHero from "@/components/website/WebsiteHero";
import WebsiteProblems from "@/components/website/WebsiteProblems";
import WebsiteDifferential from "@/components/website/WebsiteDifferential";
import WebPricing from "@/components/website/WebPricing";
import WebsitePortfolio from "@/components/website/WebsitePortfolio";
import WebsiteClientVoices from "@/components/website/WebsiteClientVoices";
import WebsiteProcess from "@/components/website/WebsiteProcess";
import WebsiteFaq from "@/components/website/WebsiteFaq";
import WebsiteFinalCta from "@/components/website/WebsiteFinalCta";
import Footer from "@/components/Footer";

const pageDescription =
  "企業サイト制作で成果を出す。UX設計、説得力あるコピーライティング、制作後サポート。実績50+社。問い合わせが平均3.5倍に増加。初回相談無料。";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ホームページ制作サービス",
  description: pageDescription,
  serviceType: "Web制作・ホームページ制作",
  provider: {
    "@type": "LocalBusiness",
    name: "合同会社出野",
    alternateName: "ideno LLC",
    areaServed: "JP",
    url: "https://ideno-llc.vercel.app",
    description: "SNS運用代行とホームページ制作で企業のデジタル化をサポート",
  },
  offers: [
    {
      "@type": "Offer",
      name: "ライト - 小規模コーポレートサイト",
      description: "3~5ページの基本的なコーポレートサイト",
      price: "500000",
      priceCurrency: "JPY"
    },
    {
      "@type": "Offer",
      name: "スタンダード - コーポレートサイト標準",
      description: "10~15ページ、SEO基本対策",
      price: "800000",
      priceCurrency: "JPY"
    },
    {
      "@type": "Offer",
      name: "プロフェッショナル - LP+コーポレート複合",
      description: "複数のLPと連携、SEO強化",
      price: "1200000",
      priceCurrency: "JPY"
    },
    {
      "@type": "Offer",
      name: "エンタープライズ - 完全カスタム",
      description: "採用サイト、複雑機能、充実サポート",
      price: "1500000",
      priceCurrency: "JPY"
    }
  ],
};

export default function WebsiteServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ホームページ制作にはどのくらいの期間がかかりますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "一般的には3~4ヶ月です。要件や規模により前後しますが、ヒアリング・戦略立案(1-2週間) → デザイン(2-3週間) → コーディング(3-4週間) → テスト(1-2週間)の流れで進めます。"
                }
              }
            ]
          })
        }}
      />
      <WebHeader />
      <main>
        <WebsiteHero />
        <WebsiteProblems />
        <WebsiteDifferential />
        <WebPricing />
        <WebsitePortfolio />
        <WebsiteClientVoices />
        <WebsiteProcess />
        <WebsiteFaq />
        <WebsiteFinalCta />
      </main>
      <Footer />
    </>
  );
}
