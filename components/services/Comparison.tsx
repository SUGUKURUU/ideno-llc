"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Minus } from "lucide-react";

const columns = ["SNS運用代行", "ホームページ制作", "社長の一日"];

const rows: { label: string; values: number[] }[] = [
  { label: "認知拡大", values: [2, 1, 1] },
  { label: "問い合わせ獲得", values: [1, 2, 0] },
  { label: "採用強化", values: [1, 2, 2] },
  { label: "ブランディング", values: [2, 1, 2] },
  { label: "営業活用", values: [0, 1, 2] },
];

function Cell({ level }: { level: number }) {
  if (level === 0) return <div className="flex justify-center"><Minus size={14} className="text-white/15" /></div>;
  return (
    <div className="flex justify-center">
      <div className={`w-6 h-6 flex items-center justify-center ${level === 2 ? "border border-[rgba(196,163,90,0.6)] bg-[rgba(196,163,90,0.1)]" : "border border-white/10"}`}>
        <Check size={12} strokeWidth={2.5} className={level === 2 ? "text-[#C4A35A]" : "text-white/30"} />
      </div>
    </div>
  );
}

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="comparison" ref={ref} className="py-24 lg:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Comparison</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            どのサービスを<span className="font-serif-display italic font-light text-[#C4A35A]">選ぶべき？</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="border border-[rgba(196,163,90,0.15)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-[rgba(196,163,90,0.12)]">
                  <th className="text-left text-white/30 text-[11px] font-medium tracking-[0.15em] uppercase px-6 py-5">目的</th>
                  {columns.map((col) => (
                    <th key={col} className="text-center text-white/70 text-sm font-semibold px-4 py-5">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={`${i !== rows.length - 1 ? "border-b border-white/[0.04]" : ""} hover:bg-[rgba(196,163,90,0.02)] transition-colors duration-200`}>
                    <td className="text-white/55 text-sm font-medium px-6 py-5">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-5"><Cell level={v} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.6 }} className="flex items-center justify-center gap-8 mt-8 text-xs text-white/35">
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border border-[rgba(196,163,90,0.6)] flex items-center justify-center">
              <Check size={10} strokeWidth={2.5} className="text-[#C4A35A]" />
            </span>
            特に効果的
          </span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border border-white/10 flex items-center justify-center">
              <Check size={10} strokeWidth={2.5} className="text-white/30" />
            </span>
            対応可能
          </span>
          <span className="flex items-center gap-2">
            <Minus size={12} className="text-white/15" />
            対象外
          </span>
        </motion.div>
      </div>
    </section>
  );
}
