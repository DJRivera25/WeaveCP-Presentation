"use client";

import { motion } from "framer-motion";

export default function HonestProjectStatus() {
  const statusCategories = [
    {
      title: "✅ Complete & Ready",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      features: [
        "Professional 9-page website (100%)",
        "Content Management System (100%)",
        "User authentication & roles (95%)",
        "Job posting & applications (90%)",
      ],
    },
    {
      title: "🔧 Functional - Can Be Enhanced",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      features: [
        "Task management system (80% - UI needs polish)",
        "Time tracking system (85% - reports can be enhanced)",
        "Project management (80% - timeline views need work)",
        "Employee dashboards (functional but can be improved)",
      ],
    },
    {
      title: "⚠️ Basic - Needs More Work",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      features: [
        "Leave management (75% - UI needs enhancement)",
        "Calendar & events (65% - needs better integration)",
        "Advanced reporting (basic analytics only)",
        "Mobile optimization (desktop-first design)",
      ],
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
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
            Honest Project Assessment
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
            No overselling here. This is the realistic status of what&apos;s complete, what works, and what can be
            improved. The core website and CMS are production-ready.
          </p>
        </motion.div>

        {/* Status Overview - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-16">
          {statusCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Status Overview - Mobile */}
        <div className="md:hidden mb-16">
          <div className="space-y-4">
            {statusCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-lg"
              >
                <h3 className="text-base font-bold text-gray-900 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      <span className="text-xs text-gray-700 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">The Bottom Line</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">₱170,000</div>
              <div className="text-blue-100 text-xs sm:text-sm">For everything shown</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">Ready</div>
              <div className="text-blue-100 text-xs sm:text-sm">Website & CMS</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">Working</div>
              <div className="text-blue-100 text-xs sm:text-sm">Business features</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">Honest</div>
              <div className="text-blue-100 text-xs sm:text-sm">Assessment</div>
            </div>
          </div>
          <p className="text-blue-100 text-sm sm:text-base mt-4">
            The core value is in the professional website and CMS. Business features are functional but can be enhanced
            based on your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
