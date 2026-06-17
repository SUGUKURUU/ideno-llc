"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "お問い合わせ" },
  { step: "02", title: "ヒアリング" },
  { step: "03", title: "ご提案" },
  { step: "04", title: "ご契約" },
  { step: "05", title: "稼働開始" },
];

export default function Flow() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">ご利用の流れ</h2>
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-black/10" />
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <p className="text-sm font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
