import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { NAV, HEAD_OFFICE, SERVICES, telHref } from "@/lib/site-data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-lg font-extrabold text-primary-foreground shadow-soft">A</span>
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold tracking-[0.18em] ${light ? "text-ink-foreground" : "text-foreground"}`}>AMANA</span>
        <span className={`block text-[11px] font-medium ${light ? "text-lilac" : "text-muted-foreground"}`}>Best Laid Society</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/85 shadow-soft backdrop-blur-lg" : "bg-transparent"}`}>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary bg-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <Link to="/contact" className="btn btn-outline !px-5 !py-2.5 text-sm">Contact Us</Link>
          <Link to="/services" className="btn btn-primary !px-5 !py-2.5 text-sm">Get Started</Link>
        </div>
        <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full bg-accent text-primary xl:hidden">
          <Menu size={20} />
        </button>
      </div>

      <div className={`fixed inset-0 z-50 xl:hidden ${open ? "" : "pointer-events-none"}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <aside className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-background p-6 shadow-lift transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between">
            <Logo />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full bg-accent text-primary"><X size={20} /></button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
                className="rounded-xl px-4 py-3 text-base font-semibold text-foreground hover:bg-surface"
                activeProps={{ className: "bg-accent text-primary" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-outline">Contact Us</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="btn btn-primary">Get Started</Link>
          </div>
        </aside>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            Amana Best Laid Society works for the common man's welfare — helping individuals and families move towards a more secure financial future with trust and transparency.
          </p>
          <div className="mt-6 flex items-start gap-3 text-sm text-ink-foreground/80">
            <MapPin size={18} className="mt-0.5 shrink-0 text-lilac" />
            <span>{HEAD_OFFICE.address}</span>
          </div>
          <a href={telHref(HEAD_OFFICE.phones[0])} className="mt-3 flex items-center gap-3 text-sm text-ink-foreground/80 hover:text-lilac">
            <Phone size={18} className="text-lilac" /> {HEAD_OFFICE.phones[0]}
          </a>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((I, i) => (
              <span key={i} title="Social link awaiting confirmation" className="grid h-10 w-10 place-items-center rounded-full bg-ink-foreground/10 text-lilac transition hover:bg-primary-glow hover:text-primary-foreground">
                <I size={18} />
              </span>
            ))}
          </div>
        </div>
        <FooterCol title="Quick Links" items={NAV.slice(0, 5).map((n) => ({ label: n.label, to: n.to }))} />
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-lilac">Our Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="text-ink-foreground/75 hover:text-lilac">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <FooterCol title="Important Links" items={[{ label: "Gallery", to: "/gallery" }, { label: "Careers", to: "/careers" }, { label: "Contact", to: "/contact" }]} />
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-ink-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Amana Best Laid Society. All rights reserved.</p>
          <div className="flex gap-5"><span>Privacy Policy</span><span>Terms and Conditions</span></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: (typeof NAV)[number]["to"] }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-widest text-lilac">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}><Link to={i.to} className="text-ink-foreground/75 hover:text-lilac">{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
