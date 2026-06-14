"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingUp, Zap, Users, BarChart3, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const problems = [
  {
    icon: Clock,
    title: "時間がない",
    description: "経営者や担当者は本業で忙しい。毎日投稿、撮影、編集をする余裕がない。",
  },
  {
    icon: Zap,
    title: "ノウハウがない",
    description: "どんなコンテンツが効果的か、どのタイミングで投稿すべきか不明。試行錯誤で半年が経過。",
  },
  {
    icon: TrendingUp,
    title: "成果がでない",
    description: "自社運用でフォロワーが増えない。投稿してもエンゲージメントが低い。",
  },
  {
    icon: Users,
    title: "人材不足",
    description: "SNS運用専任者を採用・育成するコストと時間。辞めたら継続できない。",
  },
];

const benefits = [
  {
    number: "01",
    title: "圧倒的な時間削減",
    description: "撮影・編集・投稿・分析をすべて任せるだけ。経営者は本業に集中できます。",
    metric: "月120時間削減",
  },
  {
    number: "02",
    title: "プロの戦略で成果が変わる",
    description: "業界知見とデータ分析に基づいた戦略。自社運用では実現できない成長を実現。",
    metric: "平均3x成長",
  },
  {
    number: "03",
    title: "確実に継続される",
    description: "契約期間は確実に続く。人事異動や担当者退職の影響なし。",
    metric: "継続率98%",
  },
  {
    number: "04",
    title: "最新トレンドに対応",
    description: "アルゴリズム変更、新機能対応。常にプロが最適化。取り残されない。",
    metric: "毎月改善提案",
  },
  {
    number: "05",
    title: "採用・採用育成まで実現",
    description: "企業ブランディングで応募者の質が向上。説得力のある人材採用につながります。",
    metric: "採用コス削減",
  },
];

const roi = [
  { label: "月額投資", value: "¥100,000" },
  { label: "新規患者/顧客", value: "月5~10名" },
  { label: "単価", value: "¥50,000~" },
  { label: "月間売上増", value: "¥250,000~¥500,000" },
  { label: "ROI", value: "2.5x~5.0x" },
];

export default function WhyOutsource() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[rgba(196,163,90,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Why Outsource</span>
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
        >
          なぜSNS運用を
          <br />
          <span className="font-serif-display italic font-light text-[#C4A35A]">外注すべきなのか</span>
        </motion.h2>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Problems column */}
          <div>
            <motion.h3
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-2xl font-semibold text-white mb-8"
            >
              自社運用の課題
            </motion.h3>
            <div className="space-y-6">
              {problems.map((problem, i) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    custom={i + 3}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="p-6 rounded-lg border border-white/[0.08] hover:border-red-500/30 transition-colors duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-red-500/60 group-hover:text-red-500 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1.5">{problem.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Benefits column */}
          <div>
            <motion.h3
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-2xl font-semibold text-white mb-8"
            >
              外注のメリット
            </motion.h3>
            <div className="space-y-6">
              {benefits.slice(0, 4).map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  custom={i + 3}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="p-6 rounded-lg border border-white/[0.08] hover:border-[rgba(196,163,90,0.2)] transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(196,163,90,0.1)] group-hover:bg-[rgba(196,163,90,0.15)] transition-colors flex-shrink-0 mt-0.5">
                      <span className="text-[#C4A35A] font-bold text-xs">{benefit.number}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1.5">{benefit.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed mb-2">{benefit.description}</p>
                      <div className="text-[#C4A35A] text-xs font-semibold">{benefit.metric}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI calculation */}
        <motion.div
          custom={7}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-24 p-10 rounded-lg border border-[rgba(196,163,90,0.2)] bg-[rgba(196,163,90,0.02)]"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <BarChart3 size={24} className="text-[#C4A35A]" />
            ROI計算例
          </h3>
          <p className="text-white/40 text-sm mb-8">
            B2B企業の場合、SNS経由の新規顧客で以下のような成果が期待できます：
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roi.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="p-4 rounded bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="text-white/50 text-xs font-medium mb-2">{item.label}</div>
                <div className="text-2xl font-bold text-white">{item.value}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/[0.06]">
            <p className="text-white/40 text-sm">
              <span className="text-[#C4A35A] font-semibold">結論：</span>
              {" "}月額¥100,000の投資が、月間売上¥250,000~¥500,000の増加につながり、
              自社運用では絶対実現できないROIを生み出します。
            </p>
          </div>
        </motion.div>

        {/* Additional benefit */}
        <motion.div
          custom={8}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="p-8 rounded-lg border border-white/[0.08] bg-gradient-to-br from-[rgba(196,163,90,0.03)] to-transparent"
        >
          <div className="flex items-start gap-4">
            <Award size={24} className="text-[#C4A35A] flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">採用採用への直結効果</h4>
              <p className="text-white/40 text-sm leading-relaxed">
                SNSで企業ブランドが確立されると、企業評判がアップ。求人票への応募数が増加するだけでなく、
                応募者の質も向上。採用面接での説得力も増し、内定承諾率も上がります。
                採用コストを劇的に削減しながら、優秀な人材確保が可能になります。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
