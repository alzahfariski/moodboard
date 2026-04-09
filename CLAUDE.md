@AGENTS.md

# claude.md — Panduan Prompting & Konteks Project (Next.js)

## Deskripsi Project

**Nama Project:** Engagement Moodboard Website
**Framework:** Next.js 14+ — App Router + TypeScript + Tailwind CSS
**Untuk:** Pasangan / Couple (personal)
**Data:** Statis dari `lib/data.ts` — tidak ada backend atau API
**Tone Desain:** Modern clean, minimal, premium hangat
**Palette:** Purple (#9370D8) + Taupe (#A89880)
**Font:** Cormorant Garamond (display) + Plus Jakarta Sans (body)

---

## Cara Menggunakan File Ini

Paste isi file ini di awal sesi Claude baru.
Claude akan langsung tahu stack, struktur, dan conventions project tanpa perlu dijelaskan ulang.

---

## System Prompt yang Direkomendasikan

```
Kamu adalah senior frontend developer yang membangun website moodboard engagement
menggunakan Next.js 14 App Router, TypeScript, dan Tailwind CSS.

Aturan project:
- Semua data statis dari lib/data.ts (tipe dari types/index.ts)
- Server Components sebagai default — 'use client' hanya untuk Lightbox dan komponen interaktif
- Tailwind class selalu mengacu pada token di tailwind.config.ts (warna purple & taupe custom)
- Font via next/font/google: Cormorant Garamond (display) + Plus Jakarta Sans (body)
- Gambar wajib pakai next/image, bukan <img>
- Tidak ada fetch API eksternal

Style: modern clean, minimal, tidak ramai. Warna utama purple-400 (#9370D8) dan taupe-400 (#A89880).
```

---

## Prompt Templates per Task

### Membuat Section Baru

```
Buatkan komponen Next.js untuk section [NAMA SECTION].
File: components/sections/[NamaSection].tsx
Gunakan data dari moodboardData di lib/data.ts.
Tipe dari types/index.ts.
Styling: Tailwind dengan token purple & taupe dari tailwind.config.ts.
Ini Server Component — tidak perlu 'use client'.
```

### Membuat UI Component Kecil

```
Buatkan komponen UI reusable: [NAMA KOMPONEN].
File: components/ui/[NamaKomponen].tsx
Props: [sebutkan props dan tipenya]
Styling: Tailwind. Tidak ada inline style kecuali untuk nilai dinamis (misal: warna hex dari data).
```

### Membuat Client Component Interaktif

```
Buatkan [NAMA KOMPONEN] sebagai client component Next.js.
'use client' di baris pertama.
Fungsi: [jelaskan behavior — misal: lightbox, accordion, sticky nav]
State management: useState saja, tidak perlu library external.
Keyboard accessible: ESC untuk close, arrow key untuk navigasi jika relevan.
```

### Update Data

```
Update lib/data.ts — tambahkan [JENIS DATA]:
[isi data yang ingin ditambah]
Pastikan TypeScript types di types/index.ts ikut diupdate jika ada field baru.
```

### Membuat Page Utama

```
Buatkan app/page.tsx yang menyusun semua sections.
Import semua section components dari components/sections/.
Tambahkan metadata dengan next/metadata API.
Layout: single column, section gap konsisten (py-16 md:py-24).
```

### Fix / Refactor Komponen

```
Berikut komponen yang perlu diperbaiki:
[paste kode]

Masalah: [jelaskan masalah]
Perbaiki dengan tetap mengikuti:
- Convention naming project (camelCase untuk variable, PascalCase untuk komponen)
- Tidak mengubah Tailwind token yang sudah ada
- Tidak menambah 'use client' kecuali memang dibutuhkan
```

### Deployment / Config

```
Buatkan [next.config.ts / .env.example / vercel.json] untuk project ini.
Project ini fully static — tidak ada server-side runtime yang dibutuhkan.
Foto ada di public/photos/.
```

---

## Referensi Cepat

### Tailwind Color Tokens

| Class                               | Hex     | Penggunaan                     |
| ----------------------------------- | ------- | ------------------------------ |
| `bg-purple-400` / `text-purple-400` | #9370D8 | Aksen utama, dot, CTA          |
| `bg-purple-200` / `text-purple-200` | #C4B3EE | Border, badge bg               |
| `bg-purple-50` / `text-purple-50`   | #F4F0FB | Background card subtle         |
| `text-purple-800`                   | #3D2580 | Teks di atas bg ungu muda      |
| `bg-taupe-400` / `text-taupe-400`   | #A89880 | Teks sekunder, ikon            |
| `bg-taupe-200` / `text-taupe-200`   | #D2C8BC | Border, divider                |
| `bg-taupe-100`                      | #E8E2DA | Background section alternating |
| `bg-taupe-50`                       | #F5F2EE | Background halaman utama       |
| `text-taupe-800`                    | #4A3D30 | Teks gelap body                |

### Font Classes (Tailwind)

| Class          | Font               | Penggunaan                                   |
| -------------- | ------------------ | -------------------------------------------- |
| `font-display` | Cormorant Garamond | Nama pasangan, heading besar, waktu timeline |
| `font-body`    | Plus Jakarta Sans  | Body text, label, badge, nav                 |

### Struktur Import Standar

```tsx
// Data & Types
import { moodboardData } from "@/lib/data";
import type { Vendor, TimelineEvent } from "@/types";

// Next.js
import Image from "next/image";
import type { Metadata } from "next";
```

---

## Progress Sections

| Section       | File                                      | Status   |
| ------------- | ----------------------------------------- | -------- |
| Hero          | `components/sections/HeroSection.tsx`     | ⬜ Belum |
| Color Palette | `components/sections/PaletteSection.tsx`  | ⬜ Belum |
| Mood Tags     | `components/sections/MoodSection.tsx`     | ⬜ Belum |
| Photo Gallery | `components/sections/GallerySection.tsx`  | ⬜ Belum |
| Vendor List   | `components/sections/VendorSection.tsx`   | ⬜ Belum |
| Timeline      | `components/sections/TimelineSection.tsx` | ⬜ Belum |
| Lightbox      | `components/Lightbox.tsx`                 | ⬜ Belum |
| Root Layout   | `app/layout.tsx`                          | ⬜ Belum |
| Page          | `app/page.tsx`                            | ⬜ Belum |

_Update ✅ setelah selesai._

---

## Prompt Pembuka Sesi yang Disarankan

```
Saya sedang mengerjakan website moodboard engagement dengan Next.js 14 App Router.
Konteks lengkap: claude.md sudah saya baca.
Sesi ini saya ingin mengerjakan: [TULIS TUGAS SPESIFIK — misal: "GallerySection dengan lightbox"].
Output: file .tsx siap pakai, lengkap dengan import dan types.
```

---

## Setup Awal Project (Jika Belum)

```bash
npx create-next-app@latest engagement-moodboard \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=no \
  --import-alias="@/*"

cd engagement-moodboard

# Font tambahan tidak perlu npm install — pakai next/font/google
# Jika pakai Framer Motion:
npm install framer-motion
```

---

_File ini harus diperbarui setiap ada keputusan arsitektur atau design baru._
_Terakhir diperbarui: 9 April 2026_
