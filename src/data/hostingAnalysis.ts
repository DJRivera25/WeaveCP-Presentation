// Hosting Cost Analysis - Free Tiers vs Paid Plans

export interface HostingTier {
  service: string;
  freeTier: {
    limits: string[];
    suitableFor: string;
    cost: number;
  };
  paidTier: {
    features: string[];
    cost: number;
    whenToUpgrade: string;
  };
}

export interface UsageScenario {
  scenario: string;
  monthlyVisitors: number;
  monthlyUploads: number;
  cmsUsers: number;
  recommendedTier: "free" | "paid";
  monthlyCost: number;
}

// HOSTING SERVICES ANALYSIS
export const hostingServices: HostingTier[] = [
  {
    service: "Vercel (Website Hosting)",
    freeTier: {
      limits: [
        "100GB bandwidth per month",
        "1,000 serverless function invocations",
        "Unlimited static sites",
        "Custom domain support",
        "SSL certificates included",
      ],
      suitableFor: "Perfect for architectural firm website with moderate traffic",
      cost: 0,
    },
    paidTier: {
      features: [
        "1TB bandwidth",
        "Unlimited function invocations",
        "Advanced analytics",
        "Team collaboration",
        "Priority support",
      ],
      cost: 20,
      whenToUpgrade: "When you get 100+ visitors daily or need advanced analytics",
    },
  },
  {
    service: "MongoDB Atlas (Database)",
    freeTier: {
      limits: ["512MB storage", "Shared RAM and CPU", "No backup", "Community support only"],
      suitableFor: "Perfect for CMS content, team data, and basic business data",
      cost: 0,
    },
    paidTier: {
      features: ["2GB+ storage", "Dedicated resources", "Automated backups", "24/7 support", "Performance monitoring"],
      cost: 9,
      whenToUpgrade: "When you have 50+ team members or need automated backups",
    },
  },
  {
    service: "Cloudinary (Image Management)",
    freeTier: {
      limits: ["25GB storage", "25GB monthly bandwidth", "Image optimization", "Basic transformations"],
      suitableFor: "Great for architectural portfolio images and website media",
      cost: 0,
    },
    paidTier: {
      features: ["100GB+ storage", "100GB+ bandwidth", "Advanced transformations", "Video support", "Analytics"],
      cost: 89,
      whenToUpgrade: "When you upload 100+ high-res images monthly",
    },
  },
  {
    service: "Email Service (Resend)",
    freeTier: {
      limits: ["3,000 emails per month", "100 emails per day", "Basic email templates"],
      suitableFor: "Perfect for contact forms and basic notifications",
      cost: 0,
    },
    paidTier: {
      features: ["50,000+ emails per month", "Advanced analytics", "Custom domains", "Priority delivery"],
      cost: 20,
      whenToUpgrade: "When sending 100+ emails daily",
    },
  },
];

// USAGE SCENARIOS FOR ARCHITECTURAL FIRM
export const usageScenarios: UsageScenario[] = [
  {
    scenario: "Small Architectural Firm (5-10 employees)",
    monthlyVisitors: 500,
    monthlyUploads: 20,
    cmsUsers: 2,
    recommendedTier: "free",
    monthlyCost: 0,
  },
  {
    scenario: "Medium Firm (10-25 employees)",
    monthlyVisitors: 1500,
    monthlyUploads: 50,
    cmsUsers: 5,
    recommendedTier: "free",
    monthlyCost: 0,
  },
  {
    scenario: "Growing Firm (25+ employees, high traffic)",
    monthlyVisitors: 5000,
    monthlyUploads: 100,
    cmsUsers: 10,
    recommendedTier: "paid",
    monthlyCost: 29, // Vercel Pro + MongoDB paid tier
  },
];

// COST BREAKDOWN BY PHASE
export const costBreakdown = {
  phase1_WebsiteOnly: {
    development: 3091, // ₱170,000 / 55 = 3091
    hosting: 0, // Free tiers
    domain: 15, // Annual
    total_first_year: 4515,
    ongoing_monthly: 0,
  },
  phase2_WithEmployeeManagement: {
    additional_development: 3500,
    hosting: 29, // Paid tiers needed for employee usage
    total_investment: 8000,
    ongoing_monthly: 29,
  },
};

// RECOMMENDATIONS
export const hostingRecommendations = {
  immediate: {
    recommendation: "Start with FREE tiers for everything",
    reasoning: "Public website + CMS won't exceed free tier limits",
    monthlyCost: 0,
    whenToReview: "After 6 months or when traffic grows significantly",
  },
  futureUpgrade: {
    recommendation: "Upgrade to paid tiers when adding employee management",
    reasoning: "More database usage and function calls with employee features",
    monthlyCost: 29,
    includes: "Vercel Pro ($20) + MongoDB M2 ($9)",
  },
  domainOnly: {
    cost: 15,
    frequency: "Annual",
    note: "Only required cost for first year",
  },
};

// FREE TIER LIMITS ANALYSIS
export const freeTierAnalysis = {
  perfectFor: [
    "Architectural firm public website",
    "Portfolio showcase with images",
    "Service pages and team profiles",
    "Contact forms and inquiries",
    "Basic CMS content management",
    "Small team content editing (2-5 users)",
  ],
  limitations: [
    "No advanced analytics (basic Google Analytics still works)",
    "Limited to 100GB bandwidth monthly",
    "No automated database backups",
    "Community support only",
  ],
  whenToUpgrade: [
    "Website gets 3,000+ visitors monthly",
    "Uploading 50+ large images monthly",
    "Adding employee management features",
    "Need automated backups",
    "Want advanced analytics and insights",
  ],
};

// TOTAL COST COMPARISON
export const totalCostComparison = {
  year1: {
    ourSolution: {
      development: 3091, // ₱170,000 / 55 = 3091
      hosting: 0,
      domain: 15,
      total: 3106, // 3091 + 15
    },
    theirCurrent: {
      alreadyPaid: 3600,
      developerFees: 1200, // Estimated yearly developer costs
      hosting: 0, // Assuming their current is hosted
      total: 4800,
    },
    savings: 285,
  },
  year2and3: {
    ourSolution: {
      development: 0,
      hosting: 0,
      domain: 15,
      support: 600, // Optional $200/month * 3 months
      total: 615, // 600 + 15
    },
    theirCurrent: {
      developerFees: 1200,
      hosting: 0,
      total: 1200,
    },
    savings: 585,
  },
};
