"use client";

import { motion } from "framer-motion";
import { ClockIcon, CurrencyDollarIcon, CalculatorIcon } from "@heroicons/react/24/outline";

export default function HourlyRateSection() {
  const rateStructure = [
    {
      category: "Additional Features",
      rate: 1000,
      description: "New functionality and integrations",
      examples: [
        "Client Portal (40 hours = ₱40,000)",
        "Invoice & Billing System (35 hours = ₱35,000)",
        "Mobile App (80 hours = ₱80,000)",
      ],
    },
    {
      category: "Customizations",
      rate: 1000,
      description: "Design changes and modifications",
      examples: [
        "Custom Branding (20 hours = ₱20,000)",
        "Additional Service Pages (8 hours = ₱8,000)",
        "Multi-language Support (30 hours = ₱30,000)",
      ],
    },
    {
      category: "Minor Enhancements",
      rate: 1000,
      description: "Small improvements and tweaks",
      examples: ["Content updates and modifications", "UI/UX improvements", "Performance optimizations"],
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <CalculatorIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Simple Hourly Rate Structure
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Transparent pricing for any additional features or customizations you might need. No hidden costs, no
            surprises - just a simple hourly rate.
          </p>
        </motion.div>

        {/* Rate Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-3xl font-bold mb-4">₱1,000 per Hour</h3>
            <p className="text-blue-100 text-lg">
              For any additional features, customizations, or enhancements beyond the core package
            </p>
          </div>
        </motion.div>

        {/* Rate Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {rateStructure.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.category}</h3>
                <div className="flex items-center justify-center text-2xl font-bold text-blue-600 mb-2">
                  ₱{category.rate.toLocaleString()}/hour
                </div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Examples:</h4>
                <ul className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                      <ClockIcon className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why This Rate Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why This Rate Structure Benefits You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-4">Benefits for You</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Transparent pricing</strong> - know exactly what you&apos;re paying for
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Pay only for what you need</strong> - no forced packages
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Flexible budgeting</strong> - add features when budget allows
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>No surprises</strong> - estimate hours upfront
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-4">Quality Assurance</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Professional development</strong> - modern tech stack
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Tested and reliable</strong> - proven architecture
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Documentation included</strong> - easy to maintain
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Source code ownership</strong> - no vendor lock-in
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
