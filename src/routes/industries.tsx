import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Landmark, Fuel, Factory, ShieldCheck, Radio, HeartPulse } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Innovsol" },
      { name: "description", content: "Deep domain expertise across BFSI, energy, manufacturing, insurance, telecom and healthcare." },
    ],
  }),
  component: Industries,
});

const inds = [
  { icon: Landmark, name: "Banking & Finance", desc: "Core banking automation, AML/KYC intelligence and regulator-grade resilience.", kpi: "60%" , kpiLabel: "faster onboarding" },
  { icon: Fuel, name: "Oil & Gas", desc: "Asset reliability, OT/IT convergence and field-data intelligence for upstream and downstream.", kpi: "30%", kpiLabel: "downtime reduction" },
  { icon: Factory, name: "Manufacturing", desc: "Smart factories, vision-AI quality control and digital thread across the supply chain.", kpi: "2.4x", kpiLabel: "throughput uplift" },
  { icon: ShieldCheck, name: "Insurance", desc: "Claims automation, underwriting copilots and fraud-detection at scale.", kpi: "70%", kpiLabel: "claims STP" },
  { icon: Radio, name: "Telecom & Media", desc: "Network automation, customer-experience AI and content-supply-chain modernisation.", kpi: "5x", kpiLabel: "release velocity" },
  { icon: HeartPulse, name: "Healthcare", desc: "Clinical workflow automation, HIPAA-grade data platforms and patient-experience AI.", kpi: "40%", kpiLabel: "admin time saved" },
];

function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title={<>Built for <span className="italic text-brand-blue">regulated, mission-critical</span> sectors.</>}>
        We bring domain depth — not just technology — to the industries where uptime, audit and outcome matter most.
      </PageHero>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {inds.map((ind, i) => (
            <motion.article
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-paper p-8 transition-all hover:border-foreground/40"
            >
              <div
                aria-hidden
                className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--brand-orange)", filter: "blur(60px)" }}
              />
              <ind.icon className="h-8 w-8 text-foreground" />
              <h3 className="mt-6 font-display text-2xl font-semibold">{ind.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{ind.desc}</p>
              <div className="mt-8 flex items-end gap-3 border-t border-border pt-6">
                <div className="font-display text-4xl font-semibold text-brand-blue">{ind.kpi}</div>
                <div className="pb-1 text-xs text-muted-foreground">{ind.kpiLabel}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
