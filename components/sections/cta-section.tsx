"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { GradientButton } from "@/components/ui-library/buttons/gradient-button";
import { OutlineButton } from "@/components/ui-library/buttons/button-variants";
import { bookUrl } from "@/lib/constant";

export function CtaSection() {
  return (
    <section
      // id="cta"
      className="w-full py-12 md:py-24 lg:py-32 "
    >
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <AnimatedText
                text="Ready to explore Australia’s wonders?"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="wave"
              />
              <AnimatedText
                text="📚 Grab your copy of Adventures Down Under and let the journey begin!"
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
            <motion.div
              className="flex flex-col gap-6 sm:flex-row sm:gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
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
                  Buy The Book
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
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

              {/* <AnimatedGradientBorder
                  colors={["#aaa666", "#4b5563", "#aaa666", "#4b5563"]}
                  borderWidth={1}
                  duration={6}
                >
                  <OutlineButton
                    size="lg"
                    className="bg-background w-full h-full border-0 px-8 py-3"
                    asChild
                  >
                    <Link href="#components"> Join the Adventure </Link>
                  </OutlineButton>
                </AnimatedGradientBorder> */}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
