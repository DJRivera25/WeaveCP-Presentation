"use client";

import { motion } from "framer-motion";
import { hostingServices, usageScenarios, totalCostComparison } from "@/data/hostingAnalysis";
import { CheckCircleIcon, CloudIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

export default function HostingCostSection() {
  return (
    <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CloudIcon className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Deployment: <span className="text-green-600">FREE to Start</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Your WeaveCP website can be deployed completely FREE using free hosting tiers. Only upgrade when you
            actually need more resources!
          </p>
        </motion.div>

        {/* Free vs Paid Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Free Tiers Are Perfect for Your Needs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h4 className="font-semibold text-gray-900 mb-4 text-center">{service.service}</h4>

                {/* Free Tier */}
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-green-600">FREE</span>
                  </div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {service.freeTier.limits.map((limit, limitIndex) => (
                      <li key={limitIndex} className="flex items-start">
                        <CheckCircleIcon className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                        {limit}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-green-700 mt-2 font-medium">{service.freeTier.suitableFor}</p>
                </div>

                {/* Paid Tier */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-blue-600">${service.paidTier.cost}/mo</span>
                  </div>
                  <p className="text-xs text-gray-600 text-center">{service.paidTier.whenToUpgrade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Usage Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            What&apos;s Right for Your Company Size?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usageScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.scenario}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 ${
                  scenario.recommendedTier === "free" ? "border-green-500" : "border-blue-500"
                }`}
              >
                <h4 className="font-semibold text-gray-900 mb-4">{scenario.scenario}</h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>
                    Monthly Visitors: <span className="font-medium">{scenario.monthlyVisitors.toLocaleString()}</span>
                  </div>
                  <div>
                    Image Uploads: <span className="font-medium">{scenario.monthlyUploads}/month</span>
                  </div>
                  <div>
                    CMS Users: <span className="font-medium">{scenario.cmsUsers}</span>
                  </div>
                </div>
                <div
                  className={`text-center p-3 rounded-lg ${
                    scenario.recommendedTier === "free"
                      ? "bg-green-50 border border-green-200"
                      : "bg-blue-50 border border-blue-200"
                  }`}
                >
                  <div
                    className={`text-lg font-bold ${
                      scenario.recommendedTier === "free" ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    ${scenario.monthlyCost}/month
                  </div>
                  <div className="text-xs text-gray-600">
                    {scenario.recommendedTier === "free" ? "FREE hosting" : "Paid hosting recommended"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Total Cost of Ownership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            WeaveCP Solution Costs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Year 1 */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                WeaveCP Investment
              </h4>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">Our Solution</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Development:</span>
                      <span className="font-medium">
                        ${totalCostComparison.year1.ourSolution.development.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hosting:</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domain:</span>
                      <span className="font-medium">${totalCostComparison.year1.ourSolution.domain}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-bold">
                      <span>Total Year 1:</span>
                      <span className="text-green-600">
                        ${totalCostComparison.year1.ourSolution.total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Years 2-3 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Years 2-3 (Annual)</h4>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">Our Solution</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Development:</span>
                      <span className="font-medium text-green-600">DONE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hosting:</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domain:</span>
                      <span className="font-medium">${totalCostComparison.year2and3.ourSolution.domain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Support (optional):</span>
                      <span className="font-medium">${totalCostComparison.year2and3.ourSolution.support}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-bold">
                      <span>Annual Cost:</span>
                      <span className="text-green-600">${totalCostComparison.year2and3.ourSolution.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Summary */}
          <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-2">Your Investment Value</h4>
            <div className="text-3xl font-bold mb-2">₱170,000</div>
            <p className="text-green-100">
              Complete professional website for WeaveCP with full control and independence!
            </p>
          </div>
        </motion.div>

        {/* When to Upgrade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">When Should You Upgrade Hosting?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                Start FREE - Perfect for Most Firms
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  Up to 3,000 website visitors monthly
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  25GB image storage (hundreds of portfolio images)
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  512MB database (thousands of content entries)
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  3,000 emails monthly (contact forms, notifications)
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  Monthly Cost: <span className="text-xl font-bold">₱0</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                <ArrowUpIcon className="w-5 h-5 mr-2" />
                Upgrade When You Grow
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  Getting 5,000+ visitors monthly
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  Uploading 100+ images monthly
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  Adding employee management features
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  Need automated backups and priority support
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  Monthly Cost: <span className="text-xl font-bold">₱1,600</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">WeaveCP Investment Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">₱170,000</div>
              <div className="text-blue-100">Website development (one-time)</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₱0</div>
              <div className="text-blue-100">Hosting costs (free deployment)</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₱800</div>
              <div className="text-blue-100">Domain cost (annual)</div>
            </div>
          </div>
          <p className="text-blue-100 mt-6 text-lg">
            Professional website with full control for less than you&apos;ve already spent!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
