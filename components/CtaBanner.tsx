"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative border border-[rgba(196,163,90,0.25)] bg-[rgba(196,163,90,0.02)] overflow-hidden"
        >
          {/* Top gold line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />

          {/* Decorative SVG */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none">
            <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="256" cy="128" r="180" stroke="rgba(196,163,90,0.06)" strokeWidth="0.5" />
              <circle cx="256" cy="128" r="120" stroke="rgba(196,163,90,0.08)" strokeWidth="0.5" />
              <circle cx="256" cy="128" r="60" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" />
              <circle cx="256" cy="128" r="20" fill="rgba(196,163,90,0.03)" stroke="rgba(196,163,90,0.15)" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 py-16 px-10 lg:px-20">
            <p className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium mb-6">
              Free Consultation
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-xl">
              SNSを、会社の力に。
              <br />
              <span className="font-serif-display italic font-light text-[#C4A35A]">
                一緒に始めましょう。
              </span>
            </h2>
            <p className="text-white/40 text-sm mb-10 max-w-md leading-relaxed">
              まずは無料相談から。現状の課題をお聞きし、
              最適なプランをご提案します。
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]"
            >
              無料相談する
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Bottom gold line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.3)] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
