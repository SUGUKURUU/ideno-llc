"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Lightbulb,
  Palette,
  Code,
  CheckCircle,
  Rocket
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "ヒアリング・市場分析",
    duration: "1-2週間",
    description: "貴社のビジネスモデル、ターゲット、競合を深く理解するため、詳しいヒアリングと市場分析を実施します。成功するサイトの土台作りです。",
    details: [
      "事業内容・ビジネスモデル・目標ヒアリング",
      "ターゲット・ペルソナの定義",
      "競合サイト分析",
      "市場トレンド調査"
    ]
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "戦略・サイト構成提案",
    duration: "1-2週間",
    description: "ヒアリング結果をもとに、サイト全体の戦略とコンテンツ構成を提案。成約導線を設計し、ユーザーの行動を最適化します。",
    details: [
      "メッセージ・ポジショニング戦略",
      "カスタマージャーニーマップ作成",
      "サイト構成図（ワイヤーフレーム）",
      "コンテンツ企画表"
    ]
  },
  {
    number: "03",
    icon: Palette,
    title: "デザイン案作成",
    duration: "2-3週間",
    description: "戦略に基づいて、高品質なデザイン案を複数提案。貴社のブランドイメージを表現し、ユーザー目線での使いやすさを実現します。",
    details: [
      "デザイン案複数提案（2-3案）",
      "色彩・タイポグラフィ設計",
      "UI/UX最適化",
      "フィードバック対応・修正"
    ]
  },
  {
    number: "04",
    icon: Code,
    title: "コーディング・実装",
    duration: "3-4週間",
    description: "デザインをHTMLコードに実装。最新技術を使用し、高速・安全・SEO最適化されたサイトを構築します。",
    details: [
      "HTML/CSS/JavaScriptコーディング",
      "レスポンシブ対応",
      "SEO対策（メタタグ設定など）",
      "ページ高速化最適化"
    ]
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "テスト・品質確認",
    duration: "1-2週間",
    description: "複数デバイス・ブラウザでの動作確認、リンク確認、SEO要件チェック。完璧な品質で公開します。",
    details: [
      "PC/タブレット/スマホ動作確認",
      "ブラウザ互換性テスト",
      "リンク・フォーム動作確認",
      "SEO・パフォーマンステスト"
    ]
  },
  {
    number: "06",
    icon: Rocket,
    title: "公開・サポート開始",
    duration: "継続",
    description: "サイトを本番環境に公開し、定期コンサルティングを開始。SEO対策、更新支援、成果分析で継続的に改善します。",
    details: [
      "本番環境へのアップロード",
      "検索エンジン登録",
      "定期コンサルティング開始",
      "更新・保守サポート開始"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function WebsiteProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            ホームページ制作フロー
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">6ステップの詳細説明</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-lg leading-relaxed mt-8 max-w-2xl"
          >
            ヒアリングから公開後のサポートまで、一貫したプロセスで成果につながるサイトを実現します。期間は約3-4ヶ月が目安です。
          </motion.p>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8 lg:space-y-12"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={`flex gap-6 lg:gap-12 items-stretch relative`}
              >
                {/* Timeline connector (vertical line) */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[27px] top-32 w-px h-24 bg-gradient-to-b from-[rgba(196,163,90,0.2)] to-transparent hidden lg:block" />
                )}

                {/* Left column - Number & Icon */}
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  {/* Number circle */}
                  <div className="relative">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#C4A35A]/30 to-[#C4A35A]/10 flex items-center justify-center border border-[rgba(196,163,90,0.2)]">
                      <span className="text-[#C4A35A] font-bold text-lg lg:text-xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="hidden sm:flex w-10 h-10 rounded-lg bg-[rgba(196,163,90,0.08)] items-center justify-center">
                    <Icon size={20} className="text-[#C4A35A]" />
                  </div>
                </div>

                {/* Right column - Content */}
                <div className="flex-grow pb-8 lg:pb-12 pt-2">
                  <div className="bg-[#080808]/30 border border-[rgba(196,163,90,0.08)] rounded-lg p-6 lg:p-10 hover:border-[rgba(196,163,90,0.15)] transition-all duration-500">
                    {/* Title & Duration */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <span className="text-[#C4A35A] text-sm font-medium whitespace-nowrap">
                        期間: {step.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-6 border-t border-[rgba(196,163,90,0.1)]">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C4A35A] mt-2 flex-shrink-0" />
                          <span className="text-white/40 text-xs lg:text-sm leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-24 lg:mt-32 pt-16 lg:pt-24 border-t border-[rgba(196,163,90,0.15)]"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[rgba(196,163,90,0.05)] rounded-lg p-6 lg:p-8 border border-[rgba(196,163,90,0.1)]">
              <p className="text-white/40 text-sm mb-2">総制作期間</p>
              <p className="text-white font-bold text-2xl lg:text-3xl">3~4ヶ月</p>
              <p className="text-white/30 text-xs mt-2">要件・規模により前後</p>
            </div>

            <div className="bg-[rgba(196,163,90,0.05)] rounded-lg p-6 lg:p-8 border border-[rgba(196,163,90,0.1)]">
              <p className="text-white/40 text-sm mb-2">ミーティング回数</p>
              <p className="text-white font-bold text-2xl lg:text-3xl">8~10回</p>
              <p className="text-white/30 text-xs mt-2">各フェーズで計3回以上</p>
            </div>

            <div className="bg-[rgba(196,163,90,0.05)] rounded-lg p-6 lg:p-8 border border-[rgba(196,163,90,0.1)]">
              <p className="text-white/40 text-sm mb-2">修正対応</p>
              <p className="text-white font-bold text-2xl lg:text-3xl">無制限</p>
              <p className="text-white/30 text-xs mt-2">最高の成果を実現</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
