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
  category: string;
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
  note?: string;
}

export interface SeserahanItem {
  id: string;
  category: string;
  detail: string;
  status: "done" | "pending";
  brand: string;
  budget: number;
  realization: number;
  notes?: string;
  link?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface PlanningData {
  seserahan: SeserahanItem[];
  categories: Category[];
}

export interface MoodboardData {
  couple: CoupleInfo;
  palette: ColorSwatch[];
  moods: string[];
  photos: Photo[];
  vendors: Vendor[];
  timeline: TimelineEvent[];
  planning?: PlanningData;
}
