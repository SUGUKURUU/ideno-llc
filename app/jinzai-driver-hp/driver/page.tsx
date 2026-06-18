import type { Metadata } from "next";
import DriverRecruit from "@/components/jinzai/DriverRecruit";
import Flow from "@/components/jinzai/Flow";
import PageIntro from "@/components/jinzai/PageIntro";
import Faq from "@/components/jinzai/Faq";
import CtaBand from "@/components/jinzai/CtaBand";

export const metadata: Metadata = {
  title: "ドライバー募集",
  description: "貨物軽自動車運送の業務委託ドライバーを募集しています。",
};

const faqs = [
  {
    q: "未経験でも応募できますか？",
    a: "はい。未経験の方も応募可能です。開業に向けたサポート体制を準備しています。",
  },
  {
    q: "車両は自分で用意する必要がありますか？",
    a: "［応相談］詳細はお問い合わせ時にご案内します。",
  },
];

export default function DriverPage() {
  return (
    <main>
      <PageIntro
        eyebrow="ドライバー募集"
        title="業務委託で、自分らしい働き方を"
        description="貨物軽自動車運送の業務委託ドライバーを募集しています。経験は問いません。"
      />

      <DriverRecruit />

      <Flow
        title="応募から稼働開始までの流れ"
        steps={["応募", "面談", "条件確認", "契約", "稼働開始"]}
      />

      <Faq items={faqs} />

      <CtaBand
        title="まずはお気軽にご応募ください"
        description="未経験の方も歓迎です。担当者が丁寧にサポートします。"
        primary={{ href: "/jinzai-driver-hp/contact", label: "応募・お問い合わせ" }}
      />
    </main>
  );
}
