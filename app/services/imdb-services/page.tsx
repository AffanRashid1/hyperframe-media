import { business1 } from "@/components/assets";
import Image from "next/image";

export default function ImdbServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hyperframe Media –{" "}
          <span className="text-yellow-400">IMDb Services</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Your IMDb page is often the first impression casting directors,
          producers, and fans get of your work. At Hyperframe Media, we
          specialize in creating, updating, and optimizing IMDb profiles for
          actors, filmmakers, musicians, and other creatives. Our goal is to
          ensure your page accurately reflects your achievements and enhances
          your professional reputation.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"./IMDb-Services.webp"}
            alt="IMDb Profile Management"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Headline + CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Professional IMDb Page Creation & Management
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Credits missing? Bio outdated? We handle it all — so your IMDb
            profile works as hard as you do.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Claim Your Page
          </button>
        </div>
      </div>

      {/* What We Do */}
      <div className="max-w-4xl px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">New Page Creation</h3>
            <p>
              We set up brand-new IMDb profiles for individuals or production
              companies — following all submission rules for fast approval.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Profile Optimization
            </h3>
            <p>
              We enhance existing pages by adding missing credits, high-res
              images, bios, and verified info — boosting your professional
              presence.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">Regular Updates</h3>
            <p>
              As your career grows, so does your page. We keep credits, awards,
              and media current — automatically.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Compliance with IMDb Guidelines
            </h3>
            <p>
              We strictly follow IMDb’s formatting and sourcing rules —
              maximizing approval rates and long-term credibility.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl px-6 mb-16 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Benefits for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              🎬 Polished & Credible Presence
            </h3>
            <p>
              Stand out on the world’s #1 entertainment database with a
              complete, professional profile.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              🔍 Increased Discoverability
            </h3>
            <p>
              Get found by casting directors, press, collaborators, and fans
              searching for talent like you.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              ✅ Accurate Information
            </h3>
            <p>
              Ensure every credit, award, and role is correctly listed — no more
              outdated or missing data.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              ⏱️ Hassle-Free Support
            </h3>
            <p>
              Let us handle the complex, time-consuming submission process — you
              focus on your next project.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Build or upgrade your IMDb presence today.
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Free consultation included. Let’s make sure your IMDb page reflects
          the star you are.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

// import ImdbProServices from "@/components/sections/imdb-pro-section";
// import React from "react";

// const IMDbServices = () => {
//   return <ImdbProServices />;
// };

// export default IMDbServices;
