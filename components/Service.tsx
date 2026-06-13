"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Camera, Film, Share2, BarChart2, RefreshCw } from "lucide-react";

const steps = [
  { icon: Lightbulb, step: "01", title: "企画", description: "ターゲット・ゴール・競合分析をもとに、最適なコンテンツ戦略を設計します。" },
  { icon: Camera, step: "02", title: "撮影", description: "プロのカメラマンが貴社に訪問。代表インタビューや現場密着など多様な素材を撮影します。" },
  { icon: Film, step: "03", title: "動画編集", description: "ショート動画に特化した編集技術で、視聴者が最後まで見たくなる動画に仕上げます。" },
  { icon: Share2, step: "04", title: "投稿代行", description: "最適なタイミング・ハッシュタグ・文章で各SNSプラットフォームに投稿します。" },
  { icon: BarChart2, step: "05", title: "分析", description: "インプレッション・フォロワー・エンゲージメントなどのデータを毎月レポートします。" },
  { icon: RefreshCw, step: "06", title: "改善提案", description: "データに基づいた改善提案で、継続的に成果を向上させ続けます。" },
];

export default function Service() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service" ref={ref} className="py-32 lg:py-48 relative">
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
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Service</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            企画から改善まで
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">すべてワンストップで</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base max-w-lg"
          >
            撮影・編集・投稿・分析まで、すべて一社でお任せいただけます。
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(196,163,90,0.08)]">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#080808] p-8 lg:p-10 group hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-11 h-11 border border-[rgba(196,163,90,0.15)] flex items-center justify-center group-hover:border-[rgba(196,163,90,0.4)] transition-colors duration-300">
                    <Icon size={18} className="text-[#C4A35A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-[#C4A35A] text-[11px] font-medium tracking-[0.2em] opacity-50">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
