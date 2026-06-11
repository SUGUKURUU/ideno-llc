"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Rocket, LayoutGrid, BookOpen } from "lucide-react";

const services = [
  {
    icon: Building2,
    step: "01",
    title: "コーポレートサイト",
    description: "会社の信頼性とブランドを伝える、企業の顔となる公式サイトを制作します。",
  },
  {
    icon: Users,
    step: "02",
    title: "採用サイト",
    description: "求職者に企業の魅力を届け、応募数と採用の質を高める採用専用サイト。",
  },
  {
    icon: Rocket,
    step: "03",
    title: "LP制作",
    description: "商品・サービスの訴求に特化し、問い合わせ・申込みを最大化するランディングページ。",
  },
  {
    icon: LayoutGrid,
    step: "04",
    title: "サービスサイト",
    description: "提供サービスの価値を分かりやすく整理し、見込み客の理解と行動を促します。",
  },
  {
    icon: BookOpen,
    step: "05",
    title: "オウンドメディア",
    description: "コンテンツでSEO集客を行い、継続的に見込み客を獲得する資産型メディア。",
  },
];

export default function WebService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Service</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            目的に合わせた
            <br />
            5つの制作メニュー
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            「作って終わり」ではなく、ビジネスの成果から逆算して設計します。
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.step}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#0a0a0a] p-8 lg:p-10 group hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-300">
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <span className="text-white/20 text-xs font-medium tracking-wider">
                    {service.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}

          {/* Filler cell to keep the grid balanced */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#0a0a0a] p-8 lg:p-10 flex flex-col justify-center"
          >
            <p className="text-white/30 text-sm leading-relaxed">
              上記以外のご要望も
              <br />
              お気軽にご相談ください。
            </p>
            <a
              href="/#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              相談する →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
