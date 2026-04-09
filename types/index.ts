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
