"use client"

import { useEffect, useRef, useState, type RefObject } from "react"

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", once = false } = options
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, once])

  return [ref, isInView]
}
