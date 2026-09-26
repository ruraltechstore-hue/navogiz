import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Route as RouteIcon,
  Store,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CTASection, IconCard, SectionHeading } from "@/components/marketing";
import { services } from "@/config/site";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NAVOGIZ Innovative Solutions | Sales & Business Growth Solutions" },
      {
        name: "description",
        content:
          "NAVOGIZ Innovative Solutions provides SaaS, logistics, educational sales, lead generation, and business development solutions to help businesses grow.",
      },
      { property: "og:title", content: "NAVOGIZ Innovative Solutions | Sales & Business Growth Solutions" },
      {
        property: "og:description",
        content: "Industry-focused sales and business development support for sustainable growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const serviceLinks = [
    "/services/saas-sales",
    "/services/logistics-sales",
    "/services/educational-services",
    "/services/rural-tech-store",
  ] as const;

  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-hero text-hero-foreground lg:min-h-[760px]">
        {/* The user will place their 2MB video as public/hero-video.mp4 */}
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-right opacity-80"
        />
        <div className="section-shell relative flex min-h-[680px] items-center py-20 lg:min-h-[760px]">
          <div className="rise-in max-w-4xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C57526]">
              <span>{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}</span>
            </div>
            
            <p className="mt-8 text-xs sm:text-sm font-semibold tracking-widest text-black/60 uppercase">
              SALES • BUSINESS DEVELOPMENT • GROWTH
            </p>
            
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-black md:text-7xl lg:text-[5rem]">
              Smarter Sales.<br/>Stronger <span>Growth.</span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70 md:text-xl">
              Connecting businesses with customers, opportunities and lasting partnerships.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#4a2e15] px-8 text-white hover:bg-[#382310]">
                <Link to="/partner">
                  Partner With Us <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black/30 bg-transparent text-black hover:bg-black/5 px-8">
                <Link to="/services">
                  Explore Services <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 w-full animate-bounce text-center text-xs font-bold uppercase tracking-widest text-black/60">
            SCROLL TO EXPLORE <ArrowDown className="mx-auto mt-2 size-4" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why NAVOGIZ Innovative Solutions"
            title="Your Growth. Our Sales Expertise."
            description="From generating qualified opportunities to building meaningful customer relationships, we work alongside businesses to create scalable and effective sales strategies."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Industry-Focused Expertise", text: "Specialized sales solutions across SaaS, logistics, and education." },
              { icon: Users, title: "Customer-Centric Approach", text: "We focus on understanding customer needs and creating meaningful connections." },
              { icon: RouteIcon, title: "Growth-Oriented Strategy", text: "Our approach helps businesses expand their customer base and market presence." },
              { icon: Handshake, title: "Long-Term Partnerships", text: "We aim to build lasting relationships with businesses and their customers." }
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-[2.5] group-hover:bg-primary/10" />
                <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-surface transition-colors duration-500 group-hover:bg-primary">
                  <feature.icon className="size-6 text-primary transition-colors duration-500 group-hover:text-white" />
                </div>
                <div className="relative z-10 mt-8 h-1 w-8 rounded-full bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                <h3 className="relative z-10 mt-6 font-display text-xl font-bold">{feature.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-7 text-muted-foreground">{feature.text}</p>
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent to-primary/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Services" title="Solutions Designed for Business Growth" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const icons = [Boxes, Building2, GraduationCap, Store];
              const Icon = icons[index] ?? Boxes;
              const bgs = [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
              ];
              const bgImage = bgs[index] ?? bgs[0];
              return (
                <article
                  key={service.title}
                  className="rise-in group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-xl border border-border shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${bgImage})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                  <div className="relative z-10 flex h-full flex-col p-7">
                    <span className="grid size-12 place-items-center rounded-md bg-primary text-primary-foreground">
                      <Icon />
                    </span>
                    <h3 className="mt-8 font-display text-2xl font-bold text-white">{service.title}</h3>
                    <div className="mt-3 min-h-12">
                      {"subtitle" in service && (
                        <p className="text-sm font-semibold leading-6 text-white/80">{service.subtitle}</p>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
                    <Button asChild variant="link" className="mt-auto h-auto justify-start px-0 pt-6 text-white hover:text-white/80">
                      <Link to={serviceLinks[index] as (typeof serviceLinks)[number]}>
                        Learn More <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="How We Work" title="A Simple Approach to Better Sales" />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            <IconCard icon={Users} index="01" title="Understand">
              Understand your business, target market, products, and sales objectives.
            </IconCard>
            <IconCard icon={Workflow} index="02" title="Strategize">
              Develop a sales approach aligned with your business goals.
            </IconCard>
            <IconCard icon={HeartHandshake} index="03" title="Connect">
              Engage potential customers and create meaningful business opportunities.
            </IconCard>
            <IconCard icon={Target} index="04" title="Grow">
              Build sustainable customer relationships and support long-term growth.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="bg-hero py-20 text-hero-foreground md:py-24">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Industries We Serve</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Focused expertise where sales relationships matter.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Industry icon={Boxes} title="SaaS" bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80">
              Helping technology companies reach and convert potential customers.
            </Industry>
            <Industry icon={Building2} title="Logistics" bgImage="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80">
              Connecting logistics businesses with potential clients and business opportunities.
            </Industry>
            <Industry icon={GraduationCap} title="Education" bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80">
              Supporting educational and training organizations in reaching learners and customers.
            </Industry>
            <Industry icon={Store} title="Rural Tech Store Services" bgImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80">
              Bringing essential digital services and entrepreneurship opportunities to rural and semi-urban
              communities.
            </Industry>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function Industry({ icon: Icon, title, children, bgImage }: { icon: typeof Boxes; title: string; children: React.ReactNode; bgImage?: string }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/10 bg-black/60 p-7 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {bgImage && (
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 transition-opacity duration-500 group-hover:opacity-50" style={{ backgroundImage: `url(${bgImage})` }} />
      )}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="relative z-20 flex h-full flex-col justify-end">
        <Icon className="size-8 text-accent-strong" />
        <h3 className="mt-5 font-display text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/80">{children}</p>
      </div>
    </article>
  );
}
