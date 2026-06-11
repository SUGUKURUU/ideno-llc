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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col leading-none"
          >
            <span className="text-white font-semibold text-sm tracking-wider">
              ideno LLC
            </span>
            <span className="text-white/40 text-[10px] tracking-widest mt-0.5">
              合同会社出野
            </span>
          </a>

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

          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/services"
              className="text-white/50 hover:text-white text-sm transition-colors tracking-wide"
            >
              サービス一覧 →
            </Link>
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-sm px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all duration-200 tracking-wide"
            >
              無料相談する
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors"
            aria-label="メニュー"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl pt-20 px-6"
          >
            <nav className="flex flex-col gap-2 pt-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-4 text-2xl font-medium text-white/80 hover:text-white border-b border-white/[0.06] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-left py-4 text-2xl font-medium text-white/80 hover:text-white border-b border-white/[0.06] transition-colors"
              >
                サービス一覧 →
              </Link>
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-8 py-4 rounded-2xl bg-white text-black font-semibold text-lg tracking-wide"
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
