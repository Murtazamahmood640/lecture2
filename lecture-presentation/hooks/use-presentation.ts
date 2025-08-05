"use client"

import { useState, useCallback } from "react"
import type { Slide } from "@/data/slides"

export function usePresentation(slides: Slide[]) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }, [])

  const currentSlide = slides[currentSlideIndex]
  const totalSlides = slides.length

  return {
    currentSlide,
    currentSlideIndex,
    totalSlides,
    nextSlide,
    prevSlide,
  }
}
