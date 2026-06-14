"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Lock, Clock } from "lucide-react";

const demerits = [
  {
    icon: AlertTriangle,
    number: "01",
    title: "初期コストがかかる",
    description:
      "外注するには毎月の運用費用がかかります。自社で運用する場合と比べると、初期段階ではコスト面での負担が増します。ただし、人件費や採用育成コストを考えると、中期的には費用対効果が高いため、多くのクライアントが継続されています。",
  },
  {
    icon: Lock,
    number: "02",
    title: "カスタマイズに制限がある場合がある",
    description:
      "テンプレート的な対応しかできないサービスもあります。当社では詳細なヒアリングを通じてカスタマイズを行いますが、ご要望によっては追加料金が必要な場合があります。事前にご相談いただければ、対応可能かどうかを判断させていただきます。",
  },
  {
    icon: Clock,
    number: "03",
    title: "成果が出るまでに期間が必要",
    description:
      "SNSの成果は即座には出ません。通常3～6ヶ月程度の期間が必要です。短期的な成果を期待される場合は、別途広告出稿などの施策の組み合わせをご提案いたします。",
  },
];

export default function SnsDemerits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
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
              Demerits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            正直に伝える
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">3つのデメリット</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base max-w-lg"
          >
            メリットだけでなく、正直に課題もお伝えします。事前に理解いただくことで、ミスマッチを防ぎます。
          </motion.p>
        </div>

        {/* Demerits List */}
        <div className="space-y-6 max-w-4xl">
          {demerits.map((demerit, i) => {
            const Icon = demerit.icon;
            return (
              <motion.div
                key={demerit.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-white/[0.06] p-8 lg:p-10 group hover:border-white/[0.15] hover:bg-[rgba(255,255,255,0.01)] transition-all duration-500"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:border-[rgba(196,163,90,0.3)] group-hover:bg-[rgba(196,163,90,0.05)] transition-all duration-300">
                      <Icon size={20} className="text-white/40 group-hover:text-[#C4A35A] transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-white/30 text-xs font-medium tracking-[0.2em]">
                        {demerit.number}
                      </span>
                      <h3 className="text-white font-semibold text-xl">
                        {demerit.title}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                      {demerit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 border border-[#C4A35A]/20 bg-[rgba(196,163,90,0.03)] p-8 lg:p-10 rounded-lg"
        >
          <p className="text-white/60 text-sm leading-relaxed">
            これらのデメリットを理解いただいた上で、ご自身の企業にとってSNS外注が最適か判断いただきたいと考えています。無料相談では、メリット・デメリット両面をお話しした上で、最適なプランをご提案させていただきます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
