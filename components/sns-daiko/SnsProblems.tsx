"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle } from "lucide-react";

const problems = [
  {
    title: "時間がない",
    description: "SNS運用に割ける人員・時間がない。経営者や営業が本業に専念したい。",
    icon: "⏱️",
  },
  {
    title: "ノウハウがない",
    description: "何を投稿すればいいのか、どうやってフォロワーを増やすのか分からない。",
    icon: "❓",
  },
  {
    title: "成果が出ない",
    description: "自社運用を試みたが、フォロワーもエンゲージメントも増えない。",
    icon: "📉",
  },
  {
    title: "リソース不足",
    description: "SNS運用専任者を雇う余裕がない。コスト抑制したい。",
    icon: "👥",
  },
];

export default function SnsProblems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
            Problems
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
        >
          <span className="font-serif-display italic font-light text-[#C4A35A]">こんな課題</span>
          ありませんか？
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/50 text-lg mb-16"
        >
          経営者・企業が抱えるSNS運用の課題
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="p-8 border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 p-8 lg:p-12 bg-gradient-to-br from-[#C4A35A]/10 via-transparent to-transparent border border-[rgba(196,163,90,0.2)] rounded-lg"
        >
          <div className="flex items-start gap-4">
            <AlertCircle size={28} className="text-[#C4A35A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">その課題、すべて解決できます</h3>
              <p className="text-white/70">
                SNS運用の全業務をプロにお任せすることで、経営者様は本業に専念でき、
                確実な成果を期待できます。当社では、戦略設計から投稿代行、
                分析・改善まで、SNS運用に必要なすべてをサポートいたします。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
