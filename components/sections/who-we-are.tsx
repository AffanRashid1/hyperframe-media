"use client";

export default function WhoWeAre() {
  return (
    <section className="text-gray-800 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-300">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold text-gray-300">
              Hyper Frame Media
            </span>
            , we are dedicated to helping brands, entrepreneurs, and creators
            achieve powerful visibility and global recognition. Through expertly
            crafted article publishing, press releases, and digital PR
            strategies, we ensure your story reaches the right audience with
            real impact and credibility.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4  ">
            With access to{" "}
            <span className="font-semibold">
              600+ international media platforms
            </span>
            , including leading outlets such as Forbes, USA Today, FOX, New York
            Times, Washington Post, and LA Weekly, our mission is to connect
            your brand with the world’s most trusted voices in media.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our team of PR professionals, content creators, and media
            strategists work closely with you to shape narratives that inspire,
            inform, and influence. Whether you’re launching a brand, promoting a
            milestone, or building personal authority, Hyper Frame Media is your
            trusted partner in turning your message into meaningful global
            exposure.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="./who-we-are.jpg"
            alt="Who We Are"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
