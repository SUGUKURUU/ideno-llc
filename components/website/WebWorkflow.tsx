"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  PenTool,
  Palette,
  Code2,
  Globe,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "ヒアリング",
    description: "事業内容・課題・目標を丁寧にお伺いし、サイトの目的を明確にします。",
  },
  {
    icon: PenTool,
    title: "企画設計",
    description: "サイトマップ・ワイヤーフレームを作成し、構成と導線を設計します。",
  },
  {
    icon: Palette,
    title: "デザイン",
    description: "ブランドに合ったビジュアルで、信頼感と魅力を伝えるデザインを制作します。",
  },
  {
    icon: Code2,
    title: "開発",
    description: "レスポンシブ・高速表示・SEOに配慮し、本番品質でコーディングします。",
  },
  {
    icon: Globe,
    title: "公開",
    description: "サーバー設定・ドメイン・各種テストを行い、安全に公開します。",
  },
  {
    icon: LifeBuoy,
    title: "運用サポート",
    description: "公開後の更新・改善・アクセス分析まで、継続的にサポートします。",
  },
];

export default function WebWorkflow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workflow" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Workflow</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            制作の流れ
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-white/[0.03] via-white/[0.12] to-white/[0.03]" />

          <div className="space-y-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/[0.1] flex items-center justify-center group-hover:border-white/20 transition-colors duration-300">
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <div className="gradient-border rounded-2xl p-6 flex-1 group-hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white/20 text-xs font-medium tracking-wider">
                        STEP {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
