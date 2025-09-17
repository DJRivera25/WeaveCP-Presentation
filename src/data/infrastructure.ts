// WeaveCP Project Infrastructure and Dependencies

export interface DeploymentOption {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  monthlyCost: string;
  recommended: boolean;
}

export interface ThirdPartyService {
  name: string;
  purpose: string;
  required: boolean;
  monthlyCost: string;
  alternatives?: string[];
  setupComplexity: "Low" | "Medium" | "High";
}

export interface RequiredAsset {
  name: string;
  description: string;
  format: string;
  required: boolean;
  providedByClient: boolean;
}

// DEPLOYMENT & HOSTING OPTIONS
export const deploymentOptions: DeploymentOption[] = [
  {
    name: "Vercel (Recommended)",
    description: "Optimized for Next.js applications with automatic deployments",
    pros: [
      "Zero-config deployment for Next.js",
      "Automatic SSL certificates",
      "Global CDN with edge functions",
      "Built-in analytics and monitoring",
      "Seamless GitHub integration",
      "Excellent developer experience",
    ],
    cons: [
      "Higher costs for large-scale applications",
      "Limited backend customization",
      "Vendor lock-in considerations",
    ],
    monthlyCost: "$20-50 (Pro plan)",
    recommended: true,
  },
  {
    name: "AWS (EC2 + S3)",
    description: "Full control with AWS infrastructure for scalable solutions",
    pros: [
      "Complete infrastructure control",
      "Highly scalable and customizable",
      "Cost-effective for large applications",
      "Extensive AWS service ecosystem",
      "Better for complex enterprise needs",
    ],
    cons: [
      "Requires DevOps expertise",
      "More complex setup and maintenance",
      "Higher initial setup time",
      "Need to manage security updates",
    ],
    monthlyCost: "$30-100+ (depending on usage)",
    recommended: false,
  },
  {
    name: "DigitalOcean App Platform",
    description: "Simple cloud platform with good pricing for small to medium apps",
    pros: ["Simple deployment process", "Competitive pricing", "Good documentation", "Managed databases available"],
    cons: ["Less optimized for Next.js", "Fewer advanced features", "Limited global presence"],
    monthlyCost: "$12-25",
    recommended: false,
  },
];

// REQUIRED THIRD-PARTY SERVICES
export const requiredServices: ThirdPartyService[] = [
  {
    name: "MongoDB Atlas",
    purpose: "Primary database for all application data",
    required: true,
    monthlyCost: "$0-25 (Free tier to M2)",
    alternatives: ["PostgreSQL on Railway", "PlanetScale MySQL"],
    setupComplexity: "Low",
  },
  {
    name: "Cloudinary",
    purpose: "Image storage, optimization, and CDN for architectural portfolios",
    required: true,
    monthlyCost: "$0-89 (Free tier to Advanced)",
    alternatives: ["AWS S3 + CloudFront", "ImageKit"],
    setupComplexity: "Low",
  },
  {
    name: "NextAuth.js with Google OAuth",
    purpose: "Authentication system with Google login integration",
    required: true,
    monthlyCost: "Free",
    alternatives: ["Auth0", "Firebase Auth", "Clerk"],
    setupComplexity: "Medium",
  },
  {
    name: "Email Service (Recommended: Resend)",
    purpose: "Transactional emails, notifications, and contact form submissions",
    required: true,
    monthlyCost: "$0-20 (Free tier to Pro)",
    alternatives: ["SendGrid", "Mailgun", "AWS SES"],
    setupComplexity: "Low",
  },
  {
    name: "Domain & DNS",
    purpose: "Custom domain for professional branding",
    required: true,
    monthlyCost: "$10-15 annually",
    alternatives: ["Namecheap", "GoDaddy", "CloudFlare Registrar"],
    setupComplexity: "Low",
  },
];

// OPTIONAL BUT RECOMMENDED SERVICES
export const optionalServices: ThirdPartyService[] = [
  {
    name: "Google Analytics 4",
    purpose: "Website analytics and user behavior tracking",
    required: false,
    monthlyCost: "Free",
    alternatives: ["Plausible Analytics", "Umami", "Mixpanel"],
    setupComplexity: "Low",
  },
  {
    name: "Sentry",
    purpose: "Error monitoring and performance tracking",
    required: false,
    monthlyCost: "$0-26 (Free tier to Team)",
    alternatives: ["LogRocket", "Bugsnag", "Rollbar"],
    setupComplexity: "Low",
  },
  {
    name: "Uptime Monitoring (UptimeRobot)",
    purpose: "Website uptime monitoring and alerts",
    required: false,
    monthlyCost: "$0-7 (Free tier to Pro)",
    alternatives: ["Pingdom", "StatusCake", "Better Uptime"],
    setupComplexity: "Low",
  },
];

