"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "人材紹介サービス",
    description: "企業の採用課題に合わせて、最適な人材をご紹介します。",
    href: "/jinzai-driver-hp/service/jinzai",
  },
  {
    icon: Truck,
    title: "貨物軽自動車運送 業務委託",
    description: "軽貨物ドライバーとして独立・業務委託を希望する方をサポートします。",
    href: "/jinzai-driver-hp/driver",
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
              >
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl border border-black/10 p-8 hover:border-jinzai-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-jinzai-primary/10 mb-5">
                    <Icon size={22} className="text-jinzai-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-jinzai-primary">
                    詳しく見る
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
