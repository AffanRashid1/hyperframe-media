import { FC } from "react";
import Image from "next/image";

const WhyChooseUs: FC = () => {
  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
        </h2> */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-gray-200/30 bg-white/80 dark:bg-black/40 border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                {/* <div className="bg-yellow-400 text-white p-3 rounded-full -mt-10 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 .667-.333 1.333-.667 2H7l1-2H12zM5 13H3v6h2v-6zm16 6v-6h-2v6h2zM7 17h10v2H7v-2z"
                    />
                  </svg>
                </div> */}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

const features = [
  {
    title: "Trusted Expertise",
    description:
      "Our skilled PR and media experts bring years of experience to help your brand grow with credibility and confidence.",
    image: "./trusted-expertise.jpg",
  },
  {
    title: "Global Media Reach",
    description:
      "With access to 600+ international media platforms, we make sure your story gets noticed around the world.",
    image: "./global-media.jpg",
  },
  {
    title: "Customized Strategies",
    description:
      "Every brand is unique. We craft personalized PR and marketing plans designed to meet your goals and connect with your ideal audience.",
    image: "./customized-strategies.jpg",
  },
  {
    title: "Proven Success",
    description:
      "From startups to global brands, we’ve consistently delivered measurable results and lasting impact.",
    image: "./proven-success.webp",
  },
  {
    title: "Dedicated Team",
    description:
      "We guide you every step of the way from creative planning to media placement, ensuring smooth, transparent communication.",
    image: "./dedicated-team.webp",
  },
  {
    title: "Affordable Excellence",
    description:
      "Our competitive pricing makes premium PR services accessible to everyone without compromising on quality.",
    image: "./competitive-pricing.jpg",
  },
];
