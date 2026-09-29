import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";

export const Route = createFileRoute("/services/saas-sales")({
  head: () => ({
    meta: [
      { title: "SaaS Services | NAVOGIZ Innovative Solutions" },
      {
        name: "description",
        content:
          "NAVOGIZ Innovative Solutions supports SaaS businesses with lead generation, prospecting, customer outreach, and sales pipeline support.",
      },
      { property: "og:title", content: "SaaS Services | NAVOGIZ Innovative Solutions" },
      {
        property: "og:description",
        content:
          "Professional sales support to help SaaS companies reach potential customers and grow.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/saas-sales" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/saas-sales" }],
  }),
  component: () => <ServiceDetailPage slug="saas-sales" />,
});
