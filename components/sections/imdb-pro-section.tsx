import Image from "next/image";
import { business1 } from "../assets";

export default function ImdbProServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">IMDb Pro Services</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          At Hypermedia Frame, we understand the power of information and
          connectivity in the entertainment industry. Our IMDb Pro services are
          designed to provide you with the tools and insights to advance your
          career or project.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={business1}
            alt="IMDB Pro Services"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Whether you're an{" "}
            <span className="font-semibold text-white">
              actor, director, producer,
            </span>
            or part of a casting team, our tailored solutions will help you
            maximize your presence and reach on IMDb Pro.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Why IMDb Pro */}
      <div className="max-w-4xl px-6 mb-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why IMDb Pro?</h2>
        <p className="text-gray-300 leading-relaxed">
          IMDb Pro is the essential resource for entertainment professionals,
          offering unparalleled access to industry data, contact information,
          and detailed career profiles. It’s where decision-makers go to find
          talent, research projects, and connect with collaborators.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full px-6 mb-20">
        {[
          {
            title: "Profile Optimization",
            items: [
              "Enhanced profile creation",
              "Bio & resume crafting",
              "Media integration",
              "Regular updates",
            ],
          },
          {
            title: "Contact & Networking",
            items: [
              "Verified contact info",
              "Networking strategy",
              "Casting director access",
              "Talent discovery",
            ],
          },
          {
            title: "Project Insights",
            items: [
              "Industry data & trends",
              "Project tracking",
              "Casting announcements",
              "Custom alerts",
            ],
          },
          {
            title: "Analytics & Visibility",
            items: [
              "Profile performance reports",
              "STARmeter tracking",
              "Audience insights",
            ],
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              {service.title}
            </h3>
            <ul className="text-gray-300 text-sm space-y-1">
              {service.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Who Can Benefit */}
      <div className="max-w-4xl px-6 mb-20 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Who Can Benefit?
        </h2>
        <p>
          <span className="font-semibold text-white">Actors & Talent:</span> Get
          discovered by casting directors and enhance your professional image.
        </p>
        <p>
          <span className="font-semibold text-white">
            Directors & Producers:
          </span>{" "}
          Research talent, track projects, and connect with crew members.
        </p>
        <p>
          <span className="font-semibold text-white">Writers & Creatives:</span>{" "}
          Showcase your portfolio and connect with decision-makers.
        </p>
        <p>
          <span className="font-semibold text-white">Agents & Managers:</span>{" "}
          Manage rosters effectively and stay on top of industry trends.
        </p>
      </div>

      {/* CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Elevate Your Career with IMDb Pro
        </h2>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Contact Us Now
        </button>
        <p className="mt-6 italic text-gray-300 max-w-xl mx-auto">
          “Hypermedia Frame transformed my{" "}
          <span className="font-bold text-white">IMDb Pro presence!</span>”
          <br />
          <span className="not-italic font-semibold mt-2 text-yellow-400 block">
            – Award-winning Actress, L. Chen
          </span>
        </p>
      </div>
    </div>
  );
}
