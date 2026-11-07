import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Reveal";
import { ServiceGrid } from "@/components/site/ServiceGrid";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | AMANA Best Laid Society" },
      { name: "description", content: "Savings schemes, Pravasi welfare, chit funds, investment information and financial guidance from Amana." },
      { property: "og:title", content: "Our Services — AMANA" },
      { property: "og:description", content: "Financial services and schemes from Amana Best Laid Society." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Our services" title="Financial services built around you." text="From disciplined savings to guidance for Pravasi families — explore how Amana can help." />
      <section className="py-24"><div className="container-x"><ServiceGrid /></div></section>
    </>
  ),
});
