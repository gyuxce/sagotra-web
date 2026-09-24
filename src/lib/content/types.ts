import type { Locale } from "@/i18n/routing";

export type LocalizedText = Record<Locale, string>;

export type ExperienceCategory = "heritage" | "arts" | "culinary" | "community";

export type Audience =
  | "cultural-traveler"
  | "family"
  | "school-community"
  | "corporate"
  | "international-visitor";

export interface MediaImage {
  alt: LocalizedText;
  asset?: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface Experience {
  slug: string;
  category: ExperienceCategory;
  destinationSlug: string;
  audiences: Audience[];
  durationHours: number;
  languages: string[];
  title: LocalizedText;
  summary: LocalizedText;
  story: LocalizedText;
  highlights: LocalizedText[];
  practicalDetails: {
    meetingPoint: LocalizedText;
    minimumGroup: LocalizedText;
    accessibility: LocalizedText;
    whatToBring: LocalizedText;
  };
  includes: LocalizedText[];
  excludes: LocalizedText[];
  responsibleVisitNotes: LocalizedText;
  images: MediaImage[];
  relatedExperienceSlugs: string[];
  relatedStorySlugs: string[];
  priceOnRequest: boolean;
  retailPrice?: number;
  priceUnit?: "per-person" | "per-group";
  inquiryStatus: "open" | "seasonal" | "on-request";
}

export interface DestinationZone {
  order: number;
  name: LocalizedText;
  highlights: LocalizedText[];
}

export interface Destination {
  slug: string;
  name: LocalizedText;
  overview: LocalizedText;
  culturalContext: LocalizedText;
  mapEmbedUrl?: string;
  practicalNotes: LocalizedText;
  zones: DestinationZone[];
  heroImage: MediaImage;
}

export type StoryTopic =
  | "living-culture"
  | "people"
  | "culinary"
  | "heritage-spaces"
  | "responsible-visiting";

export interface Story {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText[];
  topic: StoryTopic;
  destinationSlug: string;
  publishDate: string;
  heroImage: MediaImage;
  relatedExperienceSlugs: string[];
}

export interface Partner {
  name: string;
  role: LocalizedText;
  permissionGranted: boolean;
}

export interface Faq {
  question: LocalizedText;
  answer: LocalizedText;
  category: "booking" | "group" | "practical" | "responsible-visit";
}
