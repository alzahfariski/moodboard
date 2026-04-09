import HeroSection from "@/components/sections/HeroSection";
import PaletteSection from "@/components/sections/PaletteSection";
import GallerySection from "@/components/sections/GallerySection";
import { moodboardData } from "@/lib/data";

export default function Home() {
  const { couple } = moodboardData;
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Palette Section (bg-white) */}
      <div className="bg-white">
        <PaletteSection />
      </div>

      {/* 3. Gallery Section (bg-white) */}
      <div className="bg-white border-y border-taupe-100">
        <GallerySection />
      </div>

      {/* Footer Minimal */}
      <footer className="py-12 text-center bg-taupe-50">
        <div className="section-container">
          <p className="font-body text-sm text-taupe-400 tracking-wide">
            {couple.name1} & {couple.name2} • {currentYear} • Made with love
          </p>
        </div>
      </footer>
    </main>
  );
}
