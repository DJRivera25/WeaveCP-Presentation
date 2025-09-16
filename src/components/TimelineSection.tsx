"use client";

import { motion } from "framer-motion";
import { developmentPhases } from "@/data/projectAnalysis";
import { CheckCircleIcon, ClockIcon, PlayIcon } from "@heroicons/react/24/outline";

export default function TimelineSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Development Timeline</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to development with clear milestones, deliverables, and timeline estimates for each
            phase of the project.
          </p>
        </motion.div>

        {/* Timeline Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-6 bg-blue-50 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">13-17</div>
              <div className="text-sm text-blue-700">Weeks Total</div>
            </div>
            <div className="w-px h-8 bg-blue-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">440+</div>
              <div className="text-sm text-blue-700">Development Hours</div>
            </div>
            <div className="w-px h-8 bg-blue-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">6</div>
              <div className="text-sm text-blue-700">Major Phases</div>
            </div>
          </div>
        </motion.div>

        {/* Phase Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          {developmentPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "" : "md:mr-auto"}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {phase.duration}
                          </span>
                          <span className="flex items-center">
                            <PlayIcon className="w-4 h-4 mr-1" />
                            {phase.hours} hours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <motion.li
                          key={taskIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: taskIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{task}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Estimated Progress</span>
                      <span>{Math.round(((index + 1) / developmentPhases.length) * 100)}%</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${((index + 1) / developmentPhases.length) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Agile Development</h4>
              <p className="text-sm text-gray-600">Iterative development with regular check-ins and feedback loops</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Milestone-Based</h4>
              <p className="text-sm text-gray-600">Clear deliverables and milestones with regular progress updates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlayIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Testing</h4>
              <p className="text-sm text-gray-600">Quality assurance throughout development, not just at the end</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
