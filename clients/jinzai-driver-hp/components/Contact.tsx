// TODO: 送信先未実装。GAS連携 or API Routeを検討してフォームを送信処理につなぐ
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primary/5">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">お問い合わせ</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="会社名・お名前"
            className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="メールアドレス"
            className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm"
          />
          <input
            type="tel"
            placeholder="電話番号"
            className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm"
          />
          <textarea
            placeholder="お問い合わせ内容"
            rows={5}
            className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-primary text-white font-semibold py-3 hover:bg-primary-dark transition-colors"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
