"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "LIGHT",
    price: "200,000",
    description: "まず最低限の受け皿を用意したい方に",
    featured: false,
    features: [
      "5ページ程度",
      "テンプレートベース",
      "お問い合わせフォーム",
      "スマホ対応",
    ],
  },
  {
    name: "STANDARD",
    price: "350,000",
    description: "しっかり成果を出したい企業に",
    featured: true,
    features: [
      "10ページ程度",
      "オリジナルデザイン",
      "SEO対応",
      "ブログ機能",
      "お問い合わせフォーム",
    ],
  },
  {
    name: "PREMIUM",
    price: "500,000",
    description: "採用・集客まで本格的に強化したい企業に",
    featured: false,
    features: [
      "オリジナル設計",
      "採用ページ",
      "LP制作",
      "SEO強化",
      "運用サポート",
    ],
  },
];

export default function WebPricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
            目的と規模に合わせて、3つのプランからお選びいただけます
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative rounded-3xl p-8 lg:p-9 ${
                plan.featured
                  ? "bg-white text-black md:-mt-4 md:mb-4 shadow-2xl shadow-white/10"
                  : "gradient-border hover:bg-white/[0.02] transition-colors duration-300"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold tracking-wide whitespace-nowrap">
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
                <div className="flex items-end gap-1 mb-3">
                  <span
                    className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                      plan.featured ? "text-black" : "text-white"
                    }`}
                  >
                    ¥{plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium mb-1 ${
                      plan.featured ? "text-black/60" : "text-white/60"
                    }`}
                  >
                    〜
                  </span>
                </div>
                <p className={`text-sm ${plan.featured ? "text-black/60" : "text-white/50"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-9">
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

              <Link
                href="/#contact"
                className={`block text-center w-full py-3.5 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 ${
                  plan.featured
                    ? "bg-black text-white hover:bg-black/80"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                このプランで相談する
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10 text-white/30 text-sm"
        >
          ※ 料金は税別表示です。ページ数・機能により変動します。詳細はお見積もりにてご案内します。
        </motion.p>
      </div>
    </section>
  );
}
