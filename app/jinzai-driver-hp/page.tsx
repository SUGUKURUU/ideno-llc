import Hero from "@/components/jinzai/Hero";
import Stats from "@/components/jinzai/Stats";
import Services from "@/components/jinzai/Services";
import Strengths from "@/components/jinzai/Strengths";
import UseCases from "@/components/jinzai/UseCases";
import Flow from "@/components/jinzai/Flow";
import Faq from "@/components/jinzai/Faq";
import CtaBand from "@/components/jinzai/CtaBand";

const faqs = [
  {
    q: "人材紹介とドライバー業務委託、どちらの相談もできますか？",
    a: "はい。企業の採用に関するご相談、軽貨物配送の業務委託に関するご相談のどちらも、お問い合わせフォームより承っております。",
  },
  {
    q: "まだ開業前ですが、今から相談できますか？",
    a: "2026年8月の開業に向けて、現在から個別にご相談を承っています。お気軽にお問い合わせください。",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Strengths />
      <UseCases />
      <Flow />
      <Faq items={faqs} />
      <CtaBand
        title="まずはお気軽にご相談ください"
        description="人材紹介・ドライバー業務委託、どちらのご相談も承っています。"
        primary={{ href: "/jinzai-driver-hp/contact", label: "お問い合わせ" }}
        secondary={{ href: "/jinzai-driver-hp/driver", label: "ドライバー募集はこちら" }}
      />
    </main>
  );
}
