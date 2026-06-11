"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Camera,
  Film,
  Share2,
  BarChart2,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "企画",
    description:
      "ターゲット・ゴール・競合分析をもとに、最適なコンテンツ戦略を設計します。",
  },
  {
    icon: Camera,
    step: "02",
    title: "撮影",
    description:
      "プロのカメラマンが貴社に訪問。代表インタビューや現場密着など多様な素材を撮影します。",
  },
  {
    icon: Film,
    step: "03",
    title: "動画編集",
    description:
      "ショート動画に特化した編集技術で、視聴者が最後まで見たくなる動画に仕上げます。",
  },
  {
    icon: Share2,
    step: "04",
    title: "投稿代行",
    description:
      "最適なタイミング・ハッシュタグ・文章で各SNSプラットフォームに投稿します。",
  },
  {
    icon: BarChart2,
    step: "05",
    title: "分析",
    description:
      "インプレッション・フォロワー・エンゲージメントなどのデータを毎月レポートします。",
  },
  {
    icon: RefreshCw,
    step: "06",
    title: "改善提案",
    description:
      "データに基づいた改善提案で、継続的に成果を向上させ続けます。",
  },
];

export default function Service() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Service</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            企画から改善まで
            <br />
            すべてワンストップで
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            撮影・編集・投稿・分析まで、すべて一社でお任せいただけます。
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#0a0a0a] p-8 lg:p-10 group hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-300">
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <span className="text-white/20 text-xs font-medium tracking-wider">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
