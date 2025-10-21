"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-8 font-sans antialiased md:px-8">
      <div className="relative text-center">
        <motion.div
          key={active}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-navy-dark/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-navy-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>

          <motion.p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
            {testimonials[active].quote.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>

          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-dark to-navy rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
              {testimonials[active].name.charAt(0)}
            </div>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-navy-dark">
                {testimonials[active].name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {testimonials[active].designation}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-navy-dark/10 hover:bg-navy-dark/20 transition-colors"
            >
              <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-navy-dark transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === active ? 'bg-navy-dark' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-navy-dark/10 hover:bg-navy-dark/20 transition-colors"
            >
              <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-navy-dark transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
