# agents.md — Engagement Moodboard Website (Next.js)

## Project Overview

Website moodboard statis untuk engagement pasangan/couple.
Style: modern clean, minimal, tidak ramai, terasa premium namun hangat.
Color palette: Purple & Taupe.
Data: statis dari file lokal (`lib/data.ts`) — tidak ada backend, tidak ada API eksternal.
Framework: **Next.js 14+ dengan App Router + TypeScript + Tailwind CSS**.

---

## Agent Role & Behavior

Kamu adalah **Frontend Developer Agent** yang membangun website moodboard engagement menggunakan Next.js.
Semua data bersifat statis — tidak ada `use client` kecuali untuk komponen interaktif (lightbox, toggle).
Gunakan Server Components sebagai default.

### Prinsip Utama

1. **Static First** — data diambil dari file lokal `lib/data.ts`. Tidak ada `fetch` atau database.
2. **App Router** — semua halaman di dalam `app/` directory. Gunakan `layout.tsx` untuk global wrapper.
3. **TypeScript** — semua file `.tsx` / `.ts`. Definisikan types di `types/index.ts`.
4. **Tailwind CSS** — styling utama pakai Tailwind. Custom token di `tailwind.config.ts`.
5. **Mobile-first** — breakpoint `sm:` → `md:` → `lg:`.
6. **No heavy deps** — hindari library yang tidak perlu. Framer Motion boleh untuk animasi ringan.
7. **Font via next/font** — gunakan `next/font/google` untuk Cormorant Garamond + Plus Jakarta Sans.

---

## Struktur File Project

```
engagement-moodboard/
├── app/
│   ├── layout.tsx              ← root layout (font, metadata)
│   ├── page.tsx                ← halaman utama (semua sections)
│   └── globals.css             ← design tokens + base styles
├── components/
│   ├── ui/
│   │   ├── ColorSwatch.tsx
│   │   ├── MoodTag.tsx
│   │   ├── VendorCard.tsx
│   │   └── TimelineItem.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── PaletteSection.tsx
│   │   ├── MoodSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── VendorSection.tsx
│   │   └── TimelineSection.tsx
│   └── Lightbox.tsx            ← 'use client' — interaktif
├── lib/
│   └── data.ts                 ← semua data statis (typed)
├── types/
│   └── index.ts                ← TypeScript interfaces
├── public/
│   └── photos/                 ← foto pasangan
├── tailwind.config.ts
└── next.config.ts
```

---

## Types (`types/index.ts`)

```typescript
export interface CoupleInfo {
  name1: string;
  name2: string;
  date: string;
  theme: string;
  tagline: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  textColor: string;
}

export interface Photo {
  src: string;
  alt: string;
  tag: string;
  span?: "normal" | "tall" | "wide";
}

export interface Vendor {
  name: string;
  category: string;
  status: "confirmed" | "pending";
  contact?: string;
}

export interface TimelineEvent {
  time: string;
  event: string;
  location: string;
  note?: string;
}

export interface MoodboardData {
  couple: CoupleInfo;
  palette: ColorSwatch[];
  moods: string[];
  photos: Photo[];
  vendors: Vendor[];
  timeline: TimelineEvent[];
}
```

---

## Data (`lib/data.ts`)

```typescript
import { MoodboardData } from "@/types";

export const moodboardData: MoodboardData = {
  couple: {
    name1: "Nama Pasangan 1",
    name2: "Nama Pasangan 2",
    date: "12 Oktober 2025",
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
      src: "/photos/hero.jpg",
      alt: "Foto hero pasangan",
      tag: "Hero shot",
      span: "tall",
    },
    { src: "/photos/detail.jpg", alt: "Detail cincin", tag: "Detail" },
    { src: "/photos/golden.jpg", alt: "Golden hour", tag: "Golden hour" },
    { src: "/photos/candid.jpg", alt: "Momen candid", tag: "Candid" },
    { src: "/photos/ring.jpg", alt: "Close up cincin", tag: "Ring close-up" },
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
```

---

## Tailwind Config (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F4F0FB",
          200: "#C4B3EE",
          400: "#9370D8",
          600: "#6A45B0",
          800: "#3D2580",
        },
        taupe: {
          50: "#F5F2EE",
          100: "#E8E2DA",
          200: "#D2C8BC",
          400: "#A89880",
          600: "#7D6B58",
          800: "#4A3D30",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
```

---

## Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Engagement Moodboard",
  description: "Sacred Garden Engagement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${display.variable} ${body.variable} font-body bg-taupe-50`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

## Aturan Server vs Client Components

| Komponen                               | Directive          | Alasan                                      |
| -------------------------------------- | ------------------ | ------------------------------------------- |
| `HeroSection`, `PaletteSection`, dll   | — (Server default) | Render statis, tidak ada state              |
| `ColorSwatch`, `MoodTag`, `VendorCard` | — (Server default) | Pure UI, tidak ada event                    |
| `Lightbox.tsx`                         | `'use client'`     | `useState` untuk open/close, keyboard event |
| `StickyNav.tsx` (jika ada)             | `'use client'`     | `useEffect` untuk scroll position           |

---

## Sections yang Wajib Ada

### 1. HeroSection

- Nama pasangan: `font-display` besar, clamp antara `text-5xl` hingga `text-8xl`
- Tanggal + tema dengan `font-body text-taupe-600`
- Tagline italic dengan `font-display`
- Background: `bg-taupe-50` atau `bg-purple-50`

### 2. PaletteSection

- Grid 6 `ColorSwatch` — tampilkan nama dan hex
- Swatch menggunakan `style={{ backgroundColor: hex, color: textColor }}`

### 3. MoodSection

- Flex wrap dari `moods[]`
- Alternating styling: `bg-purple-50 text-purple-800` dan `bg-taupe-100 text-taupe-800`

### 4. GallerySection

- CSS Grid asimetris via Tailwind `grid-cols-3` + `row-span-2` untuk foto hero
- Klik gambar → trigger `<Lightbox>` (client component)
- Gunakan `next/image` (`<Image>`) untuk semua foto
- Placeholder: `bg-taupe-100` atau `bg-purple-200` saat foto belum ada

### 5. VendorSection

- Card per vendor dengan status badge
- `confirmed`: `bg-green-50 text-green-700`
- `pending`: `bg-purple-50 text-purple-700`

### 6. TimelineSection

- List vertikal dengan connector line `border-l-2 border-purple-200`
- Dot `w-3 h-3 rounded-full bg-purple-400`
- Waktu pakai `font-display text-purple-600`

---

## Yang TIDAK Boleh Dilakukan

- ❌ Jangan gunakan `pages/` directory — hanya App Router
- ❌ Jangan `'use client'` di level section/page
- ❌ Jangan fetch API eksternal
- ❌ Jangan hardcode hex warna langsung di JSX — selalu pakai Tailwind class
- ❌ Jangan pakai lebih dari 2 font family
- ❌ Jangan gunakan `<img>` biasa — selalu `next/image`

---

## Output yang Diharapkan per Sesi

1. File komponen `.tsx` lengkap, siap copy-paste ke project
2. Import types dari `@/types`
3. Import data dari `@/lib/data`
4. Semua Tailwind class menggunakan token dari `tailwind.config.ts`
5. Instruksi `npm install` jika ada dependency baru

---

_File ini dibuat untuk mengarahkan MCP agent agar konsisten membangun website engagement moodboard dengan Next.js 14 App Router._
