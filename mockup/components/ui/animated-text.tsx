"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { type ReactNode, useState } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  as?: React.ElementType
  animationType?: "underline" | "color" | "scale"
}

export function AnimatedText({
  children,
  className,
  as: Component = "span",
  animationType = "underline",
}: AnimatedTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  const animationClasses = {
    underline: cn(
      "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#5DBB63] after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100",
      isHovered && "after:origin-bottom-left after:scale-x-100",
    ),
    color: cn("transition-colors duration-300 ease-in-out", isHovered ? "text-[#5DBB63]" : "text-current"),
    scale: cn("transition-transform duration-300 ease-in-out inline-block", isHovered ? "scale-110" : "scale-100"),
  }

  return (
    <Component
      className={cn(animationClasses[animationType], className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Component>
  )
}
