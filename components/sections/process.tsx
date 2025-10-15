"use client";
import { Megaphone, Target, FileText, Globe, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: <Megaphone className="w-6 h-6 text-yellow-400" />,
    title: "Discovery Call",
    description:
      "We start by understanding your vision, goals, and target audience — laying the foundation for a strategy that fits your brand perfectly.",
  },
  {
    icon: <Target className="w-6 h-6 text-yellow-400" />,
    title: "Strategic Planning",
    description:
      "Our experts craft a tailored PR or media plan that aligns with your brand’s objectives and messaging style.",
  },
  {
    icon: <FileText className="w-6 h-6 text-yellow-400" />,
    title: "Content Development",
    description:
      "Our skilled writers and editors create impactful articles, press releases, and media content that capture attention and reflect your brand’s voice.",
  },
  {
    icon: <Globe className="w-6 h-6 text-yellow-400" />,
    title: "Media Outreach",
    description:
      "We connect your story with our trusted network of global media partners, ensuring maximum visibility and credible placements.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-yellow-400" />,
    title: "Review & Amplify",
    description:
      "Before publication, we share drafts for your approval. Once finalized, your content is distributed strategically to reach global audiences and drive real engagement.",
  },
];

export default function OurProcess() {
  return (
    // <section className="bg-[#1b1b38] text-white py-20 px-6 lg:px-20">
    <div className="w-full bg-muted/30">
      <section className="py-16 w-full pt-10 container mx-auto">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We follow a clear and result-driven process to ensure your message
              is powerful, authentic, and reaches the right audience at the
              right time.
            </p>
            {/* <div className="hidden lg:block">
            <img
              src="/our-process-person.png"
              alt="Our Process"
              className="w-full max-w-sm mx-auto"
            />
          </div> */}
          </div>

          {/* RIGHT SECTION */}
          <div className="grid sm:grid-cols-2 gap-6 col-span-3">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="h-full border border-gray-200/30 p-6 bg-white/80 dark:bg-black/40  shadow-lg hover:shadow-2xl transition-all duration-300"
                //   className="bg-[#2b2b4a] hover:bg-yellow-400 hover:text-black transition-all p-6 shadow-md border border-transparent hover:border-yellow-400"
              >
                <div className="mb-3">{step.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 group-hover:text-black/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
