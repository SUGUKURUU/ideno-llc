"use client";

import { motion } from "framer-motion";
import { Building2, UserRound } from "lucide-react";

const cases = [
  {
    icon: Building2,
    audience: "企業の採用ご担当者様",
    points: [
      "急な人手不足で、採用を急ぎたい",
      "採用ノウハウが社内に少なく、何から始めればよいか分からない",
      "管理職・専門職など、ピンポイントの採用を強化したい",
    ],
  },
  {
    icon: UserRound,
    audience: "独立・業務委託をお考えの方",
    points: [
      "軽貨物配送で独立し、自分のペースで働きたい",
      "未経験から業務委託の働き方を始めてみたい",
      "本業と並行して、柔軟に稼働時間を調整したい",
    ],
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">こんな方におすすめです</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.audience}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="hover-lift rounded-2xl bg-white border border-black/5 shadow-sm p-8"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-jinzai-primary/10 mb-5">
                  <Icon size={22} className="text-jinzai-primary" />
                </div>
                <h3 className="text-base font-bold mb-4">{item.audience}</h3>
                <ul className="space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-jinzai-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
