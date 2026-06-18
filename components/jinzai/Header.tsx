"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/jinzai-driver-hp", label: "ホーム" },
  { href: "/jinzai-driver-hp/service/jinzai", label: "人材紹介サービス" },
  { href: "/jinzai-driver-hp/driver", label: "ドライバー募集" },
  { href: "/jinzai-driver-hp/company", label: "会社概要" },
  { href: "/jinzai-driver-hp/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/jinzai-driver-hp" className="font-bold text-lg text-jinzai-primary">
          [会社名]
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-jinzai-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/jinzai-driver-hp/contact"
            className="hidden sm:inline-block rounded-full bg-jinzai-primary text-white text-sm font-semibold px-5 py-2 hover:bg-jinzai-primary-dark transition-colors"
          >
            お問い合わせ
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-jinzai-fg"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-black/5 bg-white px-6 py-4 flex flex-col gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-jinzai-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/jinzai-driver-hp/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-jinzai-primary text-white text-sm font-semibold px-5 py-2 text-center hover:bg-jinzai-primary-dark transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
