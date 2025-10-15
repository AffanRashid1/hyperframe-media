"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import Image from "next/image";
import EditorialPublishing from "./editorial-publishing";
import PressReleaseDistribution from "./press-release";

const servicesData = [
  {
    icon: "🎙️",
    img: "./podcast-cover.jpeg",
    title: "Podcast & Interviews",
    subtitle: "Your Voice, Your StoryAmplified",
    description:
      "Get featured on top podcasts and interviews to share your story, build authority, and connect with new audiences.",
    points: [
      "Pitch & secure guest spots on relevant podcasts",
      "Interview coaching & media training",
      "Manage scheduling & promotion",
      "Post-interview repurposing (clips, quotes, snippets)",
    ],
    redirectUrl: "/services/podcast-and-interviews",
  },
  {
    icon: "💻",
    img: "./web-dev-cover.jpg",
    title: "Website Development",
    subtitle: "Your Digital Headquarters, Designed for Authority",
    description:
      "Create a modern, professional website that becomes your official online home and central hub for your brand.",
    points: [
      "Modern, responsive website design",
      "SEO optimization & analytics",
      "Easy-to-manage platforms",
      "Press features & multimedia integration",
    ],
    redirectUrl: "/services/website-development",
  },
  {
    icon: "🤖",
    title: "AI Agents",
    img: "./ai-agents-cover.webp",
    subtitle: "Smart Assistants for Smarter Branding",
    description:
      "Leverage custom AI-powered agents to handle fan engagement, content support, and brand automation.",
    points: [
      "Branded chat agents for engagement",
      "Automate responses on social media",
      "Draft blogs & social content",
      "Analytics on conversations & engagement",
    ],
    redirectUrl: "/services/ai-agents",
  },
  {
    icon: "📰",
    img: "./media-publications-cover.jpg",
    title: "Publications",
    subtitle: "Your Story, Amplified in the Media",
    description:
      "Get featured in the right publications to build credibility, authority, and visibility.",
    points: [
      "Guaranteed placements in high-tier & niche outlets",
      "Compelling story writing & features",
      "Media strategy & alignment with goals",
      "Full reporting with clippings",
    ],
    redirectUrl: "/services/media-publications",
  },
  {
    icon: "📱",
    img: "./social-media-markketing-cover.webp",
    title: "Social Media Marketing",
    subtitle: "Where Your Audience Lives, We Make You Visible",
    description:
      "Grow your fan base and engagement with powerful Facebook & Instagram strategies.",
    points: [
      "Full-funnel paid ad campaigns",
      "Engaging visuals & copy",
      "Targeting to grow authentic followers",
      "Detailed analytics & reports",
    ],
    redirectUrl: "/services/social-media-marketing",
  },
  {
    icon: "🎬",
    title: "IMDb Services",
    img: "imdb-seervices-cover.png",
    subtitle: "Your Digital Résumé in the Entertainment Industry",
    description:
      "Build and manage a professional IMDb profile with verified credits, filmography, and media.",
    points: [
      "Create & update verified IMDb pages",
      "Add/correct credits & filmography",
      "Upload high-quality headshots",
      "Ongoing monitoring & updates",
    ],
    redirectUrl: "/services/imdb-services",
  },
  {
    icon: "📊",
    title: "Billboard Marketing",
    img: "billboard-marketing-cover.jpg",
    subtitle: "Make a Bold Statement in the Real World",
    description:
      "Showcase your brand on iconic billboards in prime locations to maximize visibility.",
    points: [
      "Secure billboard placements worldwide",
      "Eye-catching creative design",
      "Campaigns for launches & awareness",
      "Photo & video documentation",
    ],
    redirectUrl: "/services/billboard-marketing",
  },
  {
    icon: "📚",
    img: "wikipedia-cover.jpeg",
    title: "Wikipedia Services",
    subtitle: "Your Trusted Voice on the World’s Largest Encyclopedia",
    description:
      "Establish authority with a credible, policy-compliant Wikipedia page.",
    points: [
      "Assess notability & eligibility",
      "Draft & publish policy-compliant pages",
      "Monitor & prevent misinformation",
      "Keep updated with new milestones",
    ],
    redirectUrl: "/services/wikipedia-services",
  },
  {
    icon: "📢",
    title: "PR Releases",
    img: "press-release-cover.png",
    subtitle: "Turn Your Achievements into Headlines",
    description:
      "Announce your milestones with professional press releases distributed to trusted media outlets worldwide.",
    points: [
      "Write engaging, newsworthy press releases",
      "Global press wire distribution",
      "Guaranteed media placements",
      "Reporting on reach & coverage",
    ],
    redirectUrl: "/services/pr-releases",
  },
];

const ServicesSection = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      // duration: 800, // animation duration
      // once: true,    // whether animation should happen only once
      // easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="features"
      className="relative w-full pt-12 md:pt-24 lg:pt-32 bg-muted/30 overflow-hidden"
    >
      {/* Background Animation */}
      <AnimatedBackground
        variant="gradient"
        color="#101823"
        secondaryColor="rgba(75, 85, 99, 0.08)"
      />

      <div className="container px-6 md:px-8">
        {/* Heading */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <AnimatedText
              text="Our Services"
              variant="heading"
              className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
              animation="slide"
            />
            <p className="mt-4 max-w-[800px] text-gray-500 md:text-lg dark:text-gray-400 opacity-80">
              Elevating celebrities, authors, and thought leaders with powerful
              branding and digital strategies.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        {/* <ParallaxScroll baseVelocity={0.2} direction="up" className="pt-12"> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4 pb-16">
          {servicesData.map((service, i) => (
            <div
              key={i}
              className="cursor-pointer"
              onClick={() => {
                router.push(service.redirectUrl);
              }}
              data-aos="fade-up"
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ delay: i * 0.1, duration: 0.6 }}
              // viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200/30 bg-white/80 dark:bg-black/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* <div className="text-4xl">{service.icon}</div> */}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* </ParallaxScroll> */}

        <EditorialPublishing />
        <PressReleaseDistribution />
      </div>
    </section>
  );
};

export default ServicesSection;
