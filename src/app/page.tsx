"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-newbery">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[92vh] flex flex-col items-center justify-end text-center overflow-hidden">
        {/* Desktop video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Animated background with headline for desktop"
          poster="/hero-text-static-fallback.webp"
        >
          <source src="/hero-text-animation-desktop.mp4" type="video/mp4" />
        </video>

        {/* Mobile video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Animated background with headline for mobile"
          poster="/hero-text-static-fallback2.webp"
        >
          <source src="/hero-text-animation-mobile.mp4" type="video/mp4" />
        </video>

        {/* Hero content (H1 è nel video) */}
        <div className="relative z-20 max-w-5xl mx-auto w-full px-4 pb-10">
          <p className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed mt-4 mb-8 mx-auto text-foreground/85">
            Brand Identity • Ads • 2D Animation • NFT & Web3
          </p>

          {/* CTA */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 text-base sm:text-lg font-semibold bg-primary-accent text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 text-base sm:text-lg font-semibold border border-primary-accent text-primary-accent rounded-full hover:bg-primary-accent hover:text-white transition-colors shadow-lg"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full px-6 py-20 bg-transparent text-foreground">
        <h2 className="text-5xl font-industry font-bold text-center mb-14 text-accent-pink-dark">
          Our Specialized Services
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Brand Identity (full width) */}
          <div className="w-full rounded-xl bg-white/5 backdrop-blur-lg border border-white/15 hover:border-[color:rgb(var(--rcc-branding))] transition-colors shadow-md overflow-hidden flex flex-col group">
            <div className="relative w-full aspect-[16/9] min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]">
              <Image
                src="/brand-identity-bg.webp"
                alt="Logo and Brand Identity background"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* overlay leggibile */}
            <div className="p-0">
              <div className="mx-4 md:mx-8 -mt-10 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 shadow-xl p-6 sm:p-8 text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-industry font-semibold mb-3 heading-branding glow-branding">
                  LOGO & BRAND IDENTITY
                </h3>
                <p className="text-base sm:text-lg leading-relaxed mb-4 text-white/95">
                  We craft compelling brand stories with unique logos, full visual systems, and comprehensive style guides. Each project includes a custom NFT to anchor your digital presence.
                </p>
                <Link href="/services#branding" className="text-base font-medium text-primary-accent hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Ads + Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ads (2 cols) */}
            <div className="col-span-full md:col-span-2 rounded-xl bg-white/5 backdrop-blur-lg border border-white/15 hover:border-[color:rgb(var(--rcc-ads))] transition-colors shadow-md overflow-hidden flex flex-col group">
              <div className="relative w-full h-[250px] md:h-[280px] lg:h-[500px]">
                <Image
                  src="/ads-campaign-bg.webp"
                  alt="Ads and Campaign Management background"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 1200px"
                  className="object-cover"
                />
              </div>

              <div className="p-0">
                <div className="mx-4 md:mx-8 -mt-10 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 shadow-xl p-6 sm:p-8 text-center">
                  <h3 className="text-3xl md:text-4xl font-industry font-semibold mb-3 heading-ads glow-ads">
                    ADS & CAMPAIGN MANAGEMENT
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-4 text-white/95">
                    We drive growth with targeted strategies, eye-catching creatives, and optimized advertising campaigns designed to deliver results.
                  </p>
                  <Link href="/services#ads" className="text-sm font-medium text-primary-accent hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Animation (1 col) */}
            <div className="col-span-full md:col-span-1 rounded-xl bg-white/5 backdrop-blur-lg border border-white/15 hover:border-[color:rgb(var(--rcc-anim))] transition-colors shadow-md overflow-hidden flex flex-col group">
              <div className="relative w-full h-[250px] md:h-[280px] lg:h-[500px]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Dynamic 2D Animation background video"
                  poster="/ads-campaign-bg.webp"
                >
                  <source src="/dynamic-2d-bg.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="p-0">
                <div className="mx-4 md:mx-8 -mt-10 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 shadow-xl p-6 sm:p-8 text-center">
                  <h3 className="text-3xl md:text-4xl font-industry font-semibold mb-3 heading-anim glow-anim">
                    DYNAMIC 2D ANIMATION
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-4 text-white/95">
                    We bring your message to life through captivating 2D animations for explainers, social media, and promotional storytelling.
                  </p>
                  <Link href="/services#animation" className="text-sm font-medium text-primary-accent hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFT & Web3 */}
      <section className="w-full px-6 py-20 bg-transparent text-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-industry font-bold mb-8 heading-web3 glow-web3">
            UNLOCK THE DIGITAL FRONTIER WITH NFT & WEB3
          </h2>
          <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/15 hover:border-[color:rgb(var(--rcc-web3))] transition-colors shadow-md flex flex-col items-center text-center group">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
              <strong>NFT & Web3 Solutions</strong> – Helping brands step into the digital future with custom NFTs, smart contracts, and community tools.
            </p>
            <Link
              href="/services#web3"
              className="px-8 py-4 text-base sm:text-lg font-medium border border-primary-accent text-primary-accent rounded-full hover:bg-primary-accent hover:text-white transition-colors shadow-lg"
            >
              Explore NFT & Web3
            </Link>
          </div>
        </div>
      </section>

      {/* About (short) */}
      <section className="w-full px-6 py-20 bg-transparent text-foreground">
        <h2 className="text-5xl font-industry font-bold text-center mb-16 text-accent-pink-dark">
          Artistry Meets Innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <p className="max-w-3xl mx-auto md:mx-0 text-lg sm:text-xl leading-relaxed mb-8 text-foreground/90">
              Marco Rossi is an Italian-trained artist blending classic craft with cutting-edge tools. We design high-impact visuals with strategy, precision, and originality. Rooted in Italy’s timeless design culture, elevated by modern innovation.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link href="/about" className="text-primary-accent font-medium hover:underline text-lg">
                Read More About Us
              </Link>
            </div>
          </div>

          {/* Images */}
          <div className="relative w-full max-w-sm md:max-w-md mx-auto h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
            <div className="absolute top-0 left-5 w-2/3 h-2/3 rounded-lg shadow-xl z-20 rotate-6 overflow-hidden">
              <Image
                src="/artistry-image-1.webp"
                alt="Abstract art blending tradition and technology"
                fill
                sizes="(max-width: 768px) 66vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-20 right-10 w-2/3 h-2/3 rounded-lg shadow-xl z-10 -rotate-6 overflow-hidden">
              <Image
                src="/artistry-image-2.webp"
                alt="Digital design concept representing innovation"
                fill
                sizes="(max-width: 768px) 66vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-6 py-20 text-center bg-transparent text-foreground">
        <h2 className="text-5xl font-industry font-bold mb-10 text-accent-pink-dark">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-10 text-foreground/90">
          Whether you’re building a bold new brand, launching a high-impact campaign, or growing your digital presence, we’re here to create something extraordinary with you.
        </p>

        <Link
          href="/contact"
          className="px-10 py-5 bg-primary-accent text-white font-semibold rounded-full hover:bg-red-700 transition-colors text-lg shadow-lg"
        >
          Connect with Us Today
        </Link>
      </section>
    </main>
  );
}
