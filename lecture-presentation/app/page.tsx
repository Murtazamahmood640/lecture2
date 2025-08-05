"use client"

import { usePresentation } from "@/hooks/use-presentation"
import { lectureSlides } from "@/data/slides"
import SlideRenderer from "@/components/slide-renderer"
import PresentationControls from "@/components/presentation-controls"

export default function PresentationPage() {
  const { currentSlide, currentSlideIndex, totalSlides, nextSlide, prevSlide } = usePresentation(lectureSlides)

  if (!currentSlide) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-700">
        Loading presentation...
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <SlideRenderer slide={currentSlide} />
      </main>
      <PresentationControls
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  )
}
