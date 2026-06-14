"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SnsHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold text-lg tracking-tight">
          ideno LLC
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("#service")}
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            サービス内容
          </button>
          <button
            onClick={() => scrollToSection("#target")}
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            対象企業
          </button>
          <button
            onClick={() => scrollToSection("#merits")}
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            メリット
          </button>
          <button
            onClick={() => scrollToSection("#comparison")}
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            比較表
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-2.5 bg-[#C4A35A] text-black font-semibold text-sm hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.1)]"
          >
            無料相談
          </button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/60 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-white/[0.06] bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("#service")}
              className="block w-full text-left text-white/60 hover:text-white py-2 transition-colors"
            >
              サービス内容
            </button>
            <button
              onClick={() => scrollToSection("#target")}
              className="block w-full text-left text-white/60 hover:text-white py-2 transition-colors"
            >
              対象企業
            </button>
            <button
              onClick={() => scrollToSection("#merits")}
              className="block w-full text-left text-white/60 hover:text-white py-2 transition-colors"
            >
              メリット
            </button>
            <button
              onClick={() => scrollToSection("#comparison")}
              className="block w-full text-left text-white/60 hover:text-white py-2 transition-colors"
            >
              比較表
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-4 px-4 py-2.5 bg-[#C4A35A] text-black font-semibold text-sm hover:bg-[#d4b36a] transition-all duration-300"
            >
              無料相談
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
