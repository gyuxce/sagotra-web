import { Hero } from "@/components/home/Hero";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { PillarGrid } from "@/components/home/PillarGrid";
import { AwarenessStory } from "@/components/home/AwarenessStory";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ConversionSection } from "@/components/home/ConversionSection";

export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiences />
      <PillarGrid />
      <AwarenessStory />
      <HowItWorks />
      <ConversionSection />
    </>
  );
}
