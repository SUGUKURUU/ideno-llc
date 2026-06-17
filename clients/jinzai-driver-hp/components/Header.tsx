const navLinks = [
  { href: "#services", label: "事業内容" },
  { href: "#strengths", label: "選ばれる理由" },
  { href: "#driver", label: "ドライバー募集" },
  { href: "#company", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

// TODO: スクロールで背景を付ける/モバイルメニューを実装する
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg text-primary">
          [会社名]
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary text-white text-sm font-semibold px-5 py-2 hover:bg-primary-dark transition-colors"
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
