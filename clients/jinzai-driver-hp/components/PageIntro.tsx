interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="pt-32 pb-16 px-6 bg-primary/5 text-center">
      <div className="mx-auto max-w-3xl">
        {eyebrow && <p className="text-sm font-semibold text-primary mb-3">{eyebrow}</p>}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-slate-600 leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
