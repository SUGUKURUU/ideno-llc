const services = [
  {
    title: "人材紹介サービス",
    description:
      "企業の採用課題に合わせて、最適な人材をご紹介します。// TODO: 対象業界・実績・特徴を追記",
  },
  {
    title: "貨物軽自動車運送 業務委託",
    description:
      "軽貨物ドライバーとして独立・業務委託を希望する方と、配送パートナーを探す企業をつなぎます。// TODO: 募集形態・契約条件を追記",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">事業内容</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-black/10 p-8">
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
