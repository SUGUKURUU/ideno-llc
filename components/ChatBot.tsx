"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "こんにちは！合同会社出野のAIアシスタントです。SNS運用代行・ホームページ制作・社長の一日について何でもご質問ください😊" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "エラーが発生しました。しばらく後でお試しください。" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 吹き出しボタン */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setOpen(true)}
              className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              aria-label="チャットを開く"
            >
              <MessageCircle size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* チャットウィンドウ */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 right-0 w-80 sm:w-96 h-[480px] bg-zinc-900 border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
            >
              {/* ヘッダー */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">AIアシスタント</p>
                    <p className="text-white/40 text-xs">合同会社出野</p>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              {/* メッセージ一覧 */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-white text-black rounded-br-sm"
                          : "bg-white/[0.06] text-white/90 rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white/[0.06] px-4 py-3 rounded-2xl rounded-bl-sm">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* 入力欄 */}
              <div className="p-3 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                    placeholder="メッセージを入力..."
                    className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
                  />
                  <button
                    onClick={send}
                    disabled={!input.trim() || loading}
                    className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center disabled:opacity-40 hover:bg-white/90 transition-all flex-shrink-0"
                  >
                    <Send size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
