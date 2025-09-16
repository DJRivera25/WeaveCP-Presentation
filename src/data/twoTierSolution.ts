// Two-Tier Solution: Core Website + Optional Business Management

export interface SolutionTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  problem: string;
  solution: string;
  includes: string[];
  timeline: string;
  support: string;
  priority: "immediate" | "future";
  dependencies?: string[];
}

export interface PayrollIntegration {
  name: string;
  description: string;
  features: string[];
  integrations: string[];
  price: number;
}

// TIER 1: CORE SOLUTION (Their Immediate Need)
export const coreSolution: SolutionTier = {
  id: "tier1",
  name: "Professional Website + CMS",
  price: 3091, // ₱170,000 / 55 = 3091
  currency: "USD",
  description: "Solve your immediate website problem - professional multi-page site with full content control",
  problem: "Single static homepage, no content control, expensive developer dependency",
  solution: "Complete professional website with easy-to-use content management system",
  includes: [
    "Complete 9-page professional website (vs your 1 static page)",
    "Full content management system - edit content yourself",
    "7 individual service showcase pages with before/after galleries",
    "Mobile responsive design - works perfectly on all devices",
    "Advanced SEO optimization with proper metadata",
    "Google Analytics 4 integration with conversion tracking",
    "Facebook Pixel integration for marketing campaigns",
    "Professional contact forms with email notifications",
    "Image management system with optimization",
    "1 month support and training (40 hours) included",
  ],
  timeline: "2-3 weeks delivery",
  support: "1 month (40 hours) included, then ₱1000/hour optional",
  priority: "immediate",
};

// TIER 2: BUSINESS MANAGEMENT ADD-ON (Future Enhancement)
export const businessManagementAddon: SolutionTier = {
  id: "tier2",
  name: "Employee Management System",
  price: 3500,
  currency: "USD",
  description: "Transform your business operations with employee time tracking and management",
  problem: "Manual time tracking, no project management, payroll inefficiencies",
  solution: "Complete employee management system with time tracking and payroll integration",
  includes: [
    "Employee clock-in/clock-out system with GPS tracking",
    "Time tracking with project allocation",
    "Task management and assignment system",
    "Project management with team collaboration",
    "Leave management and approval workflow",
    "Payroll integration (QuickBooks, Xero, or custom)",
    "Employee dashboard with productivity metrics",
    "Manager dashboard with team oversight",
    "Automated timesheet generation",
    "Reporting and analytics for business insights",
  ],
  timeline: "3-4 weeks after core website",
  support: "2 months support included, then $300/month optional (includes 20 hours enhancements)",
  priority: "future",
  dependencies: ["Core Website + CMS must be completed first"],
};

// PAYROLL INTEGRATION OPTIONS
export const payrollIntegrations: PayrollIntegration[] = [
  {
    name: "QuickBooks Integration",
    description: "Direct integration with QuickBooks for seamless payroll processing",
    features: [
      "Automatic timesheet export to QuickBooks",
      "Employee data synchronization",
      "Payroll calculation automation",
      "Tax calculation integration",
    ],
    integrations: ["QuickBooks Online", "QuickBooks Desktop"],
    price: 800,
  },
  {
    name: "Xero Integration",
    description: "Connect with Xero accounting software for payroll management",
    features: [
      "Time data export to Xero",
      "Employee record synchronization",
      "Automated payroll entries",
      "Financial reporting integration",
    ],
    integrations: ["Xero Payroll", "Xero Accounting"],
    price: 800,
  },
  {
    name: "Custom Payroll System",
    description: "Built-in payroll calculation and management system",
    features: [
      "Custom payroll calculation engine",
      "Tax calculation (based on local laws)",
      "Payslip generation",
      "Payroll reporting and exports",
    ],
    integrations: ["Standalone system", "CSV/Excel exports"],
    price: 1500,
  },
];

