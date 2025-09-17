// Support and Hosting Information for Pricing Section

export interface SupportInclusions {
  duration: string;
  features: string[];
  responseTime: {
    critical: string;
    high: string;
    medium: string;
    low: string;
  };
}

export interface HostingRecommendations {
  recommended: {
    name: string;
    monthlyCost: number;
    description: string;
  };
  database: {
    name: string;
    monthlyCost: number;
    description: string;
  };
  totalMonthlyHosting: number;
  notes: string[];
}

// Support inclusions with the WeaveCP package
export const supportInclusions: SupportInclusions = {
  duration: "1 Month",
  features: [
    "Website deployment assistance",
    "CMS training and setup",
    "Content migration help",
    "Technical support via email/chat",
    "Bug fixes and minor adjustments",
    "SEO setup guidance",
    "Analytics configuration",
    "Basic customization requests",
  ],
  responseTime: {
    critical: "2-4 hours",
    high: "4-8 hours",
    medium: "24-48 hours",
    low: "48-72 hours",
  },
};

// Hosting cost recommendations
export const hostingRecommendations: HostingRecommendations = {
  recommended: {
    name: "Vercel Pro",
    monthlyCost: 20,
    description: "Website hosting with advanced features",
  },
  database: {
    name: "MongoDB Atlas",
    monthlyCost: 9,
    description: "Database hosting for CMS content",
  },
  totalMonthlyHosting: 29,
  notes: [
    "Free tiers available for initial deployment",
    "Upgrade when traffic increases or advanced features needed",
    "Domain registration separate (~$15/year)",
    "All hosting costs paid directly to service providers",
  ],
};
