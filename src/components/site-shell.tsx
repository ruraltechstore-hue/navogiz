import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { legalNavigation, navigation, services, siteConfig } from "@/config/site";

export function SiteShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={isHome ? "absolute top-0 z-40 w-full bg-transparent" : "sticky top-0 z-40 border-b border-border bg-background"}>
        <div className="section-shell flex h-18 items-center">
          <div className="shrink-0"><Brand /></div>
          <nav className="ml-auto hidden items-center gap-4 min-[900px]:flex xl:gap-6" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} label={item.label} to={item.to} />
            ))}
          </nav>
          {/* WhatsApp icon removed from header as per request */}
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="ml-auto min-[900px]:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent className="w-[88vw] border-border bg-background p-0">
              <SheetHeader className="border-b border-border p-6 text-left"><SheetTitle><Brand /></SheetTitle><SheetDescription>Sales and business-development solutions.</SheetDescription></SheetHeader>
              <nav className="flex flex-col p-4" aria-label="Mobile navigation">
                {navigation.map((item) => <SheetClose asChild key={item.to}><NavLink label={item.label} to={item.to} className="block border-b border-border px-3 py-4 font-semibold text-foreground" /></SheetClose>)}
              </nav>
              <div className="p-4"><SheetClose asChild><Button asChild variant="outline" size="lg" className="w-full bg-card"><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-5" /> Chat on WhatsApp</a></Button></SheetClose></div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>{children}</main>
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with NAVOGIZ Innovative Solutions on WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-white p-1 shadow-lg transition-transform hover:scale-110">
        <WhatsAppIcon className="size-11" />
      </a>
      <footer className="bg-hero text-hero-foreground">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <FooterList title="Company" items={navigation.map((item) => ({ label: item.label, to: item.to }))} />
          <FooterList title="Services" items={[...services.map((item) => ({ label: item.title, to: `/services/${item.slug}` })), { label: "Lead Generation", to: "/services" }, { label: "Business Development", to: "/services" }]} />
          <FooterList title="Legal" items={legalNavigation} />
          <div><h2 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h2><dl className="mt-5 space-y-4 text-sm text-hero-foreground/70"><div><dt className="font-semibold text-hero-foreground">Email</dt><dd className="mt-1"><a className="transition-colors hover:text-hero-foreground" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div><div><dt className="font-semibold text-hero-foreground">Phone</dt><dd className="mt-1"><a className="transition-colors hover:text-hero-foreground" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></dd></div><div><dt className="font-semibold text-hero-foreground">Address</dt><dd className="mt-1">{siteConfig.address}</dd></div></dl></div>
        </div>
        <div className="border-t border-hero-foreground/15"><div className="section-shell flex flex-col gap-4 py-5 text-xs text-hero-foreground/60 lg:flex-row lg:items-center lg:justify-between"><p>© 2026 NAVOGIZ Innovative Solutions. All rights reserved.</p><nav aria-label="Legal navigation"><ul className="flex flex-wrap gap-x-3 gap-y-2">{legalNavigation.map((item, index) => <li key={`bottom-${item.to}`} className="flex items-center gap-3">{index > 0 && <span aria-hidden="true">|</span>}<Link to={item.to} className="transition-colors hover:text-hero-foreground">{item.label}</Link></li>)}</ul></nav></div></div>
      </footer>
    </div>
  );
}

function FooterList({ title, items }: { title: string; items: ReadonlyArray<{ label: string; to: string }> }) {
  return <div><h2 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h2><ul className="mt-5 space-y-3">{items.map((item) => <li key={`${title}-${item.label}`}><FooterLink label={item.label} to={item.to} /></li>)}</ul></div>;
}

function NavLink({ label, to, className }: { label: string; to: string; className?: string }) {
  const base = className ?? "whitespace-nowrap text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground xl:text-sm";
  if (to.startsWith("http")) {
    return <a href={to} target="_blank" rel="noopener noreferrer" className={base}>{label}</a>;
  }
  return <Link to={to} activeOptions={{ exact: to === "/" }} className={base} activeProps={{ className: "text-foreground" }}>{label}</Link>;
}

function FooterLink({ label, to }: { label: string; to: string }) {
  const className = "text-sm text-hero-foreground/70 transition-colors hover:text-hero-foreground";
  if (to.startsWith("http")) {
    return <a href={to} target="_blank" rel="noopener noreferrer" className={className}>{label}</a>;
  }
  return <Link to={to} className={className}>{label}</Link>;
}
