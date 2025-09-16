"use client";

import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon,
  CalendarIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function FeaturesShowcase() {
  const publicFeatures = [
    {
      icon: GlobeAltIcon,
      title: "Professional Website",
      description: "Modern, responsive public website with service showcases and team profiles",
      items: [
        "Service portfolio with before/after galleries",
        "Team member profiles",
        "Contact forms",
        "SEO optimization",
      ],
    },
    {
      icon: DocumentTextIcon,
      title: "Content Management",
      description: "Powerful CMS for managing all website content without technical knowledge",
      items: ["Visual content editor", "Draft/publish workflow", "Image management", "SEO tools"],
    },
  ];

  const internalFeatures = [
    {
      icon: UserIcon,
      title: "User Management",
      description: "Complete user authentication and role-based access control system",
      items: [
        "Multi-role system (Admin/Manager/Employee)",
        "NextAuth.js integration",
        "Profile management",
        "Permission controls",
      ],
    },
    {
      icon: ClockIcon,
      title: "Time Tracking",
      description: "Comprehensive time logging system with productivity analytics",
      items: ["Start/stop timer functionality", "Manual time entry", "Project-based tracking", "Detailed reporting"],
    },
    {
      icon: CogIcon,
      title: "Task Management",
      description: "Kanban-style task management with team collaboration features",
      items: ["Drag-and-drop task boards", "Task assignment", "Progress tracking", "Team collaboration"],
    },
    {
      icon: CalendarIcon,
      title: "Leave Management",
      description: "Employee leave application and approval workflow system",
      items: ["Leave applications", "Manager approvals", "Balance tracking", "Calendar integration"],
    },
    {
      icon: ChartBarIcon,
      title: "Analytics & Reporting",
      description: "Business intelligence dashboard with comprehensive reporting",
      items: ["Productivity analytics", "Time reports", "Team performance", "Custom dashboards"],
    },
    {
      icon: BellIcon,
      title: "Notification System",
      description: "Real-time notifications and email integration for team communication",
      items: ["Real-time alerts", "Email notifications", "Notification preferences", "Activity tracking"],
    },
  ];

  return (
    <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-gray-50">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Comprehensive Feature Set
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            A complete business solution combining public-facing website features with powerful internal management
            tools
          </p>
        </motion.div>

        {/* Public Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🌐 Public Website Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publicFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Internal Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏢 Internal Management Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Why This Architecture Matters</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            This isn&apos;t just a website - it&apos;s a complete business transformation platform that streamlines
            operations, improves team productivity, and enhances client relationships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Reduction in admin time</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Faster project tracking</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Professional online presence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
