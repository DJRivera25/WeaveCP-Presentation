"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { userStories } from "@/data/projectAnalysis";
import { CheckCircleIcon, ClockIcon, ExclamationTriangleIcon, StarIcon } from "@heroicons/react/24/outline";

export default function UserStoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStory, setSelectedStory] = useState(userStories[0]);

  const categories = ["All", ...Array.from(new Set(userStories.map((story) => story.category)))];

  const filteredStories =
    selectedCategory === "All" ? userStories : userStories.filter((story) => story.category === selectedCategory);

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">User Stories & Requirements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed breakdown of all features and functionalities from the user&apos;s perspective, ensuring every
            requirement is captured and addressed.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stories List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Stories ({filteredStories.length})</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredStories.map((story) => (
                <motion.button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  whileHover={{ scale: 1.02 }}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedStory.id === story.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600">{story.id}</span>
                    <div className="flex items-center space-x-1">
                      {getPriorityIcon(story.priority)}
                      <span className="text-xs text-gray-500">{story.estimatedHours}h</span>
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{story.title}</h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{story.description}</p>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                      {story.category}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Selected Story Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className={`p-8 rounded-xl border-2 ${getPriorityColor(selectedStory.priority)}`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-bold text-blue-600">{selectedStory.id}</span>
                  {getPriorityIcon(selectedStory.priority)}
                  <span className="text-sm font-medium text-gray-600">{selectedStory.priority} Priority</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {selectedStory.estimatedHours} hours
                  </span>
                  <span className="px-2 py-1 bg-white/50 rounded-full">{selectedStory.category}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedStory.title}</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">{selectedStory.description}</p>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                  Acceptance Criteria
                </h4>
                <ul className="space-y-3">
                  {selectedStory.acceptanceCriteria.map((criteria, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{criteria}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-red-50 rounded-xl">
            <div className="text-2xl font-bold text-red-600 mb-2">
              {userStories.filter((s) => s.priority === "High").length}
            </div>
            <div className="text-red-700 text-sm">High Priority Stories</div>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              {userStories.filter((s) => s.priority === "Medium").length}
            </div>
            <div className="text-yellow-700 text-sm">Medium Priority Stories</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {userStories.filter((s) => s.priority === "Low").length}
            </div>
            <div className="text-green-700 text-sm">Low Priority Stories</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {userStories.reduce((total, story) => total + story.estimatedHours, 0)}
            </div>
            <div className="text-blue-700 text-sm">Total Estimated Hours</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
