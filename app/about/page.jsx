// import { ScrollReveal } from "@/components/scroll-reveal";
// import { AnimatedBackground } from "@/components/ui/animated-background";
// import { AnimatedText } from "@/components/ui/animated-text";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section
//       id="features"
//       className="relative min-h-screen w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
//     >
//       <AnimatedBackground
//         variant="gradient"
//         color="#101823"
//         secondaryColor="rgba(75, 85, 99, 0.08)"
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <ScrollReveal>
//           <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
//             <div className="space-y-4">
//               <AnimatedText
//                 text="Meet the Author"
//                 variant="heading"
//                 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
//                 animation="slide"
//               />
//               {/* <AnimatedText
//                 text="Our component library provides everything you need to build beautiful, interactive, and accessible web applications."
//                 variant="paragraph"
//                 className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
//                 animation="fade"
//                 delay={0.3}
//               /> */}
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
//         {/* <div className="order-2 md:order-1"> */}
//         {/* <h3 className="text-2xl font-bold mb-4 font-cinzel text-red-700">
//               Paul Barakat Barra{" "}
//             </h3> */}
//         <div className="space-y-6 md:mx-5 calligraphy">
//           <p className="text-gray-300 text-center">
//             Dianne Stelling is a passionate storyteller who weaves together
//             imagination, nature, and cultural heritage to inspire children. Her
//             stories invite young readers to explore Australia’s wildlife and
//             landscapes, while fostering curiosity, creativity, and care for the
//             planet. Through Ellie, Kevin, and Eric, Dianne encourages kids to
//             see themselves as protectors of nature and seekers of adventure
//           </p>
//         </div>
//       </div>
//       {/* <div className="order-1 md:order-2 flex justify-center">
//             <div className="relative w-64 h-64 md:w-96 md:h-96">
//               <div className="absolute inset-0 border border-red-900/30"></div>
//               <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-red-900/30"></div>
//               <div className="absolute inset-0 md:mt-16">
//                 <Image
//                   alt="Paaul Barakat"
//                   src={"./author-pic.jpeg"}
//                   width={600}
//                   height={800}
//                   className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                 />
//               </div>
//             </div>
//           </div> */}
//       {/* </div> */}
//       {/* </div> */}
//     </section>
//   );
// };

// export default About;

import { business1 } from "@/components/assets";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left mt-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-yellow-400">Hyper Media Frame</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          At Hyper Media Frame, we are more than just a digital services
          provider we are your growth partner. In an age where online presence
          defines credibility, we specialize in helping individuals and
          businesses stand out with a powerful and authentic digital identity.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={business1}
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
            entries to securing high-impact media features, designing stunning
            websites, and managing Facebook & Instagram campaigns our mission is
            to put you in front of the right audience with the right story.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our team blends creativity, strategy, and technical expertise to
            deliver measurable results that build trust, visibility, and
            long-term success.
          </p>
          <p className="italic text-gray-400">
            We believe every client has a unique story worth telling and we’re
            here to make sure yours is seen, heard, and remembered.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl px-6 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-yellow-400 mb-2">
              🏆 Proven Results
            </h3>
            <p>
              Experienced team with track record across entertainment, tech,
              publishing, and personal branding.
            </p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-yellow-400 mb-2">
              🎯 Tailored Strategies
            </h3>
            <p>
              No templates. Every plan is custom-built for your goals, audience,
              and industry.
            </p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-yellow-400 mb-2">
              📊 Transparent & Measurable
            </h3>
            <p>
              Clear reporting, honest communication, and KPIs that matter so you
              always know what’s working.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Let’s Build Your Digital Presence Together
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Have a question or ready to get started? We’d love to hear from you.
          Whether you’re looking for IMDb optimization, Wikipedia management,
          media features, social media marketing, PR releases, or website
          development our team is here to help.
        </p>

        <div className="max-w-xl mx-auto mb-8 space-y-4 text-gray-300 text-left">
          <div className="flex items-center space-x-3">
            <span className="text-yellow-400">📩</span>
            <span>
              <strong>Email:</strong> info@hypermediaframe.com
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-yellow-400">📞</span>
            <span>
              <strong>Phone / WhatsApp:</strong> +XX-XXX-XXXXXXX
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-yellow-400">📍</span>
            <span>
              <strong>Office:</strong> ********,****
            </span>
          </div>
        </div>

        <p className="text-gray-400 italic mb-6">
          Fill out our quick contact form, send us an email, or give us a call
          one of our experts will respond within 24 hours.
        </p>

        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
