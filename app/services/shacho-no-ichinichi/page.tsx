"use client";

import ShachoHeader from "@/components/shacho/ShachoHeader";
import ShachoContent from "@/components/shacho/ShachoContent";
import Footer from "@/components/Footer";

const pageTitle = "社長の一日 | 密着ドキュメンタリー";
const pageDescription =
  "経営者のリアルを映像に。出社から退社まで密着し、会社ではなく「人」を伝えるドキュメンタリー動画を制作します。採用・営業・ブランディングに活用できる映像コンテンツ。";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "経営者密着ドキュメンタリー動画制作",
  name: "社長の一日",
  provider: {
    "@type": "Organization",
    name: "合同会社出野",
    alternateName: "ideno LLC",
  },
  areaServed: "JP",
  description: pageDescription,
};

export default function ShachoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShachoHeader />
      <ShachoContent />
      <Footer />
    </>
  );
}
