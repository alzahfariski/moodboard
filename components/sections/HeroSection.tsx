import { moodboardData } from "@/lib/data";

export default function HeroSection() {
  const { couple } = moodboardData;

  return (
    <section className="bg-taupe-50 min-h-[60vh] flex flex-col items-center justify-center text-center py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Date & Theme */}
        <div className="space-y-4">
          <p className="font-body text-taupe-400 text-xs md:text-sm tracking-[0.3em] uppercase">
            {couple.date} • {couple.theme}
          </p>
          
          {/* Couple Names */}
          <h1 className="font-display text-6xl md:text-8xl text-taupe-800 leading-[1.1] md:leading-[1.1]">
            {couple.name1} 
            <span className="block md:inline md:mx-4 text-purple-200 font-light">&</span> 
            {couple.name2}
          </h1>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-[60px] bg-taupe-200 mx-auto" />

        {/* Tagline */}
        <p className="font-display italic text-xl md:text-3xl text-purple-600 max-w-xl mx-auto leading-relaxed">
          &ldquo;{couple.tagline}&rdquo;
        </p>
      </div>
    </section>
  );
}
