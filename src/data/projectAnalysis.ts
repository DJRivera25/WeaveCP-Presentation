// WeaveCP Architectural Firm Project Analysis
// Complete feature breakdown and user stories

export interface UserStory {
  id: string;
  title: string;
  description: string;
  acceptanceCriteria: string[];
  priority: 'High' | 'Medium' | 'Low';
  category: string;
  estimatedHours: number;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  userStories: UserStory[];
  technicalComplexity: 'Low' | 'Medium' | 'High';
  category: string;
}

export interface APIEndpoint {
  method: string;
  endpoint: string;
  description: string;
  authentication: boolean;
  roleRequired?: string;
  features: string[];
}

export interface ResponsiveFeature {
  breakpoint: string;
  description: string;
  implementation: string[];
}

// USER STORIES AND FEATURES
export const userStories: UserStory[] = [
  // Public Website Features
  {
    id: "US001",
    title: "Homepage Hero Section",
    description: "As a potential client, I want to see an engaging hero section that clearly communicates WeaveCP's services and value proposition",
    acceptanceCriteria: [
      "Hero section displays company tagline and primary CTA",
      "Background image/video showcases architectural work",
      "Mobile responsive design",
      "Fast loading performance"
    ],
    priority: "High",
    category: "Public Website",
    estimatedHours: 8
  },
  {
    id: "US002",
    title: "Services Showcase",
    description: "As a client, I want to browse all architectural services with detailed information and visual examples",
    acceptanceCriteria: [
      "Service grid with 7 main services (3D to Detailed Drawings, CAD to 3D, etc.)",
      "Before/after image galleries",
      "Individual service detail pages with slug routing",
      "Feature lists and technical specifications",
      "Responsive grid layout"
    ],
    priority: "High",
    category: "Public Website",
    estimatedHours: 24
  },
  {
    id: "US003",
    title: "Team Member Profiles",
    description: "As a client, I want to learn about the team members and their expertise",
    acceptanceCriteria: [
      "Team member grid with photos and basic info",
      "Individual profile pages with detailed bios",
      "Role-based filtering and categorization",
      "Professional photo placeholders",
      "Social media links integration"
    ],
    priority: "Medium",
    category: "Public Website",
    estimatedHours: 16
  },
  {
    id: "US004",
    title: "Contact System",
    description: "As a potential client, I want multiple ways to contact the company",
    acceptanceCriteria: [
      "Contact form with validation",
      "Email integration and notifications",
      "Multiple contact methods display",
      "Interactive map integration",
      "Auto-response functionality"
    ],
    priority: "High",
    category: "Public Website",
    estimatedHours: 12
  },
  {
    id: "US005",
    title: "Content Management System",
    description: "As an admin, I want to manage all website content without technical knowledge",
    acceptanceCriteria: [
      "Visual content editor for all page sections",
      "Draft and publish workflow",
      "Image upload and management",
      "SEO settings per page/section",
      "Real-time preview functionality"
    ],
    priority: "High",
    category: "Admin Dashboard",
    estimatedHours: 40
  },
  {
    id: "US006",
    title: "User Authentication System",
    description: "As a user, I want secure login with role-based access control",
    acceptanceCriteria: [
      "NextAuth.js integration with multiple providers",
      "Role-based access (admin, manager, employee)",
      "Email confirmation workflow",
      "Password reset functionality",
      "Session management and security"
    ],
    priority: "High",
    category: "Authentication",
    estimatedHours: 20
  },
  {
    id: "US007",
    title: "Employee Dashboard",
    description: "As an employee, I want a dashboard to manage my work and view company information",
    acceptanceCriteria: [
      "Personal productivity metrics",
      "Time tracking with timer functionality",
      "Task management and assignment",
      "Leave application system",
      "Team calendar and events"
    ],
    priority: "Medium",
    category: "Employee Portal",
    estimatedHours: 32
  },
  {
    id: "US008",
    title: "Admin Management Panel",
    description: "As an admin, I want comprehensive control over all system aspects",
    acceptanceCriteria: [
      "User management and role assignment",
      "Content approval workflow",
      "Analytics and reporting dashboard",
      "System settings and configuration",
      "Backup and maintenance tools"
    ],
    priority: "High",
    category: "Admin Dashboard",
    estimatedHours: 36
  },
  {
    id: "US009",
    title: "Project Management System",
    description: "As a manager, I want to track projects and assign team members",
    acceptanceCriteria: [
      "Project creation and management",
      "Team member assignment",
      "Progress tracking and milestones",
      "File attachment and documentation",
      "Client communication integration"
    ],
    priority: "Medium",
    category: "Project Management",
    estimatedHours: 28
  },
  {
    id: "US010",
    title: "Time Tracking System",
    description: "As an employee, I want to track my work hours accurately",
    acceptanceCriteria: [
      "Start/stop timer functionality",
      "Manual time entry with validation",
      "Daily/weekly/monthly reports",
      "Project-based time allocation",
      "Manager approval workflow"
    ],
    priority: "Medium",
    category: "Time Management",
    estimatedHours: 24
  },
  {
    id: "US011",
    title: "Leave Management System",
    description: "As an employee, I want to apply for and track my leave requests",
    acceptanceCriteria: [
      "Leave application with calendar integration",
      "Leave balance tracking",
      "Manager approval workflow",
      "Different leave types support",
      "Notification system"
    ],
    priority: "Medium",
    category: "HR Management",
    estimatedHours: 20
  },
  {
    id: "US012",
    title: "Job Posting System",
    description: "As an admin, I want to post job openings and manage applications",
    acceptanceCriteria: [
      "Job posting creation and management",
      "Application form with file uploads",
      "Application tracking and status updates",
      "Email notifications to applicants",
      "Integration with careers page"
    ],
    priority: "Low",
    category: "HR Management",
    estimatedHours: 18
  },
  {
    id: "US013",
    title: "Notification System",
    description: "As a user, I want to receive relevant notifications about system activities",
    acceptanceCriteria: [
      "Real-time notification display",
      "Email notification integration",
      "Notification categories and preferences",
      "Mark as read functionality",
      "Notification history"
    ],
    priority: "Medium",
    category: "Communication",
    estimatedHours: 16
  },
  {
    id: "US014",
    title: "SEO Optimization",
    description: "As a business owner, I want the website to rank well in search engines",
    acceptanceCriteria: [
      "Dynamic meta tags and descriptions",
      "Structured data implementation",
      "Sitemap generation",
      "Page speed optimization",
      "Mobile-first indexing compliance"
    ],
    priority: "Medium",
    category: "SEO & Performance",
    estimatedHours: 14
  },
  {
    id: "US015",
    title: "Mobile Responsiveness",
    description: "As a user, I want the website to work perfectly on all devices",
    acceptanceCriteria: [
      "Responsive design for all screen sizes",
      "Touch-friendly interface elements",
      "Mobile-optimized navigation",
      "Fast loading on mobile networks",
      "Cross-browser compatibility"
    ],
    priority: "High",
    category: "Responsive Design",
    estimatedHours: 20
  }
];

