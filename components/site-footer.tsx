"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaStar } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-12 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ---- Column 1: Logo + Description ---- */}
        <div>
          <Image
            src="/logo.png"
            alt="Global PR Services"
            width={130}
            height={60}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Specializes in media relations, PR campaigns, and SEO-optimized
            content, helping brands enhance visibility and build credibility
            globally. We deliver tailored solutions for impactful engagement and
            measurable results.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-sm text-gray-300">Follow us on</p>
          </div>
          <div className="flex gap-3 mb-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-pink-600 hover:bg-pink-700 rounded"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>

          {/* Trustpilot */}
          <div className="flex items-center gap-2">
            <FaStar className="text-green-500 w-6 h-6" />
            <span className="font-semibold text-lg">Trustpilot</span>
          </div>
          <div className="flex gap-1 mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="text-green-500 w-5 h-5" />
              ))}
          </div>
        </div>

        {/* ---- Column 2: Quick Links ---- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-yellow-400 transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#quote" className="hover:text-yellow-400 transition">
                Get a quote
              </Link>
            </li>
          </ul>
        </div>

        {/* ---- Column 3: Our Services ---- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Editorial Article Publishing</li>
            <li>Press Release Distribution</li>
            <li>Why Global PR</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ---- Column 4: Contact Us ---- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="flex items-center gap-3 mb-3 text-gray-400 text-sm">
            <Phone className="w-4 h-4 text-yellow-400" />
            <span className="font-medium text-white">123-456-7891</span>
          </div>
          <div className="flex items-center gap-3 mb-3 text-gray-400 text-sm">
            <Mail className="w-4 h-4 text-yellow-400" />
            <span>sales@hyperframemedia.com</span>
          </div>
          <div className="flex items-start gap-3 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
            <span>James Center, Richmond, VA 23219</span>
          </div>

          {/* Payment Icons
          <div className="mt-6">
            <Image
              src="/payments.png"
              alt="Payment Methods"
              width={220}
              height={40}
              className="rounded"
            />
          </div> */}
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="border-t border-white/10 mt-10 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Global PR Service. All Rights Reserved.
      </div>
    </footer>
  );
}

// import Link from "next/link";
// import { Icons } from "@/components/icons";
// import { ScrollToTopButton } from "@/components/scroll-to-top-button";
// import Image from "next/image";

// export function SiteFooter() {
//   return (
//     <>
//       <footer className="border-t bg-black backdrop-blur-lg">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-20">
//           {/* Logo and Site Name */}
//           <div className="flex items-center gap-2">
//             {/* <Icons.logo className="h-5 w-5" /> */}
//             {/* <span className="font-semibold text-sm uppercase tracking-wide">
//               Hypermedia Frame
//             </span> */}
//             <Image src={"./logo.png"} alt="Logo" width={100} height={100} />
//           </div>

//           {/* Navigation Links */}
//           <div className="flex gap-6 mt-4 md:mt-0 text-sm text-muted-foreground">
//             <Link
//               href="#about"
//               className="hover:text-foreground transition-colors"
//             >
//               About Us
//             </Link>
//             <Link
//               href="#services"
//               className="hover:text-foreground transition-colors"
//             >
//               Services
//             </Link>
//             <Link
//               href="#contact"
//               className="hover:text-foreground transition-colors"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4 md:mt-0">
//             <Link
//               href="https://youtube.com"
//               target="_blank"
//               rel="noreferrer"
//               className="text-muted-foreground hover:text-foreground transition-colors"
//             >
//               <Icons.youtube className="h-4 w-4" />
//               <span className="sr-only">YouTube</span>
//             </Link>
//             <Link
//               href="https://twitter.com"
//               target="_blank"
//               rel="noreferrer"
//               className="text-muted-foreground hover:text-foreground transition-colors"
//             >
//               <Icons.twitter className="h-4 w-4" />
//               <span className="sr-only">Twitter</span>
//             </Link>
//             <Link
//               href="https://github.com"
//               target="_blank"
//               rel="noreferrer"
//               className="text-muted-foreground hover:text-foreground transition-colors"
//             >
//               <Icons.gitHub className="h-4 w-4" />
//               <span className="sr-only">GitHub</span>
//             </Link>
//           </div>
//         </div>
//       </footer>

//       {/* ScrollToTop should be here */}
//       <ScrollToTopButton />
//     </>
//   );
// }
