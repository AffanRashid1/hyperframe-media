"use client";

import Image from "next/image";
import React from "react";
import { AnimatedText } from "../ui/animated-text";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhyChooseUs from "./why-choose-us";
import BenefitsSection from "./benifits-section";

const About = () => {
  return (
    <div className="bg-muted/30 w-full py-16 ">
      <div className="container px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <div className="space-y-6 md:mx-5 calligraphy">
              <AnimatedText
                text="Global Reach Across 600+ Media Platforms"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <p className="text-gray-300">
                At Hyper Fram Media, we help your brand stand out in a crowded
                digital world. Our mission is to elevate your credibility,
                expand your global reach, and position your story where it
                matters most.
              </p>
              <p className="text-gray-300 ">
                With proven expertise and strong media connections, we secure
                placements across top-tier platforms including Forbes, USA
                Today, FOX, New York Times, Washington Post, LA Weekly, and
                hundreds more.
              </p>
              <p className="text-gray-300 ">
                Whether you're an entrepreneur, author, artist, or business, our
                goal is simple — to turn your brand into a trusted name with
                worldwide recognition.
              </p>
              <p className="text-gray-300 ">
                🚀 Let’s amplify your voice and put your story in front of
                millions.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black text-sm md:text-xl font-semibold rounded-md hover:bg-yellow-600 transition"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  alt="About"
                  src={"./about-mock.png"}
                  width={600}
                  height={600}
                  className="object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <BenefitsSection />

        <div className="flex flex-col items-center mt-20">
          <div className="w-full px-6 mt-20 mb-12 text-left mt-5">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-yellow-400">Hyper Media Frame</span>
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              At Hyper Media Frame, we are more than just a digital services
              provider we are your growth partner. In an age where online
              presence defines credibility, we specialize in helping individuals
              and businesses stand out with a powerful and authentic digital
              identity.
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-6 mb-20 items-center">
            {/* Left: Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={"./about.jpg"}
                alt="Hyper Media Frame Team"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Right: Mission Statement */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                From optimizing IMDb pages and crafting authoritative Wikipedia
                entries to securing high-impact media features, designing
                stunning websites, and managing Facebook & Instagram campaigns
                our mission is to put you in front of the right audience with
                the right story.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team blends creativity, strategy, and technical expertise to
                deliver measurable results that build trust, visibility, and
                long-term success.
              </p>
              <p className="italic text-gray-400">
                We believe every client has a unique story worth telling and
                we’re here to make sure yours is seen, heard, and remembered.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          {/* <div className="max-w-5xl px-6 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="p-5 py-4 border-gray-200/30 bg-white/80 dark:bg-black/40 border rounded-lg">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  🏆 Proven Results
                </h3>
                <p>
                  Experienced team with track record across entertainment, tech,
                  publishing, and personal branding.
                </p>
              </div>
              <div className="p-5 py-4 border-gray-200/30 bg-white/80 dark:bg-black/40 border rounded-lg">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  🎯 Tailored Strategies
                </h3>
                <p>
                  No templates. Every plan is custom-built for your goals,
                  audience, and industry.
                </p>
              </div>
              <div className="p-5 py-4 border-gray-200/30 bg-white/80 dark:bg-black/40 border rounded-lg">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  📊 Transparent & Measurable
                </h3>
                <p>
                  Clear reporting, honest communication, and KPIs that matter so
                  you always know what’s working.
                </p>
              </div>
            </div>
          </div> */}
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
};

export default About;

// import { motion } from "framer-motion";
// import { FileSearch, NotebookPen, ShieldCheck } from "lucide-react";

// export default function About() {
//   const iconColor = "#d3d3d3"; // Light golden color
//   const iconSize = 48;

//   const services = [
//     {
//       title: "Page Creation",
//       icon: <NotebookPen size={iconSize} color={iconColor} />,
//     },
//     {
//       title: "Content Optimization",
//       icon: <FileSearch size={iconSize} color={iconColor} />,
//     },
//     {
//       title: "Monitoring & Maintenance",
//       icon: <ShieldCheck size={iconSize} color={iconColor} />,
//     },
//   ];

//   return (
//     <section className="bg-[#0a0f1a] w-full py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Services Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col items-center justify-center text-center p-8 h-60 border-2 border-yellow-400 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,0,0.2)] transition-all"
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-white text-base font-medium">
//                 {service.title}
//               </h3>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call-to-action button */}
//         <div className="text-center mb-16">
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition-all shadow-md">
//             GET A FREE CONSULTATION TODAY!
//           </button>
//         </div>

//         {/* Testimonial Section */}
//         <div className="bg-[#111827] rounded-md p-6 text-white max-w-3xl mx-auto shadow-md">
//           <p className="text-lg italic mb-2">
//             “Hypermedia Frame crafted our Wikipedia page, boosting the
//             credibility and reach significantly.”
//           </p>
//           <p className="text-sm text-gray-400">
//             – Sarah Chen, Tech Entrepreneur
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
