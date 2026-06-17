"use client";

import { motion } from "framer-motion";

interface FlowProps {
  title?: string;
  steps?: string[];
}

const defaultSteps = ["お問い合わせ", "ヒアリング", "ご提案", "ご契約", "稼働開始"];

export default function Flow({ title = "ご利用の流れ", steps = defaultSteps }: FlowProps) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-black/10" />
          {steps.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <p className="text-sm font-semibold">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
