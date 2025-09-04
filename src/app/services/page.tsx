// app/services/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-newbery">
      {/* Hero (unchanged sizes) */}
      <section className="relative w-full py-28 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-industry font-bold leading-tight mb-4 text-accent-pink-dark">
          Creative Packages & Services
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
          Choose a complete package or explore individual services tailored to fit your vision and goals.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/portfolio" className="px-8 py-4 text-base sm:text-lg font-medium bg-primary-accent text-white rounded-full hover:bg-red-700 transition-colors shadow-lg">
            View All Portfolio
          </Link>
          <Link href="/contact" className="px-8 py-4 text-base sm:text-lg font-medium border border-primary-accent text-primary-accent rounded-full hover:bg-primary-accent hover:text-white transition-colors shadow-lg">
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Packages (keep sizes) */}
      <section className="w-full px-6 py-20 bg-transparent text-foreground">
        <h2 className="text-5xl font-industry font-bold mb-14 text-center text-accent-pink-dark">
          Our Curated Packages
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Brand Identity Launch Kit – colorized badges/hover only */}
          <div className="p-6 md:p-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-[color:rgb(var(--rcc-branding))] transition-colors shadow-lg flex flex-col items-center gap-6 group overflow-hidden relative">
            <span className="absolute top-4 left-4 bg-[color:rgb(var(--rcc-branding))] text-white text-lg font-bold px-3 py-1 rounded-md shadow-md z-10">
              33.5% OFF
            </span>
            <span className="absolute top-4 right-4 bg-[color:rgb(var(--rcc-branding))] text-white text-lg font-bold px-3 py-1 rounded-md shadow-md z-10">
              -38.8%
            </span>

            {/* image block unchanged */}
            <div className="relative w-full pb-[71.25%] rounded-md overflow-hidden flex-shrink-0">
              <Image src="/starter-launch-kit.webp" alt="Brand Identity Packages" fill sizes="100vw" style={{ objectFit: "cover" }} />
              {/* subtle bottom overlay for readability (color track) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[color:rgb(var(--rcc-branding))]/25 to-transparent" />
            </div>

            <div className="flex flex-col items-center text-center w-full">
              <h3 className="text-3xl font-industry font-semibold mb-3 text-[color:rgb(var(--rcc-branding))]">
                Brand Identity Launch Kit
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link href="/contact" className="px-6 py-3 text-sm font-medium bg-[color:rgb(var(--rcc-branding))] text-white rounded-full hover:brightness-110 transition-colors shadow-md">
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Social & Ads row – apply ADS track colors only */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Media Toolkit */}
            <div className="p-6 md:p-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-[color:rgb(var(--rcc-ads))] transition-colors shadow-lg flex flex-col items-center text-center group overflow-hidden relative">
              <span className="absolute top-4 right-4 bg-[color:rgb(var(--rcc-ads))] text-white text-lg font-bold px-3 py-1 rounded-md shadow-md z-10">
                -25%
              </span>

              {/* image block unchanged */}
              <div className="relative w-full pb-[100%] rounded-md overflow-hidden mb-6 flex-shrink-0">
                <Image
                  src="/social-media-toolkit.webp"
                  alt="Social Media Toolkit"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:rgb(var(--rcc-ads))]/25 to-transparent" />
              </div>

              <h3 className="text-2xl font-industry font-semibold mb-3 text-[color:rgb(var(--rcc-ads))]">
                Social Media Toolkit
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link href="/contact" className="px-6 py-3 text-sm font-medium bg-[color:rgb(var(--rcc-ads))] text-white rounded-full hover:brightness-110 transition-colors shadow-md">
                  Get Social Toolkit
                </Link>
              </div>
            </div>

            {/* Ads Toolkit */}
            <div className="p-6 md:p-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-[color:rgb(var(--rcc-ads))] transition-colors shadow-lg flex flex-col items-center text-center group overflow-hidden relative">
              <span className="absolute top-4 right-4 bg-[color:rgb(var(--rcc-ads))] text-white text-lg font-bold px-3 py-1 rounded-md shadow-md z-10">
                -25%
              </span>

              {/* image block unchanged */}
              <div className="relative w-full pb-[100%] rounded-md overflow-hidden mb-6 flex-shrink-0">
                <Image
                  src="/ads-toolkit.webp"
                  alt="Ads Toolkit"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:rgb(var(--rcc-ads))]/25 to-transparent" />
              </div>

              <h3 className="text-2xl font-industry font-semibold mb-3 text-[color:rgb(var(--rcc-ads))]">
                Ads Toolkit
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link href="/contact" className="px-6 py-3 text-sm font-medium bg-[color:rgb(var(--rcc-ads))] text-white rounded-full hover:brightness-110 transition-colors shadow-md">
                  Get Ads Toolkit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="w-full px-6 py-20 bg-background text-foreground">
        <h2 className="text-4xl font-industry font-bold mb-14 text-center text-accent-pink-dark">
          Individual Services
        </h2>
        <div className="max-w-7xl mx-auto">
          {/* BRANDING CATEGORY */}
          <div
            className="mb-12 rounded-xl p-0"
            style={{ background: "linear-gradient(180deg, rgba(var(--rcc-branding),0.10) 0%, transparent 100%)" }}
          >
            <h3 id="branding" className="text-3xl font-industry font-semibold text-[color:rgb(var(--rcc-branding))]">
              Brand Identity Design
            </h3>
            <p className="text-lg text-blue-500 font-semibold mb-6 mt-2">Price Range: $75 – $450 CAD</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Logo Design", price: "$450 CAD" },
                { name: "3D Icon Sample", price: "$180 CAD" },
                { name: "Brand Color Palette", price: "$120 CAD" },
                { name: "Typography Kit (Fonts + Guide)", price: "$100 CAD" },
                { name: "Brand Story (Visual + Written)", price: "$150 CAD" },
                { name: "Business Card Design", price: "$100 CAD" },
                { name: "Letterhead & Invoice Template", price: "$100 CAD" },
                { name: "1-Page Brand Presentation", price: "$130 CAD" },
                { name: "Style Guide (PDF)", price: "$200 CAD" },
                { name: "Favicon / App Icon", price: "$75 CAD" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-5 rounded-lg border border-white/10 shadow-lg transition-transform hover:scale-105 hover:border-[color:rgb(var(--rcc-branding))] hover:bg-white/10"
                >
                  <p className="text-sm md:text-base font-medium text-foreground/90">{service.name}</p>
                  <p className="text-sm md:text-base font-medium text-blue-500 mt-1">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio#logos" className="text-[color:rgb(var(--rcc-branding))] font-medium hover:underline text-lg">
                View More Brand Identity Projects
              </Link>
            </div>
          </div>

          {/* ADS CATEGORY */}
          <div
            className="mb-12 rounded-xl p-0"
            style={{ background: "linear-gradient(180deg, rgba(var(--rcc-ads),0.10) 0%, transparent 100%)" }}
          >
            <h3 id="social-media" className="text-3xl font-industry font-semibold text-[color:rgb(var(--rcc-ads))]">
              Social Media & Ad Design
            </h3>
            <p className="text-lg text-blue-500 font-semibold mb-6 mt-2">Price Range: $60 – $300 CAD</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Static Ad Post", price: "$60 CAD" },
                { name: "Animated Ad Post", price: "$120 CAD" },
                { name: "Instagram Carousel", price: "$130 CAD" },
                { name: "Profile Picture Design", price: "$75 CAD" },
                { name: "YouTube/X/Facebook Cover", price: "$90 CAD" },
                { name: "Canva or PSD Template Kit", price: "$140 CAD" },
                { name: "Story Templates", price: "$90 CAD" },
                { name: "Full Campaign Branding (Multi-post)", price: "$300 CAD" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-5 rounded-lg border border-white/10 shadow-lg transition-transform hover:scale-105 hover:border-[color:rgb(var(--rcc-ads))] hover:bg-white/10"
                >
                  <p className="text-sm md:text-base font-medium text-foreground/90">{service.name}</p>
                  <p className="text-sm md:text-base font-medium text-blue-500 mt-1">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio#social" className="text-[color:rgb(var(--rcc-ads))] font-medium hover:underline text-lg">
                View More Social Media Projects
              </Link>
            </div>
          </div>

          {/* MERCH CATEGORY (kept neutral but you can point to branding or ads if you prefer) */}
          <div className="mb-12 rounded-xl p-0" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)" }}>
            <h3 id="product-merch" className="text-3xl font-industry font-semibold text-accent-pink-dark">
              Product & Merch Design
            </h3>
            <p className="text-lg text-blue-500 font-semibold mb-6 mt-2">Price Range: $75 – $220 CAD</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "T-Shirt Mockup", price: "$75 CAD" },
                { name: "Hoodie / Sweater Design", price: "$90 CAD" },
                { name: "Tote Bag / Cap", price: "$90 CAD" },
                { name: "Mug / Bottle", price: "$80 CAD" },
                { name: "Packaging / Label Design", price: "$220 CAD" },
                { name: "Thank You Card / Insert", price: "$90 CAD" },
                { name: "Print-Ready File Prep (PDF, PSD)", price: "$75 CAD" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-5 rounded-lg border border-white/10 shadow-lg transition-transform hover:scale-105 hover:border-primary-accent hover:bg-white/10"
                >
                  <p className="text-sm md:text-base font-medium text-foreground/90">{service.name}</p>
                  <p className="text-sm md:text-base font-medium text-blue-500 mt-1">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio#merch" className="text-primary-accent font-medium hover:underline text-lg">
                View More Product & Merch Designs
              </Link>
            </div>
          </div>

          {/* WEB3 CATEGORY */}
          <div
            className="mb-12 rounded-xl p-0"
            style={{ background: "linear-gradient(180deg, rgba(var(--rcc-web3),0.10) 0%, transparent 100%)" }}
          >
            <h3 id="web3" className="text-3xl font-industry font-semibold text-[color:rgb(var(--rcc-web3))]">
              NFT & Web3 Visuals
            </h3>
            <p className="text-lg text-blue-500 font-semibold mb-6 mt-2">Price Range: $150 – $350 CAD</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "NFT Collection Art (Static/Animated)", price: "$250 CAD" },
                { name: "NFT Metadata Preview Card", price: "$120 CAD" },
                { name: "Minting Page UI (basic)", price: "$150 CAD" },
                { name: "Marketplace Banner or Thumbnail", price: "$100 CAD" },
                { name: "Minting Page Banner", price: "$120 CAD" },
                { name: "Whitepaper Visuals (e.g. charts)", price: "$200 CAD" },
                { name: "Token Icon or Coin Design", price: "$150 CAD" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-5 rounded-lg border border-white/10 shadow-lg transition-transform hover:scale-105 hover:border-[color:rgb(var(--rcc-web3))] hover:bg-white/10"
                >
                  <p className="text-sm md:text-base font-medium text-foreground/90">{service.name}</p>
                  <p className="text-sm md:text-base font-medium text-blue-500 mt-1">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio#nfts" className="text-[color:rgb(var(--rcc-web3))] font-medium hover:underline text-lg">
                View More Web3 & NFT Projects
              </Link>
            </div>
          </div>

          {/* ANIMATION CATEGORY */}
          <div
            className="mb-6 rounded-xl p-0"
            style={{ background: "linear-gradient(180deg, rgba(var(--rcc-anim),0.10) 0%, transparent 100%)" }}
          >
            <h3 id="animation" className="text-3xl font-industry font-semibold text-[color:rgb(var(--rcc-anim))]">
              2D Animation (Beta)
            </h3>
            <p className="text-lg text-blue-500 font-semibold mb-6 mt-2">Price Range: $75 – $200 CAD</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "NFT Video Promo", price: "$200 CAD" },
                { name: "Animated Social Media Post", price: "$120 CAD" },
                { name: "Story Loop or GIF", price: "$90 CAD" },
                { name: "Basic App Promo Animation", price: "$150 CAD" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-5 rounded-lg border border-white/10 shadow-lg transition-transform hover:scale-105 hover:border-[color:rgb(var(--rcc-anim))] hover:bg-white/10"
                >
                  <p className="text-sm md:text-base font-medium text-foreground/90">{service.name}</p>
                  <p className="text-sm md:text-base font-medium text-blue-500 mt-1">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio#animation" className="text-[color:rgb(var(--rcc-anim))] font-medium hover:underline text-lg">
                View More 2D Animation Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
              href="/contact"
              className="inline-block px-6 py-3 md:px-10 md:py-5 bg-primary-accent text-white font-semibold rounded-full
               hover:bg-red-700 transition-colors text-base md:text-lg shadow-lg whitespace-nowrap leading-none"
           >
              Inquire About a Custom Service
          </Link>
        </div>
      </section>
    </main>
  );
}
