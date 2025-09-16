// ACTUAL WeaveCP Project Analysis - What's Really Built

export interface ActualFeature {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "Production Ready" | "Needs Testing" | "Partially Complete";
  businessValue: string;
  pages?: string[];
  apiEndpoints?: string[];
}

export interface ClientProblem {
  current: string;
  impact: string;
  solution: string;
  value: string;
}

// ACTUAL COMPLETED FEATURES IN WEAVECP (What's Ready for Client)
export const actualFeatures: ActualFeature[] = [
  // PUBLIC WEBSITE (COMPLETED - What they desperately need)
  {
    id: "PW001",
    name: "Complete Multi-Page Website",
    description: "Full website with Home, About, Services, Team, Contact, Careers, and Our Process pages",
    category: "Public Website",
    status: "Production Ready",
    businessValue: "Professional multi-page website vs their current single static page",
    pages: [
      "/",
      "/about",
      "/services",
      "/services/[slug]",
      "/team",
      "/team/[slug]",
      "/contact",
      "/careers",
      "/our-process",
    ],
  },
  {
    id: "PW002",
    name: "7 Individual Service Pages",
    description: "Dedicated pages for each service: 3D to Detailed Drawings, CAD to 3D, SketchUp Render, etc.",
    category: "Public Website",
    status: "Production Ready",
    businessValue: "Detailed service showcase vs basic service list",
    pages: [
      "/services/3d-model-to-detailed-drawing",
      "/services/cad-to-3d",
      "/services/sketchup-to-3d-render",
      "/services/cad-to-detailed-drawings",
      "/services/image-to-detailed-drawing",
      "/services/bim",
      "/services/sketch-to-detailed-drawing",
    ],
  },
  {
    id: "PW003",
    name: "Mobile Responsive Design",
    description: "Professional responsive design that works perfectly on all devices",
    category: "Public Website",
    status: "Production Ready",
    businessValue: "Professional mobile experience vs basic responsive layout",
  },
  {
    id: "PW004",
    name: "SEO Foundation",
    description: "Basic SEO structure and meta tags (can be enhanced with advanced SEO)",
    category: "Public Website",
    status: "Production Ready",
    businessValue: "Better search visibility than static page",
  },

  // CONTENT MANAGEMENT SYSTEM (COMPLETED)
  {
    id: "CMS001",
    name: "Visual Content Editor",
    description: "Easy-to-use content management system for all website sections",
    category: "Content Management",
    status: "Production Ready",
    businessValue: "Edit website content without contacting developers",
    pages: ["/dashboard/content", "/dashboard/content/pages/[pageId]"],
  },
  {
    id: "CMS002",
    name: "Draft & Publish System",
    description: "Preview changes before making them live on the website",
    category: "Content Management",
    status: "Production Ready",
    businessValue: "Safe content editing with preview before publishing",
  },
  {
    id: "CMS003",
    name: "Image Management System",
    description: "Upload and manage images for website with Cloudinary integration",
    category: "Content Management",
    status: "Production Ready",
    businessValue: "Professional image handling and optimization",
  },
  {
    id: "CMS004",
    name: "Multi-User Access",
    description: "Different access levels for admins and content editors",
    category: "Content Management",
    status: "Production Ready",
    businessValue: "Team collaboration without technical knowledge required",
  },

  // AUTHENTICATION SYSTEM (COMPLETED)
  {
    id: "AUTH001",
    name: "User Authentication System",
    description: "NextAuth.js with secure login, registration, and password reset",
    category: "Authentication",
    status: "Production Ready",
    businessValue: "Secure access to admin features and CMS",
  },
  {
    id: "AUTH002",
    name: "Role-Based Access Control",
    description: "Admin, Manager, Employee roles with appropriate permissions",
    category: "Authentication",
    status: "Production Ready",
    businessValue: "Controlled access to different system features",
  },

  // BONUS FEATURES (Already built - can be included as added value)
  {
    id: "BF001",
    name: "Task Management System",
    description: "Kanban board for project and task management",
    category: "Bonus Features",
    status: "Production Ready",
    businessValue: "Internal project organization and team coordination",
    pages: ["/dashboard/tasks", "/dashboard/tasks/kanban"],
  },
  {
    id: "BF002",
    name: "Time Tracking System",
    description: "Track time spent on projects and generate reports",
    category: "Bonus Features",
    status: "Production Ready",
    businessValue: "Accurate project time tracking and billing",
    pages: ["/dashboard/timetracking", "/dashboard/productivity"],
  },
  {
    id: "BF003",
    name: "Team Management",
    description: "Manage team members, roles, and permissions",
    category: "Bonus Features",
    status: "Production Ready",
    businessValue: "Organized team structure and role management",
    pages: ["/dashboard/team", "/dashboard/users"],
  },
  {
    id: "BF004",
    name: "Leave Management System",
    description: "Employee leave applications and approval workflow",
    category: "Bonus Features",
    status: "Production Ready",
    businessValue: "Streamlined HR processes",
    pages: ["/dashboard/leaves"],
  },
  {
    id: "BF005",
    name: "Job Posting System",
    description: "Post jobs and manage applications through the website",
    category: "Bonus Features",
    status: "Production Ready",
    businessValue: "Professional recruitment system",
    pages: ["/careers", "/careers/[slug]", "/dashboard/jobs"],
  },
  {
    id: "BF006",
    name: "Calendar & Events",
    description: "Team calendar and event management system",
    category: "Bonus Features",
    status: "Production Ready",
    businessValue: "Team coordination and scheduling",
    pages: ["/dashboard/calendar"],
  },
  {
    id: "BF007",
    name: "Project Management",
    description: "Create and manage architectural projects",
    category: "Bonus Features",
    status: "Production Ready",
    businessValue: "Organized project tracking and management",
    pages: ["/dashboard/projects"],
  },
];

