import { business1 } from "@/components/assets";
import Image from "next/image";

export default function AIAgentsServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame – <span className="text-yellow-400">AI Agents</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Our AI Agents are designed to be your smart assistants for smarter
          branding. With the power of artificial intelligence, we help brands
          automate engagement, streamline content creation, and deliver
          personalized experiences to their audiences — so you stay responsive,
          relevant, and ahead of the curve.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"./ai-agents.jpeg"}
            alt="AI-Powered Brand Assistants"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Tagline + CTA */}
        <div className="space-y-6">
          <blockquote className="text-xl italic text-gray-300 border-l-4 border-yellow-400 pl-4">
            “AI-Powered Assistants, Human-Like Engagement.”
          </blockquote>
          <p className="text-gray-300 leading-relaxed">
            Let intelligent automation handle fan interactions, social replies,
            and content drafting — while you focus on what matters most.
          </p>
          {/* <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
              Deploy Your AI Agent
            </button> */}
        </div>
      </div>

      {/* What We Offer */}
      <div className="max-w-4xl px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Branded Chat Agents
            </h3>
            <p>
              Intelligent chatbots tailored to your brand voice for instant,
              authentic engagement.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Automated Social Responses
            </h3>
            <p>
              Smart replies across Facebook, Instagram, and more — no query left
              unanswered.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Content Assistance
            </h3>
            <p>
              AI-driven support to draft blogs, captions, and posts that
              resonate with your audience.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Analytics & Insights
            </h3>
            <p>
              Track conversations and optimize strategy with detailed
              performance reports.
            </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <h3 className="font-semibold text-yellow-400">
              Seamless Integration
            </h3>
            <p>
              Built to work with your existing platforms — no overhaul required.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Brands Trust Our AI Agents
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 mb-8">
          <div>
            <h3 className="font-semibold text-white mb-1">Always On</h3>
            <p>24/7 availability without delays or downtime.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Cost Efficient</h3>
            <p>Reduce operational costs while scaling engagement.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Brand Consistent</h3>
            <p>Every interaction reflects your tone, values, and style.</p>
          </div>
        </div>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Start Automating Today
        </button>
      </div>
    </div>
  );
}
