"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, MousePointerClick, Mail, Handshake, Trophy, Film, ArrowDown } from "lucide-react";

const flow = [
  { icon: Megaphone, label: "SNS運用", note: "ショート動画で認知を広げる", highlight: true },
  { icon: MousePointerClick, label: "ホームページ訪問", note: "興味を持った見込み客が来訪", highlight: false },
  { icon: Mail, label: "問い合わせ", note: "信頼を得て行動につながる", highlight: false },
  { icon: Handshake, label: "商談", note: "具体的な提案・すり合わせ", highlight: false },
  { icon: Trophy, label: "成約", note: "売上・採用の成果へ", highlight: false },
  { icon: Film, label: "社長の一日で信頼強化", note: "「人」を伝え、関係を深める", highlight: true },
];

export default function RecommendedFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="flow" ref={ref} className="py-24 lg:py-36 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Recommended Flow</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            おすすめの<span className="font-serif-display italic font-light text-[#C4A35A]">活用方法</span>
          </motion.h2>
        </div>

        <div className="flex flex-col items-center">
          {flow.map((stage, i) => {
            const Icon = stage.icon;
            const isLast = i === flow.length - 1;
            return (
              <div key={stage.label} className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.13, duration: 0.6 }}
                  className={`w-full max-w-md flex items-center gap-4 px-6 py-5 border transition-all duration-300 ${
                    stage.highlight
                      ? "border-[rgba(196,163,90,0.35)] bg-[rgba(196,163,90,0.03)] hover:border-[rgba(196,163,90,0.55)]"
                      : "border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.01]"
                  }`}
                >
                  <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 ${stage.highlight ? "border-[rgba(196,163,90,0.4)]" : "border-white/[0.08]"}`}>
                    <Icon size={18} className={stage.highlight ? "text-[#C4A35A]" : "text-white/40"} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold text-sm ${stage.highlight ? "text-[#C4A35A]" : "text-white/70"}`}>{stage.label}</div>
                    <div className="text-white/35 text-xs mt-0.5">{stage.note}</div>
                  </div>
                  <div className={`text-[10px] font-medium tracking-[0.2em] ${stage.highlight ? "text-[#C4A35A] opacity-50" : "text-white/15"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </motion.div>

                {!isLast && (
                  <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: i * 0.13 + 0.1, duration: 0.5 }} className="py-2">
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
