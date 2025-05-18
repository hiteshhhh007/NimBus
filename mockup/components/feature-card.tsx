"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ThreeDCard } from "@/components/ui/3d-card"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  iconBg: string
  title: string
  description: string
  ctaText: string
  imageSrc?: string
  className?: string
}

export function FeatureCard({ icon, iconBg, title, description, ctaText, imageSrc, className }: FeatureCardProps) {
  return (
    <ThreeDCard
      containerClassName={cn("h-full", className)}
      className="h-full"
      glareOpacity={0.15}
      rotationIntensity={8}
    >
      <AnimatedGradientBorder className="h-full p-6" speed="slow">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110"
              style={{ backgroundColor: iconBg }}
            >
              {icon}
            </div>
            {imageSrc && (
              <div className="mb-4 rounded-lg overflow-hidden h-40 relative group">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={`${title} illustration`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 text-[#2E462F] transition-colors duration-300 hover:text-[#5DBB63]">
              {title}
            </h3>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>
          <div className="mt-auto">
            <Button
              variant="ghost"
              className="text-[#5DBB63] hover:text-[#4CA952] p-0 h-auto font-medium group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {ctaText}
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5DBB63]/20 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Button>
          </div>
        </div>
      </AnimatedGradientBorder>
    </ThreeDCard>
  )
}
