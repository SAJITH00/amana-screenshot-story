import { Link } from "@tanstack/react-router";
import { ArrowUpRight, PiggyBank, Plane, HeartPulse, Coins, BookOpen, Compass } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const icons = [PiggyBank, Plane, HeartPulse, Coins, BookOpen, Compass];

export function ServiceGrid({ slugs }: { slugs?: string[] }) {
  const list = slugs ? SERVICES.filter((s) => slugs.includes(s.slug)) : SERVICES;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => {
        const Icon = icons[SERVICES.indexOf(s)];
        return (
          <Reveal key={s.slug} delay={(i % 3) * 80}>
            <Link to="/services/$slug" params={{ slug: s.slug }} className="card-lift group flex h-full flex-col rounded-3xl border border-border bg-card p-7">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft"><Icon size={24} /></span>
                <ArrowUpRight className="text-lilac transition group-hover:text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-auto pt-6 text-sm font-bold text-primary">View details</span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
