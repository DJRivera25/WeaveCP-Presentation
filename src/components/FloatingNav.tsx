"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HomeIcon, EyeIcon, CpuChipIcon, CurrencyDollarIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home", icon: HomeIcon },
    { id: "overview", label: "Overview", icon: EyeIcon },
    { id: "features", label: "Features", icon: CpuChipIcon },
    { id: "pricing", label: "Pricing", icon: CurrencyDollarIcon },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      {/* Desktop Floating Nav - Left Side */}
      <div className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 p-2"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-12 h-12 rounded-full mb-2 last:mb-0 flex items-center justify-center transition-all duration-300 group relative ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />

                {/* Tooltip */}
                <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {section.label}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile Floating Nav - Bottom Right */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-3 min-w-[160px]"
            >
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg mb-1 last:mb-0 transition-all duration-200 ${
                      activeSection === section.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
