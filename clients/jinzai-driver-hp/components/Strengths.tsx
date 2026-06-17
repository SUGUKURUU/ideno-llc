// TODO: 実際の強み・差別化ポイントに差し替える（仮の項目）
const strengths = [
  { title: "スピード対応", description: "お問い合わせから初回ご提案までを迅速に対応します。" },
  { title: "柔軟な契約形態", description: "業務委託・紹介ともに、状況に合わせた契約形態をご提案します。" },
  { title: "丁寧なサポート", description: "契約後も担当者が継続してサポートします。" },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 px-6 bg-primary/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">選ばれる理由</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-8">
              <h3 className="text-base font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
