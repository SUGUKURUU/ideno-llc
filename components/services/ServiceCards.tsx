"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Globe, Film, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Share2,
    number: "01",
    name: "SNS運用代行",
    catch: "継続的な発信で\n認知と信頼を積み上げる",
    description: "企画・撮影・編集・投稿まで一括対応。Instagram、TikTok、YouTube Shortsを活用し、企業や経営者の魅力を発信します。",
    href: "/services/sns",
  },
  {
    icon: Globe,
    number: "02",
    name: "ホームページ制作",
    catch: "成果につながる\nホームページを。",
    description: "企業サイト、採用サイト、LP制作まで対応。見た目だけではなく、問い合わせや採用につながる設計を行います。",
    href: "/services/website",
  },
  {
    icon: Film,
    number: "03",
    name: "社長の一日",
    catch: "経営者のリアルを\n映像に。",
    description: "出社から退社まで密着。会社ではなく「人」を伝えるドキュメンタリー動画を制作します。採用・営業・ブランディングに活用可能。",
    href: "/services/shacho-no-ichinichi",
  },
];

export default function ServiceCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="service-cards" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-px bg-[rgba(196,163,90,0.08)]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <Link href={service.href} className="group block h-full bg-[#080808] p-8 lg:p-10 flex flex-col hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 border border-[rgba(196,163,90,0.2)] flex items-center justify-center group-hover:border-[rgba(196,163,90,0.5)] transition-colors duration-300">
                      <Icon size={20} className="text-[#C4A35A] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-[#C4A35A] text-[11px] font-medium tracking-[0.2em] opacity-30">{service.number}</span>
                  </div>

                  <h3 className="text-white font-semibold text-2xl mb-4">{service.name}</h3>

                  <p className="text-white/50 text-base font-medium leading-snug whitespace-pre-line mb-5">
                    {service.catch}
                  </p>

                  <p className="text-white/35 text-sm leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#C4A35A] text-sm font-medium group-hover:gap-3 transition-all duration-300 opacity-70 group-hover:opacity-100">
                    詳しく見る
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
