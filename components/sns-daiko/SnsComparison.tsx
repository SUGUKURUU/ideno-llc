"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "初期投資",
    self: "5〜50万円（採用・育成・システム導入）",
    hired: "20〜100万円（採用・育成・福利厚生）",
    outsource: "0円（実務開始までは実質0円）",
  },
  {
    category: "月額コスト",
    self: "20〜60万円（給与・福利厚生）",
    hired: "30〜80万円（給与・福利厚生）",
    outsource: "10～15万円",
  },
  {
    category: "運用開始期間",
    self: "即時〜3ヶ月",
    hired: "1〜6ヶ月（採用・育成期間）",
    outsource: "即時（初期ヒアリング後）",
  },
  {
    category: "ノウハウ・品質",
    self: "低（初期段階）",
    hired: "中〜高（人材次第）",
    outsource: "高（複数企業支援による蓄積）",
  },
  {
    category: "柔軟性",
    self: "非常に高い",
    hired: "高い",
    outsource: "中（事前ヒアリングで対応）",
  },
  {
    category: "ブランド統制",
    self: "非常に高い",
    hired: "高い",
    outsource: "高（定期打ち合わせで確保）",
  },
  {
    category: "24/7対応",
    self: "低（営業時間対応）",
    hired: "低（営業時間対応）",
    outsource: "中（営業時間対応、急対応可能）",
  },
  {
    category: "育成コスト",
    self: "高い（継続的にかかる）",
    hired: "高い（継続的にかかる）",
    outsource: "低（外部で完結）",
  },
  {
    category: "離職リスク",
    self: "あり",
    hired: "あり",
    outsource: "なし",
  },
  {
    category: "トレンド対応",
    self: "低（自己学習が必要）",
    hired: "中（人材次第）",
    outsource: "高（常に最新情報を把握）",
  },
];

const methodologies = [
  {
    title: "自社運用",
    description: "全て自社で担当",
    highlight: false,
  },
  {
    title: "採用（正社員）",
    description: "SNS担当者を雇用",
    highlight: false,
  },
  {
    title: "外注",
    description: "当社にお任せ（推奨）",
    highlight: true,
  },
];

export default function SnsComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comparison" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
              Comparison
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            自社 vs 採用 vs 外注
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">徹底比較表</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base max-w-lg"
          >
            SNS運用をどの方法で進めるか、客観的に比較できます。
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left py-6 px-4 text-white/40 text-xs font-medium tracking-[0.12em] uppercase bg-[rgba(196,163,90,0.02)]">
                  項目
                </th>
                {methodologies.map((method, i) => (
                  <th
                    key={method.title}
                    className={`text-center py-6 px-4 text-xs font-medium tracking-[0.12em] uppercase ${
                      method.highlight
                        ? "bg-[rgba(196,163,90,0.08)] border-l border-r border-[rgba(196,163,90,0.1)]"
                        : "text-white/40"
                    }`}
                  >
                    <div className="font-semibold text-white">{method.title}</div>
                    <div className={method.highlight ? "text-[#C4A35A] text-[10px] mt-1" : "text-white/30 text-[10px] mt-1"}>
                      {method.description}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={row.category} className={`border-b border-white/[0.03] ${idx % 2 === 0 ? "bg-[rgba(255,255,255,0.005)]" : ""}`}>
                  <td className="py-6 px-4 text-white/60 text-sm font-medium bg-[rgba(196,163,90,0.02)] sticky left-0 z-10">
                    {row.category}
                  </td>
                  <td className="py-6 px-4 text-white/50 text-sm text-center">
                    {row.self}
                  </td>
                  <td className="py-6 px-4 text-white/50 text-sm text-center">
                    {row.hired}
                  </td>
                  <td className="py-6 px-4 text-white/70 text-sm text-center bg-[rgba(196,163,90,0.03)] border-l border-r border-[rgba(196,163,90,0.1)] font-medium">
                    {row.outsource}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 border border-[#C4A35A]/20 bg-[rgba(196,163,90,0.03)] p-8 lg:p-10 rounded-lg"
        >
          <h3 className="text-white font-semibold text-lg mb-4">外注がおすすめな理由</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check size={16} className="text-[#C4A35A] mt-1 flex-shrink-0" />
              <span className="text-white/60 text-sm">
                初期投資が少なく、即座に運用を開始できます
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check size={16} className="text-[#C4A35A] mt-1 flex-shrink-0" />
              <span className="text-white/60 text-sm">
                複数企業の支援実績から生まれた、高度なノウハウを活用できます
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check size={16} className="text-[#C4A35A] mt-1 flex-shrink-0" />
              <span className="text-white/60 text-sm">
                採用・育成・離職などのリスクがありません
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check size={16} className="text-[#C4A35A] mt-1 flex-shrink-0" />
              <span className="text-white/60 text-sm">
                トレンドや最新アルゴリズムに常に対応できます
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
