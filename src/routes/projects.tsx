import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import devImg from "@/assets/development.jpg";
import communityImg from "@/assets/community.jpg";
import { PageHero, Reveal, ConfirmNote } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | AMANA Best Laid Society" },
      { name: "description", content: "Projects and initiatives from Amana Best Laid Society and Best Laid Developer's LLP." },
      { property: "og:title", content: "Projects — AMANA" },
      { property: "og:description", content: "Business development and community projects from the ABS Group." },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: devImg, cat: "Business Development", name: "Project name to be confirmed", desc: "A Best Laid Developer's LLP project. Official details and photos to be supplied." },
  { img: communityImg, cat: "Community", name: "Project name to be confirmed", desc: "A community welfare initiative. Official details and photos to be supplied." },
];

function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Ventures that move communities forward." text="Showcasing the work of the ABS Group." />
      <section className="py-24">
        <div className="container-x space-y-10">
          <ConfirmNote>The images below are illustrative. Genuine project names, photos and descriptions will replace them once supplied by Amana.</ConfirmNote>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 100} className="card-lift group overflow-hidden rounded-[2rem] bg-card shadow-soft">
                <div className="overflow-hidden"><img src={p.img} alt={p.cat} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="p-8">
                  <span className="eyebrow">{p.cat}</span>
                  <h3 className="mt-4 text-2xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">Enquire about this project <ArrowRight size={16} /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
