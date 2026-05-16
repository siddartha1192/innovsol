import { useRef, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Server, Code2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { MarqueePartners } from "@/components/marquee-partners";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innovsol — Automate. Secure. Transform. At Enterprise Scale." },
      { name: "description", content: "Outcome-guaranteed AI, automation and next-gen infrastructure across India, Middle East and Africa." },
    ],
  }),
  component: Index,
});

const capabilities = [
  { icon: Bot, title: "AIOS — AI & Automation", desc: "Agentic AI, RPA, Intelligent Automation, Gen-AI and Testing Automation deployed across your highest-value processes.", accent: "orange" },
  { icon: Server, title: "NGI — Next-Gen Infrastructure", desc: "Network, Data Centre and Cyber Security — built, deployed and sustained by certified OEM implementation partners.", accent: "blue" },
  { icon: Code2, title: "Application Engineering", desc: "ERP modernisation, cloud-native development, API-first architecture and custom application delivery with full IP ownership.", accent: "blue" },
  { icon: ShieldCheck, title: "Digital Trust & Security", desc: "Zero Trust, IAM/PAM, SOC-as-a-Service and cyber resilience — embedded across every service line as a foundational capability.", accent: "orange" },
];

const stats = [
  { v: "80%", l: "Automation yield increase with AIOS" },
  { v: "Fixed", l: "Price delivery — you know the cost upfront" },
  { v: "10+", l: "Years in enterprise technology delivery" },
  { v: "4", l: "Offices across India, UAE & Africa" },
];

const differentiators = [
  { n: "01", title: "Outcome-Guaranteed", desc: "We commit to KPIs and share delivery risk. Fixed-price — not effort-based." },
  { n: "02", title: "360° Capability", desc: "AIOS + NGI + App Eng + Cyber — full stack, single partner." },
  { n: "03", title: "OEM-Certified", desc: "Reseller & implementation partner for UiPath, Cisco, Fortinet, NetApp and more." },
];

const industries = ["Banking & Finance", "Oil & Gas", "Manufacturing", "Insurance", "Telecom & Media", "Healthcare"];

