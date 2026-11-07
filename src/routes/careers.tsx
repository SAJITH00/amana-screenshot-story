import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Users, TrendingUp } from "lucide-react";
import { PageHero, Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | AMANA Best Laid Society" },
      { name: "description", content: "Grow your career with Amana — join a team working towards financial growth and community development." },
      { property: "og:title", content: "Careers at AMANA" },
      { property: "og:description", content: "Grow your career with Amana." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Grow Your Career With Amana." text="Become part of a team working towards financial growth and community development." />
      <section className="py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[[Users, "Meaningful work", "Help families build secure futures."], [TrendingUp, "Room to grow", "Learn from experienced financial professionals."], [Briefcase, "Kerala & UAE", "Branches across Kerala and in Abu Dhabi."]].map(([I, t, d], i) => {
            const Icon = I as typeof Users;
            return (
              <Reveal key={t as string} delay={i * 80} className="rounded-3xl bg-surface p-7">
                <Icon className="text-primary" /><h3 className="mt-4 text-lg font-bold">{t as string}</h3><p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="text-3xl font-extrabold">Current Opportunities</h2>
            <div className="mt-6 rounded-3xl border border-dashed border-lilac bg-surface p-8 text-center">
              <p className="font-semibold">No openings are listed right now.</p>
              <p className="mt-2 text-sm text-muted-foreground">Send us your details and we'll reach out when a suitable role opens.</p>
              <a href="#apply" className="btn btn-primary mt-6">Apply Now</a>
            </div>
          </Reveal>
          <Reveal delay={100} className="rounded-[2rem] bg-card p-8 shadow-lift" >
            <div id="apply" className="scroll-mt-28">
              <h2 className="text-2xl font-extrabold">Career enquiry</h2>
              <p className="mb-6 mt-1 text-sm text-muted-foreground">Tell us about yourself and the role you're interested in.</p>
              <EnquiryForm subjectLabel="Role of interest" submitLabel="Submit Application" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
