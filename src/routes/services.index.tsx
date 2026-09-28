import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Building2, GraduationCap, Megaphone, Search, Store, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, IconCard, PageHero, SectionHeading } from "@/components/marketing";
import { services } from "@/config/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Sales, Educational & Rural Tech Services | NAVOGIZ Innovative Solutions" },
      { name: "description", content: "Explore NAVOGIZ Innovative Solutions services for SaaS and logistics sales, practical digital learning, and accessible rural digital services through Rural Tech Store Services." },
      { property: "og:title", content: "Sales, Educational & Rural Tech Services | NAVOGIZ Innovative Solutions" },
      { property: "og:description", content: "Business-focused sales solutions, practical learning, and rural digital service centers for entrepreneurs and communities." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const serviceIcons = [Boxes, Building2, GraduationCap, Store];

function ServicesIndex() {
  return (
    <>
      <PageHero eyebrow="All Services" title="Our Sales, Educational & Rural Tech Services" description="Explore business-focused sales solutions, practical learning, and accessible rural digital services designed for careers, entrepreneurship, and community growth." />
      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Services" title="Solutions Designed for Business Growth" align="center" />
          <div className="mt-16 flex flex-col gap-16 md:gap-24">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Boxes;
              const isEven = index % 2 === 0;
              const bgs = [
                "/images/saas-sales-1.jpg",
                "/images/logistics-1.jpg",
                "/images/education-1.jpg",
                "/images/rural-1.jpg"
              ];
              const bgImage = bgs[index] ?? bgs[0];

              return (
                <article key={service.slug} className={`flex flex-col gap-10 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="relative w-full overflow-hidden rounded-2xl lg:w-1/2 aspect-video group shadow-lg">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${bgImage})` }} />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                  <div className="flex w-full flex-col justify-center lg:w-1/2 lg:px-12">
                    
                    <h3 className="mt-6 font-display text-3xl font-bold md:text-4xl">{service.title}</h3>
                    {"subtitle" in service && (
                      <p className="mt-3 text-lg font-semibold text-accent-strong">{service.subtitle}</p>
                    )}
                    <p className="mt-5 text-lg leading-8 text-muted-foreground">{service.description}</p>
                    <Button asChild size="lg" className="mt-8 self-start bg-black text-white hover:bg-black/80">
                      <Link to={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Additional Sales Support" title="Flexible Sales Capabilities" description="Targeted support that strengthens your existing sales and business-development efforts." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"><IconCard icon={Search} title="Lead Generation">Identify and connect businesses with relevant prospects.</IconCard><IconCard icon={TrendingUp} title="Business Development">Support organizations in identifying new opportunities and markets.</IconCard><IconCard icon={Target} title="Customer Acquisition">Help businesses create structured customer acquisition processes.</IconCard><IconCard icon={Megaphone} title="Sales Outreach">Professional communication and engagement with potential customers.</IconCard></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
