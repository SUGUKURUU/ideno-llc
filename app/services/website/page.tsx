"use client";

import WebHeader from "@/components/website/WebHeader";
import WebHero from "@/components/website/WebHero";
import WebProblems from "@/components/website/WebProblems";
import WebService from "@/components/website/WebService";
import WebFeatures from "@/components/website/WebFeatures";
import WebWorkflow from "@/components/website/WebWorkflow";
import WebPricing from "@/components/website/WebPricing";
import WebWhyUs from "@/components/website/WebWhyUs";
import WebCrossSell from "@/components/website/WebCrossSell";
import WebCta from "@/components/website/WebCta";
import Footer from "@/components/Footer";

const pageTitle = "ホームページ制作サービス";
const pageDescription =
  "成果につながるホームページを。中小企業・スタートアップ向けに、信頼構築・問い合わせ獲得・採用強化につながるコーポレートサイト・採用サイト・LP制作を行います。SNS運用と組み合わせた集客もワンストップで対応。";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ホームページ制作",
  provider: {
    "@type": "Organization",
    name: "合同会社出野",
    alternateName: "ideno LLC",
  },
  areaServed: "JP",
  description: pageDescription,
  offers: [
    { "@type": "Offer", name: "LIGHT", price: "200000", priceCurrency: "JPY" },
    { "@type": "Offer", name: "STANDARD", price: "350000", priceCurrency: "JPY" },
    { "@type": "Offer", name: "PREMIUM", price: "500000", priceCurrency: "JPY" },
  ],
};

export default function WebsiteServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebHeader />
      <main>
        <WebHero />
        <WebProblems />
        <WebService />
        <WebFeatures />
        <WebWorkflow />
        <WebPricing />
        <WebWhyUs />
        <WebCrossSell />
        <WebCta />
      </main>
      <Footer />
    </>
  );
}
