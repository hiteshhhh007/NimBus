"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface BenefitItemProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function BenefitItem({ icon, title, description, delay = 0 }: BenefitItemProps) {
  return (
    <motion.li
      className="flex items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5DBB63]/20 flex items-center justify-center mr-3 mt-0.5 transform transition-transform duration-300 hover:scale-110 hover:bg-[#5DBB63]/30">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-[#2E462F] transition-colors duration-300 hover:text-[#5DBB63]">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.li>
  )
}
