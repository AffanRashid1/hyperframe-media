import Link from "next/link";
import { Icons } from "@/components/icons";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export function SiteFooter() {
  return (
    <>
      <footer className="border-t bg-black backdrop-blur-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-20">
          {/* Logo and Site Name */}
          <div className="flex items-center gap-2">
            {/* <Icons.logo className="h-5 w-5" /> */}
            <span className="font-semibold text-sm uppercase tracking-wide">
              Hypermedia Frame
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <Link
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* ScrollToTop should be here */}
      <ScrollToTopButton />
    </>
  );
}
