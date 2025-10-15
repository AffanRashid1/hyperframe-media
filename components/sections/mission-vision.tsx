"use client";
import { Globe, Rocket } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="text-gray-800 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div>
          <img
            src="./mission-vission.png"
            alt="Our Mission"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          {/* Mission */}
          <div className=" border border-gray-200/30 bg-white/80 dark:bg-black/40  text-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🌍 Our Mission</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  At Hyper Frame Media, our mission is to empower brands,
                  entrepreneurs, and creators with global visibility through
                  strategic media placements, impactful storytelling, and
                  trusted PR solutions. We aim to bridge the gap between brands
                  and audiences by crafting authentic narratives that inspire
                  trust, strengthen credibility, and deliver measurable results
                  across the world’s top media platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className=" border border-gray-200/30 bg-white/80 dark:bg-black/40  text-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Rocket className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🚀 Our Vision</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our vision is to become a global leader in digital PR and
                  media excellence, helping businesses of all sizes gain
                  recognition, authority, and long-term influence. We envision a
                  world where every brand — big or small — has the opportunity
                  to be seen, heard, and celebrated on a global stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
