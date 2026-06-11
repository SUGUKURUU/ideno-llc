"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Video, User, LifeBuoy } from "lucide-react";

const reasons = [
  {
    icon: Share2,
    number: "01",
    title: "SNS運用もまとめて\n依頼可能",
    description:
      "ホームページとSNS運用を一社で完結。集客から受け皿まで一貫した戦略で支援します。",
  },
  {
    icon: Video,
    number: "02",
    title: "動画制作にも\n対応",
    description:
      "ショート動画・撮影・編集まで内製。サイトに載せる動画コンテンツも同時に制作できます。",
  },
  {
    icon: User,
    number: "03",
    title: "経営者ブランディング\nが得意",
    description:
      "代表の想いや価値観を言語化・可視化し、企業の信頼性を高めるサイトを設計します。",
  },
  {
    icon: LifeBuoy,
    number: "04",
    title: "制作後の運用も\n相談可能",
    description:
      "公開して終わりにしません。更新・改善・分析まで、長期パートナーとして伴走します。",
  },
];

export default function WebWhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Why Us</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            選ばれる理由
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="gradient-border rounded-3xl p-8 lg:p-10 group hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.09] transition-colors duration-300">
                    <Icon size={22} className="text-white/60" />
                  </div>
                  <span className="text-white/20 text-sm font-medium tracking-wider pt-3">
                    {reason.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4 whitespace-pre-line leading-snug">
                  {reason.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
