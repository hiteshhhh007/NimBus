"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useRef, useState, type ReactNode } from "react"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  glareOpacity?: number
  rotationIntensity?: number
}

export function ThreeDCard({
  children,
  className,
  containerClassName,
  glareOpacity = 0.2,
  rotationIntensity = 10,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * rotationIntensity
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * rotationIntensity

    setRotation({ x: rotateX, y: rotateY })
    setGlarePosition({ x: (mouseX - rect.left) / rect.width, y: (mouseY - rect.top) / rect.height })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={cn("perspective-1000px", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "relative transition-transform duration-200 ease-out",
          isHovered && "will-change-transform",
          className,
        )}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {children}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x * 100}% ${
                glarePosition.y * 100
              }%, rgba(255, 255, 255, ${glareOpacity}), transparent)`,
            }}
          />
        )}
      </div>
    </div>
  )
}
