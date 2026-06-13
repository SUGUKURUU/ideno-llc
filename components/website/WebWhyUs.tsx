"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Video, User, LifeBuoy } from "lucide-react";

const reasons = [
  {
    icon: Share2,
    number: "01",
    title: "SNS運用もまとめて\n依頼可能",
    description: "ホームページとSNS運用を一社で完結。集客から受け皿まで一貫した戦略で支援します。",
  },
  {
    icon: Video,
    number: "02",
    title: "動画制作にも\n対応",
    description: "ショート動画・撮影・編集まで内製。サイトに載せる動画コンテンツも同時に制作できます。",
  },
  {
    icon: User,
    number: "03",
    title: "経営者ブランディング\nが得意",
    description: "代表の想いや価値観を言語化・可視化し、企業の信頼性を高めるサイトを設計します。",
  },
  {
    icon: LifeBuoy,
    number: "04",
    title: "制作後の運用も\n相談可能",
    description: "公開して終わりにしません。更新・改善・分析まで、長期パートナーとして伴走します。",
  },
];

export default function WebWhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Why Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="font-serif-display italic font-light text-[#C4A35A]">選ばれる理由</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-[rgba(196,163,90,0.08)]">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#080808] p-8 lg:p-12 group hover:bg-[rgba(196,163,90,0.02)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 border border-[rgba(196,163,90,0.2)] flex items-center justify-center group-hover:border-[rgba(196,163,90,0.45)] transition-colors duration-300">
                    <Icon size={17} className="text-[#C4A35A] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-[#C4A35A] text-[11px] font-medium tracking-[0.2em] opacity-30">
                    {reason.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4 whitespace-pre-line leading-snug">
                  {reason.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
