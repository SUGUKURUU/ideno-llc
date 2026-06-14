"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Zap, Award, LineChart } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "複数企業の支援実績",
    description:
      "累計50社以上のSNS運用を支援。様々な業種・規模の企業でのノウハウが蓄積されています。これにより、トレンドやプラットフォーム変化に素早く対応できます。",
  },
  {
    icon: Zap,
    title: "スピーディな成果実現",
    description:
      "初回ヒアリングから3週間以内に投稿開始。最短3ヶ月でフォロワー増加やエンゲージメント向上を実現させます。",
  },
  {
    icon: Award,
    title: "プロの撮影・編集チーム",
    description:
      "社内にプロのカメラマンと編集者を抱えています。視聴者が最後まで見たくなる、心を掴むコンテンツを制作します。",
  },
  {
    icon: LineChart,
    title: "データドリブンな運用",
    description:
      "毎月の詳細なレポート提出と分析。数字に基づいた改善提案により、継続的に成果を向上させていきます。",
  },
];

export default function SnsWhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
              Why Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            当社が選ばれる
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">4つの理由</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base max-w-lg"
          >
            他のSNS運用代行会社とは異なる、当社の特徴をご紹介します。
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-white/[0.06] p-8 lg:p-10 group hover:border-[#C4A35A]/30 hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl border border-[rgba(196,163,90,0.15)] flex items-center justify-center mb-6 group-hover:border-[#C4A35A]/50 group-hover:bg-[rgba(196,163,90,0.1)] transition-all duration-300">
                  <Icon size={24} className="text-[#C4A35A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {reason.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 border border-white/[0.06] p-8 lg:p-10 lg:flex lg:items-center lg:gap-10"
        >
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <div className="text-4xl font-bold text-[#C4A35A] mb-2">50+</div>
            <p className="text-white/60 text-sm">企業のSNS運用を支援</p>
          </div>
          <div className="h-px w-full lg:h-20 lg:w-px bg-white/[0.06]" />
          <div className="lg:w-1/3 my-6 lg:my-0">
            <div className="text-4xl font-bold text-[#C4A35A] mb-2">3ヶ月</div>
            <p className="text-white/60 text-sm">成果実現までの目安期間</p>
          </div>
          <div className="h-px w-full lg:h-20 lg:w-px bg-white/[0.06]" />
          <div className="lg:w-1/3 mt-6 lg:mt-0">
            <div className="text-4xl font-bold text-[#C4A35A] mb-2">98%</div>
            <p className="text-white/60 text-sm">クライアント満足度</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
