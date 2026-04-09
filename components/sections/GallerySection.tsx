"use client";

import { moodboardData } from "@/lib/data";
import GalleryGrid from "../GalleryGrid";
import AnimateOnScroll from "../AnimateOnScroll";
import { useMemo } from "react";

export default function GallerySection() {
  const { photos } = moodboardData;

  // Group photos by category
  const groupedPhotos = useMemo(() => {
    const groups: Record<string, typeof photos> = {};
    photos.forEach(photo => {
      if (!groups[photo.category]) {
        groups[photo.category] = [];
      }
      groups[photo.category].push(photo);
    });
    return groups;
  }, [photos]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="mb-24">
          <AnimateOnScroll>
            <h2 className="font-display text-5xl md:text-7xl text-taupe-800 mb-6">
              Visual Archives
            </h2>
            <p className="font-body text-taupe-400 text-sm md:text-base tracking-[0.3em] uppercase max-w-2xl">
              An curated collection of moments, details, and the essence of our journey.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="space-y-32">
          {Object.entries(groupedPhotos).map(([category, categoryPhotos], catIndex) => (
            <div key={category} className="group/section">
              <div className="flex items-center gap-8 mb-12">
                <AnimateOnScroll delay={0.1} x={-20} className="flex-none">
                  <h3 className="font-display text-3xl md:text-4xl text-taupe-700 italic">
                    {category}
                  </h3>
                </AnimateOnScroll>
                <div className="h-[1px] flex-grow bg-taupe-100 group-hover/section:bg-purple-200 transition-colors duration-700" />
                <AnimateOnScroll delay={0.2} x={20} className="flex-none">
                  <span className="font-body text-[10px] md:text-xs text-taupe-300 tracking-widest uppercase">
                    {categoryPhotos.length} {categoryPhotos.length === 1 ? 'Shot' : 'Shots'}
                  </span>
                </AnimateOnScroll>
              </div>

              {/* Smaller grids within each category section */}
              <GalleryGrid photos={categoryPhotos} allPhotos={photos} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
