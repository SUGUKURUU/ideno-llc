"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, Truck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const badges = [
  { icon: Calendar, label: "2026年8月 開業予定" },
  { icon: Users, label: "人材紹介サービス" },
  { icon: Truck, label: "貨物軽自動車運送 業務委託" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-white to-white" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
        >
          人と物流をつなぐ、
          <br />
          新しい働き方のプラットフォーム
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base md:text-lg text-slate-600 mb-10"
        >
          人材紹介事業と貨物軽自動車運送の業務委託で、
          <br />
          企業の「人」と「物流」の課題を解決します。
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/contact"
            className="rounded-full bg-primary text-white font-semibold px-8 py-3 hover:bg-primary-dark transition-colors"
          >
            お問い合わせ
          </Link>
          <Link
            href="/driver"
            className="rounded-full border border-primary text-primary font-semibold px-8 py-3 hover:bg-primary/5 transition-colors"
          >
            ドライバー募集はこちら
          </Link>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm"
              >
                <Icon size={14} className="text-primary" />
                {badge.label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
