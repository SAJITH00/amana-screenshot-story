import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, center = true }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-hero relative overflow-hidden pb-20 pt-36 md:pt-44">
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-lilac/30 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">{title}</h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ConfirmNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-lilac bg-surface p-5 text-sm text-muted-foreground">
      <strong className="text-primary">Content awaiting confirmation: </strong>
      {children}
    </div>
  );
}
