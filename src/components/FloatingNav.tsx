"use client";

import { motion } from "framer-motion";
import { HomeIcon, EyeIcon, CpuChipIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function FloatingNav() {
  const sections = [
    { id: "hero", label: "Home", icon: HomeIcon },
    { id: "overview", label: "Overview", icon: EyeIcon },
    { id: "features", label: "Features", icon: CpuChipIcon },
    { id: "pricing", label: "Pricing", icon: CurrencyDollarIcon },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 80 : 0;

      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Floating Nav - Left Side */}
      <div
        className="hidden md:block z-[9999]"
        style={{
          position: "fixed",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
        }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 p-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-12 h-12 rounded-full mb-2 last:mb-0 flex items-center justify-center transition-all duration-300 group relative text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon className="w-5 h-5" />

                {/* Tooltip */}
                <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {section.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Floating Nav - Bottom Center (Always Visible) */}
      <div
        className="md:hidden z-[9999]"
        style={{
          position: "fixed",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 p-2 flex space-x-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
