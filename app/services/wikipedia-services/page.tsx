import { business1 } from "@/components/assets";
import Image from "next/image";

export default function WikipediaManagementServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">Wikipedia Management</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          A well-maintained Wikipedia page builds instant trust and authority.
          At Hypermedia Frame, we specialize in creating and managing Wikipedia
          entries that meet the platform’s strict guidelines. Whether you’re an
          individual, a brand, or an organization, we ensure your page is
          reliable, verifiable, and neutral — the three pillars of Wikipedia.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={business1}
            alt="Wikipedia Page Management"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Headline + CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Professional Wikipedia Page Creation & Management
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Notability? Citations? Neutral tone? We handle Wikipedia’s toughest
            rules — so your page gets approved, stays live, and builds lasting
            credibility.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Create My Page
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
            <h3 className="font-semibold text-yellow-400">Page Creation</h3>
            <p>
              We research, write, and submit new Wikipedia pages using verified,
              notable information — built to pass strict editorial review.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Content Expansion & Optimization
            </h3>
            <p>
              Improve existing pages with better structure, readability, updated
              info, and full compliance with Wikipedia’s style guide.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Reference & Citation Management
            </h3>
            <p>
              We source and add credible third-party references — news articles,
              books, journals — to back every claim and boost legitimacy.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Ongoing Monitoring & Maintenance
            </h3>
            <p>
              Wikipedia is open-edit. We monitor for vandalism, policy changes,
              or biased edits — and protect your page 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl px-6 mb-16 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Benefits for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">
              🏛️ Credibility & Authority
            </h3>
            <p>
              A Wikipedia page acts as an independent, trusted reference —
              boosting your public reputation instantly.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">
              ✅ Compliance & Neutrality
            </h3>
            <p>
              We strictly follow notability, verifiability, and neutrality
              standards — maximizing approval and minimizing rejections.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">
              ⏱️ Time & Effort Saved
            </h3>
            <p>
              Let our Wikipedia experts handle submissions, revisions, and
              monitoring — you focus on your legacy, we protect it.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Enhance your credibility with a professionally managed Wikipedia page.
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Whether you’re building your first page or protecting an existing one
          — we’ve got you covered.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Start Your Consultation
        </button>
      </div>
    </div>
  );
}
