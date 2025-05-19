"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { type ReactNode, useState } from "react"
import NextLink from "next/link" // Good practice to alias if name conflicts or for clarity

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  as?: React.ElementType
  animationType?: "underline" | "color" | "scale"
  href?: string | object //  <--- 1. ADD href TO THE INTERFACE
  // Allow any other props that might be passed (like 'target' for <a>, etc.)
  [key: string]: any;
}

export function AnimatedText({
  children,
  className,
  as: Component = "span",
  animationType = "underline",
  // Destructure props specific to AnimatedText's logic
  // ... and use '...rest' to capture all other props including 'href'
  ...rest // <--- 2. CAPTURE THE REST OF THE PROPS (INCLUDING href)
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

  // Combine AnimatedText's specific classes with any passed className
  const combinedClassName = cn(animationClasses[animationType], className)

  // If 'as' is NextLink, ensure href is passed.
  // If 'as' is not NextLink, 'href' will be passed if present in 'rest', which is fine.
  return (
    <Component
      {...rest} // <--- 3. SPREAD 'rest' PROPS (this will include 'href')
      className={combinedClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Component>
  )
}