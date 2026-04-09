import { moodboardData } from "@/lib/data";
import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

export default function HeroSection() {
  const { couple } = moodboardData;



  return (
    <section className="relative min-h-screen bg-taupe-50 flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-50/50 -z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Typography focus */}
        <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <AnimateOnScroll duration={1} y={20}>
            <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
              <span className="text-taupe-400 font-body text-xs md:text-sm uppercase tracking-[0.5em] font-medium border-b border-taupe-200 pb-2">
                A Celebration of Love
              </span>
              <p className="font-body text-taupe-600 text-sm md:text-base tracking-[0.2em] font-light">
                {couple.date} • {couple.theme}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} duration={1.2} y={30}>
            <div className="relative mb-8 md:mb-12">
              <h1 className="font-display text-7xl md:text-9xl xl:text-[11rem] text-taupe-800 leading-[0.8] tracking-tighter flex flex-col xl:flex-row xl:items-baseline xl:gap-8">
                <span>{couple.name1}</span>
                <span className="italic text-purple-400 font-light text-5xl md:text-7xl xl:text-9xl -my-4 xl:my-0">
                  &
                </span>
                <span className="xl:-ml-4">{couple.name2}</span>
              </h1>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4} duration={1} y={20}>
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-8">
              <div className="hidden md:block w-24 h-[1px] bg-taupe-300 self-center" />
              <p className="font-display italic text-2xl md:text-4xl text-taupe-500 max-w-lg leading-relaxed font-light">
                &ldquo;{couple.tagline}&rdquo;
              </p>
            </div>
          </AnimateOnScroll>
        </div>


      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[9px] uppercase tracking-[0.5em] text-taupe-400 font-bold whitespace-nowrap">
          Scroll Down
        </span>
        <div className="relative w-[1px] h-12 bg-taupe-200 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-purple-400 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
