import { business1 } from "@/components/assets";
import Image from "next/image";

export default function PRReleasesServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">PR Releases</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          A well-written press release can get your story into the right hands
          and build instant credibility. At Hypermedia Frame, we craft
          professional, newsworthy PR content and distribute it to relevant
          journalists, bloggers, and media outlets so you gain attention,
          backlinks, and lasting trust.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"../pr-releases.jpg"}
            alt="Press Release Distribution"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Headline + CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Create and Distribute Powerful Press Releases
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Whether it’s a product launch, funding round, or milestone we turn
            your news into media-worthy stories that journalists want to cover.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Launch Your Campaign
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
              PR Strategy & Story Planning
            </h3>
            <p>
              We identify your most newsworthy angles and plan how, when, and
              where to release them for maximum impact.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Press Release Writing
            </h3>
            <p>
              Professional copy written to journalistic standards with strong
              hooks, headlines, and clear calls-to-action.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Media Distribution
            </h3>
            <p>
              Submitted to premium newswires and targeted media contacts not
              just bulk blasts, but strategic outreach.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Follow-ups & Monitoring
            </h3>
            <p>
              We track placements, send journalist follow-ups, and deliver
              reports showing exactly where your story appeared.
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
              📈 Media Visibility & Credibility
            </h3>
            <p>
              Get featured in trusted publications and build authority
              overnight.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              🔗 SEO-Boosting Backlinks
            </h3>
            <p>
              Earn high-authority links that improve search rankings and domain
              strength.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              🤝 Journalist Relationships
            </h3>
            <p>
              Build long-term connections with writers and editors who cover
              your industry.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              ⏱️ Time-Efficient Announcements
            </h3>
            <p>
              Share big news without managing media lists or writing pitches
              yourself.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Announce your news with impact.
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Let’s turn your milestone into media coverage. Click below to start
          your next press release campaign today.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Get Started Now
        </button>
      </div>
    </div>
  );
}
