"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // Google Apps Script Web App URL に POST
      // ユーザーが自分の GAS URL に置き換える
      const GAS_WEB_APP_URL = process.env.NEXT_PUBLIC_GAS_URL || "";

      if (GAS_WEB_APP_URL) {
        await fetch(GAS_WEB_APP_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...data,
          }),
        }).catch(() => {
          // CORS エラーは無視（GAS側は正常に処理）
        });
      } else {
        console.warn("NEXT_PUBLIC_GAS_URL not configured. Form data not sent.");
      }

      console.log("Form data:", data);
      setLoading(false);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setLoading(false);
      setSubmitted(true);
      reset();
    }
  };

  const inputClass =
    "w-full bg-white/[0.02] border border-white/[0.07] px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[rgba(196,163,90,0.3)] focus:bg-white/[0.03] transition-all duration-300";

  const labelClass = "block text-white/40 text-[11px] font-medium tracking-[0.12em] uppercase mb-2";

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Contact</span>
            <div className="h-px w-8 bg-[#C4A35A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            まずはお気軽に
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">ご相談ください</span>
          </h2>
          <p className="text-white/50 text-base">
            無料相談・資料請求はこちらから。
            <br className="hidden sm:block" />
            通常2営業日以内にご返信いたします。
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-3">
              送信が完了しました
            </h3>
            <p className="text-white/50 text-sm">
              2営業日以内にご連絡いたします。
              <br />
              しばらくお待ちください。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              別の内容でお問い合わせ
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="border border-white/[0.06] p-8 lg:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  会社名 <span className="text-white/30">（任意）</span>
                </label>
                <input
                  {...register("company")}
                  type="text"
                  placeholder="株式会社〇〇"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name", { required: "お名前は必須です" })}
                  type="text"
                  placeholder="山田 太郎"
                  className={`${inputClass} ${errors.name ? "border-red-500/50" : ""}`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "メールアドレスは必須です",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "有効なメールアドレスを入力してください",
                    },
                  })}
                  type="email"
                  placeholder="info@example.com"
                  className={`${inputClass} ${errors.email ? "border-red-500/50" : ""}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className={labelClass}>
                  電話番号 <span className="text-white/30">（任意）</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="090-1234-5678"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                ご興味のあるプラン
              </label>
              <select
                {...register("plan")}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" className="bg-zinc-900">
                  選択してください
                </option>
                <optgroup label="SNS運用代行" className="bg-zinc-900">
                  <option value="sns-standard" className="bg-zinc-900">
                    SNS運用 STANDARD（月額100,000円〜）
                  </option>
                  <option value="sns-premium" className="bg-zinc-900">
                    SNS運用 PREMIUM（月額125,000円〜）
                  </option>
                </optgroup>
                <optgroup label="ホームページ制作" className="bg-zinc-900">
                  <option value="web-light" className="bg-zinc-900">
                    ホームページ LIGHT（200,000円〜）
                  </option>
                  <option value="web-standard" className="bg-zinc-900">
                    ホームページ STANDARD（350,000円〜）
                  </option>
                  <option value="web-premium" className="bg-zinc-900">
                    ホームページ PREMIUM（500,000円〜）
                  </option>
                </optgroup>
                <optgroup label="社長の一日" className="bg-zinc-900">
                  <option value="shacho" className="bg-zinc-900">
                    社長の一日（密着ドキュメンタリー）
                  </option>
                </optgroup>
                <option value="other" className="bg-zinc-900">
                  その他・まず相談したい
                </option>
              </select>
            </div>

            <div>
              <label className={labelClass}>
                お問い合わせ内容 <span className="text-white/30">（任意）</span>
              </label>
              <textarea
                {...register("message")}
                placeholder="現在の課題やご要望をお聞かせください"
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-[0.12em] hover:bg-[#d4b36a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[rgba(196,163,90,0.1)]"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  送信中...
                </>
              ) : (
                <>
                  <Send size={15} />
                  無料相談を申し込む
                </>
              )}
            </button>

            <p className="text-center text-white/30 text-xs">
              送信していただいた情報は、プライバシーポリシーに基づき適切に管理します。
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
