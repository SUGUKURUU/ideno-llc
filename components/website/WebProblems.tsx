"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, History, Inbox, UserX, Smartphone } from "lucide-react";

const problems = [
  { icon: Globe, title: "ホームページがない", description: "会社の信頼性を示す受け皿がなく、商談や採用で機会損失が起きている。" },
  { icon: History, title: "古いサイトを放置している", description: "何年も更新されておらず、情報も古く会社の印象を下げてしまっている。" },
  { icon: Inbox, title: "問い合わせが来ない", description: "サイトはあるが、見込み客からの問い合わせや資料請求につながらない。" },
  { icon: UserX, title: "採用応募が来ない", description: "求職者に魅力が伝わらず、応募数・採用の質が伸び悩んでいる。" },
  { icon: Smartphone, title: "スマホ対応できていない", description: "スマホで見ると崩れて読みづらく、離脱の原因になっている。" },
];

export default function WebProblems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Problems</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              こんなお悩み
              <br />
              <span className="font-serif-display italic font-light text-[#C4A35A]">ありませんか？</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.6 }} className="text-white/30 text-sm max-w-xs">
            そのすべてを、私たちが解決します。
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(196,163,90,0.08)]">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`bg-[#080808] p-8 lg:p-10 group hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-10 h-10 border border-[rgba(196,163,90,0.2)] flex items-center justify-center mb-7 group-hover:border-[rgba(196,163,90,0.45)] transition-colors duration-300">
                  <Icon size={17} className="text-[#C4A35A] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{problem.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
