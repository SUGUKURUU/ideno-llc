// TODO: 確定した会社情報に差し替える（仮の項目）
const rows = [
  { label: "会社名", value: "［会社名］" },
  { label: "設立", value: "2026年8月（予定）" },
  { label: "代表者", value: "［代表者名］" },
  { label: "事業内容", value: "人材紹介事業 / 貨物軽自動車運送事業の業務委託" },
  { label: "所在地", value: "［所在地］" },
];

export default function Company() {
  return (
    <section id="company" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">会社概要</h2>
        <dl className="divide-y divide-black/5 border border-black/10 rounded-2xl">
          {rows.map((row) => (
            <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 p-5">
              <dt className="w-32 shrink-0 text-sm font-semibold text-slate-500">{row.label}</dt>
              <dd className="text-sm">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
