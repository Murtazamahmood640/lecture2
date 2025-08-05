{
  ;`"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { lectureSlides, Slide } from "@/lib/slides";
import { TitleSlide } from "@/components/slide-types/title-slide";
import { ContentSlide } from "@/components/slide-types/content-slide";
import { ComparisonSlide } from "@/components/slide-types/comparison-slide";
import { DemoSlide } from "@/components/slide-types/demo-slide";
import { StructureSlide } from "@/components/slide-types/structure-slide";

export function PresentationViewer() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, lectureSlides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const renderSlide = (slide: Slide) => {
    switch (slide.type) {
      case "title":
        return (
          <TitleSlide
            title={slide.title}
            subtitle={slide.content.subtitle}
            description={slide.content.description}
          />
        );
      case "content":
        return (
          <ContentSlide
            title={slide.title}
            points={slide.content.points}
            analogy={slide.content.analogy}
            code={slide.content.code}
            example={slide.content.example}
          />
        );
      case "comparison":
        return (
          <ComparisonSlide
            title={slide.title}
            left={slide.content.left}
            right={slide.content.right}
          />
        );
      case "demo":
        return (
          <DemoSlide
            title={slide.title}
            steps={slide.content.steps}
            code={slide.content.code}
            components={slide.content.components}
          />
        );
      case "structure":
        return (
          <StructureSlide
            title={slide.title}
            parts={slide.content.parts}
          />
        );
      default:
        return (
          <div className="flex items-center justify-center h-full text-xl text-gray-500">
            {'Slide type not found.'}
          </div>
        );
    }
  };

  const currentSlide = lectureSlides[currentSlideIndex];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[600px] rounded-lg shadow-xl overflow-hidden">
          {renderSlide(currentSlide)}
        </div>
      </main>
      <footer className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
        <Button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          variant="outline"
          className="text-white border-white hover:bg-blue-600 hover:text-white disabled:opacity-50 bg-transparent"
        >
          Previous
        </Button>
        <span className="text-lg font-medium">
          {'Slide '}{currentSlideIndex + 1}{' of '}{lectureSlides.length}
        </span>
        <Button
          onClick={nextSlide}
          disabled={currentSlideIndex === lectureSlides.length - 1}
          variant="outline"
          className="text-white border-white hover:bg-blue-600 hover:text-white disabled:opacity-50 bg-transparent"
        >
          Next
        </Button>
      </footer>
    </div>
  );
}`
}
