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
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive architectural firm management platform that combines a professional public website with
            powerful internal business tools for team productivity and client management.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">User Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">12+</div>
            <div className="text-gray-600">API Endpoints</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">440+</div>
            <div className="text-gray-600">Development Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">6</div>
            <div className="text-gray-600">Development Phases</div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
