"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STANDARD",
    price: "100,000",
    description: "SNS運用をはじめたい企業に",
    featured: false,
    features: [
      "月1回撮影",
      "動画8本制作",
      "Instagram運用",
      "TikTok運用",
      "投稿文作成",
      "月次レポート提出",
    ],
  },
  {
    name: "PREMIUM",
    price: "125,000",
    description: "本格的に成果を出したい企業に",
    featured: true,
    features: [
      "月1回撮影",
      "動画12本制作",
      "Instagram運用",
      "TikTok運用",
      "投稿文作成",
      "月次レポート提出",
      "改善提案（月1回）",
      "優先対応",
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Pricing</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            <span className="font-serif-display italic font-light text-[#C4A35A]">料金</span>プラン
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/35 text-sm"
          >
            すべてのプランに初期設定・戦略設計が含まれています
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative p-8 lg:p-10 ${
                plan.featured
                  ? "border border-[rgba(196,163,90,0.4)] bg-[rgba(196,163,90,0.03)]"
                  : "border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
              )}

              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#080808] border border-[rgba(196,163,90,0.4)]">
                  <span className="text-[#C4A35A] text-[10px] font-medium tracking-[0.2em] uppercase">推奨</span>
                </div>
              )}

              <div className="mb-8">
                <div className={`text-[11px] font-medium tracking-[0.2em] uppercase mb-4 ${plan.featured ? "text-[#C4A35A]" : "text-white/30"}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1.5 mb-3">
                  <span className="text-white/40 text-sm font-medium">月額</span>
                  <span className={`text-5xl font-bold tracking-tight ${plan.featured ? "text-[#C4A35A]" : "text-white"}`}>
                    ¥{plan.price}
                  </span>
                  <span className="text-white/40 text-sm font-medium mb-1">〜</span>
                </div>
                <p className="text-white/35 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3.5 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-4 h-4 flex items-center justify-center flex-shrink-0 ${plan.featured ? "text-[#C4A35A]" : "text-white/30"}`}>
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <span className={`text-sm ${plan.featured ? "text-white/70" : "text-white/45"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-4 font-semibold text-sm tracking-wide transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#C4A35A] text-black hover:bg-[#d4b36a]"
                    : "border border-white/[0.12] text-white hover:border-white/25 hover:bg-white/[0.03]"
                }`}
              >
                このプランで相談する
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 text-white/25 text-xs"
        >
          ※ 料金は税別表示です。別途、交通費実費が発生する場合があります。
        </motion.p>
      </div>
    </section>
  );
}
