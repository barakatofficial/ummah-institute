"use client";
import React from "react";
import { motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="space-y-8">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="group relative">
              {/* Connector Line */}
              {idx !== data.length - 1 && (
                <div className="absolute left-10 top-[4.5rem] bottom-[-2rem] w-0.5 bg-gradient-to-b from-teal-600 to-teal-100 group-last:hidden" />
              )}
              
              <motion.div 
                className="relative flex flex-col md:flex-row items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-teal-600 rounded-lg flex items-center justify-center shadow-md">
                    <div className="text-white text-2xl font-bold">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
