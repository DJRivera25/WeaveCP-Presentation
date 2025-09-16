"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function HeroSection() {
  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pb-20 md:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-indigo-800/20"></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center pt-4 pb-24 md:pb-4">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg p-4">
            <Image src="/weave-symbol-tri.png" alt="WeaveCP Logo" width={64} height={64} className="object-contain" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
            WeaveCP
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-blue-200 mt-1">
              Website Solution Complete!
            </span>
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed px-2">
            Your complete website solution is ready! A{" "}
            <span className="text-yellow-300 font-semibold">professional 9-page website</span> and{" "}
            <span className="text-purple-300 font-semibold">full content management system</span> - built with modern
            technology for WeaveCP&apos;s outsourcing architectural services
          </h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 mx-auto mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-1">Professional Website</h3>
              <p className="text-blue-200 text-sm">9 pages with service showcases and team profiles</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-1">Content Management</h3>
              <p className="text-blue-200 text-sm">Update content yourself with easy admin panel</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-1">Fast Delivery</h3>
              <p className="text-blue-200 text-sm">2 months development, ready for deployment</p>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden mb-6 px-2">
            <div className="flex overflow-x-auto space-x-3 pb-4 scrollbar-hide">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex-shrink-0 w-48">
                <h3 className="text-white font-semibold text-sm mb-1">Professional Website</h3>
                <p className="text-blue-200 text-xs">9 pages with service showcases</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex-shrink-0 w-48">
                <h3 className="text-white font-semibold text-sm mb-1">Content Management</h3>
                <p className="text-blue-200 text-xs">Update content yourself</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex-shrink-0 w-48">
                <h3 className="text-white font-semibold text-sm mb-1">Fast Delivery</h3>
                <p className="text-blue-200 text-xs">Ready for deployment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex-shrink-0 w-48">
                <h3 className="text-white font-semibold text-sm mb-1">Full Control</h3>
                <p className="text-blue-200 text-xs">No ongoing dependencies</p>
              </div>
            </div>
            <div className="flex justify-center space-x-1 mt-2">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={scrollToOverview}
            className="bg-white text-blue-900 px-6 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg w-48 sm:w-auto"
          >
            See The Solution
          </button>
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-white text-white px-6 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 w-48 sm:w-auto"
          >
            Compare Investment
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToOverview}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white hover:text-blue-200 transition-colors"
          >
            <ArrowDownIcon className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements - Hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="hidden md:block absolute bottom-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-xl"></div>
    </section>
  );
}
