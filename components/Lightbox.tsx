'use client';

import { Photo } from "@/types";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ photos, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setIsAnimating(false);
    }, 150);
  }, [photos.length]);

  const goToPrev = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setIsAnimating(false);
    }, 150);
  }, [photos.length]);

  const goToIndex = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    // Lock scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, goToNext, goToPrev]);

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/40 hover:text-white transition-all duration-300 z-[110] hover:rotate-90"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Image Area */}
      <div className="relative w-full h-full flex items-center justify-center group">
        {/* Navigation Buttons (Desktop) */}
        <button 
          onClick={goToPrev}
          className="absolute left-4 z-10 p-4 text-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Previous photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Container with Transition */}
        <div className={`relative w-full max-w-5xl h-[75vh] md:h-[85vh] transition-opacity duration-300 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          <Image 
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>

        <button 
          onClick={goToNext}
          className="absolute right-4 z-10 p-4 text-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Next photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Metadata and Pagination */}
      <div className="mt-4 md:mt-8 flex flex-col items-center gap-6 z-[110]">
        <div className="text-center space-y-1">
          <p className="text-white font-body text-sm tracking-wide">
            {currentIndex + 1} / {photos.length}
          </p>
          <p className="text-white/60 font-body text-xs italic lowercase">
            #{photos[currentIndex].tag}
          </p>
        </div>
        
        {/* Dots */}
        <div className="flex gap-2.5">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-5 shadow-[0_0_8px_white]" : "bg-white/30 hover:bg-white/50"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Swipe Simulation / Taps */}
      <div className="absolute inset-y-0 left-0 w-1/4 md:hidden z-20" onClick={goToPrev} />
      <div className="absolute inset-y-0 right-0 w-1/4 md:hidden z-20" onClick={goToNext} />
    </div>
  );
}
