// WeaveCP Project Pricing Analysis

export interface PricingTier {
  name: string;
  description: string;
  basePrice: number;
  features: string[];
  timeline: string;
  supportIncluded: string;
}

export interface AdditionalService {
  name: string;
  description: string;
  price: number;
  unit: string;
}

export interface ProjectEstimate {
  developmentCost: number;
  designCost: number;
  deploymentCost: number;
  supportCost: number;
  totalCost: number;
  paymentSchedule: PaymentMilestone[];
}

export interface PaymentMilestone {
  milestone: string;
  percentage: number;
  amount: number;
  deliverables: string[];
}

// PRICING TIERS
export const pricingTiers: PricingTier[] = [
  {
    name: "Essential Package",
    description: "Basic architectural firm website with core features",
    basePrice: 8500,
    features: [
      "Responsive public website (5 pages)",
      "Services showcase with image galleries",
      "Team member profiles",
      "Contact forms and basic CMS",
      "Mobile-responsive design",
      "SEO optimization",
      "Basic analytics integration",
    ],
    timeline: "4-6 weeks",
    supportIncluded: "1 month support",
  },
  {
    name: "Professional Package",
    description: "Complete business solution with employee management",
    basePrice: 15500,
    features: [
      "Everything in Essential Package",
      "Employee dashboard and portal",
      "Time tracking system",
      "Task management with Kanban board",
      "Leave management system",
      "User authentication with roles",
      "Advanced CMS with draft/publish workflow",
      "Email notifications system",
      "Basic reporting and analytics",
    ],
    timeline: "8-10 weeks",
    supportIncluded: "1 month support (40 hours)",
  },
  {
    name: "Enterprise Package",
    description: "Full-featured platform with advanced management tools",
    basePrice: 22500,
    features: [
      "Everything in Professional Package",
      "Advanced project management system",
      "Comprehensive admin dashboard",
      "Advanced analytics and reporting",
      "Job posting and application system",
      "Calendar and event management",
      "Advanced notification system",
      "Cloudinary image management",
      "Performance optimization",
      "Security audit and hardening",
    ],
    timeline: "12-14 weeks",
    supportIncluded: "6 months support",
  },
];

// RECOMMENDED PACKAGE (Professional)
export const recommendedPackage = pricingTiers[1];

// ADDITIONAL SERVICES
export const additionalServices: AdditionalService[] = [
  {
    name: "Custom API Integration",
    description: "Integration with third-party services or existing systems",
    price: 1200,
    unit: "per integration",
  },
  {
    name: "Advanced Analytics Dashboard",
    description: "Custom analytics with advanced reporting and visualizations",
    price: 2500,
    unit: "one-time",
  },
  {
    name: "Mobile App Development",
    description: "React Native mobile app for iOS and Android",
    price: 8500,
    unit: "complete app",
  },
  {
    name: "E-commerce Integration",
    description: "Online payment and product catalog system",
    price: 3500,
    unit: "complete system",
  },
  {
    name: "Multi-language Support",
    description: "Internationalization with multiple language support",
    price: 1800,
    unit: "per language",
  },
  {
    name: "Advanced Security Features",
    description: "Two-factor authentication, advanced encryption, security monitoring",
    price: 2200,
    unit: "complete package",
  },
  {
    name: "Training Sessions",
    description: "Comprehensive training for admin users and content management",
    price: 150,
    unit: "per hour",
  },
  {
    name: "Extended Support",
    description: "Additional support beyond included period",
    price: 180,
    unit: "per month",
  },
];

// PROJECT ESTIMATE (Professional Package)
export const projectEstimate: ProjectEstimate = {
  developmentCost: 13500,
  designCost: 1500,
  deploymentCost: 500,
  supportCost: 0, // Included in package
  totalCost: 15500,
  paymentSchedule: [
    {
      milestone: "Project Kickoff & Setup",
      percentage: 30,
      amount: 4650,
      deliverables: [
        "Project setup and configuration",
        "Database design and architecture",
        "UI/UX design mockups",
        "Development environment setup",
      ],
    },
    {
      milestone: "Core Development Phase 1",
      percentage: 25,
      amount: 3875,
      deliverables: [
        "Public website completion",
        "Authentication system",
        "Basic CMS implementation",
        "Responsive design implementation",
      ],
    },
    {
      milestone: "Advanced Features Phase 2",
      percentage: 25,
      amount: 3875,
      deliverables: [
        "Employee dashboard",
        "Time tracking system",
        "Task management features",
        "Leave management system",
      ],
    },
    {
      milestone: "Final Delivery & Launch",
      percentage: 20,
      amount: 3100,
      deliverables: [
        "Complete testing and bug fixes",
        "Performance optimization",
        "Production deployment",
        "Training and documentation",
      ],
    },
  ],
};

// SUPPORT AND MAINTENANCE INCLUSIONS
export const supportInclusions = {
  duration: "1 Month (40 Hours)",
  features: [
    "Bug fixes and minor issues resolution",
    "Content updates and modifications",
    "Security updates and patches",
    "Performance monitoring and optimization",
    "Email and phone support during business hours",
    "Monthly backup and maintenance",
    "Basic training and user guidance",
    "Minor feature enhancements (up to 40 hours total)",
  ],
  exclusions: [
    "Major feature additions",
    "Third-party integrations",
    "Hosting and domain costs",
    "Content creation and copywriting",
    "Advanced customizations beyond scope",
  ],
  responseTime: {
    critical: "4 hours",
    high: "24 hours",
    medium: "48 hours",
    low: "5 business days",
  },
};

// HOSTING AND MAINTENANCE RECOMMENDATIONS
export const hostingRecommendations = {
  recommended: {
    provider: "Vercel Pro",
    monthlyCost: 20,
    features: ["Unlimited bandwidth", "Advanced analytics", "Team collaboration", "Custom domains", "Edge functions"],
  },
  database: {
    provider: "MongoDB Atlas",
    monthlyCost: 25,
    features: [
      "Managed database service",
      "Automated backups",
      "Global clusters",
      "Security features",
      "Monitoring and alerts",
    ],
  },
  imageStorage: {
    provider: "Cloudinary",
    monthlyCost: 15,
    features: ["Image optimization", "CDN delivery", "Transformation API", "Video support", "Analytics"],
  },
  totalMonthlyHosting: 60,
};

// VALUE PROPOSITION
export const valueProposition = {
  timeToMarket: "8-10 weeks faster than traditional development",
  costSavings: "40-60% less expensive than custom development from scratch",
  roi: "Expected ROI within 6-12 months through improved efficiency",
  benefits: [
    "Streamlined business operations",
    "Professional online presence",
    "Improved team productivity",
    "Automated administrative tasks",
    "Enhanced client communication",
    "Scalable architecture for future growth",
  ],
};

// COMPARISON WITH ALTERNATIVES
export const competitorComparison = {
  customDevelopment: {
    cost: "25,000 - 40,000",
    timeline: "16-24 weeks",
    pros: ["Fully custom", "Complete control"],
    cons: ["High cost", "Long timeline", "Higher risk"],
  },
  wordpressTemplate: {
    cost: "2,000 - 5,000",
    timeline: "2-4 weeks",
    pros: ["Low cost", "Quick setup"],
    cons: ["Limited functionality", "Security concerns", "Maintenance overhead"],
  },
  ourSolution: {
    cost: "15,500",
    timeline: "8-10 weeks",
    pros: ["Modern tech stack", "Scalable", "Full-featured", "Professional support"],
    cons: ["Higher than template", "Requires technical setup"],
  },
};
