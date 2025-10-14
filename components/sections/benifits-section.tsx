import Image from "next/image";

const benefits = [
  {
    title: "Establish Strong Brand Authority",
    description:
      "Publishing articles and press releases on credible platforms positions your brand as an expert voice in your field. It helps you gain recognition, build influence, and stand out from competitors.",
  },
  {
    title: "Expand Your Global Reach",
    description:
      "With the right media exposure, your story travels beyond borders. Press releases shared through international outlets help your business connect with audiences, clients, and investors worldwide.",
  },
  {
    title: "Improve SEO & Online Ranking",
    description:
      "Every published article or release creates quality backlinks that enhance your search engine visibility, driving consistent organic traffic to your website.",
  },
  {
    title: "Strengthen Trust & Credibility",
    description:
      "Appearing in well-known media platforms like Forbes, USA Today, and Yahoo Finance instantly boosts your audience’s trust — making your brand appear reliable and established.",
  },
  {
    title: "Generate Long-Term Exposure",
    description:
      "Unlike paid ads that fade away, published articles stay online permanently. They keep promoting your brand 24/7, building long-term awareness and continuous engagement.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-8xl flex items-center justify-center flex-col mx-auto mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          </h2> */}
          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            Benefits of Article Publishing & Press Releases
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-3xl text-center">
            In today’s digital world, visibility is everything. Publishing
            powerful articles and press releases helps your brand reach global
            audiences, gain credibility, and establish a strong online presence.
            At Hyper Frame Media, we turn your story into news that inspires
            trust, drives engagement, and builds lasting impact.
          </p>
        </div>

        {/* Content Grid */}
        {/* Left Image Block */}

        {/* Right Benefit Cards */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {benefits.map((item, index, arr) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-sm hover:bg-yellow-400 hover:text-black/60 bg-black/40 border text-gray-400 ${
                index === benefits.length - 1
                  ? "sm:col-span-2 sm:justify-self-center sm:w-1/2"
                  : ""
              } hover:shadow-md transition-all`}
            >
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
