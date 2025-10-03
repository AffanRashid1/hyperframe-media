import { business1 } from "@/components/assets";
import Image from "next/image";

export default function SocialMediaMarketingServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">Social Media Marketing</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Facebook aur Instagram aaj ke digital zamane mein sabse powerful
          platforms hain jahan aap apne brand ko build, promote aur grow kar
          sakte ho. At Hypermedia Frame, we design and execute data-driven
          strategies that help you increase followers, boost engagement, and
          drive real business results through Facebook and Instagram marketing.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={business1}
            alt="Facebook & Instagram Marketing"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Headline + CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Grow Your Brand and Engage Your Audience on Facebook & Instagram
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Follower count? Engagement? Sales? We handle it all — with smart
            content, targeted ads, and daily community love.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Boost My Presence
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
              Account Setup & Optimization
            </h3>
            <p>
              Professional profiles with branded visuals, bios, and settings
              fine-tuned for growth and trust.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Content Creation & Calendar
            </h3>
            <p>
              Eye-catching graphics, reels, videos, and captions — planned
              weekly/monthly so your feed never sleeps.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Paid Advertising Campaigns
            </h3>
            <p>
              Facebook & Instagram Ads managed end-to-end — targeting,
              budgeting, A/B testing — for lowest cost per result.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Community Management
            </h3>
            <p>
              We reply, react, and engage daily — turning followers into fans
              and customers.
            </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <h3 className="font-semibold text-yellow-400">
              Performance Tracking & Reporting
            </h3>
            <p>
              Clear monthly reports showing reach, engagement, conversions, and
              ROI — no guesswork, only growth.
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
              🚀 Rapid Audience Growth
            </h3>
            <p>
              Build a strong, engaged following on two of the world’s biggest
              social platforms.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              📢 Brand Awareness & Visibility
            </h3>
            <p>
              Consistent, professional presence = more recognition, more trust,
              more recall.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              🎯 Targeted Advertising
            </h3>
            <p>
              Reach exactly the people most likely to buy — based on interests,
              behavior, location & more.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-left">
            <h3 className="font-semibold text-white mb-2">
              ⏱️ Time & Effort Saved
            </h3>
            <p>
              Our team manages everything — you focus on your business, we
              handle the buzz.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to take your social media to the next level?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Let’s create a custom Facebook & Instagram strategy that matches your
          brand, audience, and goals.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
