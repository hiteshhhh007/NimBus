"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  as?: React.ElementType
  speed?: "slow" | "medium" | "fast"
  animate?: boolean
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  as: Component = "div",
  speed = "medium",
  animate = true,
}: AnimatedGradientBorderProps) {
  const speedMap = {
    slow: "animate-[gradient_8s_linear_infinite]",
    medium: "animate-[gradient_4s_linear_infinite]",
    fast: "animate-[gradient_2s_linear_infinite]",
  }

  return (
    <Component
      className={cn(
        "relative rounded-xl p-[1px] overflow-hidden",
        "before:absolute before:inset-0",
        "before:bg-[linear-gradient(45deg,transparent_25%,rgba(93,187,99,0.9)_50%,transparent_75%,transparent_100%)]",
        "before:bg-[length:250%_250%,100%_100%] before:bg-[0_0,0_0]",
        "before:bg-no-repeat",
        animate && speedMap[speed],
        containerClassName,
      )}
    >
      <div className={cn("relative z-10 rounded-[calc(0.75rem-1px)] bg-white dark:bg-gray-950", className)}>
        {children}
      </div>
    </Component>
  )
}
