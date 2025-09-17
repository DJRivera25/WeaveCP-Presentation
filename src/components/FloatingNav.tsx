"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HomeIcon, EyeIcon, CpuChipIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const sections = [
    { id: "hero", label: "Home", icon: HomeIcon },
    { id: "overview", label: "Overview", icon: EyeIcon },
    { id: "features", label: "Features", icon: CpuChipIcon },
    { id: "pricing", label: "Pricing", icon: CurrencyDollarIcon },
  ];

  // Track active section using Intersection Observer for accurate detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is 20% from top and 60% from bottom
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Only update if it's one of our navigation sections
          if (sections.find((section) => section.id === sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback: Also use scroll position for more accurate tracking
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case: if near bottom of page, highlight last section
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // Special case: if at top, highlight first section
      if (scrollPosition < 200) {
        setActiveSection(sections[0].id);
        return;
      }

      // Find the section that's most visible in the viewport
      let maxVisibleArea = 0;
      let mostVisibleSection = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = Math.max(0, rect.top);
          const elementBottom = Math.min(windowHeight, rect.bottom);
          const visibleHeight = Math.max(0, elementBottom - elementTop);

          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            mostVisibleSection = section.id;
          }
        }
      });

      setActiveSection(mostVisibleSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener as backup
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                data-tutorial-target={section.id}
                className={`w-12 h-12 rounded-full mb-2 last:mb-0 flex items-center justify-center transition-all duration-300 group relative ${
                  isActive ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Icon className="w-5 h-5" />

                {/* Tooltip */}
                <div
                  className={`absolute left-full ml-3 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
                    isActive ? "bg-blue-700 text-white" : "bg-gray-900 text-white"
                  }`}
                >
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
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                data-tutorial-target={section.id}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
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
