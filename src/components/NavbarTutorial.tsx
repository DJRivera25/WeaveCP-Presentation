"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  EyeIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

// Tutorial steps configuration
const tutorialSteps = [
  {
    id: "welcome",
    title: "Welcome to WeaveCP!",
    description: "Navigate this presentation using our floating navigation bar.",
    highlightElement: null,
    isMobileSpecific: false,
    isDesktopSpecific: false,
  },
  {
    id: "home-nav",
    title: "Home Section",
    description: "Return to the hero section and solution overview.",
    highlightElement: "hero",
    icon: HomeIcon,
    isMobileSpecific: false,
    isDesktopSpecific: false,
  },
  {
    id: "overview-nav",
    title: "Project Overview",
    description: "View project details and technical features.",
    highlightElement: "overview",
    icon: EyeIcon,
    isMobileSpecific: false,
    isDesktopSpecific: false,
  },
  {
    id: "features-nav",
    title: "Features & Tech Stack",
    description: "Explore technical architecture and project status.",
    highlightElement: "features",
    icon: CpuChipIcon,
    isMobileSpecific: false,
    isDesktopSpecific: false,
  },
  {
    id: "pricing-nav",
    title: "Investment & Pricing",
    description: "Review pricing structure and hosting costs.",
    highlightElement: "pricing",
    icon: CurrencyDollarIcon,
    isMobileSpecific: false,
    isDesktopSpecific: false,
  },
  {
    id: "mobile-specific",
    title: "Mobile Navigation",
    description: "Navigation appears at bottom center for easy thumb access.",
    highlightElement: null,
    isMobileSpecific: true,
    isDesktopSpecific: false,
  },
  {
    id: "desktop-specific",
    title: "Desktop Navigation",
    description: "Hover over left icons to see tooltips with section names.",
    highlightElement: null,
    isMobileSpecific: false,
    isDesktopSpecific: true,
  },
  {
    id: "complete",
    title: "You're All Set!",
    description: "Use the floating navigation to explore the WeaveCP solution.",
    highlightElement: null,
    isMobileSpecific: false,
    isDesktopSpecific: false,
  },
];

interface NavbarTutorialProps {
  onComplete: () => void;
}

export default function NavbarTutorial({ onComplete }: NavbarTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [highlightPos, setHighlightPos] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  // Detect mobile/desktop on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update highlight position when step changes
  useEffect(() => {
    const updateHighlightPosition = () => {
      const step = getCurrentStep();
      if (!step?.highlightElement) {
        setHighlightPos(null);
        return;
      }

      // Get navigation element to highlight using data attribute
      const element = document.querySelector(`button[data-tutorial-target="${step.highlightElement}"]`);
      if (!element) {
        // Retry after a short delay for mobile rendering
        setTimeout(() => {
          const retryElement = document.querySelector(`button[data-tutorial-target="${step.highlightElement}"]`);
          if (retryElement) {
            const rect = retryElement.getBoundingClientRect();
            setHighlightPos({
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            });
          }
        }, 100);
        return;
      }

      const rect = element.getBoundingClientRect();
      setHighlightPos({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    };

    updateHighlightPosition();
  }, [currentStep, isMobile]);

  // Get current step with device filtering
  const getCurrentStep = () => {
    const step = tutorialSteps[currentStep];

    // Skip mobile-specific steps on desktop
    if (!isMobile && step.isMobileSpecific) {
      return null;
    }

    // Skip desktop-specific steps on mobile
    if (isMobile && step.isDesktopSpecific) {
      return null;
    }

    return step;
  };

  // Navigate to next valid step
  const nextStep = () => {
    let nextIndex = currentStep + 1;

    // Find next valid step for current device
    while (nextIndex < tutorialSteps.length) {
      const step = tutorialSteps[nextIndex];

      // Check if step is valid for current device
      if ((!isMobile && step.isMobileSpecific) || (isMobile && step.isDesktopSpecific)) {
        nextIndex++;
        continue;
      }

      break;
    }

    if (nextIndex >= tutorialSteps.length) {
      handleComplete();
    } else {
      setCurrentStep(nextIndex);
    }
  };

  // Navigate to previous valid step
  const prevStep = () => {
    let prevIndex = currentStep - 1;

    // Find previous valid step for current device
    while (prevIndex >= 0) {
      const step = tutorialSteps[prevIndex];

      // Check if step is valid for current device
      if ((!isMobile && step.isMobileSpecific) || (isMobile && step.isDesktopSpecific)) {
        prevIndex--;
        continue;
      }

      break;
    }

    if (prevIndex >= 0) {
      setCurrentStep(prevIndex);
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  const handleSkip = () => {
    handleComplete();
  };

  const step = getCurrentStep();
  if (!step || !isVisible) return null;

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tutorialSteps.length - 1;

  return (
    <AnimatePresence key="navbar-tutorial">
      {/* Highlight Circle - Outside blur container */}
      {highlightPos && (
        <motion.div
          key="highlight-circle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed rounded-full border-4 border-blue-400 shadow-lg shadow-blue-400/50 z-[10001]"
          style={{
            top: highlightPos.top - 8,
            left: highlightPos.left - 8,
            width: highlightPos.width + 16,
            height: highlightPos.height + 16,
          }}
        />
      )}

      <div className="fixed inset-0 z-[9997] overflow-hidden">
        {/* Overlay - with blur but lower z-index than floating nav */}
        <motion.div
          key="tutorial-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        />

        {/* Tutorial Modal */}
        <motion.div
          key="tutorial-modal"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className={`fixed bg-white rounded-2xl shadow-2xl p-3 sm:p-4 z-[10002] ${
            isMobile
              ? "w-80 max-w-[calc(100vw-2rem)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              : "w-72 max-w-sm top-1/2 transform -translate-y-1/2"
          }`}
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            ...(isMobile
              ? {}
              : {
                  right: "clamp(1rem, 5vw, 2rem)",
                  left: "auto",
                }),
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3 gap-2">
            <div className="flex items-center min-w-0 flex-1">
              {step.icon && (
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                  <step.icon className="w-3 h-3 text-blue-600" />
                </div>
              )}
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">{step.title}</h3>
            </div>
            <button
              onClick={handleSkip}
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-0.5"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{step.description}</p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex space-x-1.5">
              {tutorialSteps
                .filter((step) => (!isMobile || !step.isDesktopSpecific) && (isMobile || !step.isMobileSpecific))
                .map((step, filteredIndex) => {
                  const originalIndex = tutorialSteps.findIndex((s) => s.id === step.id);
                  return (
                    <div
                      key={step.id}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        originalIndex === currentStep ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    />
                  );
                })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-1">
            <button
              onClick={prevStep}
              disabled={isFirstStep}
              className={`flex items-center px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isFirstStep ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <ChevronLeftIcon className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            <div className="text-xs text-gray-500 text-center px-1 flex-shrink-0">
              {currentStep + 1}/
              {
                tutorialSteps.filter((s) => (!isMobile || !s.isDesktopSpecific) && (isMobile || !s.isMobileSpecific))
                  .length
              }
            </div>

            <button
              onClick={nextStep}
              className="flex items-center px-2 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {isLastStep ? "Complete" : "Next"}
              {!isLastStep && <ChevronRightIcon className="w-3 h-3 ml-1" />}
            </button>
          </div>

          {/* Skip Tutorial */}
          <div className="mt-3 text-center">
            <button onClick={handleSkip} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Skip tutorial
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
