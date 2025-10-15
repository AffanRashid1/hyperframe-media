"use client";
import { FileText, CheckCircle } from "lucide-react";

export default function EditorialPublishing() {
  return (
    <section className="text-gray-300 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT CONTENT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-blue-600 w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Editorial Article Publishing
            </h2>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            <span className="font-semibold text-gray-300">
              Boost your brand visibility with premium editorial placements.
            </span>{" "}
            At Hyper Frame Media, we help you build industry authority by
            publishing high-quality editorial articles on trusted, top-tier
            media platforms. Our tailored publishing strategies give you access
            to over <strong>600+ leading editorial outlets</strong>, ensuring
            your story reaches the right audience at the right moment.
          </p>

          <p className="text-gray-300 font-medium mt-4">
            🎯 Let us put your brand in the spotlight –
          </p>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-600 text-white px-5 py-2 rounded-md font-medium transition">
            Get Started
          </button>

          {/* What We Offer */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">✅ What We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Professionally written articles aligned with your brand’s
                message and goals.
              </li>
              <li>
                Guaranteed publication on well-known platforms like Forbes, USA
                Today, Yahoo News, New York Times, and more.
              </li>
              <li>
                Strategic content placement and expert editing for maximum
                visibility and audience engagement.
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-3">
              💡 <strong>Note:</strong> Pricing for editorial publishing is
              customized based on the platform and the scope of your project.
              Contact us for a personalized quote.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">🌟 Key Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Build trust and authority in your industry with powerful media
                exposure.
              </li>
              <li>
                Drive targeted traffic to your website with high-authority
                backlinks.
              </li>
              <li>
                Increase brand recognition through top-tier media coverage that
                boosts online reputation.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/article-publishng.jpg"
            alt="Editorial Publishing"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