// REMOVED SERVICES (Not needed for architectural firm)
export const removedServices = [
  {
    name: "Stripe",
    reason: "No e-commerce or payment processing needed for this architectural firm website",
  },
  {
    name: "Facebook Pixel / Ads Manager",
    reason: "Not essential for B2B architectural services; Google Analytics sufficient",
  },
  {
    name: "Advanced CDN (separate from hosting)",
    reason: "Vercel includes global CDN; Cloudinary handles image CDN",
  },
];

// REQUIRED ASSETS FROM CLIENT
export const requiredAssets: RequiredAsset[] = [
  {
    name: "Company Logo Package",
    description: "Logo in various formats and sizes",
    format: "SVG, PNG (transparent), JPG",
    required: true,
    providedByClient: true,
  },
  {
    name: "Brand Guidelines",
    description: "Color palette, typography, brand voice guidelines",
    format: "PDF or style guide document",
    required: true,
    providedByClient: true,
  },
  {
    name: "Team Member Photos",
    description: "Professional headshots of all team members",
    format: "High-resolution JPG/PNG",
    required: true,
    providedByClient: true,
  },
  {
    name: "Portfolio Images",
    description: "Before/after images of architectural projects",
    format: "High-resolution JPG/PNG",
    required: true,
    providedByClient: true,
  },
  {
    name: "Company Information",
    description: "About us content, mission, vision, values",
    format: "Word document or text file",
    required: true,
    providedByClient: true,
  },
  {
    name: "Service Descriptions",
    description: "Detailed descriptions of all architectural services",
    format: "Word document or text file",
    required: true,
    providedByClient: true,
  },
  {
    name: "Contact Information",
    description: "Office address, phone numbers, email addresses",
    format: "Text document",
    required: true,
    providedByClient: true,
  },
  {
    name: "Domain Name",
    description: "Preferred domain name for the website",
    format: "Text (e.g., weavecp.com)",
    required: true,
    providedByClient: true,
  },
];

// SETUP TIMELINE FOR INFRASTRUCTURE
export const infrastructureSetupPhases = [
  {
    phase: "Pre-Development Setup",
    duration: "3-5 days",
    tasks: [
      "Domain registration and DNS configuration",
      "MongoDB Atlas cluster setup",
      "Cloudinary account and API key generation",
      "Google OAuth application setup",
      "Email service account configuration",
    ],
  },
  {
    phase: "Development Environment",
    duration: "1-2 days",
    tasks: [
      "Local development environment setup",
      "Environment variables configuration",
      "Database connection testing",
      "Third-party service integration testing",
    ],
  },
  {
    phase: "Production Deployment",
    duration: "2-3 days",
    tasks: [
      "Vercel deployment configuration",
      "Production environment variables setup",
      "SSL certificate configuration",
      "Custom domain connection",
      "Performance optimization and testing",
    ],
  },
];

// MONTHLY OPERATIONAL COSTS
export const monthlyOperationalCosts = {
  hosting: 20, // Vercel Pro
  database: 25, // MongoDB Atlas M2
  imageStorage: 15, // Cloudinary
  email: 0, // Resend free tier (up to 3,000 emails/month)
  domain: 1.25, // $15 annually
  monitoring: 0, // Free tiers
  total: 61.25,
};

// ANNUAL OPERATIONAL COSTS
export const annualOperationalCosts = {
  total: monthlyOperationalCosts.total * 12,
  breakdown: {
    hosting: monthlyOperationalCosts.hosting * 12,
    database: monthlyOperationalCosts.database * 12,
    imageStorage: monthlyOperationalCosts.imageStorage * 12,
    email: monthlyOperationalCosts.email * 12,
    domain: 15,
    monitoring: monthlyOperationalCosts.monitoring * 12,
  },
};

// TECHNICAL REQUIREMENTS
export const technicalRequirements = {
  nodeVersion: "18.x or higher",
  packageManager: "npm or yarn",
  browserSupport: [
    "Chrome (latest 2 versions)",
    "Firefox (latest 2 versions)",
    "Safari (latest 2 versions)",
    "Edge (latest 2 versions)",
  ],
  mobileSupport: [
    "iOS Safari (latest 2 versions)",
    "Chrome Mobile (latest 2 versions)",
    "Samsung Internet (latest version)",
  ],
  performanceTargets: {
    firstContentfulPaint: "< 1.5s",
    largestContentfulPaint: "< 2.5s",
    cumulativeLayoutShift: "< 0.1",
    firstInputDelay: "< 100ms",
  },
};

