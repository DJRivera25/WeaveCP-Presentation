import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProjectOverview from "@/components/ProjectOverview";
import HonestProjectStatus from "@/components/HonestProjectStatus";
import ActualProjectSection from "@/components/ActualProjectSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
// import UserStoriesSection from "@/components/UserStoriesSection"; // Removed - too technical
import TechnicalStack from "@/components/TechnicalStack";
import AdditionalFeaturesSection from "@/components/AdditionalFeaturesSection";
import HourlyRateSection from "@/components/HourlyRateSection";
import HostingCostSection from "@/components/HostingCostSection";
import PricingSection from "@/components/PricingSection";
// import TimelineSection from "@/components/TimelineSection"; // Not used
import FloatingNav from "@/components/FloatingNav";

export const metadata: Metadata = {
  title: "WeaveCP Architectural Firm - Complete Platform Available",
  description:
    "The WeaveCP architectural firm platform is complete and ready for deployment. A comprehensive business management system with public website, employee portal, and admin tools.",
  keywords: "architectural firm, web development, Next.js, completed project, business automation, ready to deploy",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <HeroSection />
      </section>

      {/* Project Overview */}
      <section id="overview" className="min-h-screen">
        <ProjectOverview />
        <ActualProjectSection />
      </section>

      {/* Features Showcase */}
      <section id="features" className="min-h-screen">
        <FeaturesShowcase />
        <HonestProjectStatus />
        <TechnicalStack />
      </section>

      {/* Pricing */}
      <section id="pricing" className="min-h-screen">
        <PricingSection />
        <AdditionalFeaturesSection />
        <HourlyRateSection />
        <HostingCostSection />
      </section>
    </main>
  );
}
