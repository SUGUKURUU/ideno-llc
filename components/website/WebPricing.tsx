"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "ライト",
    subtitle: "Light",
    price: "500,000",
    description: "小規模なコーポレートサイトで必要な受け皿を整える",
    featured: false,
    features: [
      "ページ数: 3~5ページ",
      "オリジナルデザイン",
      "レスポンシブ対応",
      "お問い合わせフォーム",
      "SEO基本対策",
      "スマホ最適化"
    ],
    targetAudience: "新規立ち上げ企業、小規模企業向け"
  },
  {
    name: "スタンダード",
    subtitle: "Standard",
    price: "800,000",
    description: "信頼構築と問い合わせ獲得を実現するスタンダードプラン",
    featured: true,
    features: [
      "ページ数: 10~15ページ",
      "ユーザー目線UX設計",
      "成約導線最適化",
      "ブログ・ニュース機能",
      "SEO最適化対応",
      "定期サポート(3ヶ月)",
      "お問い合わせフォーム",
      "Google Analytics設定"
    ],
    targetAudience: "成果重視の中小企業向け（推奨）"
  },
  {
    name: "プロフェッショナル",
    subtitle: "Professional",
    price: "1,200,000",
    description: "LP+コーポレートサイト複合で本格的な集客強化を実現",
    featured: false,
    features: [
      "複数LP + コーポレートサイト",
      "カスタム設計・実装",
      "高度なコピーライティング",
      "SEO強化対策",
      "プロフェッショナル撮影対応",
      "6ヶ月サポート含む",
      "API連携・高度な機能",
      "CMS導入（WordPress等）"
    ],
    targetAudience: "採用・集客を本格化したい企業向け"
  },
  {
    name: "エンタープライズ",
    subtitle: "Enterprise",
    price: "1,500,000~",
    description: "採用サイト、複雑機能、充実サポートの完全カスタムソリューション",
    featured: false,
    features: [
      "完全カスタム企画・設計",
      "採用サイト、複雑機能対応",
      "高度なシステム連携",
      "セキュリティ対策強化",
      "12ヶ月サポート(月1回CTA)",
      "定期改善・最適化",
      "競合分析・戦略立案",
      "継続的なコンサルティング"
    ],
    targetAudience: "大規模企業、複雑要件向け"
  }
];

export default function WebPricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            サービスプラン
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">4段階のプランをご用意</span>
          </h2>
          <p className="text-white/30 text-sm mt-4">
            目的と規模に合わせて、4つのプランからお選びいただけます。ご要望に応じてカスタマイズも可能です。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className={`relative flex flex-col h-full transition-all duration-300 ${
                plan.featured
                  ? "lg:ring-2 lg:ring-[#C4A35A] lg:scale-[1.02]"
                  : ""
              }`}
            >
              <div className={`relative flex flex-col p-6 lg:p-8 transition-colors duration-300 h-full ${
                plan.featured
                  ? "bg-[rgba(196,163,90,0.08)] border border-[#C4A35A]"
                  : "bg-[#080808] border border-[rgba(196,163,90,0.1)] hover:border-[rgba(196,163,90,0.2)]"
              }`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#C4A35A] bg-[#080808] border border-[#C4A35A] px-3 py-1 whitespace-nowrap">
                      推奨
                    </span>
                  </div>
                )}

                <div className="mb-6 lg:mb-8">
                  <span className="text-[#C4A35A] text-xs lg:text-[11px] font-medium tracking-[0.2em] uppercase opacity-70 block mb-2">
                    {plan.subtitle}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className={`text-2xl lg:text-3xl font-bold tracking-tight ${plan.featured ? "text-[#C4A35A]" : "text-white"}`}>
                      ¥{plan.price}
                    </span>
                    {!plan.price.includes("~") && <span className="text-xs font-medium mb-1 text-white/30">~</span>}
                  </div>
                  <p className="text-white/50 text-xs lg:text-sm leading-relaxed mb-3">{plan.description}</p>
                  <p className="text-white/40 text-[11px] bg-[rgba(196,163,90,0.08)] rounded px-3 py-2">{plan.targetAudience}</p>
                </div>

                <ul className="space-y-2 lg:space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className={`w-3.5 h-3.5 border flex items-center justify-center flex-shrink-0 mt-0.5 rounded-sm ${plan.featured ? "border-[#C4A35A] bg-[rgba(196,163,90,0.1)]" : "border-white/[0.15]"}`}>
                        <Check size={8} strokeWidth={3} className={plan.featured ? "text-[#C4A35A]" : "text-white/40"} />
                      </div>
                      <span className="text-white/55 text-[13px] lg:text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`block text-center w-full py-3 lg:py-3.5 font-semibold text-xs lg:text-sm tracking-widest uppercase transition-all duration-200 rounded-sm lg:rounded-none ${
                    plan.featured
                      ? "bg-[#C4A35A] text-black hover:bg-[#d4b36a]"
                      : "border border-[rgba(196,163,90,0.25)] text-[#C4A35A] hover:border-[rgba(196,163,90,0.5)] hover:bg-[rgba(196,163,90,0.04)]"
                  }`}
                >
                  相談する
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-[rgba(196,163,90,0.15)] text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            ※ 料金は税別表示です。ページ数・機能・コンテンツ量により変動します。
          </p>
          <p className="text-white/30 text-xs">
            詳細なお見積もりやカスタマイズについては、お気軽に無料相談でご相談ください。<br />
            ご要望に応じた柔軟なプランニングが可能です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
