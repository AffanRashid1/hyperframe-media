"use client";

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
import { DiscAlbum, Globe } from "lucide-react";
import CountUp from "@/components/CountUp/CountUp";
import StatsSection from "@/components/sections/stats-section";
import SplashCursor from "@/components/SplashCursor/spplash-cursor";
import Image from "next/image";
import OurProcess from "@/components/sections/process";

export default function HomePage() {
  const techLogos = [
    // { src: "./company-white.png", title: "React", href: "https://react.dev" },
    { src: "./billboard.png", title: "Billboard", href: "/" },
    { src: "./loop1.png", title: "loop1", href: "/" },
    { src: "./loop2.png", title: "loop1", href: "/" },
    { src: "./loop3.png", title: "loop1", href: "/" },
    { src: "./loop4.png", title: "Billboard", href: "/" },
    { src: "./loop5.png", title: "Billboard", href: "/" },
    // {
    //   node: <DiscAlbum size={60} />,
    //   title: "Next.js",
    //   href: "https://nextjs.org",
    // },
    // { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    // { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <main className="flex flex-col items-center relative bg-muted/30">
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
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={50}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#141313"
        ariaLabel="Technology partners"
        style={{ paddingTop: "40px" }}
      />
      <About />

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
      <StatsSection />
      <OurProcess />
      <FeaturesSection />
      <div className="bg-muted/30 w-full">
        <Contact />
      </div>

      {/* <ComponentLibraryShowcase /> */}
      <TestimonialsSection />
      {/* <PricingSection /> */}
      {/* <BlogSection /> */}
      {/* <FaqSection /> */}
      {/* <CtaSection /> */}
    </main>
  );
}
