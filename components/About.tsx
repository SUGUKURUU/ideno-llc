"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const values = [
  {
    title: "戦略的な発信",
    description: "単なる投稿代行ではなく、企業のゴールから逆算したコンテンツ戦略を設計します。",
  },
  {
    title: "動画ファースト",
    description: "ショート動画の時代を見据え、視聴者の心を掴む映像コンテンツ制作に特化しています。",
  },
  {
    title: "継続的な改善",
    description: "データ分析と定期的な改善提案で、成果を出し続けるSNS運用を実現します。",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 lg:py-48 relative overflow-hidden">
      {/* Decorative abstract SVG */}
      <div className="absolute left-0 top-0 w-96 h-96 pointer-events-none opacity-60">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="400" r="300" stroke="rgba(196,163,90,0.05)" strokeWidth="0.5" />
          <circle cx="0" cy="400" r="200" stroke="rgba(196,163,90,0.07)" strokeWidth="0.5" />
          <circle cx="0" cy="400" r="100" stroke="rgba(196,163,90,0.09)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-center">
          {/* Left */}
          <div>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10"
            >
              単なるSNS運用会社では
              <br />
              <span className="font-serif-display italic font-light text-[#C4A35A]">ありません。</span>
            </motion.h2>
            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-white/45 text-base leading-relaxed mb-5"
            >
              私たちは企業や経営者が持つ「本質的な価値」を、
              SNSというメディアを通じて世界に発信するパートナーです。
            </motion.p>
            <motion.p
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-white/45 text-base leading-relaxed"
            >
              認知・信頼・採用・売上——すべてのビジネス課題に
              SNSからアプローチする方法を、私たちは知っています。
            </motion.p>
          </div>

          {/* Right */}
          <div className="space-y-px">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 3}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="group border-t border-white/[0.06] py-8 last:border-b last:border-white/[0.06] hover:border-[rgba(196,163,90,0.2)] transition-colors duration-500"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[#C4A35A] text-[11px] font-medium tracking-widest mt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                      {v.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
