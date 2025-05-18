"use client"

import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import type { ReactNode } from "react"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [ref, isInView] = useScrollReveal({ threshold, once })

  const getAnimationClasses = (type: AnimationType) => {
    const baseClasses = "transition-all will-change-transform"
    const durationClass = `duration-[${duration * 1000}ms]`
    const delayClass = delay > 0 ? `delay-[${delay * 1000}ms]` : ""

    const animationMap: Record<AnimationType, string> = {
      "fade-up": `${baseClasses} ${durationClass} ${delayClass} translate-y-10 opacity-0`,
      "fade-down": `${baseClasses} ${durationClass} ${delayClass} -translate-y-10 opacity-0`,
      "fade-left": `${baseClasses} ${durationClass} ${delayClass} translate-x-10 opacity-0`,
      "fade-right": `${baseClasses} ${durationClass} ${delayClass} -translate-x-10 opacity-0`,
      "zoom-in": `${baseClasses} ${durationClass} ${delayClass} scale-95 opacity-0`,
      "zoom-out": `${baseClasses} ${durationClass} ${delayClass} scale-105 opacity-0`,
    }

    return animationMap[type]
  }

  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClasses(animation),
        isInView && "translate-y-0 translate-x-0 scale-100 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  )
}
