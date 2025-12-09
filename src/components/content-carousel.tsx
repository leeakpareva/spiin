"use client";

import ContentCard, { ContentCardProps } from "./content-card";
import { useRef } from "react";

type Props = {
  items: ContentCardProps[];
  title?: string;
};

export default function ContentCarousel({ items, title }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === "left" 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative">
      {title && (
        <h3 className="mb-3 text-sm font-semibold text-white/80">{title}</h3>
      )}
      
      <div className="group relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-brand-800/90 p-2 text-white/70 backdrop-blur-sm transition-opacity hover:text-white group-hover:block md:block"
          aria-label="Scroll left"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-brand-800/90 p-2 text-white/70 backdrop-blur-sm transition-opacity hover:text-white group-hover:block md:block"
          aria-label="Scroll right"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel container */}
        <div 
          ref={scrollRef}
          className="-mx-4 overflow-x-auto scrollbar-hide pb-2"
        >
          <div className="flex gap-4 px-4">
            {items.map((item) => (
              <ContentCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}