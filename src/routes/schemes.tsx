import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ConfirmNote } from "@/components/site/Reveal";
import { ServiceGrid } from "@/components/site/ServiceGrid";

export const Route = createFileRoute("/schemes")({
  head: () => ({
    meta: [
      { title: "Schemes | AMANA Best Laid Society" },
      { name: "description", content: "Savings, Pravasi Welfare, Pravasi Life Care and chit schemes from Amana Best Laid Society." },
      { property: "og:title", content: "Schemes — AMANA" },
      { property: "og:description", content: "Explore Amana's savings and welfare schemes." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Schemes" title="Root your savings to sprout your wealth." text="Reliable schemes for families in Kerala and Pravasis abroad." />
      <section className="py-24">
        <div className="container-x space-y-10">
          <ServiceGrid slugs={["savings-schemes", "pravasi-welfare-scheme", "pravasi-life-care", "chit-fund-services"]} />
          <ConfirmNote>Scheme terms — including rates, durations and eligibility — are not shown until officially verified. Contact your nearest branch for details.</ConfirmNote>
        </div>
      </section>
    </>
  ),
});
