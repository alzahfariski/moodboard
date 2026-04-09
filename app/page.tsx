import HeroSection from "@/components/sections/HeroSection";
import PaletteSection from "@/components/sections/PaletteSection";
import GallerySection from "@/components/sections/GallerySection";
import MoodSection from "@/components/sections/MoodSection";
import VendorSection from "@/components/sections/VendorSection";
import TimelineSection from "@/components/sections/TimelineSection";
import { moodboardData } from "@/lib/data";

export default function Home() {
  const { couple } = moodboardData;
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen selection:bg-purple-200 selection:text-purple-900">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Palette Section */}
      <PaletteSection />

      {/* 3. Mood Tags Section */}
      <MoodSection />

      {/* 4. Gallery Section */}
      <GallerySection />

      {/* 5. Vendor Collabs */}
      <VendorSection />

      {/* 6. Timeline of the day */}
      <TimelineSection />

      {/* Footer Minimal */}
      <footer className="py-20 text-center bg-taupe-800 border-t border-taupe-700/50">
        <div className="section-container">
          <div className="space-y-6">
            <p className="font-display text-4xl text-taupe-100">
              {couple.name1} <span className="text-purple-400">&</span> {couple.name2}
            </p>
            <div className="h-[1px] w-12 bg-purple-400 mx-auto opacity-30" />
            <p className="font-body text-[10px] md:text-sm text-taupe-400 tracking-[0.2em] uppercase">
              {couple.date} • Created with Love • {currentYear}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
