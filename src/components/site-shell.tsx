import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { legalNavigation, navigation, services, siteConfig } from "@/config/site";

export function SiteShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setScrolledPastHero(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeroVisible = isHome && !scrolledPastHero;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? "top-4 px-4" : "top-6 px-6"}`}
      >
        <div
          className={`mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full border px-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500 backdrop-blur-md ${
            isHeroVisible
              ? "bg-white/10 border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
              : scrolled
                ? "bg-background/80 border-border"
                : "bg-background/50 border-transparent shadow-none"
          }`}
        >
          <div
            className={`shrink-0 scale-90 transition-colors duration-500 ${isHeroVisible ? "text-white" : ""}`}
          >
            <Brand inverse={isHeroVisible} />
          </div>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} label={item.label} to={item.to} isWhite={isHeroVisible} />
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-accent-strong px-6 text-white hover:bg-black transition-colors"
            >
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">Let's Talk</a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${isHeroVisible ? "text-white hover:bg-white/10" : ""}`}
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[88vw] border-border bg-background p-0">
              <SheetHeader className="border-b border-border p-6 text-left">
                <SheetTitle>
                  <Brand />
                </SheetTitle>
                <SheetDescription>Sales and business-development solutions.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col p-4" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="block border-b border-border px-3 py-4 font-semibold text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="p-4">
                <SheetClose asChild>
                  <Button asChild variant="outline" size="lg" className="w-full bg-card">
                    <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="size-5" /> Chat on WhatsApp
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-hero text-hero-foreground py-20">
        <div className="section-shell grid gap-16 lg:grid-cols-2">
          <div>
            <img src="/logo.png" alt="Navogiz" className="h-16 md:h-24 w-auto" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <FooterList
              title="Navigation"
              items={[
                { label: "Services", to: "/services" },
                { label: "About", to: "/about" },
                { label: "Career", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ]}
            />
            <FooterList title="Legal" items={legalNavigation} />
          </div>
        </div>
        <div className="section-shell mt-24 flex flex-col md:flex-row justify-between items-center text-sm text-hero-foreground/40 pt-8 border-t border-hero-foreground/10">
          <p>© 2026 Navogiz. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-hero-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-hero-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-hero-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterList({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={`${title}-${item.label}`}>
            <FooterLink label={item.label} to={item.to} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavLink({
  label,
  to,
  className,
  isWhite,
}: {
  label: string;
  to: string;
  className?: string;
  isWhite?: boolean;
}) {
  const base =
    className ??
    `relative text-sm font-semibold transition-colors group ${isWhite ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground"}`;
  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={base}>
        {label}
      </a>
    );
  }
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      className={base}
      activeProps={{ className: isWhite ? "text-white" : "text-foreground" }}
    >
      {label}
      <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
    </Link>
  );
}

function FooterLink({ label, to }: { label: string; to: string }) {
  const className = "text-sm text-hero-foreground/70 transition-colors hover:text-hero-foreground";
  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
}
