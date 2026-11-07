import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HeartHandshake, TrendingUp, Landmark, Building2, Coins, Users, Lightbulb, Headphones, Sprout, Quote, Briefcase } from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";
import consultImg from "@/assets/consultation.jpg";
import communityImg from "@/assets/community.jpg";
import devImg from "@/assets/development.jpg";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { ServiceGrid } from "@/components/site/ServiceGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMANA — Your Future, Made Stronger | Amana Best Laid Society" },
      { name: "description", content: "Trusted financial solutions, savings opportunities and community-focused initiatives from Amana Best Laid Society, Mannarkkad, Kerala." },
      { property: "og:title", content: "AMANA — Your Future, Made Stronger" },
      { property: "og:description", content: "Trust. Growth. Financial Wellbeing. Discover Amana Best Laid Society." },
    ],
  }),
  component: Home,
});

const divisionIcons = [Landmark, Building2, Coins];
const divisionImgs = [communityImg, devImg, consultImg];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden pb-20 pt-32 md:pt-40">
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow"><ShieldCheck size={14} /> Your trusted financial partner</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Build a Better Tomorrow With <span className="bg-gradient-primary bg-clip-text text-transparent">Smarter Financial Choices.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Discover trusted financial solutions, savings opportunities and community-focused initiatives designed to help individuals and families move towards a more secure future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn btn-primary">Explore Our Services <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [ShieldCheck, "Trust & Transparency"],
                [HeartHandshake, "Community Welfare"],
                [TrendingUp, "Financial Growth"],
              ].map(([I, t]) => {
                const Icon = I as typeof ShieldCheck;
                return (
                  <div key={t as string} className="flex items-center gap-3 rounded-2xl bg-background/70 p-3 shadow-soft backdrop-blur">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary"><Icon size={18} /></span>
                    <span className="text-sm font-bold">{t as string}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={150} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rotate-6 rounded-[3rem] bg-gradient-primary opacity-90" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-lilac/50" />
            <img src={heroImg} alt="A family planning their savings with an Amana advisor" width={1024} height={1280} className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-lift" />
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-background p-4 shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Sprout size={20} /></span>
              <div>
                <p className="text-xs text-muted-foreground">Our promise</p>
                <p className="text-sm font-bold">Your Future, Made Stronger.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem]">
            <img src={consultImg} alt="Financial consultation at Amana" loading="lazy" width={1280} height={1024} className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105" />
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Meet Amana</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Financial Growth Begins With Trust.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Amana Best Laid Society was started under the guidance of renowned financial experts and industry luminaries, with one goal: to work for the common man's welfare and help resolve financial hardship.
            </p>
            <p className="mt-4 text-muted-foreground">
              It's more than a financial institution — it helps people start ventures, make small and large investments, and break new ground in life with trust, transparency and excellence.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Legacy of trust & transparency", "Solutions tailored to you", "Expert guidance at every step", "Branches in Kerala & UAE"].map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-semibold"><ShieldCheck size={18} className="text-primary-glow" /> {h}</li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary mt-8">Know More About Us <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHeading eyebrow="The ABS Group" title="Our Organisation & Divisions" text="Three focused entities, one shared commitment to your financial wellbeing." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { title: "Amana Best Laid Society", text: "Financial welfare, savings and community-focused initiatives that help ordinary people move forward." },
              { title: "Best Laid Developer's LLP", text: "Business development activities structured as a Limited Liability Partnership with clearly defined partner roles." },
              { title: "Best Laid Chits Limited", text: "Chit fund services — a disciplined, community-based way to save through transparent monthly auctions." },
            ].map((d, i) => {
              const Icon = divisionIcons[i];
              return (
                <Reveal key={d.title} delay={i * 100} className="card-lift overflow-hidden rounded-3xl bg-card shadow-soft">
                  <img src={divisionImgs[i]} alt={d.title} loading="lazy" className="h-48 w-full object-cover" />
                  <div className="relative p-7">
                    <span className="absolute -top-7 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-lift"><Icon size={24} /></span>
                    <h3 className="mt-6 text-xl font-bold">{d.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                    {i === 2 ? (
                      <Link to="/services/$slug" params={{ slug: "chit-fund-services" }} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">Learn More <ArrowRight size={16} /></Link>
                    ) : (
                      <Link to={i === 0 ? "/about" : "/projects"} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">Learn More <ArrowRight size={16} /></Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What we offer" title="Financial Services & Schemes" text="Explore the ways Amana can support you and your family." />
          <div className="mt-14"><ServiceGrid /></div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Why Amana" title="Why Choose Amana?" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [ShieldCheck, "Trust and Transparency", "Every relationship is built on openness and honesty."],
              [Users, "Customer-Focused Approach", "Solutions tailored to your unique needs."],
              [HeartHandshake, "Community Development", "Initiatives that uplift ordinary people."],
              [Lightbulb, "Financial Awareness", "Helping members make informed decisions."],
              [Headphones, "Dedicated Support", "An expert team to guide you at every step."],
              [Sprout, "Long-Term Wellbeing", "Building a brighter, more secure tomorrow."],
            ].map(([I, t, d], i) => {
              const Icon = I as typeof ShieldCheck;
              return (
                <Reveal key={t as string} delay={(i % 3) * 80} className="card-lift rounded-3xl bg-card p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-bold">{t as string}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Member voices" title="What Our Members Say" text="Real testimonials will be added once supplied by the society." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <Reveal key={n} delay={n * 80} className="rounded-3xl border border-dashed border-lilac bg-surface p-7">
                <Quote className="text-lilac" size={32} />
                <p className="mt-4 text-sm italic text-muted-foreground">Placeholder — member testimonial to be supplied by Amana.</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-11 w-11 rounded-full bg-accent" />
                  <div><p className="text-sm font-bold">Member name</p><p className="text-xs text-muted-foreground">Location</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 text-primary-foreground md:p-16">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[30px] border-primary-foreground/10" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-extrabold md:text-4xl">Talk to a specialist. Let's talk business!</h2>
                <p className="mt-3 max-w-xl text-primary-foreground/80">Visit any of our branches in Kerala or Abu Dhabi, or send us an enquiry.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn bg-background text-primary">Contact Us</Link>
                <Link to="/careers" className="btn border border-primary-foreground/40"><Briefcase size={16} /> Careers</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
