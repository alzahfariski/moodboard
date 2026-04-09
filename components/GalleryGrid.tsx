'use client';

import { Photo } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  photos: Photo[];
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedIndex(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-3 md:gap-4 h-[900px] md:h-[600px]">
        {photos.slice(0, 5).map((photo, index) => {
          const isTall = photo.span === "tall";
          const placeholderClass = index % 2 === 0 ? "bg-taupe-100" : "bg-purple-200";

          const gridClass = isTall 
            ? "col-span-2 md:col-span-1 row-span-2 border border-taupe-100/50" 
            : "col-span-1 row-span-1 border border-taupe-100/50";

          return (
            <div
              key={photo.src}
              onClick={() => setSelectedIndex(index)}
              className={`
                relative rounded-2xl overflow-hidden group cursor-pointer
                ${gridClass}
                ${placeholderClass}
                transition-all duration-500
              `}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-taupe-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-4 left-4 inline-flex items-center">
                <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold text-taupe-800 shadow-sm tracking-wide transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {photo.tag}
                </span>
              </div>
            </div>
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
