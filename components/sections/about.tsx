"use client";

import { motion } from "framer-motion";
import { FileSearch, NotebookPen, ShieldCheck } from "lucide-react";

export default function About() {
  const iconColor = "#d3d3d3"; // Light golden color
  const iconSize = 48;

  const services = [
    {
      title: "Page Creation",
      icon: <NotebookPen size={iconSize} color={iconColor} />,
    },
    {
      title: "Content Optimization",
      icon: <FileSearch size={iconSize} color={iconColor} />,
    },
    {
      title: "Monitoring & Maintenance",
      icon: <ShieldCheck size={iconSize} color={iconColor} />,
    },
  ];

  return (
    <section className="bg-[#0a0f1a] w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center p-8 h-60 border-2 border-yellow-400 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,0,0.2)] transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-white text-base font-medium">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action button */}
        <div className="text-center mb-16">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition-all shadow-md">
            GET A FREE CONSULTATION TODAY!
          </button>
        </div>

        {/* Testimonial Section */}
        <div className="bg-[#111827] rounded-md p-6 text-white max-w-3xl mx-auto shadow-md">
          <p className="text-lg italic mb-2">
            “Hypermedia Frame crafted our Wikipedia page, boosting the
            credibility and reach significantly.”
          </p>
          <p className="text-sm text-gray-400">
            – Sarah Chen, Tech Entrepreneur
          </p>
        </div>
      </div>
    </section>
  );
}
