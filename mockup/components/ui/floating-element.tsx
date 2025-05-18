"use client"

import { cn } from "@/lib/utils"
import { useRef, useState, useEffect, type ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  amplitude?: number
  frequency?: number
}

export function FloatingElement({ children, className, amplitude = 10, frequency = 0.5 }: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ y: 0 })
  const startTime = useRef(Date.now())

  useEffect(() => {
    const animate = () => {
      const elapsed = (Date.now() - startTime.current) / 1000
      const y = amplitude * Math.sin(elapsed * frequency)
      setPosition({ y })
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [amplitude, frequency])

  return (
    <div
      ref={elementRef}
      className={cn("transition-transform will-change-transform", className)}
      style={{
        transform: `translateY(${position.y}px)`,
      }}
    >
      {children}
    </div>
  )
}
