import { CtaSection } from "../components/ui/CtaSection";
import { HomeHero } from "../features/home/components/HomeHero";
import { MethodSection } from "../features/home/components/MethodSection";
import { ProductsSection } from "../features/home/components/ProductsSection";
import { RegieSection } from "../features/home/components/RegieSection";
import { ResourcesSection } from "../features/home/components/ResourcesSection";
import { TrustBar } from "../features/home/components/TrustBar";

export function HomePage() {
  return (
    <main>
      <HomeHero />
      <TrustBar />
      <RegieSection />
      <ProductsSection />
      <MethodSection />
      <ResourcesSection />
      <CtaSection />
    </main>
  );
}
