"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Clock, RotateCcw } from "lucide-react";

const targets = [
  {
    icon: AlertCircle,
    title: "SNSノウハウ不足企業",
    description:
      "SNS運用の知識がなく、何から始めたらいいか分からない。トレンドの把握や最新アルゴリズムの理解が難しい企業様。",
    examples: ["施策の立案が困難", "ハッシュタグ戦略が不明確", "フォロワー増加方法が分からない"],
  },
  {
    icon: Clock,
    title: "リソース不足企業",
    description:
      "SNS運用は重要だが、社内に担当者がいない、または既存業務で手が回らない。毎日の投稿が難しい企業様。",
    examples: ["日々の投稿が負担", "企画から投稿までの手間が大きい", "定期的な運用が難しい"],
  },
  {
    icon: RotateCcw,
    title: "自社運用失敗企業",
    description:
      "自社でSNS運用を試したが、思った成果が出ない。フォロワーが増えない、エンゲージメントが低い企業様。",
    examples: ["フォロワーが増えない", "投稿しても反応がない", "集客につながらない"],
  },
];

export default function SnsTarget() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="target" ref={ref} className="py-32 lg:py-48 relative">
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
              Target
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            こんな企業様に
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">おすすめです</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base max-w-lg"
          >
            当サービスは、SNS運用に課題を抱えるあらゆる企業に対応しています。
          </motion.p>
        </div>

        {/* Target Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target, i) => {
            const Icon = target.icon;
            return (
              <motion.div
                key={target.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-white/[0.06] p-8 lg:p-10 group hover:border-[#C4A35A]/30 hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg border border-[rgba(196,163,90,0.15)] flex items-center justify-center mb-6 group-hover:border-[#C4A35A]/50 group-hover:bg-[rgba(196,163,90,0.1)] transition-all duration-300">
                  <Icon size={20} className="text-[#C4A35A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {target.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5 group-hover:text-white/55 transition-colors duration-300">
                  {target.description}
                </p>
                <ul className="space-y-2">
                  {target.examples.map((example) => (
                    <li key={example} className="text-white/30 text-xs flex items-start gap-2">
                      <span className="text-[#C4A35A] mt-1">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
