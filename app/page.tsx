import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ComponentLibraryShowcase } from "@/components/sections/component-library-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { BlogSection } from "@/components/sections/blog-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow";
import About from "@/components/sections/about";
import ServicesSection from "@/components/sections/services-section";
import Contact from "@/components/Contact";
import LogoLoop from "@/components/LogoLoop/logoloop";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Enhanced global cursor effect with subtle red glow */}
      <MouseGlow
        color="rgba(18, 18, 23, 0.95)"
        size={600}
        blur={150}
        opacity={0.6}
        followSpeed={0.05}
        pulseEffect={true}
        pulseSpeed={4}
        pulseScale={1.05}
      />

      <HeroSection />
      {/* <About /> */}
      {/* <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      /> */}
      <ServicesSection />
      <FeaturesSection />
      <div className="bg-muted/30 w-full">
        <Contact />
      </div>

      {/* <ComponentLibraryShowcase /> */}
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <BlogSection /> */}
      {/* <FaqSection /> */}
      {/* <CtaSection /> */}
    </main>
  );
}
