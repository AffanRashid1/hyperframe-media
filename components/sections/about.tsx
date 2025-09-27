import Image from "next/image";
import { AnimatedBackground } from "../ui/animated-background";
import { AnimatedText } from "../ui/animated-text";
import { ScrollReveal } from "../scroll-reveal";
import { services } from "@/lib/constant";
import { GlowingTiltCard } from "../ui/glowing-tilt-card";
import Link from "next/link";

const About = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Services"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {services.map((service, index) => (
                  <GlowingTiltCard className="border-l-gray-300">
                    <div
                      key={index}
                      className="rounded-sm p-6  
                      shadow-md hover:shadow-lg transition flex flex-col items-start gap-3"
                    >
                      <h2 className="text-xl font-semibold mb-2 mx-auto">
                        {service.label}
                      </h2>
                      <p className="text-gray-300 text-sm mx-auto">
                        {service.description}
                      </p>
                      <Link className="mx-auto" href={service.redirect}>
                        View Details
                      </Link>
                    </div>
                  </GlowingTiltCard>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
        {/* <div className="order-2 md:order-1"> */}
        {/* <h3 className="text-2xl font-bold mb-4 font-cinzel text-red-700">
              Paul Barakat Barra{" "}
            </h3> */}
        <div className="space-y-6 md:mx-5 calligraphy">
          <p className="text-gray-300 text-center">
            Dianne Stelling is a passionate storyteller who weaves together
            imagination, nature, and cultural heritage to inspire children. Her
            stories invite young readers to explore Australia’s wildlife and
            landscapes, while fostering curiosity, creativity, and care for the
            planet. Through Ellie, Kevin, and Eric, Dianne encourages kids to
            see themselves as protectors of nature and seekers of adventure
          </p>
        </div>
      </div>
      {/* <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 border border-red-900/30"></div>
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-red-900/30"></div>
              <div className="absolute inset-0 md:mt-16">
                <Image
                  alt="Paaul Barakat"
                  src={"./author-pic.jpeg"}
                  width={600}
                  height={800}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default About;
// import Image from "next/image";
// import { AnimatedBackground } from "../ui/animated-background";
// import { AnimatedText } from "../ui/animated-text";
// import { ScrollReveal } from "../scroll-reveal";

// const About = () => {
//   return (
//     <section
//       id="features"
//       className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
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
//                 text="Services"
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