// API ENDPOINTS
export const apiEndpoints: APIEndpoint[] = [
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/content",
    description: "Content Management System API for all page sections",
    authentication: true,
    roleRequired: "admin",
    features: ["CMS", "Content Publishing", "Draft Management"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/users",
    description: "User management and profile operations",
    authentication: true,
    roleRequired: "admin/manager",
    features: ["User Management", "Role Assignment", "Profile Updates"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/jobs",
    description: "Job posting and application management",
    authentication: false,
    features: ["Job Listings", "Application Tracking", "Career Portal"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/projects",
    description: "Project management and team assignment",
    authentication: true,
    roleRequired: "manager/admin",
    features: ["Project Tracking", "Team Assignment", "Progress Monitoring"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/tasks",
    description: "Task management and assignment system",
    authentication: true,
    features: ["Task Assignment", "Progress Tracking", "Kanban Board"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/timelogs",
    description: "Time tracking and logging system",
    authentication: true,
    features: ["Time Tracking", "Productivity Analytics", "Reporting"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/leaves",
    description: "Leave application and approval system",
    authentication: true,
    features: ["Leave Management", "Approval Workflow", "Balance Tracking"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/notifications",
    description: "Notification system for user communications",
    authentication: true,
    features: ["Real-time Notifications", "Email Integration", "Preferences"]
  },
  {
    method: "GET/POST/PATCH/DELETE",
    endpoint: "/api/events",
    description: "Calendar and event management system",
    authentication: true,
    features: ["Calendar Integration", "Event Scheduling", "Team Coordination"]
  },
  {
    method: "GET/POST/DELETE",
    endpoint: "/api/images",
    description: "Cloudinary image management and upload",
    authentication: true,
    roleRequired: "admin/manager",
    features: ["Image Upload", "Gallery Management", "CDN Integration"]
  },
  {
    method: "POST",
    endpoint: "/api/contact",
    description: "Contact form submission and email handling",
    authentication: false,
    features: ["Contact Forms", "Email Integration", "Lead Generation"]
  },
  {
    method: "GET/PATCH",
    endpoint: "/api/seo",
    description: "SEO settings and meta tag management",
    authentication: true,
    roleRequired: "admin",
    features: ["SEO Optimization", "Meta Tags", "Structured Data"]
  }
];

// RESPONSIVE DESIGN FEATURES
export const responsiveFeatures: ResponsiveFeature[] = [
  {
    breakpoint: "Mobile (320px - 768px)",
    description: "Mobile-first responsive design with touch-optimized interface",
    implementation: [
      "Collapsible navigation menu with hamburger icon",
      "Stack-based layout for content sections",
      "Touch-friendly button sizes (44px minimum)",
      "Optimized image sizes and lazy loading",
      "Mobile-specific typography scaling"
    ]
  },
  {
    breakpoint: "Tablet (768px - 1024px)",
    description: "Tablet-optimized layout with improved content organization",
    implementation: [
      "Two-column layouts for content sections",
      "Adaptive navigation with both mobile and desktop elements",
      "Optimized spacing and padding",
      "Touch and mouse interaction support",
      "Flexible grid systems"
    ]
  },
  {
    breakpoint: "Desktop (1024px+)",
    description: "Full desktop experience with advanced features",
    implementation: [
      "Multi-column layouts and advanced grids",
      "Hover effects and advanced interactions",
      "Full-featured navigation menus",
      "Sidebar layouts for dashboards",
      "Advanced typography and spacing"
    ]
  },
  {
    breakpoint: "Large Desktop (1440px+)",
    description: "Enhanced experience for large screens",
    implementation: [
      "Maximum width containers with centered content",
      "Enhanced spacing and visual hierarchy",
      "Advanced grid layouts with more columns",
      "Larger imagery and visual elements",
      "Optimized for productivity workflows"
    ]
  }
];

// TECHNICAL FEATURES
export const technicalFeatures = {
  frontend: [
    "Next.js 15 with App Router",
    "TypeScript for type safety",
    "Tailwind CSS for styling",
    "Framer Motion for animations",
    "React Hook Form for form management",
    "Zustand for state management",
    "React Query for data fetching",
    "NextAuth.js for authentication"
  ],
  backend: [
    "Next.js API Routes",
    "MongoDB with Mongoose ODM",
    "NextAuth.js authentication",
    "Cloudinary for image management",
    "bcryptjs for password hashing",
    "JWT for session management",
    "Email integration with Nodemailer",
    "Role-based access control"
  ],
  database: [
    "MongoDB for primary data storage",
    "Mongoose schemas with validation",
    "User roles and permissions system",
    "Content versioning (draft/published)",
    "Time-series data for analytics",
    "File metadata storage",
    "Session and token management"
  ],
  deployment: [
    "Vercel deployment ready",
    "Environment variable management",
    "CDN integration with Cloudinary",
    "Database connection pooling",
    "Error monitoring and logging",
    "Performance optimization",
    "SEO and meta tag management"
  ]
};

// ESTIMATED DEVELOPMENT TIMELINE
export const developmentPhases = [
  {
    phase: "Phase 1: Foundation & Setup",
    duration: "2-3 weeks",
    tasks: [
      "Project setup and configuration",
      "Database design and setup",
      "Authentication system implementation",
      "Basic UI components and design system"
    ],
    hours: 80
  },
  {
    phase: "Phase 2: Public Website",
    duration: "3-4 weeks",
    tasks: [
      "Homepage and landing pages",
      "Services showcase and detail pages",
      "Team profiles and about pages",
      "Contact system and forms"
    ],
    hours: 100
  },
  {
    phase: "Phase 3: Content Management",
    duration: "2-3 weeks",
    tasks: [
      "CMS implementation",
      "Content editor interface",
      "Image management system",
      "SEO tools and optimization"
    ],
    hours: 70
  },
  {
    phase: "Phase 4: Employee Portal",
    duration: "3-4 weeks",
    tasks: [
      "Employee dashboard",
      "Time tracking system",
      "Task management",
      "Leave management system"
    ],
    hours: 90
  },
  {
    phase: "Phase 5: Admin Features",
    duration: "2-3 weeks",
    tasks: [
      "Admin dashboard",
      "User management",
      "Analytics and reporting",
      "System configuration"
    ],
    hours: 60
  },
  {
    phase: "Phase 6: Testing & Deployment",
    duration: "1-2 weeks",
    tasks: [
      "Comprehensive testing",
      "Performance optimization",
      "Security audit",
      "Production deployment"
    ],
    hours: 40
  }
];

export const totalEstimatedHours = developmentPhases.reduce((total, phase) => total + phase.hours, 0);
export const totalEstimatedWeeks = Math.ceil(totalEstimatedHours / 40); // Assuming 40 hours per week
