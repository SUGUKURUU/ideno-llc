import { Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  サービス: [
    { label: "サービス一覧", href: "/services" },
    { label: "SNS運用代行", href: "/services/sns" },
    { label: "ホームページ制作", href: "/services/website" },
    { label: "社長の一日", href: "/services/shacho-no-ichinichi" },
  ],
  会社情報: [
    { label: "About", href: "#about" },
    { label: "料金プラン", href: "#pricing" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  法的情報: [
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "特定商取引法表記", href: "/tokutei" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="text-white font-semibold text-base tracking-wider mb-1">
                ideno LLC
              </div>
              <div className="text-white/40 text-xs tracking-widest">合同会社出野</div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              企業と経営者の魅力を発信し、
              SNSを会社の資産へと変えるパートナーです。
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Twitter, href: "#", label: "X (Twitter)" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.1] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/60 text-xs font-medium tracking-[0.15em] uppercase mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          document
                            .querySelector(link.href)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} 合同会社出野 / ideno LLC. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed & Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
