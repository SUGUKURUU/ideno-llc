"use client";

import { motion } from "framer-motion";
import { Users, Truck, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "人材紹介サービス",
    description: "企業の採用課題に合わせて、最適な人材をご紹介します。",
    points: [
      "業界・職種を問わず対応",
      "企業の課題に合わせたご提案",
      "内製化が難しい採用業務をサポート",
    ],
  },
  {
    icon: Truck,
    title: "貨物軽自動車運送 業務委託",
    description: "軽貨物ドライバーとして独立・業務委託を希望する方をサポートします。",
    points: [
      "業務委託（個人事業主）契約",
      "未経験から始めやすいサポート体制",
      "ライフスタイルに合わせた働き方",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">事業内容</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl border border-black/10 p-8"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
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
