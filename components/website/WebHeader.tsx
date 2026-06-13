"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Problems", href: "#problems" },
  { label: "Service", href: "#service" },
  { label: "Pricing", href: "#pricing" },
  { label: "Flow", href: "#workflow" },
];

export default function WebHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-xl border-b border-[rgba(196,163,90,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white font-semibold text-sm tracking-[0.15em]">ideno LLC</span>
          <span className="text-[#C4A35A] text-[9px] tracking-[0.25em] mt-0.5 opacity-70">ホームページ制作</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-white/45 hover:text-white text-xs transition-colors duration-200 tracking-[0.12em] uppercase">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/services" className="hidden sm:block text-white/30 hover:text-white/60 text-xs transition-colors tracking-widest uppercase">
            ← Services
          </Link>
          <Link href="/#contact" className="text-xs px-6 py-2.5 border border-[rgba(196,163,90,0.35)] text-[#C4A35A] font-medium hover:bg-[rgba(196,163,90,0.08)] transition-all duration-300 tracking-[0.12em] uppercase">
            無料相談
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
