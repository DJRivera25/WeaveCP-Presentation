"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// Removed dependency on deleted completedProject file
import {
  PlusCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  StarIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function AdditionalFeaturesSection() {
  const [selectedTab, setSelectedTab] = useState("additional");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Define features directly in component since we removed the data file
  const additionalFeatures: Feature[] = [
    {
      id: "AF001",
      name: "Client Portal",
      description: "Allow clients to view project progress and documents",
      category: "Client Management",
      estimatedHours: 25,
      price: 25000,
      priority: "High",
    },
    {
      id: "AF002",
      name: "Document Management System",
      description: "Upload, organize and share project documents",
      category: "Client Management",
      estimatedHours: 20,
      price: 20000,
      priority: "Medium",
    },
    {
      id: "AF003",
      name: "Invoice & Billing System",
      description: "Generate and manage invoices and billing",
      category: "Client Management",
      estimatedHours: 30,
      price: 30000,
      priority: "High",
    },
    {
      id: "AF004",
      name: "Advanced Reporting Dashboard",
      description: "Business intelligence and analytics",
      category: "Analytics",
      estimatedHours: 25,
      price: 25000,
      priority: "Medium",
    },
    {
      id: "AF005",
      name: "Custom Analytics",
      description: "Tailored analytics for your specific needs",
      category: "Analytics",
      estimatedHours: 20,
      price: 20000,
      priority: "Medium",
    },
    {
      id: "AF006",
      name: "API Integration Hub",
      description: "Connect with external tools and services",
      category: "Analytics",
      estimatedHours: 15,
      price: 15000,
      priority: "Low",
    },
    {
      id: "AF007",
      name: "Mobile App (React Native)",
      description: "Native mobile app for iOS and Android",
      category: "Mobile",
      estimatedHours: 80,
      price: 80000,
      priority: "High",
    },
    {
      id: "AF008",
      name: "Advanced Security Features",
      description: "Enhanced security, 2FA, audit logs",
      category: "Security",
      estimatedHours: 15,
      price: 15000,
      priority: "Medium",
    },
    {
      id: "AF009",
      name: "Calendar Integration",
      description: "Sync with Google Calendar, Outlook, etc.",
      category: "Integration",
      estimatedHours: 10,
      price: 10000,
      priority: "Low",
    },
  ];

  const customizationOptions: Feature[] = [
    {
      id: "CO001",
      name: "UI/UX Polish & Enhancement",
      description: "Improve existing interfaces for better user experience",
      category: "Design",
      estimatedHours: 25,
      price: 25000,
      priority: "High",
    },
    {
      id: "CO002",
      name: "Custom Workflow Integration",
      description: "Integrate with your existing business processes",
      category: "Integration",
      estimatedHours: 30,
      price: 30000,
      priority: "Medium",
    },
    {
      id: "CO003",
      name: "Advanced Dashboard Customization",
      description: "Customize dashboards to match your specific needs",
      category: "Design",
      estimatedHours: 20,
      price: 20000,
      priority: "Medium",
    },
    {
      id: "CO004",
      name: "Third-party Tool Integration",
      description: "Connect with your existing tools (CRM, accounting, etc.)",
      category: "Integration",
      estimatedHours: 25,
      price: 25000,
      priority: "Medium",
    },
    {
      id: "CO005",
      name: "Custom Branding & Theming",
      description: "Apply your brand colors, fonts, and styling throughout",
      category: "Design",
      estimatedHours: 15,
      price: 15000,
      priority: "Low",
    },
  ];

  const currentFeatures = selectedTab === "additional" ? additionalFeatures : customizationOptions;

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    );
  };

  interface Feature {
    id: string;
    name: string;
    description: string;
    category: string;
    estimatedHours: number;
    price: number;
    priority: "High" | "Medium" | "Low";
    dependencies?: string[];
  }

  const calculateTotal = () => {
    return currentFeatures
      .filter((feature: Feature) => selectedFeatures.includes(feature.id))
      .reduce((total: number, feature: Feature) => total + feature.price, 0);
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High":
        return <ExclamationTriangleIcon className="w-4 h-4 text-red-500" />;
      case "Medium":
        return <StarIcon className="w-4 h-4 text-yellow-500" />;
      case "Low":
        return <ClockIcon className="w-4 h-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "border-red-200 bg-red-50";
      case "Medium":
        return "border-yellow-200 bg-yellow-50";
      case "Low":
        return "border-green-200 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-white">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Enhance Your System Further
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            The core website and CMS are complete. The business management features are functional but can be polished
            and enhanced with additional customizations tailored to your specific needs.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => {
                setSelectedTab("additional");
                setSelectedFeatures([]);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                selectedTab === "additional" ? "bg-white text-blue-600 shadow-md" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              Additional Features ({additionalFeatures.length})
            </button>
            <button
              onClick={() => {
                setSelectedTab("customization");
                setSelectedFeatures([]);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                selectedTab === "customization"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
              Customizations ({customizationOptions.length})
            </button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                selectedFeatures.includes(feature.id)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => toggleFeature(feature.id)}
            >
              {/* Selection Indicator */}
              <div
                className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  selectedFeatures.includes(feature.id) ? "bg-blue-500 border-blue-500" : "border-gray-300"
                }`}
              >
                {selectedFeatures.includes(feature.id) && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>

              {/* Priority Badge */}
              <div
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-4 ${getPriorityColor(
                  feature.priority
                )}`}
              >
                {getPriorityIcon(feature.priority)}
                <span className="ml-1">{feature.priority} Priority</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.name}</h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {feature.estimatedHours}h
                </div>
                <div className="flex items-center text-lg font-bold text-blue-600">
                  ₱{feature.price.toLocaleString()}
                </div>
              </div>

              <div className="text-xs text-gray-500 mb-2">Category: {feature.category}</div>

              {feature.dependencies && feature.dependencies.length > 0 && (
                <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded">
                  <strong>Requires:</strong> {feature.dependencies.join(", ")}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Selected Features Summary */}
        {selectedFeatures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Selected {selectedTab === "additional" ? "Features" : "Customizations"} ({selectedFeatures.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentFeatures
                .filter((feature) => selectedFeatures.includes(feature.id))
                .map((feature) => (
                  <div key={feature.id} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                    <span className="text-sm font-bold text-blue-600">₱{feature.price.toLocaleString()}</span>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-blue-200">
              <span className="text-lg font-semibold text-gray-900">Total Additional Cost:</span>
              <span className="text-2xl font-bold text-blue-600">₱{calculateTotal().toLocaleString()}</span>
            </div>
          </motion.div>
        )}

        {/* Popular Combinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Feature Combination Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Client Management Bundle</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Client Portal</li>
                <li>• Document Management</li>
                <li>• Invoice & Billing System</li>
              </ul>
              <div className="text-lg font-bold text-purple-600">₱120,000</div>
              <div className="text-sm text-gray-500">Save ₱5,000 vs individual</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Business Intelligence Bundle</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Advanced Reporting Dashboard</li>
                <li>• Custom Analytics</li>
                <li>• API Integration Hub</li>
              </ul>
              <div className="text-lg font-bold text-purple-600">₱100,000</div>
              <div className="text-sm text-gray-500">Save ₱10,000 vs individual</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Mobile & Security Bundle</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Mobile App (React Native)</li>
                <li>• Advanced Security Features</li>
                <li>• Calendar Integration</li>
              </ul>
              <div className="text-lg font-bold text-purple-600">₱135,000</div>
              <div className="text-sm text-gray-500">Save ₱15,000 vs individual</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
