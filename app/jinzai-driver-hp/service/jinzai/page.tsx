import type { Metadata } from "next";
import { Users, Target, ClipboardCheck, MessageSquare } from "lucide-react";
import PageIntro from "@/components/jinzai/PageIntro";
import Flow from "@/components/jinzai/Flow";
import Faq from "@/components/jinzai/Faq";
import CtaBand from "@/components/jinzai/CtaBand";

export const metadata: Metadata = {
  title: "人材紹介サービス",
  description: "企業の採用課題に合わせて、最適な人材をご紹介する人材紹介サービスです。",
};

// TODO: 対象業界・実績・料金体系など確定後に差し替え
const features = [
  {
    icon: Target,
    title: "業界・職種を問わず対応",
    description: "幅広い業界・職種の採用課題に対応します。",
  },
  {
    icon: ClipboardCheck,
    title: "企業の課題に合わせたご提案",
    description: "採用条件・人物像のヒアリングをもとに、最適な人材をご提案します。",
  },
  {
    icon: MessageSquare,
    title: "内製化が難しい採用業務をサポート",
    description: "母集団形成から選考調整まで、採用担当者の負担を軽減します。",
  },
];

const faqs = [
  {
    q: "紹介料はいつ発生しますか？",
    a: "［応相談］成功報酬型を想定していますが、詳細はお問い合わせ時にご案内します。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "［応相談］まずはお気軽にお問い合わせください。",
  },
];

export default function JinzaiServicePage() {
  return (
    <main>
      <PageIntro
        eyebrow="人材紹介サービス"
        title="企業の採用課題に、最適な人材を"
        description="人手不足や採用ノウハウ不足といった企業の課題に対し、求める人物像に合わせた人材をご紹介します。"
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Users size={24} className="text-jinzai-primary" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">サービスの特徴</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="hover-lift rounded-2xl border border-black/10 bg-white shadow-sm p-8">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-jinzai-primary/10 mb-5">
                    <Icon size={22} className="text-jinzai-primary" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Flow
        title="ご利用の流れ"
        steps={["お問い合わせ", "ヒアリング", "人材のご提案", "面談・選考", "ご成約"]}
      />

      <Faq items={faqs} />

      <CtaBand
        title="まずはお気軽にご相談ください"
        description="採用条件のご相談だけでも構いません。お気軽にお問い合わせください。"
        primary={{ href: "/jinzai-driver-hp/contact", label: "お問い合わせ" }}
      />
    </main>
  );
}
