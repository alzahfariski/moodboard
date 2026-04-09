import { moodboardData } from "@/lib/data";
import GalleryGrid from "../GalleryGrid";

export default function GallerySection() {
  const { photos } = moodboardData;

  return (
    <section className="section-container py-16">
      <div className="flex flex-col">
        <h2 className="font-body uppercase tracking-[0.3em] text-[10px] md:text-xs text-taupe-400 mb-8">
          Photo Gallery
        </h2>

        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}
