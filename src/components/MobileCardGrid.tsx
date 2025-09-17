"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MobileCardGridProps {
  children: ReactNode;
  className?: string;
}

export default function MobileCardGrid({ children, className = "" }: MobileCardGridProps) {
  return <div className={`md:hidden grid grid-cols-2 gap-2 sm:gap-3 px-2 ${className}`}>{children}</div>;
}

interface CompactCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  color?: string;
  index?: number;
}

export function CompactCard({ title, description, icon, color = "bg-blue-500", index = 0 }: CompactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-3 shadow-md border border-gray-100"
    >
      {icon && (
        <div className="flex items-center mb-2">
          <div className={`w-6 h-6 rounded ${color} flex items-center justify-center mr-2`}>{icon}</div>
          <h3 className="text-xs font-semibold text-gray-900 leading-tight">{title}</h3>
        </div>
      )}
      {!icon && <h3 className="text-xs font-semibold text-gray-900 mb-2 leading-tight">{title}</h3>}
      <p className="text-xs text-gray-600 leading-tight">{description}</p>
    </motion.div>
  );
}

