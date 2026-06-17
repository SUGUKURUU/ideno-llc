"use client";

import { useState, type FormEvent } from "react";

// TODO: 送信先未実装。GAS連携 or API Routeを検討してフォームを送信処理につなぐ
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-xl">
        {submitted ? (
          <p className="text-center text-sm text-slate-600 bg-white rounded-2xl p-8">
            送信ありがとうございます。
            <br />
            ※現在サンプル版のため、実際の送信は行われていません。
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="会社名・お名前"
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm"
            />
            <input
              type="email"
              required
              placeholder="メールアドレス"
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm"
            />
            <input
              type="tel"
              placeholder="電話番号"
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm"
            />
            <textarea
              required
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
        )}
      </div>
    </section>
  );
}
