# Engagement Moodboard

Website *moodboard* statis yang dirancang secara profesional untuk perencanaan acara pertunangan (*engagement*). Dibangun dengan estetika modern, minimalis, dan premium menggunakan perpaduan palet warna **Purple & Taupe**.

---

## ✨ Fitur Utama

-   **Hero Section**: Tampilan utama yang elegan dengan nama pasangan, tanggal, dan tema acara.
-   **Color Palette**: Visualisasi palet warna tema (Amethyst, Lilac, Taupe, dll) untuk referensi vendor.
-   **Mood Tags**: Kurasi kata-kata kunci yang mendefinisikan suasana acara (*Intimate, Botanical, Romantic*).
-   **Asymmetric Gallery**: Galeri foto dengan tata letak modern yang menampilkan momen-momen indah pasangan.
-   **Vendor Management**: Daftar vendor yang terlibat beserta status konfirmasinya.
-   **Event Timeline**: Rincian jadwal acara mulai dari kedatangan hingga selesai.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi *modern web development* untuk memastikan performa dan kualitas visual terbaik:

-   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
-   **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animasi**: [Framer Motion](https://www.framer.com/motion/)
-   **Typography**: Cormorant Garamond (Display) & Plus Jakarta Sans (Body) via `next/font`.

## 📂 Struktur Proyek

```text
├── app/              # Root layout dan halaman utama
├── components/       # Komponen UI dan bagian-bagian website
│   ├── sections/     # Section per module (Hero, Gallery, dll)
│   └── ui/           # Atomic components (Card, Badge, Item)
├── lib/              # Data statis dan fungsi pembantu
├── types/            # Definisi tipe data TypeScript
├── public/           # Asset statis (foto, ikon)
└── tailwind.config.ts # Kustomisasi desain token
```

## 🚀 Cara Memulai

### 1. Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas) di sistem Anda.

### 2. Instalasi
Kloning repositori ini (atau salin folder proyek) dan jalankan perintah berikut:

```bash
npm install
```

### 3. Jalankan Server Pengembangan
Jalankan aplikasi di lingkungan lokal Anda:

```bash
npm run dev
```
Aplikasi akan tersedia di [http://localhost:3000](http://localhost:3000).

## ✍️ Kustomisasi Data

Semua data di website ini bersifat statis untuk memudahkan pemeliharaan tanpa *backend*. Anda dapat memperbarui informasi pasangan, vendor, foto, dan jadwal di file:

`lib/data.ts`

Pastikan untuk memperbarui asset foto di folder `public/photos/` dan menyesuaikan *slug* di dalam file data tersebut.

---

**Engagement Moodboard** — *Created for a sacred evening, a forever promise.*
