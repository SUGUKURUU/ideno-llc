"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2026.08", label: "開業予定" },
  { value: "2事業", label: "人材紹介 ／ 貨物軽自動車運送" },
  { value: "業務委託", label: "柔軟な契約形態に対応" },
];

export default function Stats() {
  return (
    <section className="py-14 px-6 bg-white border-y border-black/5">
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-jinzai-primary tracking-tight mb-1">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
