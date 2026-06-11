"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, History, Inbox, UserX, Smartphone } from "lucide-react";

const problems = [
  {
    icon: Globe,
    title: "ホームページがない",
    description: "会社の信頼性を示す受け皿がなく、商談や採用で機会損失が起きている。",
  },
  {
    icon: History,
    title: "古いサイトを放置している",
    description: "何年も更新されておらず、情報も古く会社の印象を下げてしまっている。",
  },
  {
    icon: Inbox,
    title: "問い合わせが来ない",
    description: "サイトはあるが、見込み客からの問い合わせや資料請求につながらない。",
  },
  {
    icon: UserX,
    title: "採用応募が来ない",
    description: "求職者に魅力が伝わらず、応募数・採用の質が伸び悩んでいる。",
  },
  {
    icon: Smartphone,
    title: "スマホ対応できていない",
    description: "スマホで見ると崩れて読みづらく、離脱の原因になっている。",
  },
];

export default function WebProblems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Problems</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            こんなお悩み
            <br />
            ありませんか？
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`gradient-border rounded-2xl p-7 group hover:bg-white/[0.03] transition-all duration-300 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.08] transition-colors duration-300">
                  <Icon size={18} className="text-white/60" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{problem.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 text-white/40 text-sm"
        >
          そのすべてを、私たちが解決します。
        </motion.p>
      </div>
    </section>
  );
}