// CLIENT'S CURRENT PROBLEMS
export const clientProblems: ClientProblem[] = [
  {
    current: "Limited to single homepage - no dedicated service pages",
    impact: "Difficult to showcase expertise and service details professionally",
    solution: "Complete 9-page professional website with individual service pages",
    value: "Professional online presence that effectively showcases your services",
  },
  {
    current: "Website creators often charge ₱200,000+ for basic functionality",
    impact: "High costs for limited features and ongoing dependency",
    solution: "Comprehensive solution with full content management system",
    value: "Better value with more features and long-term content control",
  },
  {
    current: "Need developer contact for any content changes",
    impact: "Slow updates, additional costs, and limited flexibility",
    solution: "Easy-to-use admin panel for instant content updates",
    value: "Complete independence - update content anytime without developer",
  },
  {
    current: "Limited ability to showcase individual services effectively",
    impact: "Potential clients can't fully understand service offerings",
    solution: "Dedicated pages for all 7 services with detailed descriptions",
    value: "Clear service presentation that educates and converts prospects",
  },
  {
    current: "Static websites have limited growth potential",
    impact: "Difficult to add features or expand functionality",
    solution: "Scalable platform with room for additional features",
    value: "Future-proof investment that grows with the business",
  },
];

// CORE COMPLETED FEATURES (What they're paying for - their immediate need)
export const coreCompletedFeatures = [
  "Complete Multi-Page Website",
  "7 Individual Service Pages",
  "Mobile Responsive Design",
  "SEO Foundation",
  "Visual Content Editor",
  "Draft & Publish System",
  "Image Management System",
  "Multi-User Access",
  "User Authentication System",
  "Role-Based Access Control",
];

// BONUS FEATURES (Already built - included as added value)
export const bonusFeatures = [
  "Task Management System",
  "Time Tracking System",
  "Team Management",
  "Leave Management System",
  "Job Posting System",
  "Calendar & Events",
  "Project Management",
];

// FEATURES THAT NEED TO BE ADDED (Not in current WeaveCP)
export const additionalEnhancements = [
  "Advanced SEO with Schema Markup",
  "Facebook Pixel Integration",
  "Google Analytics 4 Enhanced Setup",
  "Advanced Contact Form Features",
  "Email Marketing Integration",
  "Performance Optimization",
  "Security Hardening",
];

// DEVELOPMENT TIMELINE & EFFORT
export const developmentStats = {
  timeframe: "2 months",
  dailyHours: 4,
  totalHours: 240, // 2 months * 30 days * 4 hours
  workingDays: 60,
  efficiency: "Focused development with proven architecture",
};

// PRICING COMPARISON
export const pricingComparison = {
  marketRates: {
    typical: "₱200,000+", // Market rates for similar work
    got: "Often single page or basic functionality",
    limitations: "Limited content control, ongoing dependencies",
  },
  ourSolution: {
    price: 170000, // ₱170,000 PHP
    includes: "Complete 9-page website + Admin CMS + Bonus features",
    value: "Professional website with full control and growth potential",
  },
  valueProposition: {
    comparison: "Competitive pricing with significantly more features",
    roi: "Professional presence + long-term content independence",
    savings: "No ongoing developer fees for content updates",
  },
};

// WHAT MAKES THIS DIFFERENT FROM THEIR CURRENT SOLUTION
export const differentiators = [
  {
    aspect: "Number of Pages",
    current: "1 page (homepage only)",
    ours: "9 professional pages + unlimited service pages",
    impact: "Complete professional website vs single page",
  },
  {
    aspect: "Content Updates",
    current: "Must hire developer every time",
    ours: "Update content yourself instantly",
    impact: "Complete independence + immediate updates",
  },
  {
    aspect: "Service Showcase",
    current: "Basic service list on homepage",
    ours: "Dedicated detailed page for each of 7 services",
    impact: "Professional service presentation that converts",
  },
  {
    aspect: "SEO & Visibility",
    current: "Basic SEO, single page to rank",
    ours: "Professional SEO across all pages + service-specific ranking",
    impact: "Much better search engine visibility",
  },
  {
    aspect: "Business Growth",
    current: "Static - can't add features or pages",
    ours: "Scalable platform with room for growth",
    impact: "Future-proof investment",
  },
  {
    aspect: "Team Management",
    current: "Nothing - just a website",
    ours: "Complete business management system included as bonus",
    impact: "Bonus features worth ₱100,000+ included free",
  },
];

// TOTAL ACTUAL VALUE
export const actualValue = {
  websiteWorth: 150000, // Professional 9-page website
  cmsWorth: 80000, // Content management system
  bonusFeaturesWorth: 120000, // All the business management features
  totalWorth: 350000, // ₱350,000 total value
  ourPrice: 170000, // ₱170,000 asking price
  savings: 100000, // ₱100,000 in value they get free
  vsCurrentSolution: 50000, // Only ₱50,000 more than their failed static site
};
