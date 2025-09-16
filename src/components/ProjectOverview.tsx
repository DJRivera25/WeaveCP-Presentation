"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function ProjectOverview() {
  const features = [
    {
      icon: CodeBracketIcon,
      title: "Full-Stack Architecture",
      description: "Next.js 15 with App Router, TypeScript, MongoDB, and modern development practices",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile-First Responsive",
      description: "Optimized for all devices from mobile phones to large desktop screens",
      color: "from-green-500 to-green-600",
    },
    {
      icon: UserGroupIcon,
      title: "Multi-Role System",
      description: "Admin, Manager, and Employee roles with comprehensive permission management",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: ServerIcon,
      title: "Production-Ready APIs",
      description: "12+ RESTful endpoints with authentication, validation, and error handling",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: ChartBarIcon,
      title: "Business Intelligence",
      description: "Analytics, reporting, time tracking, and productivity monitoring",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description: "NextAuth.js, role-based access, data validation, and security best practices",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-white">
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
            Project Overview
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            A complete website solution built for WeaveCP&apos;s outsourcing architectural services, combining a
            professional public website with powerful internal business management tools.
          </p>
        </motion.div>

        {/* Key Stats - COMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="text-center p-2 bg-blue-50 rounded-lg">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1">15+</div>
            <div className="text-xs sm:text-sm text-gray-600">User Stories</div>
          </div>
          <div className="text-center p-2 bg-green-50 rounded-lg">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-1">12+</div>
            <div className="text-xs sm:text-sm text-gray-600">API Endpoints</div>
          </div>
          <div className="text-center p-2 bg-purple-50 rounded-lg">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600 mb-1">440+</div>
            <div className="text-xs sm:text-sm text-gray-600">Dev Hours</div>
          </div>
          <div className="text-center p-2 bg-orange-50 rounded-lg">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mb-1">6</div>
            <div className="text-xs sm:text-sm text-gray-600">Phases</div>
          </div>
        </motion.div>

        {/* Feature Grid - COMPACT 2-CARDS PER ROW */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-2 sm:p-3 shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-1 sm:mb-2">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-r ${feature.color} flex items-center justify-center mr-2`}
                >
                  <feature.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">{feature.title}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-tight">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Built with Modern Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js 15",
              "TypeScript",
              "MongoDB",
              "Tailwind CSS",
              "NextAuth.js",
              "Framer Motion",
              "Cloudinary",
              "Zustand",
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
