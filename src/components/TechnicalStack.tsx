"use client";

import { motion } from "framer-motion";
import { technicalFeatures, apiEndpoints } from "@/data/projectAnalysis";
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export default function TechnicalStack() {
  const stackCategories = [
    {
      title: "Frontend Technologies",
      icon: CodeBracketIcon,
      color: "from-blue-500 to-blue-600",
      technologies: technicalFeatures.frontend,
      description: "Modern React-based frontend with TypeScript and advanced state management",
    },
    {
      title: "Backend & APIs",
      icon: ServerIcon,
      color: "from-green-500 to-green-600",
      technologies: technicalFeatures.backend,
      description: "Robust server-side architecture with authentication and data validation",
    },
    {
      title: "Database & Storage",
      icon: CircleStackIcon,
      color: "from-purple-500 to-purple-600",
      technologies: technicalFeatures.database,
      description: "Scalable database design with efficient data modeling and relationships",
    },
    {
      title: "Deployment & Infrastructure",
      icon: CloudIcon,
      color: "from-orange-500 to-orange-600",
      technologies: technicalFeatures.deployment,
      description: "Production-ready deployment with monitoring and performance optimization",
    },
  ];

  return (
    <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Technical Architecture
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Built with modern, enterprise-grade technologies that ensure scalability, security, and maintainability for
            long-term success.
          </p>
        </motion.div>

        {/* Technology Stack - Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-8 mb-16">
          {stackCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack - Mobile */}
        <div className="md:hidden mb-16">
          <div className="space-y-6">
            {stackCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}
                  >
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* API Endpoints Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
              <CpuChipIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">API Endpoints & Features</h3>
              <p className="text-gray-600 mt-1">
                Comprehensive REST API with {apiEndpoints.length} endpoints covering all business requirements
              </p>
            </div>
          </div>

          {/* Desktop API Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {apiEndpoints.slice(0, 9).map((endpoint, index) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {endpoint.method}
                  </span>
                  {endpoint.authentication && (
                    <ShieldCheckIcon className="w-4 h-4 text-green-500" title="Authenticated" />
                  )}
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{endpoint.endpoint}</h4>
                <p className="text-xs text-gray-600 mb-3">{endpoint.description}</p>
                <div className="flex flex-wrap gap-1">
                  {endpoint.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {endpoint.features.length > 2 && (
                    <span className="text-xs text-gray-400">+{endpoint.features.length - 2} more</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile API Grid */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-3">
              {apiEndpoints.slice(0, 8).map((endpoint, index) => (
                <motion.div
                  key={endpoint.endpoint}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded">
                      {endpoint.method}
                    </span>
                    {endpoint.authentication && <ShieldCheckIcon className="w-3 h-3 text-green-500" />}
                  </div>
                  <h4 className="text-xs font-semibold text-gray-900 mb-1">{endpoint.endpoint}</h4>
                  <p className="text-xs text-gray-600 mb-2 leading-tight">{endpoint.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {endpoint.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-xs bg-gray-100 text-gray-600 px-1 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
                    {endpoint.features.length > 2 && (
                      <span className="text-xs text-gray-400">+{endpoint.features.length - 2}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {apiEndpoints.length > 9 && (
            <div className="text-center mt-6">
              <span className="text-sm text-gray-500">... and {apiEndpoints.length - 9} more endpoints</span>
            </div>
          )}
        </motion.div>

        {/* Architecture Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technology Stack Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Modern & Maintainable</h4>
              <p className="text-indigo-100 text-sm">
                Latest technologies ensure code quality and long-term maintainability
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Scalable Architecture</h4>
              <p className="text-indigo-100 text-sm">
                Designed to grow with your business needs and handle increased traffic
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Enterprise Security</h4>
              <p className="text-indigo-100 text-sm">
                Built-in security features and best practices for data protection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">High Performance</h4>
              <p className="text-indigo-100 text-sm">
                Optimized for speed with caching, CDN, and efficient data handling
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
