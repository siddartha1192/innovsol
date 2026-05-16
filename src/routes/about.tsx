import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Innovsol" },
      { name: "description", content: "Innovsol is an intelligence-led enterprise transformation partner across India, Middle East and Africa." },
    ],
  }),
  component: About,
});

const offices = [
  { city: "Gurugram", region: "India HQ" },
  { city: "Bengaluru", region: "India" },
  { city: "Dubai", region: "Middle East" },
  { city: "Lagos", region: "Africa" },
];

const values = [
  { t: "Outcomes over effort", d: "We sign up to KPIs — never just timesheets." },
  { t: "Engineering depth", d: "Certified architects across every OEM we deliver." },
  { t: "Long-horizon trust", d: "We design programmes that outlive the contract." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title={<>An <span className="italic text-brand-orange">outcomes partner</span> for the enterprise.</>}>
        Innovsol is an intelligence-led enterprise transformation firm. We deliver AI, automation and next-gen infrastructure across India, the Middle East and Africa — on fixed-price, outcome-committed terms.
      </PageHero>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-display text-3xl leading-tight md:text-4xl">
              We exist because enterprises don't need <span className="text-foreground/40">more vendors</span> — they need a partner who will <span className="text-brand-blue italic">share the risk</span>.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p>Founded by enterprise-technology veterans, Innovsol was built on a simple thesis: large transformations fail not because the technology is wrong, but because incentives are misaligned.</p>
            <p>So we re-engineered the contract. Fixed-price. Outcome-guaranteed. Single accountable partner across AIOS, NGI, App Engineering and Digital Trust.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Where we are</p>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-4">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-paper p-8"
              >
                <div className="font-display text-3xl font-semibold">{o.city}</div>
                <p className="mt-2 text-sm text-muted-foreground">{o.region}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">What we believe</p>
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-px w-12 bg-brand-orange" />
                <h3 className="mt-6 font-display text-2xl font-semibold">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
