"use client";

import { motion } from "framer-motion";
import { Truck, FileText, MapPin, Banknote, IdCard } from "lucide-react";

// TODO: 実際の募集要項に差し替える（仮の項目・条件）
const items = [
  { icon: Truck, label: "業務内容", value: "軽貨物車両を使用した配送業務" },
  { icon: FileText, label: "契約形態", value: "業務委託（個人事業主）" },
  { icon: MapPin, label: "稼働エリア", value: "［応相談］" },
  { icon: Banknote, label: "報酬", value: "［応相談］" },
  { icon: IdCard, label: "応募資格", value: "普通自動車運転免許（AT限定可）" },
];

export default function DriverRecruit() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">募集要項</h2>
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-jinzai-primary/5 rounded-2xl divide-y divide-black/5"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-2 p-5">
                <dt className="w-40 shrink-0 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Icon size={16} className="text-jinzai-primary" />
                  {item.label}
                </dt>
                <dd className="text-sm">{item.value}</dd>
              </div>
            );
          })}
        </motion.dl>
      </div>
    </section>
  );
}
