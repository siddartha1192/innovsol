import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, Server, Code2, ShieldCheck, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Innovsol" },
      { name: "description", content: "AIOS, Next-Gen Infrastructure, Application Engineering and Digital Trust — fixed-price, outcome-guaranteed." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Bot, color: "orange", tag: "AIOS",
    title: "AI & Automation",
    desc: "Deploy agentic AI, RPA, intelligent document processing, generative AI and testing automation across your highest-value processes.",
    items: ["Agentic AI workflows", "UiPath RPA at scale", "Document & data intelligence", "Generative AI assistants", "Test automation factories"],
  },
  {
    icon: Server, color: "blue", tag: "NGI",
    title: "Next-Gen Infrastructure",
    desc: "Modern network, data centre and cyber-security stacks built and sustained by certified OEM implementation partners.",
    items: ["Enterprise networking (Cisco)", "Hyperconverged & private cloud (Nutanix, HPE)", "Storage modernisation (NetApp)", "Perimeter security (Fortinet)", "24×7 managed operations"],
  },
  {
    icon: Code2, color: "blue", tag: "App Eng",
    title: "Application Engineering",
    desc: "ERP modernisation, cloud-native development and API-first product engineering — with full IP transfer.",
    items: ["ERP modernisation", "Cloud-native microservices", "API platforms", "Mobile & web product engineering", "Legacy re-platforming"],
  },
  {
    icon: ShieldCheck, color: "orange", tag: "Trust",
    title: "Digital Trust & Security",
    desc: "Zero Trust, IAM/PAM, SOC-as-a-Service and cyber resilience — embedded across every service line.",
    items: ["Zero Trust architecture", "IAM & PAM programmes", "SOC-as-a-Service", "Endpoint protection (SentinelOne)", "Cyber incident response"],
  },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Full-stack delivery, <span className="italic text-brand-blue">single partner.</span></>}>
        Four service lines, deeply integrated. Pick one — or have us run the whole transformation programme.
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid gap-8 overflow-hidden rounded-3xl border border-border bg-paper p-8 transition-colors hover:border-foreground/30 md:grid-cols-[1fr_2fr] md:p-12"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      background: s.color === "orange" ? "color-mix(in oklab, var(--brand-orange) 18%, transparent)" : "color-mix(in oklab, var(--brand-blue) 14%, transparent)",
                      color: s.color === "orange" ? "var(--brand-orange)" : "var(--brand-blue)",
                    }}
                  >
                    <s.icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">{s.title}</h3>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
              </div>
              <ul className="grid gap-3 self-center md:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
