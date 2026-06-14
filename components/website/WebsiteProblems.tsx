"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Users, TrendingDown, Search, Smartphone } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "見た目は良いが成果につながらない",
    description: "デザイン重視で制作されたサイト。でも問い合わせやセールスに結びつかない...",
  },
  {
    icon: Users,
    title: "ターゲットに響かない内容",
    description: "誰に何を訴求するのか不明確。ユーザーは迷子になり、離脱してしまう。",
  },
  {
    icon: TrendingDown,
    title: "制作後の更新・改善がストップ",
    description: "制作後、さっぱり更新されないサイト。信頼度は低下。SEO効果もなし。",
  },
  {
    icon: Search,
    title: "SEO対策が不足している",
    description: "Googleで上位表示されない。検索流入がほぼ零。見込み客に見つけてもらえない。",
  },
  {
    icon: Smartphone,
    title: "モバイルが全く最適化されていない",
    description: "スマホで見ると崩れる、遅い、使いづらい。ユーザー離脱が加速する。",
  },
];

export default function WebsiteProblems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" ref={ref} className="py-28 md:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.08)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
              Problems
            </span>
            <div className="h-px w-8 bg-[#C4A35A]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            こんなお悩み
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">
              ありませんか？
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            多くの企業が直面する、ホームページの典型的な課題。
          </p>
        </motion.div>

        {/* 課題カード */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative p-6 md:p-7 border border-[rgba(196,163,90,0.15)] bg-[rgba(196,163,90,0.02)] hover:border-[rgba(196,163,90,0.3)] hover:bg-[rgba(196,163,90,0.05)] transition-all duration-300"
              >
                {/* アイコン */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[rgba(196,163,90,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(196,163,90,0.15)] transition-colors duration-300">
                  <Icon size={24} className="text-[#C4A35A]" />
                </div>

                {/* コンテンツ */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed">
                  {problem.description}
                </p>

                {/* ホバーエフェクト */}
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#C4A35A]/10 via-transparent to-transparent pointer-events-none transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-[rgba(196,163,90,0.15)] text-center"
        >
          <p className="text-white/60 text-base md:text-lg">
            <span className="font-semibold text-[#C4A35A]">ideno LLC では、</span>
            <br className="hidden sm:block" />
            これらの課題をすべて解決するホームページ制作を実現します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
