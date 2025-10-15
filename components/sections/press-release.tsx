"use client";
import { Newspaper, Megaphone } from "lucide-react";
import EditorialPublishing from "./editorial-publishing";

export default function PressReleaseDistribution() {
  return (
    <>
      <section className="text-gray-300 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="./press-release-services.jpg"
              alt="Press Release Distribution"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="text-blue-600 w-6 h-6" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Press Release Distribution
              </h2>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Maximize your brand’s exposure with{" "}
              <strong>Hyper Frame Media's</strong> extensive press release
              distribution service. With access to over{" "}
              <strong>600+ premium media channels</strong>, we ensure your
              message reaches top journalists, bloggers, and audiences across
              trusted global platforms.
            </p>

            <button className="mt-4 bg-yellow-400 hover:bg-yellow-400 text-white px-5 py-2 rounded-md font-medium transition">
              Get Started
            </button>

            {/* What We Offer */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">📦 What We Offer</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Professionally written press releases tailored to match your
                  brand’s goals and messaging.
                </li>
                <li>
                  Distribution across 600+ international media platforms,
                  including renowned outlets like FOX, LA Weekly, and many more.
                </li>
                <li>
                  Guaranteed publication in reputable and authoritative media
                  networks.
                </li>
              </ul>
              <p className="text-gray-300 text-sm mt-3">
                💡 <strong>Note:</strong> Pricing for press release distribution
                is customized based on the platform and project scope. Contact
                us for a tailored quote that fits your needs.
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">🎯 Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Boost your brand visibility and gain widespread media
                  coverage.
                </li>
                <li>
                  Improve your website’s SEO and rankings through high-quality
                  backlinks.
                </li>
                <li>
                  Build direct engagement with your audience, investors, and
                  stakeholders.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
