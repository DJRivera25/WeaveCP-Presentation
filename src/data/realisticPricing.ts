// Realistic Pricing for Single Developer vs No-Code Developer

export interface CompetitivePricing {
  ourOffer: {
    price: number;
    currency: string;
    description: string;
    includes: string[];
    timeline: string;
    support: string;
  };
  theirCurrent: {
    paid: number;
    currency: string;
    got: string;
    problems: string[];
  };
  noCodeDeveloper: {
    requesting: number;
    currency: string;
    limitations: string[];
    ongoingCosts: string[];
  };
  valueProposition: {
    savings: number;
    betterValue: string[];
    whyChooseUs: string[];
  };
}

export const competitivePricing: CompetitivePricing = {
  ourOffer: {
    price: 3091, // ₱170,000 / 55 = 3091
    currency: "USD",
    description: "Complete professional website with CMS - everything you need",
    includes: [
      "Complete 9-page professional website",
      "Full content management system (edit content yourself)",
      "7 individual service showcase pages",
      "Mobile responsive design",
      "Full SEO optimization with metadata",
      "Google Analytics & Facebook Pixel integration",
      "Professional image management system",
      "Contact forms with email integration",
      "1 month support and training (40 hours) included",
      "Source code ownership - no ongoing fees",
    ],
    timeline: "2-3 weeks delivery",
    support: "1 month (40 hours) included, then optional ₱1000/hour",
  },
  theirCurrent: {
    paid: 3600, // ₱200,000 = ~$3,600 USD
    currency: "USD",
    got: "Single static homepage only",
    problems: [
      "Only 1 page (homepage) - no other pages",
      "No way to edit content without developer",
      "No service showcase pages",
      "Basic SEO - not optimized",
      "No analytics or tracking setup",
      "Overpaid for minimal functionality",
    ],
  },
  noCodeDeveloper: {
    requesting: 2500, // Assuming they want $2,500+ for updates
    currency: "USD",
    limitations: [
      "Still limited functionality",
      "Ongoing dependency on developer",
      "No real CMS - still static approach",
      "Higher long-term costs",
      "Limited customization options",
      "No source code ownership",
    ],
    ongoingCosts: [
      "Every content change requires payment",
      "No direct control over website",
      "Limited scalability",
      "Vendor lock-in",
    ],
  },
  valueProposition: {
    savings: 1100, // Saving vs their current situation
    betterValue: [
      "Only $900 more than your static page for 10x the features",
      "Complete independence - edit content yourself",
      "Professional multi-page website vs single page",
      "Full SEO optimization vs basic setup",
      "Analytics and tracking integration included",
      "No ongoing developer dependency",
    ],
    whyChooseUs: [
      "Experienced developer with proven track record",
      "Complete solution - not just a website",
      "You own the source code - no vendor lock-in",
      "Professional development practices",
      "Modern technology stack (Next.js, not no-code)",
      "Competitive pricing with better value",
      "Quick delivery - ready for deployment",
      "Ongoing support available but not required",
    ],
  },
};

// Additional services (optional add-ons)
export const additionalServices = [
  {
    name: "Advanced Analytics Dashboard",
    price: 800,
    description: "Custom analytics beyond Google Analytics",
  },
  {
    name: "E-commerce Integration",
    price: 1200,
    description: "Online payment and product catalog",
  },
  {
    name: "Advanced SEO Package",
    price: 600,
    description: "Schema markup, advanced optimization",
  },
  {
    name: "Social Media Integration",
    price: 400,
    description: "Instagram feed, social sharing",
  },
  {
    name: "Multi-language Support",
    price: 1000,
    description: "Website in multiple languages",
  },
];

// Package options
export const packageOptions = [
  {
    name: "Essential Package",
    price: 3636, // ₱200,000 / 55 = 3636
    description: "Basic professional website",
    includes: [
      "5-page professional website",
      "Basic CMS for content editing",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact forms",
      "1 month support",
    ],
    bestFor: "Small firms just getting started online",
  },
  {
    name: "Professional Package",
    price: 3091, // ₱170,000 / 55 = 3091
    description: "Complete solution - recommended",
    includes: [
      "Complete 9-page professional website",
      "Full CMS with image management",
      "7 individual service pages",
      "Advanced SEO + metadata",
      "Analytics & pixel integration",
      "Professional email integration",
      "1 month support + training (40 hours)",
    ],
    bestFor: "Perfect for architectural firms wanting complete solution",
    recommended: true,
  },
  {
    name: "Premium Package",
    price: 5454, // ₱300,000 / 55 = 5454
    description: "Everything + advanced features",
    includes: [
      "Everything in Professional Package",
      "Advanced analytics dashboard",
      "Social media integration",
      "Advanced SEO package",
      "Priority support",
      "6 months support included",
    ],
    bestFor: "For firms wanting additional premium features",
  },
];

// Comparison with their current situation
export const situationComparison = {
  currentSituation: {
    investment: "$3,600 (₱200,000)",
    result: "Single static homepage",
    problems: "No control, no other pages, basic functionality",
    ongoing: "Must pay developer for any changes",
  },
  noCodeOption: {
    investment: "$2,500+ for improvements",
    result: "Still limited, static approach",
    problems: "Ongoing dependency, limited features",
    ongoing: "Continued payments for changes",
  },
  ourSolution: {
    investment: "₱170,000 (one-time)",
    result: "Complete professional website + CMS",
    benefits: "Full control, 9 pages, modern features",
    ongoing: "Optional support only - you control everything",
  },
};
