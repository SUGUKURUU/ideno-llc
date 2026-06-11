"use client";

import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCards from "@/components/services/ServiceCards";
import Comparison from "@/components/services/Comparison";
import RecommendedFlow from "@/components/services/RecommendedFlow";
import CrossSelling from "@/components/services/CrossSelling";
import ServicesCta from "@/components/services/ServicesCta";
import Footer from "@/components/Footer";

const pageTitle = "サービス一覧";
const pageDescription =
  "合同会社出野の3つのサービス（SNS運用代行・ホームページ制作・社長の一日）をご紹介。認知拡大から信頼構築まで、企業の魅力を伝えるための最適なサービスをお選びいただけます。";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "合同会社出野 サービス一覧",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "SNS運用代行",
      url: "https://ideno-llc.jp/services/sns",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ホームページ制作",
      url: "https://ideno-llc.jp/services/website",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "社長の一日",
      url: "https://ideno-llc.jp/services/shacho-no-ichinichi",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHeader />
      <main>
        <ServicesHero />
        <ServiceCards />
        <Comparison />
        <RecommendedFlow />
        <CrossSelling />
        <ServicesCta />
      </main>
      <Footer />
    </>
  );
}
