"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/animated-background";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "Entrepreneur, USA",
      content:
        "Working with Hyper Frame Media was one of the best business decisions I’ve ever made. Their team took the time to understand my goals, my target market, and what made my brand unique. Within just a few weeks, I was featured on top media outlets including USA Today and FOX News. The credibility I gained has helped me secure new clients and partnerships. Their professionalism and attention to detail are unmatched!",
      avatar: "SL",
    },
    {
      name: "Ahmed R.",
      role: "Tech Startup Founder, UAE",
      content:
        "Our startup had an amazing product but struggled to gain visibility in global markets. Hyper Frame Media came in with a clear strategy — they crafted a strong press release, pitched it to the right platforms, and got us featured on Yahoo Finance and Bloomberg. The exposure was incredible; investors started noticing us, and our traffic tripled within a month. Their media network is truly powerful!",
      avatar: "AR",
    },
    {
      name: "Lisa M.",
      role: "Author & Public Speaker, UK",
      content:
        "As an author, credibility means everything. Hyper Frame Media helped me share my story through beautifully written articles and interviews that reflected my message perfectly. They made the whole process seamless — from writing to publication. I was featured on several international platforms, and my online presence grew stronger than ever. Their team genuinely cares about helping clients shine.",
      avatar: "LM",
    },
    {
      name: "Daniel K.",
      role: "E-commerce Business Owner, Canada",
      content:
        "I was amazed by the professionalism of Hyper Frame Media. Their experts developed a tailored PR strategy that suited my business goals and industry perfectly. My press release was featured across major publications, and the SEO boost helped my store appear on Google’s first page. Their communication was clear, and the results exceeded expectations. I’ll definitely continue working with them!",
      avatar: "DK",
    },
    {
      name: "Aisha T.",
      role: "Fashion Designer, Pakistan",
      content:
        "Hyper Frame Media gave my fashion brand the global visibility I had always dreamed of. They wrote a stunning article that highlighted my designs and vision, then placed it on top fashion and lifestyle sites. Soon after, I started receiving collaboration requests from international boutiques and stylists. They deliver more than just exposure — they help you build a global brand image.",
      avatar: "AT",
    },
    {
      name: "Robert J.",
      role: "Digital Marketing Expert, USA",
      content:
        "I’ve worked with multiple PR agencies before, but Hyper Frame Media stands out for their transparency, efficiency, and results. They don’t just promise — they deliver. My business was featured on Market Watch and USA Today, bringing in real engagement and clients. Their understanding of media relations and branding is on another level. Highly recommended for anyone serious about growth.",
      avatar: "RJ",
    },
    {
      name: "Maria G.",
      role: "Lifestyle Influencer, Spain",
      content:
        "Hyper Frame Media helped me elevate my personal brand in ways I didn’t imagine. Their team prepared a professional press release and got me featured in top media platforms. What impressed me most was their attention to detail — they made sure everything aligned with my brand voice. My follower base grew, and I’ve started receiving sponsorships from global companies. Truly a next-level PR experience!",
      avatar: "MG",
    },
    {
      name: "Kevin P.",
      role: "CEO, Australia",
      content:
        "The Hyper Frame Media team handled our corporate PR campaign with complete professionalism. From strategic consultation to final media coverage, everything was flawless. They kept me updated at every step, ensured we were happy with the drafts, and got our story placed on high-authority platforms. The campaign helped us attract new investors and strengthened our brand’s reputation globally.",
      avatar: "KP",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section
      id="testimonials"
      className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.01)" />

      <div className="container px-4 md:px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <AnimatedText
                text="💬 What Our Clients Say About Us"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="See how professionals around the world are growing with Hyper Frame Media."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Slider container */}
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 ">
              {testimonials.map((testimonial, index) => (
                <div
                  className="min-w-[90%] sm:min-w-[70%] md:min-w-[50%] lg:min-w-[33%] h-full "
                  key={index}
                >
                  {/* <ScrollReveal delay={index * 0.1}> */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full glassmorphic-card group">
                      <CardHeader>
                        <div className="flex items-center gap-4  h-full">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Avatar className="glassmorphic-avatar border-2 border-transparent group-hover:border-red-500 transition-colors">
                              <AvatarImage
                                src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
                                alt={testimonial.name}
                              />
                              <AvatarFallback>
                                {testimonial.avatar}
                              </AvatarFallback>
                            </Avatar>
                          </motion.div>
                          <div>
                            <h3 className="text-lg font-medium tracking-tight group-hover:text-red-500 transition-colors">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-muted-foreground opacity-70">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                          {testimonial.content}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  {/* </ScrollReveal> */}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow hover:bg-white transition z-10"
          >
            <ChevronLeft className="w-5 h-5 text-red-500" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow hover:bg-white transition z-10"
          >
            <ChevronRight className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { ScrollReveal } from "@/components/scroll-reveal";
// import { AnimatedText } from "@/components/ui/animated-text";
// import { motion } from "framer-motion";
// import { AnimatedBackground } from "@/components/ui/animated-background";

// export function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Sarah L.",
//       role: "Entrepreneur, USA",
//       content:
//         "Working with Hyper Frame Media was one of the best business decisions I’ve ever made. Their team took the time to understand my goals, my target market, and what made my brand unique. Within just a few weeks, I was featured on top media outlets including USA Today and FOX News. The credibility I gained has helped me secure new clients and partnerships. Their professionalism and attention to detail are unmatched!",
//       avatar: "SL",
//     },
//     {
//       name: "Ahmed R.",
//       role: "Tech Startup Founder, UAE",
//       content:
//         "Our startup had an amazing product but struggled to gain visibility in global markets. Hyper Frame Media came in with a clear strategy — they crafted a strong press release, pitched it to the right platforms, and got us featured on Yahoo Finance and Bloomberg. The exposure was incredible; investors started noticing us, and our traffic tripled within a month. Their media network is truly powerful!",
//       avatar: "AR",
//     },
//     {
//       name: "Lisa M.",
//       role: "Author & Public Speaker, UK",
//       content:
//         "As an author, credibility means everything. Hyper Frame Media helped me share my story through beautifully written articles and interviews that reflected my message perfectly. They made the whole process seamless — from writing to publication. I was featured on several international platforms, and my online presence grew stronger than ever. Their team genuinely cares about helping clients shine.",
//       avatar: "LM",
//     },
//     {
//       name: "Daniel K.",
//       role: "E-commerce Business Owner, Canada",
//       content:
//         "I was amazed by the professionalism of Hyper Frame Media. Their experts developed a tailored PR strategy that suited my business goals and industry perfectly. My press release was featured across major publications, and the SEO boost helped my store appear on Google’s first page. Their communication was clear, and the results exceeded expectations. I’ll definitely continue working with them!",
//       avatar: "DK",
//     },
//     {
//       name: "Aisha T.",
//       role: "Fashion Designer, Pakistan",
//       content:
//         "Hyper Frame Media gave my fashion brand the global visibility I had always dreamed of. They wrote a stunning article that highlighted my designs and vision, then placed it on top fashion and lifestyle sites. Soon after, I started receiving collaboration requests from international boutiques and stylists. They deliver more than just exposure — they help you build a global brand image.",
//       avatar: "AT",
//     },
//     {
//       name: "Robert J.",
//       role: "Digital Marketing Expert, USA",
//       content:
//         "I’ve worked with multiple PR agencies before, but Hyper Frame Media stands out for their transparency, efficiency, and results. They don’t just promise — they deliver. My business was featured on Market Watch and USA Today, bringing in real engagement and clients. Their understanding of media relations and branding is on another level. Highly recommended for anyone serious about growth.",
//       avatar: "RJ",
//     },
//     {
//       name: "Maria G.",
//       role: "Lifestyle Influencer, Spain",
//       content:
//         "Hyper Frame Media helped me elevate my personal brand in ways I didn’t imagine. Their team prepared a professional press release and got me featured in top media platforms. What impressed me most was their attention to detail — they made sure everything aligned with my brand voice. My follower base grew, and I’ve started receiving sponsorships from global companies. Truly a next-level PR experience!",
//       avatar: "MG",
//     },
//     {
//       name: "Kevin P.",
//       role: "CEO, Australia",
//       content:
//         "The Hyper Frame Media team handled our corporate PR campaign with complete professionalism. From strategic consultation to final media coverage, everything was flawless. They kept me updated at every step, ensured we were happy with the drafts, and got our story placed on high-authority platforms. The campaign helped us attract new investors and strengthened our brand’s reputation globally.",
//       avatar: "KP",
//     },
//   ];

//   return (
//     <section
//       id="testimonials"
//       className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
//     >
//       <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.01)" />

//       <div className="container px-4 md:px-6">
//         <ScrollReveal>
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <AnimatedText
//                 text="What Our Users Say"
//                 variant="heading"
//                 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
//                 animation="slide"
//               />
//               <AnimatedText
//                 text="Hear from developers and designers who use our component library in their projects."
//                 variant="paragraph"
//                 className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
//                 animation="fade"
//                 delay={0.3}
//               />
//             </div>
//           </div>
//         </ScrollReveal>

//         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial, index) => (
//             <ScrollReveal key={index} delay={index * 0.1}>
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Card className="h-full glassmorphic-card group">
//                   <CardHeader>
//                     <div className="flex items-center gap-4">
//                       <motion.div
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         <Avatar className="glassmorphic-avatar border-2 border-transparent group-hover:border-red-500 transition-colors">
//                           <AvatarImage
//                             src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
//                             alt={testimonial.name}
//                           />
//                           <AvatarFallback>{testimonial.avatar}</AvatarFallback>
//                         </Avatar>
//                       </motion.div>
//                       <div>
//                         <h3 className="text-lg font-medium tracking-tight group-hover:text-red-500 transition-colors">
//                           {testimonial.name}
//                         </h3>
//                         <p className="text-sm text-muted-foreground opacity-70">
//                           {testimonial.role}
//                         </p>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
//                       {testimonial.content}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
