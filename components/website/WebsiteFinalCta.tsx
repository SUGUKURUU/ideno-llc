"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle, Clock, Zap } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    text: "初回相談は完全無料"
  },
  {
    icon: Clock,
    text: "30分のヒアリングで最適な提案"
  },
  {
    icon: Zap,
    text: "3営業日以内に見積もり提示"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function WebsiteFinalCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="final-cta" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(196,163,90,0.08)] via-[#080808] to-[#080808]" />

      {/* Geometric background */}
      <div className="absolute right-0 top-0 bottom-0 w-[35%] hidden lg:block pointer-events-none opacity-40">
        <svg viewBox="0 0 600 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="280" y="200" width="220" height="160" rx="4" stroke="rgba(196,163,90,0.15)" strokeWidth="0.5" fill="none" />
          <circle cx="420" cy="450" r="200" stroke="rgba(196,163,90,0.08)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="140" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16">
        {/* Main content */}
        <motion.div custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[rgba(196,163,90,0.1)] border border-[rgba(196,163,90,0.2)] rounded-full text-[#C4A35A] text-sm font-medium mb-8">
            今すぐ無料相談する
          </span>

          <motion.h2 custom={1} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            成果につながる
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">ホームページを一緒に作りませんか？</span>
          </motion.h2>

          <motion.p custom={2} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="text-white/40 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            ホームページ制作は単なるデザイン制作ではなく、貴社のビジネス成長を実現するための投資です。私たちはそのパートナーとして、一緒に成功を目指します。
          </motion.p>

          {/* Benefits */}
          <motion.div custom={3} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="grid sm:grid-cols-3 gap-4 lg:gap-6 mb-16">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="flex items-center justify-center sm:justify-start gap-3 text-white/70 text-sm lg:text-base">
                  <Icon size={18} className="text-[#C4A35A] flex-shrink-0" />
                  {benefit.text}
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div custom={4} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="group flex items-center gap-3 px-10 py-5 bg-[#C4A35A] text-black font-bold text-base tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.25)] rounded-lg sm:rounded-none"
            >
              無料相談を予約する
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-8 py-5 border-2 border-[#C4A35A] text-[#C4A35A] font-semibold text-base tracking-wide hover:bg-[rgba(196,163,90,0.1)] transition-all duration-300"
            >
              制作フローを見る
            </a>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div custom={5} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="mt-20 lg:mt-32 pt-16 border-t border-[rgba(196,163,90,0.15)]">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-[#C4A35A] mb-3">50+</p>
              <p className="text-white font-semibold mb-1">案件の実績</p>
              <p className="text-white/40 text-sm">様々な業種での成功事例</p>
            </div>

            <div>
              <p className="text-4xl lg:text-5xl font-bold text-[#C4A35A] mb-3">3.5倍</p>
              <p className="text-white font-semibold mb-1">平均成果向上</p>
              <p className="text-white/40 text-sm">問い合わせ・問合せの増加</p>
            </div>

            <div>
              <p className="text-4xl lg:text-5xl font-bold text-[#C4A35A] mb-3">95%</p>
              <p className="text-white font-semibold mb-1">顧客満足度</p>
              <p className="text-white/40 text-sm">継続支援・リピート率</p>
            </div>
          </div>
        </motion.div>

        {/* Contact note */}
        <motion.div custom={6} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="mt-16 lg:mt-24 text-center">
          <p className="text-white/40 text-sm lg:text-base">
            ご不明な点やご質問がございましたら、
            <br className="lg:hidden" />
            いつでもお気軽にお問い合わせください。<br />
            <span className="text-white/60">専門の担当者がサポートさせていただきます。</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
