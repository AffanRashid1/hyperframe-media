"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GradientButton } from "@/components/ui-library/buttons/gradient-button";
import Image from "next/image";
import { bookUrl } from "@/lib/constant";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden"
    >
      <AnimatedBackground
        variant="gradient"
        color="#101823"
        secondaryColor="rgba(75, 85, 99, 0.08)"
      />
      {/* <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" /> */}
      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                {/* Modern Hero Header with Gradient */}
                <h1 className="text-4xl font-heading font-bold tracking-normal leading-10 sm:text-5xl xl:text-5xl/none mt-10 md:mt-0">
                  <span className="gradient-text">
                    Grow your Online Presense with{" "}
                    <span className="text-foreground"> Hyperframe Media</span>
                  </span>
                </h1>
                {/* <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70">
                  Welcome to the world of Adventures Down Under! Join Ellie the
                  curious kangaroo, Kevin the wise koala, and Eric the witty emu
                  as they guide young explorers through Australia’s most magical
                  landscapes. From hopping through wildflower meadows to
                  learning wisdom in eucalyptus forests, every page is filled
                  with adventure, laughter, and lessons about nature.
                </p> */}
              </motion.div>

              <motion.div
                className="flex flex-col gap-6 sm:flex-row sm:items-center"
                variants={itemVariants}
              >
                <GradientButton
                  glowAmount={5}
                  className="px-6 py-2.5 text-base"
                  gradientFrom="from-yellow-500"
                  gradientTo="to-yellow -700"
                  asChild
                >
                  <Link
                    href={bookUrl}
                    target="_blank"
                    className="flex items-center"
                  >
                    Get Stareted Today
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

                {/* <MagneticButton className="neumorphic-button">
                  <Link href="#features" className="px-6 py-2.5 block">
                    View Features
                  </Link>
                </MagneticButton> */}
              </motion.div>

              {/* <motion.div variants={itemVariants} className="pt-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Trusted by 2,000+ developers worldwide
                </p>
              </motion.div> */}
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <SpotlightCard className="relative h-[450px] w-[300px] mx-auto  overflow-hidden rounded-sm  glassmorphic-card p-1">
              <Image src={"./dummy.png"} objectFit="cover" alt="logo" fill />

              {/* <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-gray-900/20 z-10"></div>
              <div className="relative z-20 h-full w-full rounded-xl bg-gradient-to-br from-red-950/50 to-gray-950/50 p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="col-span-2 h-24 rounded-xl bg-red-800/20 border border-red-800/30 flex items-center justify-center glassmorphic-inner-card"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)",
                    }}
                  >
                    <span className="font-heading text-xl text-white tracking-tight">
                      Premium Components
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="h-32 rounded-xl bg-gray-800/20 border border-gray-800/30 flex items-center justify-center glassmorphic-inner-card"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(75, 85, 99, 0.3)",
                    }}
                  >
                    <span className="font-heading text-white tracking-tight">
                      Tailwind
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="h-32 rounded-xl bg-red-900/20 border border-red-900/30 flex items-center justify-center glassmorphic-inner-card"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)",
                    }}
                  >
                    <span className="font-heading text-white tracking-tight">
                      TypeScript
                    </span>
                  </motion.div>
                </div>
              </div> */}
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
