import { business1 } from "@/components/assets";
import Image from "next/image";

export default function PodcastInterviewsServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hyperframe Media –{" "}
          <span className="text-yellow-400">Podcast & Interviews</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Get featured on top podcasts and interviews to share your story, build
          authority, and connect with new audiences.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"../podcast.webp"}
            alt="Podcast & Interview Features"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Tagline + CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Your Voice, Your Story Amplified
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Podcasts and interviews are one of the fastest-growing ways for
            celebrities, authors, and thought leaders to reach engaged
            audiences. We help you gain trust, visibility, and long-term
            influence through authentic conversations that matter.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Book My Spot
          </button>
        </div>
      </div>

      {/* What We Do */}
      <div className="max-w-4xl px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          What We Do for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              🎙️ Secure Guest Spots
            </h3>
            <p>
              We pitch and book you on relevant, high-impact podcasts and
              interview platforms aligned with your niche.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              🎤 Prep & Coaching
            </h3>
            <p>
              Get talking points, media training, and confidence coaching so you
              shine on mic, every time.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              📣 Brand Integration
            </h3>
            <p>
              We weave your projects, books, or launches naturally into the
              conversation no awkward plugs.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">📅 Full Logistics</h3>
            <p>
              From scheduling to reminders to post-show promotion we handle it
              all behind the scenes.
            </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <h3 className="font-semibold text-yellow-400">
              ✂️ Content Repurposing
            </h3>
            <p>
              Receive short clips, quote graphics, and social snippets ready to
              repost and grow your reach.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="max-w-4xl px-6 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why It Matters</h2>
        <div className="p-6 bg-gray-800 rounded-xl">
          <p className="text-gray-300 leading-relaxed text-lg">
            Unlike ads, podcasts and interviews give you an authentic voice.
            They allow you to connect with audiences on a deeper level, position
            you as an expert, and keep you relevant in the ever-changing media
            landscape.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Share Your Story?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Let’s find the perfect shows, prep your message, and get you heard by
          the audiences that matter most.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Start Pitching Today
        </button>
      </div>
    </div>
  );
}
