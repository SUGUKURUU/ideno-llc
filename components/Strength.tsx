"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Smartphone, User, Wallet } from "lucide-react";

const strengths = [
  {
    icon: Package,
    number: "01",
    title: "撮影から投稿まで\nワンストップ",
    description: "企画・撮影・編集・投稿・分析をすべて自社で完結。複数社に依頼する手間とコストを削減します。",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "ショート動画に\n特化",
    description: "TikTok・Instagram Reels・YouTube Shortsなど、アルゴリズムを熟知したショート動画制作に強みがあります。",
  },
  {
    icon: User,
    number: "03",
    title: "経営者ブランディング\nが得意",
    description: "代表の想いや価値観を映像で伝えることで、企業全体の信頼性と認知度を高めます。",
  },
  {
    icon: Wallet,
    number: "04",
    title: "継続しやすい\n料金設定",
    description: "月額10万円〜という業界最水準の価格で、中小企業・スタートアップでも無理なく継続できます。",
  },
];

export default function Strength() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      {/* Decorative circle right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-40">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="250" r="350" stroke="rgba(196,163,90,0.06)" strokeWidth="0.5" />
          <circle cx="500" cy="250" r="240" stroke="rgba(196,163,90,0.08)" strokeWidth="0.5" />
          <circle cx="500" cy="250" r="130" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Why Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            <span className="font-serif-display italic font-light text-[#C4A35A]">選ばれる</span>理由
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {strengths.map((strength, i) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={strength.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group border border-white/[0.05] p-8 lg:p-10 hover:border-[rgba(196,163,90,0.2)] transition-all duration-500"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 border border-[rgba(196,163,90,0.15)] flex items-center justify-center flex-shrink-0 group-hover:border-[rgba(196,163,90,0.4)] transition-colors duration-300">
                    <Icon size={20} className="text-[#C4A35A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-[#C4A35A] text-[11px] font-medium tracking-[0.2em] opacity-40 pt-3">
                    {strength.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4 whitespace-pre-line leading-snug">
                  {strength.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                  {strength.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
