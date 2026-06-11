"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";

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
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Pricing</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            料金プラン
          </h2>
          <p className="text-white/50 text-base">
            すべてのプランに初期設定・戦略設計が含まれています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative rounded-3xl p-8 lg:p-10 ${
                plan.featured
                  ? "bg-white text-black"
                  : "gradient-border hover:bg-white/[0.02] transition-colors duration-300"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold tracking-wide">
                  <Zap size={11} fill="white" />
                  おすすめ
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`text-xs font-medium tracking-[0.15em] uppercase mb-4 ${
                    plan.featured ? "text-black/50" : "text-white/40"
                  }`}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-1.5 mb-3">
                  <span
                    className={`text-sm font-medium ${plan.featured ? "text-black/60" : "text-white/60"}`}
                  >
                    月額
                  </span>
                  <span
                    className={`text-5xl font-bold tracking-tight ${plan.featured ? "text-black" : "text-white"}`}
                  >
                    ¥{plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium mb-1 ${plan.featured ? "text-black/60" : "text-white/60"}`}
                  >
                    〜
                  </span>
                </div>
                <p className={`text-sm ${plan.featured ? "text-black/60" : "text-white/50"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.featured ? "bg-black/10" : "bg-white/[0.08]"
                      }`}
                    >
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        className={plan.featured ? "text-black" : "text-white/70"}
                      />
                    </div>
                    <span
                      className={`text-sm ${plan.featured ? "text-black/80" : "text-white/60"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 ${
                  plan.featured
                    ? "bg-black text-white hover:bg-black/80"
                    : "bg-white text-black hover:bg-white/90"
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
          className="text-center mt-10 text-white/30 text-sm"
        >
          ※ 料金は税別表示です。別途、交通費実費が発生する場合があります。
        </motion.p>
      </div>
    </section>
  );
}
