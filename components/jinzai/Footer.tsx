import Link from "next/link";

const columns = [
  {
    heading: "サイトマップ",
    links: [
      { href: "/jinzai-driver-hp", label: "ホーム" },
      { href: "/jinzai-driver-hp/service/jinzai", label: "人材紹介サービス" },
      { href: "/jinzai-driver-hp/driver", label: "ドライバー募集" },
      { href: "/jinzai-driver-hp/company", label: "会社概要" },
    ],
  },
  {
    heading: "サポート",
    links: [
      { href: "/jinzai-driver-hp/contact", label: "お問い合わせ" },
      { href: "/jinzai-driver-hp/privacy", label: "プライバシーポリシー" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 pt-12 pb-8 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-bold text-lg text-jinzai-primary mb-2">[会社名]</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              人材紹介事業と貨物軽自動車運送の業務委託で、
              <br />
              企業の「人」と「物流」の課題を解決します。
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-semibold mb-3">{column.heading}</p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-jinzai-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} ［会社名］
        </p>
      </div>
    </footer>
  );
}
