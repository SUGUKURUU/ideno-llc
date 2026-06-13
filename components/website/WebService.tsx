"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Rocket, LayoutGrid, BookOpen } from "lucide-react";

const services = [
  { icon: Building2, step: "01", title: "コーポレートサイト", description: "会社の信頼性とブランドを伝える、企業の顔となる公式サイトを制作します。" },
  { icon: Users, step: "02", title: "採用サイト", description: "求職者に企業の魅力を届け、応募数と採用の質を高める採用専用サイト。" },
  { icon: Rocket, step: "03", title: "LP制作", description: "商品・サービスの訴求に特化し、問い合わせ・申込みを最大化するランディングページ。" },
  { icon: LayoutGrid, step: "04", title: "サービスサイト", description: "提供サービスの価値を分かりやすく整理し、見込み客の理解と行動を促します。" },
  { icon: BookOpen, step: "05", title: "オウンドメディア", description: "コンテンツでSEO集客を行い、継続的に見込み客を獲得する資産型メディア。" },
];

export default function WebService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Service</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            目的に合わせた
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">5つの制作メニュー</span>
          </h2>
          <p className="text-white/30 text-sm max-w-md">
            「作って終わり」ではなく、ビジネスの成果から逆算して設計します。
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(196,163,90,0.08)]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.step}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#080808] p-8 lg:p-10 group hover:bg-[rgba(196,163,90,0.02)] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 border border-[rgba(196,163,90,0.2)] flex items-center justify-center group-hover:border-[rgba(196,163,90,0.45)] transition-colors duration-300">
                    <Icon size={17} className="text-[#C4A35A] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-[#C4A35A] text-[11px] font-medium tracking-[0.15em] opacity-40">
                    {service.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#080808] p-8 lg:p-10 flex flex-col justify-center"
          >
            <p className="text-white/25 text-sm leading-relaxed mb-4">
              上記以外のご要望も<br />お気軽にご相談ください。
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-[#C4A35A] text-xs tracking-[0.15em] uppercase opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              相談する →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
