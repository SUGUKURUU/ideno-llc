"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Minus } from "lucide-react";

const columns = ["SNS運用代行", "ホームページ制作", "社長の一日"];

// 0 = 非対象, 1 = 対応, 2 = 特に強い
const rows: { label: string; values: number[] }[] = [
  { label: "認知拡大", values: [2, 1, 1] },
  { label: "問い合わせ獲得", values: [1, 2, 0] },
  { label: "採用強化", values: [1, 2, 2] },
  { label: "ブランディング", values: [2, 1, 2] },
  { label: "営業活用", values: [0, 1, 2] },
];

function Cell({ level }: { level: number }) {
  if (level === 0) {
    return (
      <div className="flex justify-center">
        <Minus size={16} className="text-white/15" />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          level === 2 ? "bg-white" : "bg-white/[0.08]"
        }`}
      >
        <Check
          size={14}
          strokeWidth={2.5}
          className={level === 2 ? "text-black" : "text-white/60"}
        />
      </div>
    </div>
  );
}

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="comparison" ref={ref} className="py-24 lg:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            どのサービスを選ぶべき？
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="gradient-border rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left text-white/40 text-xs font-medium tracking-wider uppercase px-6 py-5">
                    目的
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="text-center text-white text-sm font-semibold px-4 py-5"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i !== rows.length - 1 ? "border-b border-white/[0.05]" : ""}
                  >
                    <td className="text-white/70 text-sm font-medium px-6 py-5">
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-5">
                        <Cell level={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mt-8 text-xs text-white/40"
        >
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <Check size={11} strokeWidth={2.5} className="text-black" />
            </span>
            特に効果的
          </span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-white/[0.08] flex items-center justify-center">
              <Check size={11} strokeWidth={2.5} className="text-white/60" />
            </span>
            対応可能
          </span>
          <span className="flex items-center gap-2">
            <Minus size={14} className="text-white/15" />
            対象外
          </span>
        </motion.div>
      </div>
    </section>
  );
}
