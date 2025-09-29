"use client";

import {
  Clapperboard,
  BookText,
  Newspaper,
  Facebook,
  Megaphone,
  MonitorSmartphone,
} from "lucide-react";

export function FeaturesSection() {
  const iconColor = "#535353"; // Yellow-400
  const iconSize = 48;

  const services = [
    {
      title: "IMDb Services",
      description:
        "List and update IMDb pages for actors, filmmakers, and creatives.",
      icon: <Clapperboard size={iconSize} color={iconColor} />,
    },
    {
      title: "Wikipedia",
      description:
        "Create and manage Wikipedia entries with adherence to guidelines.",
      icon: <BookText size={iconSize} color={iconColor} />,
    },
    {
      title: "High and LowTier Publications",
      description: "Feature in top media outlets and niche platforms.",
      icon: <Newspaper size={iconSize} color={iconColor} />,
    },
    {
      title: "Marketing (Facebook and Instagram)",
      description: "Develop and execute effective advertising campaigns.",
      icon: <Facebook size={iconSize} color={iconColor} />,
    },
    {
      title: "PR Releases",
      description: "Craft and distribute public relations content.",
      icon: <Megaphone size={iconSize} color={iconColor} />,
    },
    {
      title: "Website Development",
      description: "Design and build professional, responsive websites.",
      icon: <MonitorSmartphone size={iconSize} color={iconColor} />,
    },
  ];

  return (
    <section className=" bg-muted/30  py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-4xl font-bold text-center mb-4">
          Grow Your Online Presence with Hyperframe Media
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-12">
          IMDb, Wikipedia, PR, Marketing & More — Everything you need to build
          credibility and visibility.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="dark:bg-black/40 border border-gray-200/30 rounded-xl p-6 text-center shadow-md hover:shadow-gray-200/30 transition-all"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button className="bg-gray-200/30  hover:bg-gray-200/50 text-white font-semibold px-8 py-3 rounded-md transition-all shadow-md border border-white">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
