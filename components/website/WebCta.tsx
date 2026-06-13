"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function WebCta() {
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
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-48 pointer-events-none">
            <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="200" cy="150" r="150" stroke="rgba(196,163,90,0.06)" strokeWidth="0.5" />
              <circle cx="200" cy="150" r="100" stroke="rgba(196,163,90,0.08)" strokeWidth="0.5" />
              <circle cx="200" cy="150" r="50" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="relative z-10 py-16 px-8 lg:px-16">
            <p className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium mb-5">Free Consultation</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              ホームページは、<span className="font-serif-display italic font-light text-[#C4A35A]">会社の顔です。</span>
            </h2>
            <p className="text-white/35 text-sm mb-10 max-w-md leading-relaxed">
              「何から始めればいいかわからない」という段階でも大丈夫です。まずはお気軽にご相談ください。
            </p>
            <Link href="/#contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]">
              無料相談する
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.3)] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