function ParallaxImage({
  src,
  alt,
  yRange,
  className,
  children,
}: {
  src: string;
  alt: string;
  yRange: [string, string];
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  return (
    <div ref={ref} className={`relative overflow-hidden${className ? ` ${className}` : ""}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.25 }}
        className="h-full w-full object-cover"
      />
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}

function VideoBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["24px", "-24px"]);

  return (
    <section ref={ref} className="relative h-[72vh] overflow-hidden">
      <motion.div style={{ y: videoY }} className="absolute inset-0 scale-[1.28]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          src="/Photos_and_Video/analytics1.mp4"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/65" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs font-medium uppercase tracking-[0.22em] text-brand-orange"
        >
          Intelligence in Action
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-paper md:text-6xl"
        >
          Real-time analytics<br />powering enterprise decisions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl text-paper/70"
        >
          Our AIOS platform processes millions of data points daily — delivering actionable intelligence at the speed of your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="mt-8"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-all hover:border-brand-orange hover:text-brand-orange"
          >
            Explore AIOS <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AIGallery() {
  return (
    <section className="overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="AI at Work"
          title={
            <>
              Intelligence{" "}
              <span className="italic text-brand-blue">visualised.</span>
            </>
          }
        >
          From intelligent process automation to predictive analytics — see how AI transforms enterprise operations across every sector we serve.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-4 md:h-[620px] md:grid-cols-[7fr_5fr] md:grid-rows-2">

          {/* ── Large hero card — spans both rows ── */}
          <div className="h-80 md:row-span-2 md:h-auto">
            <ParallaxImage
              src="/Photos_and_Video/AI_1.jpg"
              alt="Enterprise AI Technology"
              yRange={["6%", "-6%"]}
              className="h-full rounded-3xl"
            >
              {/* gradient veil */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

              {/* frosted category badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-paper/15 bg-ink/30 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-paper/80 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                AI &amp; Automation
              </div>

              {/* bottom text block */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-7 bg-brand-orange" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">01</span>
                </div>
                <h3 className="text-2xl font-semibold leading-snug text-paper md:text-3xl">
                  Intelligent agents<br />at enterprise scale
                </h3>
                <p className="mt-2 max-w-xs text-sm text-paper/65">
                  Deploy AI across your highest-value workflows with outcome-guaranteed delivery.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-paper/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  Up to 80% task automation yield
                </div>
              </motion.div>
            </ParallaxImage>
          </div>

          {/* ── Top-right card ── */}
          <div className="h-64 md:h-auto">
            <ParallaxImage
              src="/Photos_and_Video/AI_2.jpg"
              alt="AI Analytics in Action"
              yRange={["10%", "-10%"]}
              className="h-full rounded-3xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/88 via-ink/30 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-paper/15 bg-ink/30 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-paper/80 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Predictive Analytics
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 p-5 md:p-6"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-orange" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">02</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-paper md:text-xl">
                  Real-time insights,<br />zero latency
                </h3>
                <p className="mt-1.5 text-xs text-paper/60">
                  Actionable intelligence delivered directly to the C-suite
                </p>
              </motion.div>
            </ParallaxImage>
          </div>

          {/* ── Bottom-right card ── */}
          <div className="h-64 md:h-auto">
            <ParallaxImage
              src="/Photos_and_Video/AI_3.jpg"
              alt="Next-Gen Infrastructure"
              yRange={["4%", "-4%"]}
              className="h-full rounded-3xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/88 via-ink/30 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-paper/15 bg-ink/30 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-paper/80 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Zero Trust Security
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 p-5 md:p-6"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-blue" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">03</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-paper md:text-xl">
                  Zero Trust security,<br />built-in by design
                </h3>
                <p className="mt-1.5 text-xs text-paper/60">
                  Cyber resilience woven into every layer of your infrastructure
                </p>
              </motion.div>
            </ParallaxImage>
          </div>

        </div>
      </div>
    </section>
  );
}

function AnalyticsDemoVideo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], ["32px", "-32px"]);

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              Platform Demo
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Unified analytics<br />for{" "}
              <span className="italic text-brand-blue">enterprise intelligence</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Monitor, analyze and automate your enterprise processes from a single, AI-powered command center. Real-time insights with zero latency across your entire infrastructure.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Predictive analytics with 99.9% uptime SLA",
                "Real-time C-suite visibility dashboard",
                "Automated anomaly detection & alerting",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              Explore the platform{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div style={{ y: cardY }}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "var(--brand-orange)", opacity: 0.65 }}
                />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-3 flex-1 rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground/50">
                  innovsol.ai / dashboard
                </span>
              </div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="aspect-video w-full object-cover"
                src="/Photos_and_Video/analytics2.mp4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroProgress, [0, 1], ["0%", "35%"]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-32">
        {/* Parallax background blobs */}
        <motion.div
          style={{ y: heroBgY }}
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className="fluid-blob absolute -left-32 top-10 h-[480px] w-[480px] rounded-full"
            style={{ background: "var(--brand-blue)", opacity: 0.18 }}
          />
          <div
            className="fluid-blob absolute -right-24 top-40 h-[420px] w-[420px] rounded-full"
            style={{ background: "var(--brand-orange)", opacity: 0.22, animationDelay: "-6s" }}
          />
          <div
            className="fluid-blob absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full"
            style={{ background: "var(--brand-blue)", opacity: 0.12, animationDelay: "-12s" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--paper)_75%)]" />
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-paper/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Intelligence-led Enterprise Transformation
          </motion.div>

          <h1 className="mt-8 max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-[7rem]">
            {["Automate.", "Secure.", "Transform."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mr-4 inline-block"
              >
                {i === 1 ? <span className="italic text-brand-blue">{word}</span> : word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-foreground/40"
            >
              At Enterprise Scale.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 max-w-2xl text-lg text-muted-foreground"
          >
            Innovsol delivers outcome-guaranteed AI, automation and next-gen infrastructure programmes for enterprises across India, the Middle East and Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-brand-blue"
            >
              See Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-foreground"
            >
              View Use Cases
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center gap-6"
          >
            <div className="font-display text-6xl font-semibold text-brand-orange md:text-7xl">80%</div>
            <div className="max-w-xs text-sm text-muted-foreground">
              Task automation yield with <span className="font-semibold text-foreground">AIOS + AI</span>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueePartners />

      <VideoBanner />

      {/* CAPABILITIES */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Capabilities"
            title={
              <>
                360° <span className="text-brand-blue">Technology Services</span>
              </>
            }
          >
            From intelligent automation to enterprise infrastructure — all under one roof, all delivered on fixed-price, outcome-committed terms.
          </SectionHeading>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-paper p-8 transition-colors hover:border-foreground/30"
              >
                <div
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: c.accent === "orange" ? "var(--brand-orange)" : "var(--brand-blue)",
                    filter: "blur(60px)",
                  }}
                />
                <div className="relative">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        c.accent === "orange"
                          ? "color-mix(in oklab, var(--brand-orange) 18%, transparent)"
                          : "color-mix(in oklab, var(--brand-blue) 14%, transparent)",
                      color: c.accent === "orange" ? "var(--brand-orange)" : "var(--brand-blue)",
                    }}
                  >
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.desc}</p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                  >
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AIGallery />

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Why Enterprises Choose Innovsol
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl font-semibold text-foreground md:text-6xl">
                  {s.v}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Differentiation"
            title={
              <>
                Not just a vendor.
                <br />
                <span className="italic text-brand-orange">An outcomes partner.</span>
              </>
            }
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-paper p-10 transition-colors hover:bg-ink hover:text-paper"
              >
                <div className="font-display text-sm text-muted-foreground transition-colors group-hover:text-brand-orange">
                  {d.n}
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{d.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground transition-colors group-hover:text-paper/70">
                  {d.desc}
                </p>
                <CheckCircle2 className="absolute right-8 top-8 h-5 w-5 text-brand-blue opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnalyticsDemoVideo />

      {/* INDUSTRIES */}
      <section className="border-t border-border bg-secondary/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Domain depth across regulated and high-stakes sectors."
          />
          <div className="mt-12 flex flex-wrap gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                className="rounded-full border border-border bg-paper px-6 py-3 text-sm font-medium transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
