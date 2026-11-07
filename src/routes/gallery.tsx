import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import hero from "@/assets/hero-family.jpg";
import consult from "@/assets/consultation.jpg";
import community from "@/assets/community.jpg";
import dev from "@/assets/development.jpg";
import { PageHero, ConfirmNote } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | AMANA Best Laid Society" },
      { name: "description", content: "Photos of Amana's society events, branches, community activities, projects and team." },
      { property: "og:title", content: "Gallery — AMANA" },
      { property: "og:description", content: "Moments from Amana Best Laid Society." },
    ],
  }),
  component: Gallery,
});

const CATS = ["All", "Society Events", "Office and Branches", "Community Activities", "Projects", "Team and Celebrations"] as const;
const PHOTOS = [
  { src: community, cat: "Community Activities", tall: false },
  { src: hero, cat: "Society Events", tall: true },
  { src: consult, cat: "Office and Branches", tall: false },
  { src: dev, cat: "Projects", tall: false },
  { src: consult, cat: "Team and Celebrations", tall: true },
  { src: community, cat: "Society Events", tall: false },
];

function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const list = PHOTOS.filter((p) => cat === "All" || p.cat === cat);
  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % list.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + list.length) % list.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [idx, list.length]);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from the Amana family." text="Events, branches, community activities and celebrations." />
      <section className="py-20">
        <div className="container-x space-y-8">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? "bg-gradient-primary text-primary-foreground shadow-soft" : "bg-surface text-muted-foreground hover:text-primary"}`}>{c}</button>
            ))}
          </div>
          <ConfirmNote>Illustrative images shown. Genuine photos from Amana will replace these.</ConfirmNote>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {list.map((p, i) => (
              <button key={`${cat}-${i}`} onClick={() => setIdx(i)} className="group relative mb-5 block w-full overflow-hidden rounded-3xl animate-in fade-in zoom-in-95 duration-500">
                <img src={p.src} alt={p.cat} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
                <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary opacity-0 transition group-hover:opacity-100">{p.cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {idx !== null && list[idx] && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4 animate-in fade-in duration-300" onClick={() => setIdx(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-background/10 text-ink-foreground"><X /></button>
          <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + list.length) % list.length); }} className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-background/10 text-ink-foreground"><ChevronLeft /></button>
          <img src={list[idx].src} alt={list[idx].cat} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full rounded-2xl object-contain animate-in zoom-in-95 duration-300" />
          <button aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % list.length); }} className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-background/10 text-ink-foreground"><ChevronRight /></button>
        </div>
      )}
    </>
  );
}
