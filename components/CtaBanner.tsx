"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-zinc-100" />

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-zinc-100 opacity-60" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-zinc-200 opacity-40" />

          <div className="relative z-10 py-16 px-8 lg:px-16 text-center">
            <p className="text-black/50 text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Free Consultation
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-balance mb-6">
              SNSを、会社の力に。
              <br />
              一緒に始めましょう。
            </h2>
            <p className="text-black/60 text-base mb-10 max-w-xl mx-auto">
              まずは無料相談から。現状の課題をお聞きし、
              <br className="hidden sm:block" />
              最適なプランをご提案します。
            </p>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-black text-white font-semibold text-sm tracking-wide hover:bg-black/80 transition-all duration-200 shadow-xl shadow-black/20"
            >
              無料相談する
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
