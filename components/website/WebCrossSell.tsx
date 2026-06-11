"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, MousePointerClick, Mail, Handshake, Trophy, ArrowDown } from "lucide-react";

const funnel = [
  { icon: Megaphone, label: "SNS集客", note: "ショート動画で認知を広げる", accent: "text-emerald-400", ring: "bg-emerald-500/10" },
  { icon: MousePointerClick, label: "ホームページ訪問", note: "興味を持った見込み客が来訪", accent: "text-white/70", ring: "bg-white/[0.08]" },
  { icon: Mail, label: "問い合わせ", note: "信頼を得て行動につながる", accent: "text-white/70", ring: "bg-white/[0.08]" },
  { icon: Handshake, label: "商談", note: "具体的な提案・すり合わせ", accent: "text-white/70", ring: "bg-white/[0.08]" },
  { icon: Trophy, label: "成約", note: "売上・採用の成果へ", accent: "text-amber-400", ring: "bg-amber-500/10" },
];

export default function WebCrossSell() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Cross Sell</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            SNS運用 × ホームページで
            <br />
            効果を最大化
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
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
                  className="gradient-border rounded-2xl px-6 py-5 w-full max-w-md flex items-center gap-4 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${stage.ring} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon size={20} className={stage.accent} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{stage.label}</div>
                    <div className="text-white/40 text-sm">{stage.note}</div>
                  </div>
                  <div className="ml-auto text-white/15 text-xs font-medium tracking-wider">
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
                    <ArrowDown size={18} className="text-white/20" />
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
