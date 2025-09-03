// app/components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebookF,
  FaBars,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const SOCIALS = {
  x: "https://x.com/RossiCreates",
  facebook: "https://www.facebook.com/profile.php?id=61580093278129",
  linkedin: "https://www.linkedin.com/in/marco-rossi-343877381/",
  // behance: "https://www.behance.net/your_rossi_profile",
  // dribbble: "https://dribbble.com/your_rossi_profile",
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        target.id !== "mobile-menu-button"
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full px-5 py-4 bg-background text-foreground shadow-md z-50 relative">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground focus:outline-none text-2xl p-2 rounded-md hover:bg-foreground/10 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link href="/" className="flex-shrink-0" aria-label="Rossi Creative Studio — Home">
            <div className="relative w-[180px] h-[48px] md:w-[200px] md:h-[53px] lg:w-[220px] lg:h-[58px]">
              <Image
                src="/logo.svg"
                alt="Rossi Creative Studio logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Social Icons (desktop) */}
          <div className="hidden md:flex items-center gap-3 text-xl ml-4">
            <Link
              href={SOCIALS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-accent transition-colors duration-200"
              aria-label="Visit Rossi Creative Studio on X (Twitter)"
              title="X (Twitter)"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-accent transition-colors duration-200"
              aria-label="Visit Rossi Creative Studio on LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-accent transition-colors duration-200"
              aria-label="Visit Rossi Creative Studio on Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </Link>

            {/* Uncomment when ready
            <Link href={SOCIALS.behance} target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors duration-200" aria-label="Visit Rossi Creative Studio on Behance" title="Behance">
              <FaBehance />
            </Link>
            <Link href={SOCIALS.dribbble} target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors duration-200" aria-label="Visit Rossi Creative Studio on Dribbble" title="Dribbble">
              <FaDribbble />
            </Link>
            */}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-grow gap-8 text-lg font-newbery">
          <Link href="/" className="hover:text-primary-accent transition-colors duration-200">
            Home
          </Link>
          <Link href="/services" className="hover:text-primary-accent transition-colors duration-200">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-primary-accent transition-colors duration-200">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-primary-accent transition-colors duration-200">
            About
          </Link>
        </div>

        {/* Right Section: Contact Button (desktop) */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            href="/contact"
            className="hidden md:block px-6 py-3 bg-primary-accent text-white rounded-full hover:bg-red-700 transition-colors shadow-lg font-medium"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 left-0 w-64 bg-background transform transition-transform duration-300 ease-in-out z-40 p-6 flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden shadow-lg border-r border-foreground/10`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={closeMobileMenu}
            className="text-foreground text-3xl focus:outline-none hover:text-primary-accent transition-colors duration-200"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile logo */}
        <div className="flex justify-center mb-8 pb-4 border-b border-foreground/20">
          <Link href="/" onClick={closeMobileMenu} aria-label="Rossi Creative Studio — Home">
            <div className="relative w-[150px] h-[40px]">
              <Image src="/logo.svg" alt="Rossi Creative Studio logo" fill className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Mobile Social Icons */}
        <div className="flex items-center justify-center gap-4 text-2xl mb-8 border-b border-foreground/20 pb-4">
          <Link
            href={SOCIALS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-accent transition-colors duration-200"
            aria-label="Visit Rossi Creative Studio on X (Twitter)"
            title="X (Twitter)"
          >
            <FaXTwitter />
          </Link>
          <Link
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-accent transition-colors duration-200"
            aria-label="Visit Rossi Creative Studio on LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-accent transition-colors duration-200"
            aria-label="Visit Rossi Creative Studio on Facebook"
            title="Facebook"
          >
            <FaFacebookF />
          </Link>

          {/* Uncomment when ready
          <Link href={SOCIALS.behance} target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors duration-200" aria-label="Visit Rossi Creative Studio on Behance" title="Behance">
            <FaBehance />
          </Link>
          <Link href={SOCIALS.dribbble} target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors duration-200" aria-label="Visit Rossi Creative Studio on Dribbble" title="Dribbble">
            <FaDribbble />
          </Link>
          */}
        </div>

        {/* Mobile menu links */}
        <div className="flex flex-col gap-6 text-xl font-newbery overflow-y-auto">
          <Link href="/" onClick={closeMobileMenu} className="hover:text-primary-accent py-2 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" onClick={closeMobileMenu} className="hover:text-primary-accent py-2 transition-colors duration-200">
            About
          </Link>
          <Link href="/services" onClick={closeMobileMenu} className="hover:text-primary-accent py-2 transition-colors duration-200">
            Services
          </Link>
          <Link href="/portfolio" onClick={closeMobileMenu} className="hover:text-primary-accent py-2 transition-colors duration-200">
            Portfolio
          </Link>
          <Link href="/contact" onClick={closeMobileMenu} className="hover:text-primary-accent py-2 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
