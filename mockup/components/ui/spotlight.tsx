"use client"

import { cn } from "@/lib/utils"
import { useRef, useState, useEffect } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const containerSize = useRef({ w: 0, h: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const initiateContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth
      containerSize.current.h = containerRef.current.offsetHeight
    }
  }

  const onMouseMove = (event: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const { w, h } = containerSize.current
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      if (x < 0 || x > w || y < 0 || y > h) {
        setIsVisible(false)
        return
      }
      setIsVisible(true)
      mousePosition.current.x = x
      mousePosition.current.y = y
    }
  }

  const animateSpotlight = () => {
    if (!isVisible) return
    const { x, y } = mousePosition.current
    const speed = 0.1

    // Add easing to the mouse movement
    mouse.current.x += (x - mouse.current.x) * speed
    mouse.current.y += (y - mouse.current.y) * speed

    if (containerRef.current) {
      const spotlight = containerRef.current.querySelector("radialGradient")
      if (spotlight) {
        const { w, h } = containerSize.current
        const centerX = (mouse.current.x / w) * 100
        const centerY = (mouse.current.y / h) * 100
        spotlight.setAttribute("fx", `${centerX}%`)
        spotlight.setAttribute("fy", `${centerY}%`)
      }
    }

    requestAnimationFrame(animateSpotlight)
  }

  useEffect(() => {
    initiateContainer()
    window.addEventListener("resize", initiateContainer)
    window.addEventListener("mousemove", onMouseMove)

    requestAnimationFrame(animateSpotlight)

    return () => {
      window.removeEventListener("resize", initiateContainer)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="spotlight" cx="50%" cy="50%" fx="50%" fy="50%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={fill} stopOpacity="0.12" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#spotlight)" />
      </svg>
    </div>
  )
}
