import { business1 } from "@/components/assets";
import Image from "next/image";

export default function MediaPublicationsServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">Media Publications</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Media coverage is one of the fastest ways to build credibility,
          authority, and visibility. At Hypermedia Frame, we help individuals
          and brands secure placements in both high-tier publications (national
          and international mainstream media) and low-tier or niche outlets
          (industry-specific blogs, magazines, and platforms). This strategic
          mix ensures you reach your ideal audience while boosting your
          reputation.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"./media-publications-service.jpg"}
            alt="Media Publication Features"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Headline + CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Get Featured in Top-Tier & Niche Media Outlets
          </h2>
          <p className="text-gray-300 leading-relaxed">
            From Forbes to your industry’s favorite blog — we place your story
            where it matters most.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Pitch My Story
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
            <h3 className="font-semibold text-yellow-400">
              High-Tier Media Features
            </h3>
            <p>
              We pitch your story to national/international outlets, major
              online pubs, and recognized magazines — for maximum exposure and
              prestige.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Low-Tier / Niche Publications
            </h3>
            <p>
              We target specialized blogs, trade journals, and community
              platforms — where your ideal audience is already paying attention.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Press Pitching & Story Development
            </h3>
            <p>
              We craft journalist-ready narratives — compelling, newsworthy, and
              tailored to what editors actually want to publish.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Distribution & Follow-Ups
            </h3>
            <p>
              We manage end-to-end outreach — from first email to final feature
              — ensuring your story goes live, on time, and on point.
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
              🏅 Enhanced Credibility
            </h3>
            <p>
              Appear in trusted publications to build instant trust with
              customers, partners, and investors.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              📈 Audience Growth
            </h3>
            <p>
              Reach both mainstream readers and hyper-engaged niche communities
              — no audience left behind.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              🧠 Brand Authority
            </h3>
            <p>
              Position yourself as a thought leader — not just a business, but
              an expert in your field.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              🔍 SEO & Online Visibility
            </h3>
            <p>
              Earn high-authority backlinks that boost rankings, domain
              strength, and discoverability.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to get featured?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Let’s build a custom media placement strategy — whether you’re aiming
          for TechCrunch or your industry’s top newsletter.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Start Your Campaign
        </button>
      </div>
    </div>
  );
}
