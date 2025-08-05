"use client"

import { Button } from "@/components/ui/button"

interface PresentationControlsProps {
  currentSlideIndex: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

export default function PresentationControls({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
}: PresentationControlsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <Button
        onClick={onPrev}
        disabled={currentSlideIndex === 0}
        variant="outline"
        className="text-white border-white hover:bg-blue-600 hover:text-white bg-transparent"
      >
        Previous
      </Button>
      <span className="text-lg font-medium">
        Slide {currentSlideIndex + 1} of {totalSlides}
      </span>
      <Button
        onClick={onNext}
        disabled={currentSlideIndex === totalSlides - 1}
        variant="outline"
        className="text-white border-white hover:bg-blue-600 hover:text-white bg-transparent"
      >
        Next
      </Button>
    </div>
  )
}
