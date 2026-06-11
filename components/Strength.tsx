"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Smartphone, User, Wallet } from "lucide-react";

const strengths = [
  {
    icon: Package,
    number: "01",
    title: "撮影から投稿まで\nワンストップ",
    description:
      "企画・撮影・編集・投稿・分析をすべて自社で完結。複数社に依頼する手間とコストを削減します。",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "ショート動画に\n特化",
    description:
      "TikTok・Instagram Reels・YouTube Shortsなど、アルゴリズムを熟知したショート動画制作に強みがあります。",
  },
  {
    icon: User,
    number: "03",
    title: "経営者ブランディング\nが得意",
    description:
      "代表の想いや価値観を映像で伝えることで、企業全体の信頼性と認知度を高めます。",
  },
  {
    icon: Wallet,
    number: "04",
    title: "継続しやすい\n料金設定",
    description:
      "月額10万円〜という業界最水準の価格で、中小企業・スタートアップでも無理なく継続できます。",
  },
];

export default function Strength() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Why Us</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            選ばれる理由
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {strengths.map((strength, i) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={strength.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="gradient-border rounded-3xl p-8 lg:p-10 group hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.09] transition-colors duration-300">
                    <Icon size={22} className="text-white/60" />
                  </div>
                  <span className="text-white/20 text-sm font-medium tracking-wider pt-3">
                    {strength.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4 whitespace-pre-line leading-snug">
                  {strength.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{strength.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
