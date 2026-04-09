"use client";

import { moodboardData } from "@/lib/data";
import AnimateOnScroll from "../AnimateOnScroll";

export default function PaletteSection() {
  const { palette } = moodboardData;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimateOnScroll className="max-w-md">
            <h2 className="font-display text-4xl md:text-5xl text-taupe-800 mb-4">
              The Essence of Our Day
            </h2>
            <p className="font-body text-taupe-400 text-sm md:text-base leading-relaxed">
              Inspired by the serene tones of a sacred garden, our palette blends deep earth tones with ethereal purples.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.2}>
            <p className="font-body uppercase tracking-[0.3em] text-[10px] text-taupe-400 border-b border-taupe-100 pb-2">
              Color Story
            </p>
          </AnimateOnScroll>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0">
          {palette.map((swatch, index) => (
            <AnimateOnScroll
              key={swatch.name}
              delay={index * 0.1}
              y={50}
              className="flex-1 min-w-[140px]"
            >
              <div
                className="group relative h-48 md:h-[400px] flex flex-col justify-end p-6 overflow-hidden md:first:rounded-l-[40px] md:last:rounded-r-[40px] first:rounded-t-3xl last:rounded-b-3xl md:rounded-none transition-all duration-500 hover:z-10 hover:scale-[1.02]"
                style={{ 
                  backgroundColor: swatch.hex, 
                  color: swatch.textColor,
                }}
              >
                <div className="relative z-10">
                  <span className="block font-body font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-1">
                    {swatch.name}
                  </span>
                  <span className="block font-mono text-[10px] md:text-xs opacity-60 uppercase">
                    {swatch.hex}
                  </span>
                </div>
                
                {/* Decorative number */}
                <span className="absolute top-6 right-6 font-display text-4xl opacity-10 group-hover:opacity-30 transition-opacity">
                  0{index + 1}
                </span>

                {/* Subtle highlight effect on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
