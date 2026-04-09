"use client";

import { moodboardData } from "@/lib/data";
import AnimateOnScroll from "../AnimateOnScroll";

export default function MoodSection() {
  const { moods } = moodboardData;

  return (
    <section className="py-24 bg-taupe-50/50">
      <div className="section-container text-center">
        <AnimateOnScroll>
          <h2 className="font-body uppercase tracking-[0.4em] text-[10px] md:text-xs text-taupe-400 mb-12">
            The Mood & Feel
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {moods.map((mood, index) => (
            <AnimateOnScroll
              key={mood}
              delay={index * 0.1}
              scale={0.8}
              y={20}
            >
              <div 
                className={`
                  px-8 py-4 rounded-full font-display text-lg md:text-2xl transition-all duration-500 cursor-default hover:scale-110
                  ${index % 2 === 0 
                    ? "bg-purple-100/50 text-purple-800 border border-purple-200" 
                    : "bg-white text-taupe-800 border border-taupe-100"}
                  shadow-sm hover:shadow-md
                `}
              >
                {mood}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
