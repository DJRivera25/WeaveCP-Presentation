"use client";

import { useState, useEffect } from "react";
import NavbarTutorial from "./NavbarTutorial";

// Tutorial storage key
const TUTORIAL_STORAGE_KEY = "weavecp-navbar-tutorial-completed";

// Tutorial settings
const TUTORIAL_CONFIG = {
  // Show tutorial again after this many days (set to 0 to show only once)
  recurringDays: 7,
  // Delay before showing tutorial (in milliseconds)
  showDelay: 2000,
};

export default function TutorialManager() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if we should show the tutorial
    const checkTutorialStatus = () => {
      try {
        const storedData = localStorage.getItem(TUTORIAL_STORAGE_KEY);

        if (!storedData) {
          // First time visitor - show tutorial after delay
          setTimeout(() => {
            setShowTutorial(true);
          }, TUTORIAL_CONFIG.showDelay);
          setIsLoaded(true);
          return;
        }

        const { completedAt, version } = JSON.parse(storedData);
        const completedDate = new Date(completedAt);
        const now = new Date();
        const daysSinceCompleted = Math.floor((now.getTime() - completedDate.getTime()) / (1000 * 60 * 60 * 24));

        // Check if we should show tutorial again based on recurring setting
        if (TUTORIAL_CONFIG.recurringDays > 0 && daysSinceCompleted >= TUTORIAL_CONFIG.recurringDays) {
          setTimeout(() => {
            setShowTutorial(true);
          }, TUTORIAL_CONFIG.showDelay);
        }

        setIsLoaded(true);
      } catch (error) {
        console.warn("Error checking tutorial status:", error);
        // If there's an error reading from localStorage, show tutorial to be safe
        setTimeout(() => {
          setShowTutorial(true);
        }, TUTORIAL_CONFIG.showDelay);
        setIsLoaded(true);
      }
    };

    // Only run on client side
    if (typeof window !== "undefined") {
      checkTutorialStatus();
    }
  }, []);

  const handleTutorialComplete = () => {
    try {
      // Store completion data
      const completionData = {
        completedAt: new Date().toISOString(),
        version: "1.0", // Can be used for tutorial versioning
      };

      localStorage.setItem(TUTORIAL_STORAGE_KEY, JSON.stringify(completionData));
    } catch (error) {
      console.warn("Error saving tutorial completion:", error);
    }

    setShowTutorial(false);
  };

  // Reset tutorial (useful for development/testing)
  const resetTutorial = () => {
    try {
      localStorage.removeItem(TUTORIAL_STORAGE_KEY);
      setShowTutorial(true);
    } catch (error) {
      console.warn("Error resetting tutorial:", error);
    }
  };

  // Don't render anything until we've checked localStorage
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {showTutorial && <NavbarTutorial onComplete={handleTutorialComplete} />}

      {/* Development helper - remove in production */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 z-[9998]">
          <button
            onClick={resetTutorial}
            className="bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-50 hover:opacity-100"
            title="Reset Tutorial (Dev Only)"
          >
            Reset Tutorial
          </button>
        </div>
      )}
    </>
  );
}

// Utility function to manually trigger tutorial (can be used elsewhere)
export const triggerTutorial = () => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("trigger-tutorial");
    window.dispatchEvent(event);
  }
};

// Hook for components that want to trigger tutorial
export const useTutorialTrigger = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handleTriggerTutorial = () => {
      setShouldShow(true);
    };

    window.addEventListener("trigger-tutorial", handleTriggerTutorial);

    return () => {
      window.removeEventListener("trigger-tutorial", handleTriggerTutorial);
    };
  }, []);

  const hideTutorial = () => setShouldShow(false);

  return { shouldShow, hideTutorial };
};
