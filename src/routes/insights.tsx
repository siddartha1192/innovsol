import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Innovsol" },
      { name: "description", content: "Use cases, perspectives and field notes from the front line of enterprise AI." },
    ],
  }),
  component: Insights,
});

const posts = [
  { tag: "Use Case", title: "How a Tier-1 bank automated 80% of trade-finance ops with AIOS", date: "May 2026", read: "6 min" },
  { tag: "Perspective", title: "Beyond pilots: scaling agentic AI in regulated enterprises", date: "Apr 2026", read: "9 min" },
  { tag: "Field Note", title: "Hyperconverged migration playbook — lessons from 40 data centres", date: "Mar 2026", read: "12 min" },
  { tag: "Use Case", title: "Zero Trust at the edge: securing 2,400 retail branches", date: "Feb 2026", read: "7 min" },
  { tag: "Perspective", title: "Why fixed-price beats T&M for AI transformation", date: "Jan 2026", read: "5 min" },
  { tag: "Use Case", title: "Vision-AI quality control on the assembly line", date: "Dec 2025", read: "8 min" },
];

function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title={<>Field notes from the <span className="italic text-brand-blue">front line.</span></>}>
        Use cases, perspectives and engineering deep-dives from our delivery teams.
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="divide-y divide-border border-y border-border">
            {posts.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group grid gap-4 py-8 transition-colors hover:bg-secondary/40 md:grid-cols-[120px_1fr_auto] md:items-center md:gap-8 md:px-4"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors group-hover:border-brand-orange group-hover:text-brand-orange">
                  {p.tag}
                </span>
                <h3 className="font-display text-xl font-medium leading-snug md:text-2xl">
                  {p.title}
                </h3>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>{p.date}</span>
                  <span>{p.read}</span>
                  <ArrowUpRight className="h-5 w-5 text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-blue" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
