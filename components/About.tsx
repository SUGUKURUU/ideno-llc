"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
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
    <section id="about" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6"
            >
              About
            </motion.div>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 text-balance"
            >
              単なるSNS運用会社では
              <br />
              ありません。
            </motion.h2>
            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-white/50 text-base leading-relaxed mb-6"
            >
              私たちは企業や経営者が持つ「本質的な価値」を、
              SNSというメディアを通じて世界に発信するパートナーです。
            </motion.p>
            <motion.p
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-white/50 text-base leading-relaxed"
            >
              認知・信頼・採用・売上——すべてのビジネス課題に
              SNSからアプローチする方法を、私たちは知っています。
            </motion.p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 2}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="gradient-border rounded-2xl p-6 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white/60 text-xs font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
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
