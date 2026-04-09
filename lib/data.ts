import { MoodboardData } from "@/types";

export const moodboardData: MoodboardData = {
  couple: {
    name1: "Alzah",
    name2: "Effri",
    date: "20 Mei 2026",
    theme: "Sacred Garden",
    tagline: "A quiet evening, a forever promise.",
  },
  palette: [
    { name: "Amethyst", hex: "#9370D8", textColor: "#EDE2F8" },
    { name: "Soft Lilac", hex: "#C4B3EE", textColor: "#3D2580" },
    { name: "Oat", hex: "#E8E2DA", textColor: "#7D6B58" },
    { name: "Taupe", hex: "#A89880", textColor: "#F5F2EE" },
    { name: "Deep Earth", hex: "#4A3D30", textColor: "#D2C8BC" },
    { name: "Ivory", hex: "#FAFAF8", textColor: "#A89880" },
  ],
  moods: [
    "Intimate",
    "Botanical",
    "Romantic",
    "Timeless",
    "Minimal Elegant",
    "Soft Luxury",
    "Candlelit",
  ],
  photos: [
    {
      src: "https://picsum.photos/seed/couple1/600/900",
      alt: "Hero shot Alzah & Effri",
      tag: "Hero shot",
      span: "tall",
    },
    { src: "https://picsum.photos/seed/couple2/600/400", alt: "Wedding details", tag: "Detail" },
    { src: "https://picsum.photos/seed/couple3/600/400", alt: "Golden hour session", tag: "Golden hour" },
    { src: "https://picsum.photos/seed/couple4/600/400", alt: "Candid movement", tag: "Candid" },
    { src: "https://picsum.photos/seed/couple5/600/400", alt: "Engagement ring close up", tag: "Ring close-up" },
  ],
  vendors: [
    { name: "Lumina Photo", category: "Fotografer", status: "confirmed" },
    { name: "Bloom & Co", category: "Dekorasi", status: "confirmed" },
    { name: "Le Jardin", category: "Catering", status: "pending" },
    { name: "Velvet Sound", category: "Musik", status: "pending" },
  ],
  timeline: [
    { time: "15.00", event: "Arrival & Welcome", location: "Cocktail garden" },
    { time: "16.00", event: "Photo Session", location: "Outdoor golden hour" },
    { time: "17.30", event: "Ring Ceremony", location: "Garden pavilion" },
    { time: "19.00", event: "Dinner & Music", location: "Live acoustic set" },
  ],
};
