"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={`
        scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]
        ${className}
      `}
    >
      <ul
        ref={scrollerRef}
        className={`
          flex min-w-full shrink-0 gap-3 py-2 w-max flex-nowrap
          ${start ? "animate-scroll " : ""}
          ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
        `}
      >
        {items.map((item, idx) => (
          <li
            className="w-[320px] max-w-full relative flex-shrink-0 md:w-[400px]"
            key={item.name}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <blockquote className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-navy-dark/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-navy-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <span className="relative z-20 text-base leading-relaxed text-gray-700 font-medium block">
                  {item.quote}
                </span>
                
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-dark to-navy rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {item.name.charAt(0)}
                  </div>
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-navy-dark">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {item.title}
                    </span>
                  </span>
                </div>
                
                {/* Star Rating */}
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
