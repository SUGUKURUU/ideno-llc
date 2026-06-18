"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  title?: string;
  items: FaqItem[];
}

export default function Faq({ title = "よくあるご質問", items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-jinzai-primary/5">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">{title}</h2>
        <div className="space-y-3">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="rounded-2xl bg-white border border-black/5 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={open}
                >
                  <span className="font-semibold text-sm md:text-base">
                    <span className="text-jinzai-primary mr-2">Q.</span>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-jinzai-primary transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                    <span className="text-jinzai-primary font-semibold mr-2">A.</span>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
