"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { supportInclusions, hostingRecommendations } from "@/data/pricing";
import { packageOptions } from "@/data/realisticPricing";
import { CheckIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function PricingSection() {
  const selectedPackage = packageOptions[1]; // Professional package

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
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
            Investment & Pricing
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            The WeaveCP platform is complete and ready for deployment. You&apos;re investing in a proven system with
            immediate value and optional enhancements.
          </p>
        </motion.div>

        {/* Completed Project Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Complete Website + CMS Solution</h3>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">₱170,000</div>
            <p className="text-green-100 text-sm sm:text-base md:text-lg">Complete outsourcing service website + CMS</p>
            <p className="text-green-200 text-xs sm:text-sm">Competitive pricing for comprehensive solution</p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              "Complete 9-page professional website",
              "Full content management system",
              "7 individual service showcase pages",
              "Mobile responsive design",
              "SEO optimized for all pages",
              "Professional image management",
              "Complete business management system (bonus)",
              "Task management, time tracking, team management",
              "1 month support and training (40 hours) included",
            ].map((item, index) => (
              <div key={index} className="flex items-start text-green-100">
                <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-tight">{item}</span>
              </div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="sm:hidden">
            <div className="grid grid-cols-1 gap-2 px-2">
              {[
                "Complete 9-page professional website",
                "Full content management system",
                "7 individual service showcase pages",
                "Mobile responsive design",
                "SEO optimized for all pages",
                "Professional image management",
                "Complete business management system (bonus)",
                "Task management, time tracking, team management",
                "1 month support and training (40 hours) included",
              ].map((item, index) => (
                <div key={index} className="flex items-start text-green-100">
                  <CheckIcon className="w-3 h-3 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-xs leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Single Package Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
            Complete Solution Package
          </h3>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Complete Solution
                </div>
              </div>

              <div className="text-center mb-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  WeaveCP Complete Package
                </h4>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">₱170,000</div>
                <p className="text-sm sm:text-base text-gray-600">
                  Complete outsourcing service website + CMS solution
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Complete 9-page professional website",
                  "Full CMS with image management",
                  "7 individual service pages",
                  "Mobile responsive design",
                  "SEO optimization + metadata",
                  "Analytics integration ready",
                  "Professional contact forms",
                  "Business management features (70% complete)",
                  "1 month support + training (40 hours)",
                  "Complete source code ownership",
                ].map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1 sm:mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-xs sm:text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs sm:text-sm text-gray-500 text-center mb-3 sm:mb-4">
                Perfect for outsourcing architectural service companies
              </p>

              <button className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                Get This Solution
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Selected Package Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">WeaveCP Complete Package: ₱170,000</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Solution Details */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">What You Get</h4>
                <div className="text-blue-600 text-sm font-medium">Complete Solution</div>
              </div>

              <div className="space-y-4">
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">WeaveCP Complete Solution</span>
                    <span className="font-bold text-green-600">₱170,000</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedPackage.includes.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Support Inclusions */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {supportInclusions.duration} Support Included
              </h4>
              <div className="space-y-3">
                {supportInclusions.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-2">Response Times</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    Critical: <span className="font-medium">{supportInclusions.responseTime.critical}</span>
                  </div>
                  <div>
                    High: <span className="font-medium">{supportInclusions.responseTime.high}</span>
                  </div>
                  <div>
                    Medium: <span className="font-medium">{supportInclusions.responseTime.medium}</span>
                  </div>
                  <div>
                    Low: <span className="font-medium">{supportInclusions.responseTime.low}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hosting & Operational Costs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ongoing Operational Costs</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <CurrencyDollarIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">${hostingRecommendations.recommended.monthlyCost}</div>
              <div className="text-sm text-blue-700">Hosting (Vercel Pro)</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CurrencyDollarIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">${hostingRecommendations.database.monthlyCost}</div>
              <div className="text-sm text-green-700">Database (MongoDB Atlas)</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <CurrencyDollarIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">${hostingRecommendations.totalMonthlyHosting}</div>
              <div className="text-sm text-purple-700">Total Monthly</div>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm">
            <p>* Hosting costs are separate from development and paid directly to service providers</p>
            <p>* Free tiers available for initial deployment with option to scale as needed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
