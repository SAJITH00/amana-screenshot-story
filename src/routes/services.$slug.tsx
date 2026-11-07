import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { SERVICES, HEAD_OFFICE, telHref } from "@/lib/site-data";
import { PageHero, Reveal, ConfirmNote } from "@/components/site/Reveal";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} | AMANA Best Laid Society` : "Service unavailable | AMANA";
    return {
      meta: [
        { title },
        { name: "description", content: s?.short ?? "Service not found." },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.short ?? "" },
        ...(s ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return (
    <>
      <PageHero eyebrow="Service details" title={service.title} text={service.short} />
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_340px]">
          <Reveal className="space-y-5">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft size={16} /> All services</Link>
            {service.body.map((p, i) => <p key={i} className="text-lg leading-relaxed text-muted-foreground">{p}</p>)}
            <ConfirmNote>Eligibility, contribution amounts, durations, returns and benefits for this scheme will be published once verified by Amana. Please contact a branch for current details.</ConfirmNote>
          </Reveal>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-gradient-primary p-7 text-primary-foreground shadow-lift">
              <h3 className="text-xl font-bold">Talk to our team</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">Get accurate, up-to-date information about {service.title}.</p>
              <a href={telHref(HEAD_OFFICE.phones[1])} className="btn mt-5 w-full bg-background text-primary"><Phone size={16} /> {HEAD_OFFICE.phones[1]}</a>
              <Link to="/contact" className="btn mt-3 w-full border border-primary-foreground/40">Send an enquiry</Link>
            </div>
            <div className="rounded-3xl border border-border p-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Other services</h4>
              <ul className="mt-4 space-y-2">
                {others.map((o) => <li key={o.slug}><Link to="/services/$slug" params={{ slug: o.slug }} className="text-sm font-semibold hover:text-primary">{o.title}</Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
