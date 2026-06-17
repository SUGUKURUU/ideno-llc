// TODO: キャッチコピー・背景ビジュアル・Framer Motionのアニメーションを実装する
export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold text-primary mb-4">2026年8月 開業予定</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          人と物流をつなぐ、
          <br />
          新しい働き方のプラットフォーム
        </h1>
        <p className="text-base md:text-lg text-slate-600 mb-10">
          人材紹介事業と貨物軽自動車運送の業務委託で、
          <br />
          企業の「人」と「物流」の課題を解決します。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-primary text-white font-semibold px-8 py-3 hover:bg-primary-dark transition-colors"
          >
            お問い合わせ
          </a>
          <a
            href="#driver"
            className="rounded-full border border-primary text-primary font-semibold px-8 py-3 hover:bg-primary/5 transition-colors"
          >
            ドライバー募集はこちら
          </a>
        </div>
      </div>
    </section>
  );
}
