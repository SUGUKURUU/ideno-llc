// TODO: 企業向け／ドライバー向けでフローを分けるか検討する
const steps = [
  { step: "01", title: "お問い合わせ" },
  { step: "02", title: "ヒアリング" },
  { step: "03", title: "ご提案" },
  { step: "04", title: "ご契約" },
  { step: "05", title: "稼働開始" },
];

export default function Flow() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">ご利用の流れ</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <p className="text-2xl font-bold text-primary mb-2">{item.step}</p>
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
