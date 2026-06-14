"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Pen, Headphones } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "成果に繋がるサイト設計",
    subtitle: "UX・成約導線最適化",
    description: "ユーザーの行動心理に基づいた導線設計。訪問者が『どこをクリックすべきか』『何をすべきか』が自然と分かるサイト。問い合わせまでの動線を最適化し、確実に成果につなげます。",
    highlights: [
      "ユーザー行動分析に基づいた設計",
      "成約導線の最適化",
      "各ページの役割を明確化",
      "CTAボタンの戦略的配置"
    ]
  },
  {
    icon: Pen,
    title: "説得力のあるコピーライティング",
    subtitle: "セールスコピー専門",
    description: "『素敵ですね』では成果につながりません。『なぜあなたの企業か』『何が他と違うのか』を明確に伝えるコピーライティング。ユーザーの心を動かし、行動へと導きます。",
    highlights: [
      "独自の価値提案をクリアに表現",
      "ターゲットの課題・欲求に響く言葉選び",
      "信頼構築のストーリーテリング",
      "CTA前の最後の説得力"
    ]
  },
  {
    icon: Headphones,
    title: "制作後の伴走サポート",
    subtitle: "定期コンサル・更新支援",
    description: "制作はゴールではなく、スタート。公開後の定期的なコンサルティング、SEO対策、コンテンツ更新支援で継続的に成果を高めます。長期的なパートナーとしてあなたの企業をサポート。",
    highlights: [
      "定期コンサルティング（月1回〜）",
      "SEO対策・検索流入向上",
      "ニュース更新・ブログ支援",
      "分析・改善レポート"
    ]
  }
];


export default function WebsiteDifferential() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="differential" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(196,163,90,0.015)] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
              Why Us
            </span>
            <div className="h-px w-8 bg-[#C4A35A]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            ideno LLC が
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">
              選ばれる3つの理由
            </span>
          </h2>
          <p className="text-white/50 text-base">
            制作のプロだからこそ、実現できる3つの差別化ポイント。
          </p>
        </motion.div>

        {/* 差別化ポイント */}
        <div className="space-y-8 md:space-y-10">
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-10 border border-[rgba(196,163,90,0.15)] bg-[rgba(196,163,90,0.02)]"
              >
                {/* 左側：アイコン・タイトル */}
                <div>
                  <div className="w-16 h-16 rounded-lg bg-[rgba(196,163,90,0.1)] flex items-center justify-center mb-6">
                    <Icon size={32} className="text-[#C4A35A]" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#C4A35A] text-sm md:text-base font-semibold mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-white/60 text-base leading-relaxed mb-6 md:mb-0">
                    {item.description}
                  </p>
                </div>

                {/* 右側：ハイライト */}
                <div>
                  <div className="space-y-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 p-4 bg-[rgba(196,163,90,0.05)] border-l-2 border-[#C4A35A]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C4A35A] mt-2 flex-shrink-0" />
                        <span className="text-white/70 text-sm md:text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ナンバリング */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#C4A35A] flex items-center justify-center text-black font-bold text-lg">
                  {i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 補足 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-[rgba(196,163,90,0.15)] text-center"
        >
          <p className="text-white/60 text-sm md:text-base bg-[rgba(196,163,90,0.05)] border border-[rgba(196,163,90,0.15)] rounded-lg p-6">
            <span className="font-semibold text-[#C4A35A]">つまり、</span>
            <br />
            ideno LLC のホームページ制作は、『見た目』ではなく『成果』を最優先にした、企業の真の課題解決パートナーです。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
