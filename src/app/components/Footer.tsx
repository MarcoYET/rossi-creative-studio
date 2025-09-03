// app/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaFacebookF,
} from "react-icons/fa6";

const SOCIALS = {
  x: "https://x.com/RossiCreates",
  facebook: "https://www.facebook.com/profile.php?id=61580093278129",
  linkedin: "https://www.linkedin.com/in/marco-rossi-343877381/",
  // behance: "https://www.behance.net/your_rossi_profile",
  // dribbble: "https://dribbble.com/your_rossi_profile",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-white/15 bg-white/5 backdrop-blur-lg text-foreground"
      aria-labelledby="footer-heading"
    >
      {/* Top area */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + contact */}
        <div className="space-y-4">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <Link href="/" className="inline-flex items-center" aria-label="Rossi Creative Studio – Home">
            <span className="relative block w-[180px] h-[48px] md:w-[200px] md:h-[53px]">
              <Image
                src="/logo.svg"
                alt="Rossi Creative Studio logo"
                fill
                sizes="(max-width: 768px) 180px, 200px"
                className="object-contain"
              />
            </span>
          </Link>

          <address className="not-italic text-sm/6 text-foreground/85">
            <div>Based in Edmonton, Canada — Serving clients worldwide</div>
            <div className="text-foreground/70">Licensed Edmonton Home-Based Business</div>
            <div className="mt-2">
              <a
                href="mailto:hello@rossicreativestudio.com"
                className="font-medium text-primary-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent/60 rounded-sm"
              >
                marco@rossicreativestudio.com
              </a>
            </div>
          </address>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links" className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base">
          <div className="space-y-2">
            <h3 className="font-industry text-lg font-semibold text-primary-accent mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="font-newbery hover:text-primary-accent transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="font-newbery hover:text-primary-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="font-newbery hover:text-primary-accent transition-colors">Services</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-industry text-lg font-semibold text-transparent select-none">.</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="font-newbery hover:text-primary-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="font-newbery hover:text-primary-accent transition-colors">Contact</Link></li>
              <li><Link href="/policy" className="font-newbery hover:text-primary-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </nav>

        {/* Connect & socials */}
        <div className="space-y-4">
          <h3 className="font-industry text-lg font-semibold text-primary-accent">Connect</h3>
          <p className="text-sm text-foreground/85">
            Follow our latest work and behind-the-scenes projects:
          </p>
          <div className="flex flex-wrap items-center gap-4 text-foreground">
            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on X (Twitter)"
              title="X (Twitter)"
              className="text-2xl hover:text-primary-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent/60 rounded-sm"
            >
              <FaXTwitter />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on LinkedIn"
              title="LinkedIn"
              className="text-2xl hover:text-primary-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent/60 rounded-sm"
            >
              <FaLinkedinIn />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
              title="Facebook"
              className="text-2xl hover:text-primary-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent/60 rounded-sm"
            >
              <FaFacebookF />
              <span className="sr-only">Facebook</span>
            </a>

            {/* Uncomment when ready */}
            {/* <a href={SOCIALS.behance} target="_blank" rel="noopener noreferrer" aria-label="Visit us on Behance" title="Behance" className="text-2xl hover:text-primary-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent/60 rounded-sm">
              <FaBehance /><span className="sr-only">Behance</span>
            </a>
            <a href={SOCIALS.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Visit us on Dribbble" title="Dribbble" className="text-2xl hover:text-primary-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent/60 rounded-sm">
              <FaDribbble /><span className="sr-only">Dribbble</span>
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-foreground/75">
          <p>© {currentYear} Rossi Creative Studio. All rights reserved.</p>
          <ul className="flex items-center gap-4">
            <li><Link href="/terms" className="hover:text-primary-accent transition-colors">Terms</Link></li>
            <li><Link href="/policy" className="hover:text-primary-accent transition-colors">Privacy</Link></li>
            <li><a href="mailto:hello@rossicreativestudio.com" className="hover:text-primary-accent transition-colors">marco@rossicreativestudio.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
