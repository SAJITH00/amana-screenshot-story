import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ShieldCheck } from "lucide-react";
import communityImg from "@/assets/community.jpg";
import { PageHero, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Amana Best Laid Society | AMANA" },
      { name: "description", content: "Learn about Amana Best Laid Society's mission to work for the common man's welfare with trust, transparency and excellence." },
      { property: "og:title", content: "About Amana Best Laid Society" },
      { property: "og:description", content: "Our mission, values and the ABS Group." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Amana" title="Your trusted partner in financial growth." text="Committed to innovative financial solutions with a legacy of trust, transparency and excellence." />
      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">Not just a financial institution.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Our goal is to work for the common man's welfare and resolve financial crises. The society was started under the guidance of internationally renowned financial experts and industry luminaries.</p>
            <p className="mt-4 text-muted-foreground">The project aims to help those struggling financially start ventures that help ordinary people move forward, make small and large investments, and break new ground in life.</p>
            <p className="mt-4 font-semibold text-primary">Your success is our mission, and your trust is our pride.</p>
          </Reveal>
          <Reveal delay={100} className="overflow-hidden rounded-[2rem] shadow-lift">
            <img src={communityImg} alt="The community Amana serves" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            [Target, "Our Mission", "To empower individuals and businesses to achieve their financial aspirations."],
            [Eye, "Our Vision", "A brighter and more secure tomorrow for every member and their family."],
            [ShieldCheck, "Our Values", "Trust, transparency and excellence in everything we do."],
          ].map(([I, t, d], i) => {
            const Icon = I as typeof Target;
            return (
              <Reveal key={t as string} delay={i * 80} className="card-lift rounded-3xl bg-card p-8 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground"><Icon size={22} /></span>
                <h3 className="mt-5 text-xl font-bold">{t as string}</h3>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </Reveal>
            );
          })}
        </div>
        <div className="container-x mt-12 text-center">
          <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
        </div>
      </section>
    </>
  );
}
