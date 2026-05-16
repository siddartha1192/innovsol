import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-semibold text-ink">
              innovsol<span className="text-brand-orange">.ai</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-ink/50">
              Intelligence-led Enterprise Transformation
            </p>
            <p className="mt-6 text-sm text-ink/40">
              Gurugram · Bengaluru · Dubai · Lagos
            </p>
            <a
              href="mailto:info@innovsol.ai"
              className="mt-2 inline-block text-sm text-brand-orange hover:underline"
            >
              info@innovsol.ai
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/35">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-ink/60">
              <li><Link to="/services" className="transition-colors hover:text-brand-orange">AIOS</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-brand-orange">Next-Gen Infrastructure</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-brand-orange">App Engineering</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-brand-orange">Digital Trust</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/35">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-ink/60">
              <li><Link to="/about" className="transition-colors hover:text-brand-orange">About</Link></li>
              <li><Link to="/industries" className="transition-colors hover:text-brand-orange">Industries</Link></li>
              <li><Link to="/insights" className="transition-colors hover:text-brand-orange">Insights</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-brand-orange">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs text-ink/35 md:flex-row">
          <p>© {new Date().getFullYear()} Innovsol. All rights reserved.</p>
          <p>Outcome-guaranteed. Fixed-price. Globally delivered.</p>
        </div>
      </div>
    </footer>
  );
}
