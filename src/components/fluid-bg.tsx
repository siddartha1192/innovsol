import { motion } from "framer-motion";

export function FluidBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="fluid-blob absolute -left-32 top-10 h-[480px] w-[480px] rounded-full"
        style={{ background: "var(--brand-blue)", opacity: 0.18 }}
      />
      <motion.div
        className="fluid-blob absolute -right-24 top-40 h-[420px] w-[420px] rounded-full"
        style={{ background: "var(--brand-orange)", opacity: 0.22, animationDelay: "-6s" }}
      />
      <motion.div
        className="fluid-blob absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full"
        style={{ background: "var(--brand-blue)", opacity: 0.12, animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--paper)_75%)]" />
    </div>
  );
}
