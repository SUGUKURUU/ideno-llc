"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "LIGHT",
    price: "200,000",
    description: "まず最低限の受け皿を用意したい方に",
    featured: false,
    features: ["5ページ程度", "テンプレートベース", "お問い合わせフォーム", "スマホ対応"],
  },
  {
    name: "STANDARD",
    price: "350,000",
    description: "しっかり成果を出したい企業に",
    featured: true,
    features: ["10ページ程度", "オリジナルデザイン", "SEO対応", "ブログ機能", "お問い合わせフォーム"],
  },
  {
    name: "PREMIUM",
    price: "500,000",
    description: "採用・集客まで本格的に強化したい企業に",
    featured: false,
    features: ["オリジナル設計", "採用ページ", "LP制作", "SEO強化", "運用サポート"],
  },
];

export default function WebPricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="font-serif-display italic font-light text-[#C4A35A]">料金プラン</span>
          </h2>
          <p className="text-white/30 text-sm mt-4">
            目的と規模に合わせて、3つのプランからお選びいただけます
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[rgba(196,163,90,0.08)] items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative flex flex-col p-8 lg:p-10 transition-colors duration-300 ${
                plan.featured
                  ? "bg-[rgba(196,163,90,0.05)]"
                  : "bg-[#080808] hover:bg-[rgba(196,163,90,0.02)]"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#C4A35A] text-[11px] font-medium tracking-[0.2em] uppercase opacity-70">
                    {plan.name}
                  </span>
                  {plan.featured && (
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#C4A35A] border border-[rgba(196,163,90,0.35)] px-2.5 py-0.5">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-3xl sm:text-4xl font-bold tracking-tight ${plan.featured ? "text-[#C4A35A]" : "text-white"}`}>
                    ¥{plan.price}
                  </span>
                  <span className="text-sm font-medium mb-1 text-white/30">〜</span>
                </div>
                <p className="text-white/35 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-9 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 ${plan.featured ? "border-[rgba(196,163,90,0.5)]" : "border-white/[0.12]"}`}>
                      <Check size={10} strokeWidth={2.5} className={plan.featured ? "text-[#C4A35A]" : "text-white/40"} />
                    </div>
                    <span className="text-white/55 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={`block text-center w-full py-3.5 font-semibold text-sm tracking-widest uppercase transition-all duration-200 ${
                  plan.featured
                    ? "bg-[#C4A35A] text-black hover:bg-[#d4b36a]"
                    : "border border-[rgba(196,163,90,0.25)] text-[#C4A35A] hover:border-[rgba(196,163,90,0.5)] hover:bg-[rgba(196,163,90,0.04)]"
                }`}
              >
                相談する
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-white/20 text-sm text-center"
        >
          ※ 料金は税別表示です。ページ数・機能により変動します。詳細はお見積もりにてご案内します。
        </motion.p>
      </div>
    </section>
  );
}
