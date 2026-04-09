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
    // Couple Full Body (2 photos)
    {
      src: "/photos/couple_full_body/1.png",
      alt: "Alzah & Effri - Full Body Portrait",
      tag: "Main Portrait",
      category: "Couple Full Body",
      span: "tall",
    },
    {
      src: "/photos/couple_full_body/2.png",
      alt: "Alzah & Effri - Full Body II",
      tag: "Main Portrait",
      category: "Couple Full Body",
      span: "tall",
    },

    // Couple Half Body (8 photos)
    {
      src: "/photos/couple_half_body/1.png",
      alt: "Alzah & Effri - Intimate Connection",
      tag: "Half Body",
      category: "Couple Half Body",
      span: "tall",
    },
    {
      src: "/photos/couple_half_body/2.png",
      alt: "Shared Laughter",
      tag: "Candid",
      category: "Couple Half Body",
    },
    {
      src: "/photos/couple_half_body/3.png",
      alt: "The Look of Love",
      tag: "Connection",
      category: "Couple Half Body",
    },
    {
      src: "/photos/couple_half_body/4.png",
      alt: "Gentle Embrace",
      tag: "Romance",
      category: "Couple Half Body",
      span: "wide",
    },
    {
      src: "/photos/couple_half_body/5.png",
      alt: "Strolling Together",
      tag: "Lifestyle",
      category: "Couple Half Body",
    },
    {
      src: "/photos/couple_half_body/6.png",
      alt: "Whispered Secrets",
      tag: "Intimate",
      category: "Couple Half Body",
    },
    {
      src: "/photos/couple_half_body/7.png",
      alt: "Hand in Hand",
      tag: "Details",
      category: "Couple Half Body",
    },
    {
      src: "/photos/couple_half_body/8.png",
      alt: "Timeless Bond",
      tag: "Portrait",
      category: "Couple Half Body",
    },

    // Couple Blur (6 photos)
    {
      src: "/photos/couple_blur/1.png",
      alt: "Cinematic Motion",
      tag: "Atmospheric",
      category: "Couple Blur",
      span: "wide",
    },
    {
      src: "/photos/couple_blur/2.png",
      alt: "Ephemeral Beauty",
      tag: "Artistic",
      category: "Couple Blur",
    },
    {
      src: "/photos/couple_blur/3.png",
      alt: "Soft Focus Romance",
      tag: "Mood",
      category: "Couple Blur",
    },
    {
      src: "/photos/couple_blur/4.png",
      alt: "The Blur of Life",
      tag: "Cinematic",
      category: "Couple Blur",
    },
    {
      src: "/photos/couple_blur/5.png",
      alt: "Art in Motion",
      tag: "Fragment",
      category: "Couple Blur",
      span: "wide",
    },
    {
      src: "/photos/couple_blur/6.png",
      alt: "Hazy Memories",
      tag: "Dreamy",
      category: "Couple Blur",
    },

    // Personal Shoot Girl (8 photos)
    {
      src: "/photos/personal_shoot_girl/1.png",
      alt: "Effri - Radiance",
      tag: "The Bride",
      category: "Personal Shoot Girl",
      span: "tall",
    },
    {
      src: "/photos/personal_shoot_girl/2.png",
      alt: "Effri - Serenity",
      tag: "The Bride",
      category: "Personal Shoot Girl",
    },
    {
      src: "/photos/personal_shoot_girl/3.png",
      alt: "Elegant Details",
      tag: "Details",
      category: "Personal Shoot Girl",
    },
    {
      src: "/photos/personal_shoot_girl/4.png",
      alt: "Effri - Grace",
      tag: "Portrait",
      category: "Personal Shoot Girl",
      span: "tall",
    },
    {
      src: "/photos/personal_shoot_girl/5.png",
      alt: "Gentle Spirit",
      tag: "The Bride",
      category: "Personal Shoot Girl",
    },
    {
      src: "/photos/personal_shoot_girl/6.png",
      alt: "Refined Aura",
      tag: "Portrait",
      category: "Personal Shoot Girl",
    },
    {
      src: "/photos/personal_shoot_girl/7.png",
      alt: "Effri - Look",
      tag: "Gaze",
      category: "Personal Shoot Girl",
    },
    {
      src: "/photos/personal_shoot_girl/8.png",
      alt: "Beauty in Simplicity",
      tag: "The Bride",
      category: "Personal Shoot Girl",
    },

    // Personal Shoot Boy (4 photos)
    {
      src: "/photos/personal_shoot_boy/1.png",
      alt: "Alzah - Strength",
      tag: "The Groom",
      category: "Personal Shoot Boy",
      span: "tall",
    },
    {
      src: "/photos/personal_shoot_boy/2.png",
      alt: "Alzah - Calm",
      tag: "The Groom",
      category: "Personal Shoot Boy",
    },
    {
      src: "/photos/personal_shoot_boy/3.png",
      alt: "Alzah - Modern Groom",
      tag: "Portrait",
      category: "Personal Shoot Boy",
    },
    {
      src: "/photos/personal_shoot_boy/4.png",
      alt: "The Groom's Details",
      tag: "Details",
      category: "Personal Shoot Boy",
      span: "tall",
    },
  ],
  vendors: [
    { name: "Wedding Muslimah", category: "Dekorasi", status: "confirmed" },
    {
      name: "cllarion Teknologi",
      category: "Website Development",
      status: "confirmed",
    },
    { name: "-", category: "Fotografer", status: "pending" },
  ],
  timeline: [
    { time: "17.00", event: "Kedatangan keluarga pria" },
    { time: "17.30", event: "Pembukaan oleh perwakilan keluarga" },
    { time: "18.00", event: "Penyampaian maksud lamaran dari pihak pria" },
    { time: "18.30", event: "Jawaban dari pihak wanita" },
    { time: "18.45", event: "Penyerahan seserahan" },
    { time: "19.00", event: "Prosesi pemasangan cincin" },
    { time: "19.15", event: "Doa dan penutup" },
    { time: "19.30", event: "Foto bersama keluarga inti" },
    { time: "20.00", event: "Makan bersama / ramah tamah" },
  ],
};