// COMPETITIVE COMPARISON
export const competitiveComparison = {
  yourCurrentSituation: {
    paid: "$3,600 (₱200,000)",
    got: "Single static homepage only",
    problems: [
      "No other pages - looks unprofessional",
      "Can't edit content without paying developer",
      "No service showcase - clients can't see your work",
      "Basic SEO - not ranking well",
      "No analytics - don't know who visits",
      "No marketing tools - can't track conversions",
    ],
    ongoingCosts: "Pay developer every time you want changes",
  },
  noCodeDeveloperOption: {
    requesting: "$2,500+ for improvements",
    limitations: [
      "Still no real CMS - limited editing",
      "Ongoing dependency on developer",
      "No source code ownership",
      "Limited customization options",
      "Higher long-term costs",
      "Vendor lock-in",
    ],
    ongoingCosts: "Continued payments for every change",
  },
  ourCoreSolution: {
    price: "₱170,000 (one-time)",
    value: "Complete professional website + full CMS control",
    advantages: [
      "9 professional pages vs 1 static page",
      "Edit content yourself - no developer needed",
      "Professional service showcase pages",
      "Advanced SEO + Analytics + Facebook Pixel",
      "You own the source code",
      "No ongoing dependencies",
    ],
    ongoingCosts: "Optional $200/month support only",
  },
};

// WHAT MAKES OUR SOLUTION BETTER
export const differentiators = [
  {
    feature: "Content Control",
    them: "Must pay developer for every text change",
    us: "Edit everything yourself through easy admin panel",
    impact: "Complete independence + immediate updates",
  },
  {
    feature: "Website Scope",
    them: "Single homepage only",
    us: "9 professional pages + unlimited service pages",
    impact: "Professional presence that actually converts",
  },
  {
    feature: "SEO & Marketing",
    them: "Basic SEO, no tracking",
    us: "Advanced SEO + Google Analytics + Facebook Pixel",
    impact: "Better search ranking + marketing insights",
  },
  {
    feature: "Technology",
    them: "No-code platform with limitations",
    us: "Modern Next.js - fast, secure, scalable",
    impact: "Better performance + future-proof",
  },
  {
    feature: "Ownership",
    them: "Vendor lock-in, no source code",
    us: "You own everything - complete freedom",
    impact: "No vendor dependency, full control",
  },
  {
    feature: "Cost Structure",
    them: "Ongoing payments for changes",
    us: "One-time payment, optional support",
    impact: "Predictable costs, no surprises",
  },
];

// DELIVERY PHASES
export const deliveryPhases = [
  {
    phase: "Phase 1: Core Website Solution",
    duration: "2-3 weeks",
    price: "₱170,000",
    deliverables: [
      "Complete 9-page professional website",
      "Full CMS with easy content editing",
      "SEO optimization + Analytics setup",
      "Mobile responsive design",
      "Training on how to use CMS",
    ],
    outcome: "Professional website you can control yourself",
  },
  {
    phase: "Phase 2: Employee Management (Optional)",
    duration: "3-4 weeks",
    price: "$3,500",
    deliverables: [
      "Employee time tracking system",
      "Task and project management",
      "Payroll integration setup",
      "Employee and manager dashboards",
      "Training on business management features",
    ],
    outcome: "Complete business management automation",
  },
];

// IMMEDIATE VALUE PROPOSITION
export const immediateValue = {
  problemSolved: "No more dependency on expensive no-code developer",
  timeToValue: "2-3 weeks to professional website",
  costComparison: "Only $900 more than your static page for 10x functionality",
  ongoingBenefit: "Edit content yourself - no more developer fees",
  businessImpact: "Professional online presence that actually converts visitors",
  roi: "Pays for itself by eliminating ongoing developer costs",
};

// TECHNICAL ADVANTAGES (vs No-Code)
export const technicalAdvantages = [
  {
    aspect: "Performance",
    noCode: "Slow loading, bloated code",
    ours: "Optimized Next.js - lightning fast",
    benefit: "Better user experience + SEO ranking",
  },
  {
    aspect: "SEO Capabilities",
    noCode: "Limited SEO options",
    ours: "Full SEO control + advanced optimization",
    benefit: "Better search engine visibility",
  },
  {
    aspect: "Customization",
    noCode: "Template limitations",
    ours: "Fully custom design and functionality",
    benefit: "Unique professional appearance",
  },
  {
    aspect: "Analytics & Tracking",
    noCode: "Basic analytics if any",
    ours: "Google Analytics + Facebook Pixel + custom tracking",
    benefit: "Understand your visitors and marketing ROI",
  },
  {
    aspect: "Scalability",
    noCode: "Limited by platform constraints",
    ours: "Unlimited growth potential",
    benefit: "Website grows with your business",
  },
  {
    aspect: "Security",
    noCode: "Dependent on platform security",
    ours: "Modern security practices + regular updates",
    benefit: "Better protection for your business",
  },
];
