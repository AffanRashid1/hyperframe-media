import Image from "next/image";
import { business1 } from "../assets";

export default function ImdbProServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">IMDb Services</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Your IMDb page is often the first impression casting directors,
          producers, and fans get of your work. At Hypermedia Frame, we
          specialize in creating, updating, and optimizing IMDb profiles for
          actors, filmmakers, musicians, and other creatives. Our goal is to
          ensure your page accurately reflects your achievements and enhances
          your professional reputation.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={business1}
            alt="IMDB Services"
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
              actor, filmmaker, musician,
            </span>
            or creative professional, our tailored solutions will help you build
            a powerful, accurate, and discoverable presence on IMDb.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Why IMDb Pro */}
      <div className="max-w-4xl px-6 mb-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-gray-300 leading-relaxed">
          We handle every aspect of your IMDb presence from setup to ongoing
          optimization so you can focus on your craft while we ensure your
          profile stands out.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full px-6 mb-20">
        {[
          {
            title: "New Page Creation",
            items: [
              "Set up brand-new IMDb profiles",
              "For individuals & production companies",
              "Follow IMDb submission guidelines",
              "Ensure fast approval",
            ],
          },
          {
            title: "Profile Optimization",
            items: [
              "Add missing credits & media",
              "Craft compelling bios & summaries",
              "Verify key information",
              "Enhance visual presentation",
            ],
          },
          {
            title: "Regular Updates",
            items: [
              "Keep credits current",
              "Update awards & milestones",
              "Refresh media & headshots",
              "Maintain active presence",
            ],
          },
          {
            title: "IMDb Compliance",
            items: [
              "Strict adherence to guidelines",
              "Avoid rejections & delays",
              "Maintain credibility & trust",
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
          Benefits for You
        </h2>
        <p>
          <span className="font-semibold text-white">Credible Presence:</span> A
          polished, professional profile on the world’s leading entertainment
          database.
        </p>
        <p>
          <span className="font-semibold text-white">
            Increased Discoverability:
          </span>{" "}
          Get found by casting directors, press, collaborators, and fans.
        </p>
        <p>
          <span className="font-semibold text-white">
            Accurate Information:
          </span>{" "}
          Ensure your work and achievements are correctly represented.
        </p>
        <p>
          <span className="font-semibold text-white">Hassle-Free Support:</span>{" "}
          Let us handle the complex, time-consuming submission process for you.
        </p>
      </div>

      {/* CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Build or Upgrade Your IMDb Presence Today
        </h2>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Contact Us Now
        </button>
        <p className="mt-6 italic text-gray-300 max-w-xl mx-auto">
          “Hypermedia Frame transformed my{" "}
          <span className="font-bold text-white">IMDb presence!</span>”
          <br />
          <span className="not-italic font-semibold mt-2 text-yellow-400 block">
            – Award-winning Actress, L. Chen
          </span>
        </p>
      </div>
    </div>
  );
}
