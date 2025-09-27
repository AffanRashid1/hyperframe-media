"use client";
import {
  Code,
  Layers,
  Palette,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

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
import { GradientButton } from "@/components/ui-library/buttons/gradient-button";
import Link from "next/link";

function FeaturesSection() {
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
                text="Activities & Fun"
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
          <div className="mx-auto max-w-4xl space-y-24">
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

        {/* <div className="flex justify-center items-center">
          <GradientButton
            glowAmount={5}
            className="px-6 py-2.5 text-base "
            gradientFrom="from-yellow-500"
            gradientTo="to-yellow -700"
            asChild
          >
            <Link href="#components" className="flex items-center">
              Join the Adventure{" "}
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  duration: 1,
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </GradientButton>
        </div> */}
      </div>
    </section>
  );
}

const adventuresData = [
  {
    title: "Kangaroo Art 🦘",
    description: "Sketch Ellie in her wildflower meadow.",
    imageSrc: "./kangroo.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
  {
    title: "Koala Crafts 🌿",
    description:
      "Create a eucalyptus-scented sachet or a playful koala puppet.",
    imageSrc: "./koalaa.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
  {
    title: "Laughing with Eric 🎭",
    description: "Play silly animal charades or put on your own dance-off!",
    imageSrc: "./a.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
  {
    title: "Wildflower Scavenger Hunt 🌸",
    description: "Imagine and draw your own magical blooms.",
    imageSrc: "./kangro-anim.jpeg", // <-- REPLACE WITH YOUR IMAGE PATH
  },
];

export default FeaturesSection;
