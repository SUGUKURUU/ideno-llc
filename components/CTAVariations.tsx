"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const ctaOptions = [
  {
    icon: Mail,
    title: "メールで相談",
    description: "詳しい資料と企画書を先にほしい方へ。48時間以内に返信します。",
    cta: "相談内容を送る",
    variant: "secondary",
  },
  {
    icon: Calendar,
    title: "無料オンライン相談",
    description: "30分の個別相談。ビジネスの課題、目標、予算について詳しくお聞きします。",
    cta: "日時を選ぶ",
    variant: "primary",
  },
  {
    icon: Phone,
    title: "お電話で相談",
    description: "急いでいる方へ。経営者向けの短時間ミーティング対応します。",
    cta: "電話相談を予約",
    variant: "secondary",
  },
];

export default function CTAVariations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(196,163,90,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
              Get Started
            </span>
            <div className="h-px w-8 bg-[#C4A35A]" />
          </div>

          <motion.h2
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            まずは無料で
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">相談してください</span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-white/40 text-base max-w-2xl mx-auto"
          >
            貴社のビジネス課題、SNS運用の目標、予算感を教えてください。
            最適なプランと施策をご提案します。
          </motion.p>
        </motion.div>

        {/* CTA options grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((option, i) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                custom={i + 3}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className={`p-8 rounded-lg border transition-all duration-300 group ${
                  option.variant === "primary"
                    ? "border-[rgba(196,163,90,0.3)] bg-[rgba(196,163,90,0.03)] hover:border-[rgba(196,163,90,0.5)]"
                    : "border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 transition-colors ${
                  option.variant === "primary"
                    ? "bg-[rgba(196,163,90,0.15)] group-hover:bg-[rgba(196,163,90,0.2)]"
                    : "bg-white/[0.05] group-hover:bg-white/[0.08]"
                }`}>
                  <Icon size={24} className={option.variant === "primary" ? "text-[#C4A35A]" : "text-white/50"} />
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{option.description}</p>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    option.variant === "primary"
                      ? "bg-[#C4A35A] text-black hover:bg-[#d4b36a]"
                      : "border border-white/[0.12] text-white hover:border-white/25 hover:bg-white/[0.03]"
                  }`}
                >
                  {option.cta}
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          custom={6}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="p-8 rounded-lg border border-white/[0.06] bg-white/[0.01]"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">ご相談時間</h4>
              <p className="text-white/40 text-sm">
                メール：24~48時間以内返信
                <br />
                オンライン相談：30分（無料）
                <br />
                電話相談：15~20分（無料）
              </p>
            </div>
            <div>
              <h4 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">相談後の流れ</h4>
              <p className="text-white/40 text-sm">
                ヒアリング → 企画書提案 → お打ち合わせ
                <br />
                → 契約 → 運用開始（1~2週間）
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          custom={7}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm mb-4">こんな方からのご相談が多いです</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "経営者・CEO",
              "採用責任者",
              "マーケティング部長",
              "HR/経営企画",
              "スタートアップ創業者",
              "BtoBメーカー",
            ].map((type) => (
              <span
                key={type}
                className="px-4 py-2 rounded-full border border-white/[0.1] text-white/60 text-xs font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
