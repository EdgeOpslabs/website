import { HeroSection } from "@/components/landing/HeroSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { AboutCommunitySection } from "@/components/landing/AboutCommunitySection";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand-primary/30 selection:text-white">
      <HeroSection />
      <ProductsSection />
      <AboutCommunitySection />
    </main>
  );
}
