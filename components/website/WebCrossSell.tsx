"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, MousePointerClick, Mail, Handshake, Trophy, ArrowDown } from "lucide-react";

const funnel = [
  { icon: Megaphone, label: "SNS集客", note: "ショート動画で認知を広げる", gold: true },
  { icon: MousePointerClick, label: "ホームページ訪問", note: "興味を持った見込み客が来訪", gold: false },
  { icon: Mail, label: "問い合わせ", note: "信頼を得て行動につながる", gold: false },
  { icon: Handshake, label: "商談", note: "具体的な提案・すり合わせ", gold: false },
  { icon: Trophy, label: "成約", note: "売上・採用の成果へ", gold: true },
];

export default function WebCrossSell() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Cross Sell</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            SNS運用 × ホームページで
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">効果を最大化</span>
          </h2>
          <p className="text-white/30 text-sm max-w-md leading-relaxed">
            集客（SNS）と受け皿（ホームページ）を組み合わせることで、
            認知から成約までが一本の線でつながります。
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {funnel.map((stage, i) => {
            const Icon = stage.icon;
            const isLast = i === funnel.length - 1;
            return (
              <div key={stage.label} className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`w-full max-w-md flex items-center gap-4 px-6 py-5 border transition-colors duration-300 ${
                    stage.gold
                      ? "border-[rgba(196,163,90,0.35)] bg-[rgba(196,163,90,0.04)] hover:bg-[rgba(196,163,90,0.07)]"
                      : "border-[rgba(196,163,90,0.1)] bg-[#080808] hover:bg-[rgba(196,163,90,0.02)]"
                  }`}
                >
                  <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 ${stage.gold ? "border-[rgba(196,163,90,0.4)]" : "border-[rgba(196,163,90,0.15)]"}`}>
                    <Icon size={17} className={stage.gold ? "text-[#C4A35A]" : "text-[#C4A35A] opacity-40"} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${stage.gold ? "text-[#C4A35A]" : "text-white/70"}`}>{stage.label}</div>
                    <div className="text-white/30 text-xs mt-0.5">{stage.note}</div>
                  </div>
                  <div className="ml-auto text-[#C4A35A] text-[10px] font-medium tracking-[0.15em] opacity-25">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </motion.div>

                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.1, duration: 0.5 }}
                    className="py-2"
                  >
                    <ArrowDown size={14} className="text-[rgba(196,163,90,0.25)]" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
