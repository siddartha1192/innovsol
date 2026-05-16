import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-paper md:py-32">
      <motion.div
        aria-hidden
        className="fluid-blob absolute -left-20 top-10 h-96 w-96 rounded-full"
        style={{ background: "var(--brand-orange)", opacity: 0.4 }}
      />
      <motion.div
        aria-hidden
        className="fluid-blob absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full"
        style={{ background: "var(--brand-blue)", opacity: 0.4, animationDelay: "-8s" }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-balance text-4xl font-semibold leading-[1.05] md:text-6xl"
        >
          Ready to <span className="text-brand-orange">Transform?</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-xl text-paper/70">
          Start with a 30-minute discovery call. No pitch, no pressure — just a conversation about your challenges.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:gap-3"
          >
            Book a Discovery Call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-7 py-3.5 text-sm font-medium text-paper transition-all hover:border-paper/60"
          >
            <Download className="h-4 w-4" /> Download Corporate Profile
          </a>
        </div>
      </div>
    </section>
  );
}
