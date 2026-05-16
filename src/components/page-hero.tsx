import { motion } from "framer-motion";
import { FluidBg } from "./fluid-bg";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24 md:pb-24 md:pt-32">
      <FluidBg />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-blue"
        >
          <span className="h-px w-8 bg-brand-orange" /> {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1] md:text-7xl"
        >
          {title}
        </motion.h1>
        {children && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg text-muted-foreground"
          >
            {children}
          </motion.p>
        )}
      </div>
    </section>
  );
}
