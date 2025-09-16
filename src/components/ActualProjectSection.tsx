"use client";

import { motion } from "framer-motion";
import {
  actualFeatures,
  clientProblems,
  coreCompletedFeatures,
  bonusFeatures,
  pricingComparison,
} from "@/data/actualWeaveCP";
import {
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function ActualProjectSection() {
  const coreFeatures = actualFeatures.filter((f) => coreCompletedFeatures.includes(f.name));
  const bonusBuiltFeatures = actualFeatures.filter((f) => bonusFeatures.includes(f.name));

  return (
    <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Common Website Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Many architectural firms face similar challenges with their websites. Here&apos;s how we can solve these
            common problems with a comprehensive solution.
          </p>
        </motion.div>

        {/* Current Problems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Common Website Challenges This Solution Addresses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500"
              >
                <div className="flex items-start space-x-4">
                  <XMarkIcon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common Challenge</h4>
                    <p className="text-red-700 text-sm mb-3 font-medium">{problem.current}</p>
                    <p className="text-gray-600 text-sm mb-3">
                      <span className="font-medium">Impact:</span> {problem.impact}
                    </p>
                    <div className="flex items-center text-green-600 text-sm">
                      <ArrowRightIcon className="w-4 h-4 mr-2" />
                      <span className="font-medium">{problem.solution}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What You Actually Get */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You Get With WeaveCP (Already Built!)
          </h3>

          {/* Immediate Priority Features */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
              <CheckCircleIcon className="w-6 h-6 mr-2" />
              What You&apos;ll Get: Professional Website + Full CMS Control
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{feature.name}</h5>
                      <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {feature.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bonus Features */}
          <div>
            <h4 className="text-xl font-semibold text-purple-700 mb-6 flex items-center">
              <SparklesIcon className="w-6 h-6 mr-2" />
              Bonus: Business Management Features (70% Complete)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bonusBuiltFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-500"
                >
                  <div className="flex items-start space-x-3">
                    <SparklesIcon className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{feature.name}</h5>
                      <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        70% Complete - Can be finished
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Investment Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Rates */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-orange-200">Typical Market Rates</h4>
              <div className="text-3xl font-bold mb-2">{pricingComparison.marketRates.typical}</div>
              <p className="text-orange-200 mb-4">{pricingComparison.marketRates.got}</p>
              <ul className="text-sm text-orange-100 space-y-2">
                <li>• Often single page or basic functionality</li>
                <li>• Limited content control</li>
                <li>• Ongoing developer dependencies</li>
                <li>• Basic service presentation</li>
                <li>• Limited scalability</li>
              </ul>
            </div>

            {/* WeaveCP Solution */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <h4 className="text-xl font-semibold mb-4 text-green-200">WeaveCP Complete Solution</h4>
              <div className="text-3xl font-bold mb-2">₱{pricingComparison.ourSolution.price.toLocaleString()}</div>
              <p className="text-green-200 mb-4">{pricingComparison.ourSolution.includes}</p>
              <ul className="text-sm text-green-100 space-y-2">
                <li>• Complete 9-page professional website</li>
                <li>• Full content management system</li>
                <li>• 7 individual service pages</li>
                <li>• Complete business management system</li>
                <li>• Mobile responsive design</li>
                <li>• SEO optimized</li>
                <li>• Image management</li>
                <li>• + 7 bonus business features</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">WeaveCP Value Proposition</h4>
            <p className="text-lg">
              <span className="font-bold text-yellow-300">Competitive pricing</span> with
              <span className="font-bold text-yellow-300"> comprehensive features and functionality</span>
            </p>
            <p className="text-sm text-blue-100 mt-2">Built in 2 months (240 hours) with modern technology stack</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
