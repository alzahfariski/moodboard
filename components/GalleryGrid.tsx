'use client';

import { Photo } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

interface GalleryGridProps {
  photos: Photo[];
  allPhotos?: Photo[]; // Optional: if we want the lightbox to show all photos regardless of category
}

export default function GalleryGrid({ photos, allPhotos }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedIndex(null);

  return (
    <>
      <div className="columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
        {photos.map((photo, index) => {
          const isTall = photo.span === "tall";
          const isWide = photo.span === "wide";
          
          return (
            <AnimateOnScroll
              key={photo.src}
              delay={index * 0.05}
              y={20}
              className="break-inside-avoid"
            >
              <motion.div
                onClick={() => setSelectedIndex(index)}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-700 bg-taupe-50 mb-4 md:mb-8 ${isWide ? 'md:col-span-2' : ''}`}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Use natural aspect ratio or slight constraint to keep it cohesive */}
                <div className="relative w-full">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="w-full h-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-taupe-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-body">
                        {photo.tag}
                      </span>
                      <p className="text-white text-lg font-display italic">
                        {photo.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <Lightbox 
          photos={photos} 
          initialIndex={selectedIndex} 
          onClose={handleClose} 
        />
      )}
    </>
  );
}
