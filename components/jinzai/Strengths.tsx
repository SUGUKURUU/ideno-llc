"use client";

import { motion } from "framer-motion";
import { Zap, Handshake, ShieldCheck } from "lucide-react";

const strengths = [
  {
    icon: Zap,
    title: "スピード対応",
    description: "お問い合わせから初回ご提案までを迅速に対応します。",
  },
  {
    icon: Handshake,
    title: "柔軟な契約形態",
    description: "業務委託・紹介ともに、状況に合わせた契約形態をご提案します。",
  },
  {
    icon: ShieldCheck,
    title: "丁寧なサポート",
    description: "契約後も担当者が継続してサポートします。",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 px-6 bg-jinzai-primary/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">選ばれる理由</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="hover-lift relative rounded-2xl bg-white p-8 overflow-hidden"
              >
                <span className="absolute -top-3 right-5 text-5xl font-bold text-jinzai-primary/10 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-jinzai-primary/10 mb-5">
                  <Icon size={22} className="text-jinzai-primary" />
                </div>
                <h3 className="relative text-base font-bold mb-2">{item.title}</h3>
                <p className="relative text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
