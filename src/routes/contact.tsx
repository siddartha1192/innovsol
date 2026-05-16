import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Discovery Call — Innovsol" },
      { name: "description", content: "30-minute discovery call. No pitch, no pressure — just a conversation about your transformation challenges." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's start with a <span className="italic text-brand-orange">conversation.</span></>}>
        Tell us a little about your challenge. We'll respond within one business day.
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Email</p>
              <a href="mailto:info@innovsol.ai" className="mt-3 inline-flex items-center gap-2 font-display text-2xl font-medium hover:text-brand-orange">
                <Mail className="h-5 w-5" /> info@innovsol.ai
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Offices</p>
              <ul className="mt-3 space-y-2 text-foreground">
                {["Gurugram", "Bengaluru", "Dubai", "Lagos"].map((c) => (
                  <li key={c} className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" /> {c}</li>
                ))}
              </ul>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-5 rounded-3xl border border-border bg-paper p-8 md:p-10"
          >
            {sent ? (
              <div className="py-10 text-center">
                <div className="font-display text-3xl">Thank you.</div>
                <p className="mt-3 text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Company" name="company" />
                  <Field label="Role" name="role" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">What are you trying to solve?</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-brand-blue"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-brand-blue"
                >
                  Book Discovery Call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-brand-blue"
      />
    </div>
  );
}
