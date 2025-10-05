import { business1 } from "@/components/assets";
import Image from "next/image";

export default function BillboardMarketingServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hyperframe Media –{" "}
          <span className="text-yellow-400">Billboard Marketing</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Showcase your brand on iconic billboards in prime locations to
          maximize visibility and create lasting impact. Billboards are timeless
          symbols of influence and visibility — for celebrities, authors, and
          public figures, having your face or brand on a prime billboard creates
          instant recognition and authority that digital ads alone can’t
          achieve.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"./billboard-marketing.png"}
            alt="Iconic Billboard Campaign"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Tagline + CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Make a Bold Statement in the Real World
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Times Square. Sunset Strip. Dubai Mall. We put you where millions
            look — turning heads, stopping traffic, and starting conversations.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Book My Billboard
          </button>
        </div>
      </div>

      {/* What We Do */}
      <div className="max-w-4xl px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          What We Do for You
        </h2>
        <div className="space-y-5 text-gray-300">
          <div className="flex items-start space-x-3">
            <span className="text-yellow-400 font-bold mt-1">📍</span>
            <div>
              <h3 className="font-semibold text-white">
                Prime Location Booking
              </h3>
              <p>
                Secure placements in high-traffic, iconic spots — Times Square,
                LA, London, Dubai & more.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-yellow-400 font-bold mt-1">🎨</span>
            <div>
              <h3 className="font-semibold text-white">
                Attention-Grabbing Creative
              </h3>
              <p>
                We design visuals that stop scrolling minds — bold, clean, and
                unforgettable in under 3 seconds.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-yellow-400 font-bold mt-1">📅</span>
            <div>
              <h3 className="font-semibold text-white">Campaign Strategy</h3>
              <p>
                Tailored for book launches, album drops, film premieres, or
                brand milestones — timed for maximum buzz.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-yellow-400 font-bold mt-1">🚚</span>
            <div>
              <h3 className="font-semibold text-white">End-to-End Logistics</h3>
              <p>
                We handle permits, printing, installation, and scheduling — you
                just show up for the photoshoot.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-yellow-400 font-bold mt-1">📸</span>
            <div>
              <h3 className="font-semibold text-white">
                Documentation & Content
              </h3>
              <p>
                Professional photos and video footage delivered — perfect for
                press kits, social media, and reels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="max-w-4xl px-6 mb-16 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why It Matters</h2>
        <div className="p-6 bg-gray-800 rounded-xl">
          <p className="text-gray-300 leading-relaxed text-lg">
            Billboards give you a powerful offline presence that translates into
            online buzz. They become shareable moments on social media,
            strengthen your credibility, and position you as a high-profile
            public figure — not just online, but in the real world.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Own the Streets?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Let’s turn your next milestone into a landmark. Free consultation +
          location options included.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Start Your Campaign
        </button>
      </div>
    </div>
  );
}
