"use client";

import SnsHeader from "@/components/sns-daiko/SnsHeader";
import SnsHero from "@/components/sns-daiko/SnsHero";
import SnsProblems from "@/components/sns-daiko/SnsProblems";
import SnsService from "@/components/sns-daiko/SnsService";
import SnsTarget from "@/components/sns-daiko/SnsTarget";
import SnsMerits from "@/components/sns-daiko/SnsMerits";
import SnsDemerits from "@/components/sns-daiko/SnsDemerits";
import SnsComparison from "@/components/sns-daiko/SnsComparison";
import SnsWhyUs from "@/components/sns-daiko/SnsWhyUs";
import SnsCta from "@/components/sns-daiko/SnsCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const pageTitle = "SNS運用代行サービス";
const pageDescription =
  "経営者・企業のSNS運用を完全サポート。投稿代行、アカウント設計、キャンペーン企画、広告運用まで。リソース不足、ノウハウ不足、自社運用失敗の企業に。成果が出るまで徹底サポート。";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SNS運用代行",
  provider: {
    "@type": "Organization",
    name: "合同会社出野",
    alternateName: "ideno LLC",
  },
  areaServed: "JP",
  description: pageDescription,
  offers: [
    { "@type": "Offer", name: "STANDARD", price: "100000", priceCurrency: "JPY" },
    { "@type": "Offer", name: "PREMIUM", price: "125000", priceCurrency: "JPY" },
  ],
};

export default function SnsDaikoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SnsHeader />
      <main>
        <SnsHero />
        <SnsProblems />
        <SnsService />
        <SnsTarget />
        <SnsMerits />
        <SnsDemerits />
        <SnsComparison />
        <SnsWhyUs />
        <SnsCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
