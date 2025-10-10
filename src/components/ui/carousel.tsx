"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideData {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  button?: string;
  src?: string;
}

interface CarouselProps {
  slides: SlideData[];
  className?: string;
}

export default function Carousel({ slides, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (newIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mx-2">
              <div className="flex flex-col items-center text-center">
                {/* Content Section */}
                <div className="w-full">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    {slides[currentIndex].icon && (
                      <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center">
                        {slides[currentIndex].icon}
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-navy">
                      {slides[currentIndex].title}
                    </h3>
                  </div>
                  
                  {slides[currentIndex].description && (
                    <p className="text-gray text-base leading-relaxed mb-6">
                      {slides[currentIndex].description}
                    </p>
                  )}
                  
                  {slides[currentIndex].button && (
                    <button className="btn-primary">
                      {slides[currentIndex].button}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-navy scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            disabled={isAnimating}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => handleSlideChange((currentIndex - 1 + slides.length) % slides.length)}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => handleSlideChange((currentIndex + 1) % slides.length)}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
