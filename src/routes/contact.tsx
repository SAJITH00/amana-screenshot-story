import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { HEAD_OFFICE, BRANCHES, telHref } from "@/lib/site-data";
import { PageHero, Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | AMANA Best Laid Society" },
      { name: "description", content: "Contact Amana Best Laid Society — head office in Mannarkkad, Palakkad and branches across Kerala and Abu Dhabi." },
      { property: "og:title", content: "Contact AMANA" },
      { property: "og:description", content: "Head office and branch details for Amana Best Laid Society." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your future." text="Visit a branch, call us, or send an enquiry — our team will get back to you." />
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="rounded-[2rem] bg-card p-8 shadow-lift">
            <h2 className="mb-6 text-2xl font-extrabold">Send an enquiry</h2>
            <EnquiryForm />
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            <div className="rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-lift">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">{HEAD_OFFICE.name}</h3>
              <p className="mt-3 flex gap-3 text-lg font-semibold"><MapPin className="shrink-0" /> {HEAD_OFFICE.address}</p>
              <div className="mt-5 space-y-2">
                {HEAD_OFFICE.phones.map((p) => <a key={p} href={telHref(p)} className="flex items-center gap-3 hover:underline"><Phone size={16} /> {p}</a>)}
              </div>
              <span className="btn mt-6 bg-background text-primary" title="WhatsApp number awaiting confirmation"><MessageCircle size={16} /> WhatsApp enquiry (number to be confirmed)</span>
            </div>
            <div className="grid aspect-[16/10] place-items-center rounded-[2rem] border border-dashed border-lilac bg-surface text-center text-sm text-muted-foreground">
              <div><MapPin className="mx-auto text-primary" /><p className="mt-2 font-semibold">Google Map — Mannarkkad head office</p><p>Map embed placeholder</p></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-x">
          <h2 className="text-3xl font-extrabold">Our Branches</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 80} className="card-lift rounded-3xl bg-card p-7 shadow-soft">
                <span className="eyebrow">Branch</span>
                <h3 className="mt-4 text-lg font-bold">{b.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.address}</p>
                <div className="mt-4 space-y-1.5">
                  {b.phones.map((p) => <a key={p} href={telHref(p)} className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><Phone size={14} /> {p}</a>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
