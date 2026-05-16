const partners = ["UiPath", "Cisco", "NetApp", "Fortinet", "HPE", "Nutanix", "SentinelOne", "Microsoft", "AWS", "Palo Alto"];

export function MarqueePartners() {
  const row = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden border-y border-border bg-paper py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
      <div className="mb-4 px-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        OEM Partners
      </div>
      <div className="marquee-track flex w-max gap-16 px-8">
        {row.map((p, i) => (
          <div
            key={i}
            className="font-display text-2xl font-semibold tracking-tight text-foreground/70 transition-colors hover:text-brand-blue"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
