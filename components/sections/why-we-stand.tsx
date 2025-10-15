"use client";

export default function WhyWeStandOut() {
  return (
    <section className=" text-gray-800 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl text-gray-300 md:text-4xl font-bold mb-6">
            Why We Stand Out
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-gray-300">
                • Global Reach Across 600+ Media Platforms:
              </span>{" "}
              From industry giants like Forbes and USA Today to niche-focused
              outlets, we ensure unmatched coverage tailored to your needs.
            </li>
            <li>
              <span className="font-semibold text-gray-300">
                • Unparalleled Expertise:
              </span>{" "}
              Our team’s in-depth knowledge of media landscapes and storytelling
              ensures your brand stands out in a competitive marketplace.
            </li>
            <li>
              <span className="font-semibold text-gray-300">
                • Commitment to Excellence:
              </span>{" "}
              We focus on delivering measurable results with every project,
              ensuring client satisfaction.
            </li>
            <li>
              <span className="font-semibold text-gray-300">
                • Client-Centric Approach:
              </span>{" "}
              Your success is at the heart of everything we do. We work closely
              with you to understand your goals and surpass expectations.
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="./why-we-stand-out.jpg"
            alt="Why We Stand Out"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
