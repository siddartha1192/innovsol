import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Workflow, BrainCircuit, Cloud, Lock, Database, LineChart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Innovsol" },
      { name: "description", content: "Composable enterprise solutions across automation, AI, cloud and cyber-security." },
    ],
  }),
  component: Solutions,
});

const solutions = [
  { icon: Workflow, title: "Intelligent Process Automation", desc: "End-to-end automation of finance, HR, supply-chain and customer ops with measurable cycle-time reduction." },
  { icon: BrainCircuit, title: "Enterprise Gen-AI", desc: "Private LLM deployments, RAG copilots and agentic workflows built on your data — secured by design." },
  { icon: Cloud, title: "Hybrid & Private Cloud", desc: "Nutanix, HPE and NetApp-powered private clouds with seamless public-cloud bursting." },
  { icon: Lock, title: "Zero Trust Security", desc: "Identity-centric perimeter, micro-segmentation and continuous verification across users, devices and workloads." },
  { icon: Database, title: "Data Platform Modernisation", desc: "Lakehouses, real-time streaming and self-service analytics — engineered for regulatory regimes." },
  { icon: LineChart, title: "AIOS Command Centre", desc: "Single pane of glass for bot health, SLAs, exceptions and ROI — operated as a managed service." },
];

function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title={<>Composable. Outcome-led. <span className="text-brand-orange italic">Production-ready.</span></>}>
        Pre-engineered solution patterns we deploy in weeks — not quarters.
      </PageHero>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
              className="group bg-paper p-10 transition-colors"
            >
              <s.icon className="h-7 w-7 text-brand-blue transition-colors group-hover:text-brand-orange" />
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground transition-colors group-hover:text-paper/70">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
