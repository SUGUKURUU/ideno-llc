import Link from "next/link";

interface CtaLink {
  href: string;
  label: string;
}

interface CtaBandProps {
  title: string;
  description?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

export default function CtaBand({ title, description, primary, secondary }: CtaBandProps) {
  return (
    <section className="py-20 px-6 bg-jinzai-primary text-white text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{title}</h2>
        {description && <p className="text-white/80 mb-10 leading-relaxed">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="cta-sheen rounded-full bg-white text-jinzai-primary font-semibold px-8 py-3 hover:bg-white/90 transition-colors"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-full border border-white/40 text-white font-semibold px-8 py-3 hover:bg-white/10 transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
