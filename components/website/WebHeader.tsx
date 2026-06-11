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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white font-semibold text-sm tracking-wider">
            ideno LLC
          </span>
          <span className="text-white/40 text-[10px] tracking-widest mt-0.5">
            ホームページ制作
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-white/60 hover:text-white text-sm transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/services"
            className="hidden sm:block text-white/50 hover:text-white text-sm transition-colors tracking-wide"
          >
            ← サービス一覧
          </Link>
          <Link
            href="/#contact"
            className="text-sm px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all duration-200 tracking-wide"
          >
            無料相談する
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
