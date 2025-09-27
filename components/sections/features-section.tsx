"use client";
import { Code, Layers, Palette, Sparkles, Zap, Shield } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ProgressCard } from "@/components/ui-library/cards/progress-card";
import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-red-500" />,
      title: "Composable Components",
      description:
        "Build complex UIs with our composable and reusable component library.",
      progress: 100,
      borderClass: "border-glow-red",
    },
    {
      icon: <Palette className="h-10 w-10 text-blue-500" />,
      title: "Customizable Themes",
      description:
        "Easily customize colors, fonts, and styles to match your brand identity.",
      progress: 90,
      borderClass: "border-glow-blue",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Performance Optimized",
      description:
        "Lightweight components designed for optimal performance and loading times.",
      progress: 95,
      borderClass: "border-glow-yellow",
    },
    {
      icon: <Code className="h-10 w-10 text-green-500" />,
      title: "TypeScript Ready",
      description:
        "Fully typed components for better developer experience and fewer bugs.",
      progress: 100,
      borderClass: "border-glow-green",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      title: "Interactive Animations",
      description:
        "Beautiful animations and transitions powered by Framer Motion.",
      progress: 85,
      borderClass: "border-glow-purple",
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "Accessibility First",
      description:
        "Fully accessible components that work for all users and comply with WCAG standards.",
      progress: 92,
      borderClass: "border-glow-orange",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <AnimatedBackground
        variant="gradient"
        color="#101823"
        secondaryColor="rgba(75, 85, 99, 0.08)"
      />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="The Books / Adventures"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              {/* <AnimatedText
                text="Our component library provides everything you need to build beautiful, interactive, and accessible web applications."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              /> */}
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto space-y-24">
            {adventuresData.map((adventure, index) => (
              <ScrollReveal>
                <div
                  key={adventure.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                  {/* Text Content */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    } order-2`}
                  >
                    <h3 className="text-2xl font-bold font-cinzel text-yellow-400">
                      {adventure.title}
                    </h3>
                    <div className="calligraphy">
                      <p className="text-gray-300 text-justify leading-8">
                        {adventure.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div
                    className={`flex justify-center ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    } order-1`}
                  >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      {/* Decorative frames */}
                      <div className="absolute inset-0 border rounded-md border-yellow-800/30"></div>
                      {/* <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-yellow-800/30"></div> */}

                      {/* Image */}
                      <div className="absolute inset-0">
                        <Image
                          alt={adventure.title}
                          src={adventure.imageSrc}
                          width={600}
                          height={800}
                          className="object-cover w-full h-full  transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  );
}

const adventuresData = [
  {
    title: "Mini-Wonderland: Land of the Kangaroo",
    description:
      "Meet Ellie, your energetic kangaroo guide! She’ll take you on a bouncing journey through meadows and creeks, teaching you the joy of friendship, exploration, and courage.",
    imageSrc: "./kangroo.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
  {
    title: "In the Canopy: Wisdom of the Koala",
    description:
      "Kevin the Koala shares gentle wisdom about caring for the environment, community, and each other. His calm spirit helps children discover the importance of balance and conservation.",
    imageSrc: "./koalaa.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
  {
    title: "The Whimsical Ways of the Witty Emu",
    description:
      "Laugh out loud with Eric the emu! With his comical dances and funny antics, Eric shows children the value of humor, joy, and positivity in building friendships.",
    imageSrc: "./a.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
  {
    title: "Mask and Tradition: Aboriginal Stories",
    description:
      "Journey into the Dreamtime with stories passed down through generations. Learn about the Rainbow Serpent, Uluru, and the sacred wisdom of Australia’s First Peoples.",
    imageSrc: "./kangro-anim.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
];
