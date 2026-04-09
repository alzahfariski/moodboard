import { moodboardData } from "@/lib/data";

export default function PaletteSection() {
  const { palette } = moodboardData;

  return (
    <section className="section-container py-16">
      <div className="flex flex-col">
        <h2 className="font-body uppercase tracking-[0.3em] text-[10px] md:text-xs text-taupe-400 mb-6">
          Color Palette
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {palette.map((swatch, index) => (
            <div
              key={swatch.name}
              className="rounded-2xl h-20 md:h-32 flex flex-col justify-end p-3 md:p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ 
                backgroundColor: swatch.hex, 
                color: swatch.textColor,
                boxShadow: index === 5 ? '0 10px 30px -15px rgba(0,0,0,0.1)' : 'none' // subtle shadow for ivory/light colors
              }}
            >
              <span className="font-body font-medium text-[10px] md:text-[11px] lg:text-xs uppercase tracking-wider">
                {swatch.name}
              </span>
              <span className="font-mono text-[9px] md:text-[10px] opacity-70 mt-0.5 uppercase">
                {swatch.hex}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
