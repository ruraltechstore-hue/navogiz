/**
 * Logistics franchise plan catalogue.
 * Amounts are resolved on the server; smallest-unit values are never displayed.
 */
export const logisticsPlans = [
  {
    id: "logistics-single-pincode",
    name: "Single Pincode",
    priceLabel: "₹1,50,000",
    amountPaise: 15000000,
    popular: false,
    features: [
      "Access to the available multi-service platform",
      "Coverage for one pincode",
      "Training and technical support",
      "Marketing support materials",
      "Mobile and web dashboard access",
    ],
  },
  {
    id: "logistics-multi-pincode",
    name: "Multi Pincode",
    priceLabel: "₹2,00,000",
    amountPaise: 20000000,
    popular: true,
    features: [
      "Distributor-level platform access",
      "Coverage for multiple pincodes",
      "Agent-level features included",
      "Sub-agent network access",
      "Priority support",
    ],
  },
] as const;

export type LogisticsPlan = (typeof logisticsPlans)[number];
export type LogisticsPlanId = LogisticsPlan["id"];

export const logisticsPlanIds = logisticsPlans.map((plan) => plan.id) as [
  LogisticsPlanId,
  ...LogisticsPlanId[],
];

export const logisticsPricingNotice =
  "Franchise pricing, services, benefits, eligibility, support, territory availability, and other terms may be subject to change. Please contact NAVOGIZ Innovative Solutions for the latest information and applicable terms.";