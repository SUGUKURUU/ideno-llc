// TODO: 実際の募集要項に差し替える（仮の項目・条件）
const items = [
  { label: "業務内容", value: "軽貨物車両を使用した配送業務" },
  { label: "契約形態", value: "業務委託（個人事業主）" },
  { label: "稼働エリア", value: "［応相談］" },
  { label: "報酬", value: "［応相談］" },
  { label: "応募資格", value: "普通自動車運転免許（AT限定可）" },
];

export default function DriverRecruit() {
  return (
    <section id="driver" className="py-20 px-6 bg-primary/5">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">ドライバー募集要項</h2>
        <dl className="bg-white rounded-2xl divide-y divide-black/5">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 p-5">
              <dt className="w-32 shrink-0 text-sm font-semibold text-slate-500">{item.label}</dt>
              <dd className="text-sm">{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block rounded-full bg-primary text-white font-semibold px-8 py-3 hover:bg-primary-dark transition-colors"
          >
            応募・お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
