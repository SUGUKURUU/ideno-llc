"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none"
          >
            <span className="text-white font-semibold text-sm tracking-[0.15em]">ideno LLC</span>
            <span className="text-[#C4A35A] text-[9px] tracking-[0.25em] mt-0.5 opacity-70">合同会社出野</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/45 hover:text-white text-xs transition-colors duration-200 tracking-[0.12em] uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-white/35 hover:text-white/70 text-xs transition-colors tracking-widest uppercase">
              Blog
            </Link>
            <Link href="/services" className="text-white/35 hover:text-white/70 text-xs transition-colors tracking-widest uppercase">
              Services →
            </Link>
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-xs px-6 py-2.5 border border-[rgba(196,163,90,0.35)] text-[#C4A35A] font-medium hover:bg-[rgba(196,163,90,0.08)] transition-all duration-300 tracking-[0.12em] uppercase"
            >
              無料相談
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/50 hover:text-white transition-colors"
            aria-label="メニュー"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#080808]/99 backdrop-blur-2xl pt-20 px-6"
          >
            {/* Gold top line */}
            <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.2)] to-transparent" />
            <nav className="flex flex-col gap-0 pt-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-5 text-2xl font-medium text-white/60 hover:text-white border-b border-white/[0.04] transition-colors tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="block text-left py-5 text-2xl font-medium text-white/60 hover:text-white border-b border-white/[0.04] transition-colors"
              >
                ブログ
              </Link>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="block text-left py-5 text-2xl font-medium text-white/60 hover:text-white border-b border-white/[0.04] transition-colors"
              >
                サービス一覧
              </Link>
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-10 py-4 border border-[rgba(196,163,90,0.35)] text-[#C4A35A] font-semibold text-base tracking-wide hover:bg-[rgba(196,163,90,0.06)] transition-all duration-300"
              >
                無料相談する
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
