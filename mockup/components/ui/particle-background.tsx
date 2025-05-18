"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

interface ParticleBackgroundProps {
  className?: string
  particleCount?: number
  particleColors?: string[]
  minSize?: number
  maxSize?: number
  speed?: number
  connected?: boolean
  connectionDistance?: number
}

export function ParticleBackground({
  className,
  particleCount = 50,
  particleColors = ["#5DBB63", "#2E462F", "#FFD700", "#A0522D"],
  minSize = 1,
  maxSize = 3,
  speed = 0.5,
  connected = true,
  connectionDistance = 100,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      }
    })

    const animate = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.6
        ctx.fill()

        // Draw connections
        if (connected) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const otherParticle = particlesRef.current[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = particle.color
              ctx.globalAlpha = 0.1 * (1 - distance / connectionDistance)
              ctx.stroke()
            }
          }
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [particleCount, particleColors, minSize, maxSize, speed, connected, connectionDistance])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 -z-10", className)} />
}
