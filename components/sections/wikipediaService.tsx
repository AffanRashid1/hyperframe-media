import Image from "next/image";
import { business1 } from "../assets";

export default function WikipediaServices() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mt-20 mb-12 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hypermedia Frame –{" "}
          <span className="text-yellow-400">Wikipedia Services</span>
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed whitespace-pre-line">
          {`In today's interconnected world, a strong online presence is paramount for individuals, brands, and organizations. Wikipedia, as one of the internet's most visited and trusted sources of information, offers an unparalleled platform for establishing credibility and reaching a global audience. At Hypermedia Frame, our Wikipedia Services are dedicated to helping you navigate the complexities of Wikipedia's policies and guidelines to create, optimize, and maintain a professional and unbiased presence on this influential encyclopedia.`}
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6 mb-20 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={business1}
            alt="Wikipedia Services"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-4 text-gray-300 leading-relaxed max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Why Wikipedia Matters</h2>
          <p>
            Wikipedia is often the first point of reference for anyone seeking
            information about a person, company, or topic. A well-crafted and
            verifiable Wikipedia page can significantly enhance your reputation,
            improve search engine visibility, and establish you as a notable
            entity within your field.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl px-6 mb-20 text-gray-300">
        <h2 className="text-3xl font-bold mb-6">
          Our Comprehensive Wikipedia Services Include:
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            1. Page Creation & Development
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Notability Assessment:</strong> We begin by thoroughly
              evaluating your notability based on Wikipedia's strict guidelines
              to determine if a page is feasible.
            </li>
            <li>
              <strong>Content Research & Drafting:</strong> Our expert writers
              conduct extensive research to gather verifiable, secondary
              sources, and craft a neutral, fact-based article in line with
              Wikipedia's editorial standards.
            </li>
            <li>
              <strong>Source Verification & Citation:</strong> We meticulously
              cite all information using credible, independent sources to ensure
              accuracy and meet Wikipedia's "no original research" policy.
            </li>
            <li>
              <strong>Draft Submission & Monitoring:</strong> We guide the
              article through the Article for Creation (AfC) process or direct
              submission, monitoring its progress and addressing any feedback
              from Wikipedia editors.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            2. Page Optimization & Enhancement
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Existing Page Improvement:</strong> For existing pages, we
              can enhance content, improve citations, expand sections, and
              ensure neutrality and factual accuracy.
            </li>
            <li>
              <strong>Adding Infoboxes & Images:</strong> We can integrate
              relevant infoboxes, categories, and properly licensed images to
              make your page more informative and visually appealing.
            </li>
            <li>
              <strong>Internal & External Linking:</strong> We optimize internal
              links within Wikipedia and add external links to authoritative
              sources, improving discoverability and credibility.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            3. Monitoring & Maintenance
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Vandalism & Disinformation Control:</strong> We actively
              monitor your Wikipedia page for any unauthorized edits, vandalism,
              or attempts to insert inaccurate information, and revert them
              promptly.
            </li>
            <li>
              <strong>Content Updates:</strong> As new significant achievements
              or developments occur, we update your Wikipedia page to keep it
              current and relevant.
            </li>
            <li>
              <strong>Dispute Resolution:</strong> In case of content disputes
              or editorial disagreements, we can assist in navigating
              discussions and reaching consensus within Wikipedia's community.
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">
            4. Consultation & Training
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Wikipedia Policy Explanation:</strong> We provide clear
              explanations of Wikipedia's complex policies (e.g., Notability,
              Neutral Point of View, Verifiability) relevant to your specific
              needs.
            </li>
            <li>
              <strong>Best Practices Guidance:</strong> We offer advice on how
              to interact with the Wikipedia community and maintain a positive
              presence on the platform.
            </li>
          </ul>
        </div>

        {/* Who Can Benefit */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-6">Who Can Benefit?</h2>
          <p>
            <strong>Prominent Individuals:</strong> Public figures, artists,
            scientists, entrepreneurs, and executives seeking to establish a
            verified online presence.
          </p>
          <p>
            <strong>Companies & Organizations:</strong> Businesses, non-profits,
            and educational institutions looking to enhance their brand
            reputation and provide reliable information.
          </p>
          <p>
            <strong>Public Relations & Marketing Agencies:</strong> Partners
            seeking expert assistance for their clients' Wikipedia presence.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-gray-800 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Establish Your Authority. Build Your Legacy.
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Partner with Hypermedia Frame to ensure your story is told accurately,
          credibly, and professionally on Wikipedia. Contact us today for a
          consultation and let's discuss how we can help you build a lasting
          presence on the world's largest encyclopedia.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
          Contact Us Today
        </button>
      </div>
    </div>
  );
}
