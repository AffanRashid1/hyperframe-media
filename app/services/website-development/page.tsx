import { business1 } from "@/components/assets";
import Image from "next/image";

export default function WebDevelopmentServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">Website Development</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Your website is your digital headquarters. At Hypermedia Frame, we
          design and develop fast, mobile-friendly, and visually appealing
          websites that convert visitors into customers. Whether you’re a
          personal brand, startup, or established business — we create a site
          that reflects your identity and drives real results.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={business1}
            alt="Professional Website Development"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: CTA + Tagline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">
            Build a Professional, Responsive Website That Works for You
          </h2>
          <p className="text-gray-300 leading-relaxed">
            From concept to launch — and beyond — we handle everything so you
            get a stunning, high-performing website without the tech headaches.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Get Started Today
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
            <h3 className="font-semibold text-yellow-400">
              Custom Design & Development
            </h3>
            <p>
              Bespoke designs tailored to your brand using modern, secure
              technologies.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Responsive & Mobile-Friendly
            </h3>
            <p>
              Flawless experience across all devices — phones, tablets,
              desktops.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">CMS Integration</h3>
            <p>
              Easy-to-manage platforms like WordPress — update content yourself,
              anytime.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              E-commerce Solutions
            </h3>
            <p>
              Full online store setup with secure payments and inventory
              management.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              SEO & Speed Optimization
            </h3>
            <p>
              Clean code, blazing-fast load times, and SEO best practices
              built-in from day one.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-400">
              Ongoing Maintenance & Support
            </h3>
            <p>
              Backups, updates, and tech support — so your site stays secure and
              smooth.
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
              Credible Online Presence
            </h3>
            <p>Modern, professional design that builds instant trust.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">More Conversions</h3>
            <p>Turn visitors into leads, sales, and loyal customers.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Peace of Mind</h3>
            <p>Ongoing support means you’re never alone after launch.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to build or upgrade your website?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Click below for a free consultation on how we can bring your vision
          online — beautifully, quickly, and effectively.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Contact Us Now
        </button>
      </div>
    </div>
  );
}
