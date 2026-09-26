export const internshipPlans = [
  {
    id: "admission-counsellor",
    stage: "Educational Partner",
    name: "Admission Counsellor Partner",
    registrationLabel: "Admission Counsellor Partner Program",
    priceLabel: "₹25,000",
    priceSuffix: "One-time partnership fee",
    amountPaise: 2500000,
    payment: true,
    description: "Guide students, assist admissions, and earn commissions.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Comprehensive training provided",
          "Regular lead allocation",
          "Commission-based income opportunities",
          "Marketing materials and support",
          "Flexible working hours",
        ],
      },
      {
        title: "Who Can Apply",
        items: [
          "Students, graduates, and working professionals",
          "Educators passionate about helping students",
        ],
      },
    ],
  },
  {
    id: "franchisee-partner",
    stage: "Educational Partner",
    name: "Franchisee Partner",
    registrationLabel: "Franchisee Partner Program",
    priceLabel: "₹50,000",
    priceSuffix: "One-time franchise fee",
    amountPaise: 5000000,
    payment: true,
    description: "Open an IIECM learning center in your area.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Exclusive brand rights in your territory",
          "Access to complete course library and LMS",
          "Marketing and promotional support",
          "Training and operational guidance",
          "Established brand recognition",
          "Ongoing support and updates",
        ],
      },
      {
        title: "Who Can Apply",
        items: [
          "Entrepreneurs and business owners",
          "Educational institutions and training centers",
        ],
      },
    ],
  },
  {
    id: "affiliate-partner",
    stage: "Educational Partner",
    name: "Affiliate Partner",
    registrationLabel: "Affiliate Partner Program",
    priceLabel: "₹1,00,000",
    priceSuffix: "One-time affiliate fee",
    amountPaise: 10000000,
    payment: true,
    description: "Promote courses online and earn per sale.",
    sections: [
      {
        title: "Benefits",
        items: [
          "Dedicated affiliate dashboard",
          "Unique tracking links for all courses",
          "Competitive commission structure",
          "Monthly payouts",
          "Promotional materials and creatives",
          "Real-time performance tracking",
        ],
      },
      {
        title: "Who Can Apply",
        items: [
          "Digital marketers and influencers",
          "Bloggers with a strong online presence",
        ],
      },
    ],
  },
] as const;

export type InternshipPlan = (typeof internshipPlans)[number];
export type PaidInternshipPlan = Extract<InternshipPlan, { payment: true }>;

export const paidInternshipPlans = internshipPlans.filter(
  (plan): plan is PaidInternshipPlan => plan.payment,
);