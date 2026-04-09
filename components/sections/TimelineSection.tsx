"use client";

import { moodboardData } from "@/lib/data";
import AnimateOnScroll from "../AnimateOnScroll";

export default function TimelineSection() {
  const { timeline } = moodboardData;

  return (
    <section className="py-24 bg-taupe-800 text-taupe-50">
      <div className="section-container">
        <div className="mb-20 text-center">
          <AnimateOnScroll>
            <p className="font-display text-4xl md:text-5xl mb-4 text-white text-center">
              Schedule of the Day
            </p>
            <div className="h-[1px] w-24 bg-purple-400 mx-auto opacity-50" />
          </AnimateOnScroll>
        </div>

        <div className="max-w-3xl mx-auto relative px-4">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-taupe-600/50" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-purple-400 z-10 shadow-[0_0_10px_#9370D8]" />

                <div className={`
                  flex flex-col md:flex-row items-start md:items-center gap-8
                  ${index % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}
                `}>
                  {/* Time */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <AnimateOnScroll x={index % 2 === 0 ? 30 : -30} delay={index * 0.1}>
                      <span className="font-display text-3xl text-purple-200 block md:inline-block">
                        {item.time}
                      </span>
                    </AnimateOnScroll>
                  </div>

                  {/* Event Details */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <AnimateOnScroll x={index % 2 === 0 ? -30 : 30} delay={index * 0.1}>
                      <p className="font-display text-2xl mb-1 text-taupe-50 flex items-center gap-2 md:justify-end">
                        {item.event}
                      </p>
                    </AnimateOnScroll>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
