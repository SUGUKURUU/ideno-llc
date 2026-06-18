import type { Metadata } from "next";
import Link from "next/link";
import DriverRecruit from "@/components/jinzai/DriverRecruit";
import Flow from "@/components/jinzai/Flow";
import PageIntro from "@/components/jinzai/PageIntro";

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

      <section className="py-20 px-6 bg-jinzai-primary/5">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">よくあるご質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6">
                <p className="font-semibold mb-2">Q. {faq.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <Link
          href="/jinzai-driver-hp/contact"
          className="inline-block rounded-full bg-jinzai-primary text-white font-semibold px-8 py-3 hover:bg-jinzai-primary-dark transition-colors"
        >
          応募・お問い合わせ
        </Link>
      </section>
    </main>
  );
}
