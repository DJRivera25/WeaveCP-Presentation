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
import TutorialManager from "@/components/TutorialManager";

export const metadata: Metadata = {
  title: "WeaveCP Website Solution - Complete & Ready for Deployment",
  description:
    "Complete website solution for WeaveCP outsourcing architectural services. Professional 9-page website with CMS, built with modern technology and ready for immediate deployment.",
  keywords: "WeaveCP, architectural services, website solution, Next.js, CMS, professional website, ready to deploy",
};

export default function Home() {
  return (
    <>
      <FloatingNav />
      <TutorialManager />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white w-full overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen w-full">
          <HeroSection />
        </section>

        {/* Project Overview */}
        <section id="overview" className="min-h-screen pt-20 w-full">
          <ProjectOverview />
          <ActualProjectSection />
        </section>

        {/* Features Showcase */}
        <section id="features" className="min-h-screen pt-20 w-full">
          <FeaturesShowcase />
          <HonestProjectStatus />
          <TechnicalStack />
        </section>

        {/* Pricing */}
        <section id="pricing" className="min-h-screen pt-20 w-full">
          <PricingSection />
          <AdditionalFeaturesSection />
          <HourlyRateSection />
          <HostingCostSection />
        </section>
      </main>
    </>
  );
}
