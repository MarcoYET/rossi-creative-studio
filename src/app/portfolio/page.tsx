// app/portfolio/page.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

/* --- Color helpers (use your RCC tokens) --- */
const sectionTint = (id: string) => {
  switch (id) {
    case "logos":
      return "linear-gradient(180deg, rgba(var(--rcc-branding),0.10) 0%, transparent 100%)";
    case "social":
      return "linear-gradient(180deg, rgba(var(--rcc-ads),0.10) 0%, transparent 100%)";
    case "nfts":
      return "linear-gradient(180deg, rgba(var(--rcc-web3),0.10) 0%, transparent 100%)";
    case "animation":
      return "linear-gradient(180deg, rgba(var(--rcc-anim),0.10) 0%, transparent 100%)";
    default:
      return "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)";
  }
};

const tileTint = (id: string) => {
  switch (id) {
    case "logos":
      return "from-[rgba(var(--rcc-branding),0.25)]";
    case "social":
      return "from-[rgba(var(--rcc-ads),0.25)]";
    case "nfts":
      return "from-[rgba(var(--rcc-web3),0.25)]";
    case "animation":
      return "from-[rgba(var(--rcc-anim),0.25)]";
    default:
      return "from-transparent";
  }
};

type PortfolioItem = {
  id: string;
  category: string;
  src: string;
  alt: string;
  grid: string;
  heightClass?: string;
};

type Category = { id: string; title: string };

const portfolioItems: PortfolioItem[] = [
  // --- Brand Identity Design ---
  { id: "logo_dolcilimoni", category: "logos", src: "/portfolio/brand-logos/dolcilimoni-logo.webp", alt: "Dolci Limoni brand logo", grid: "md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2", heightClass: "aspect-[4/3]" },
  { id: "logo_cotto", category: "logos", src: "/portfolio/brand-logos/cotto-logo.webp", alt: "Cotto Studio brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[4/3]" },
  { id: "logo_bluebell", category: "logos", src: "/portfolio/brand-logos/bluebell-logo.webp", alt: "Blue Bell Laundry Co. brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[4/3]" },
  { id: "logo_deft", category: "logos", src: "/portfolio/brand-logos/deft-logo.webp", alt: "DEFT brand logo", grid: "md:col-span-full md:row-span-2 lg:col-span-6 lg:row-span-2", heightClass: "aspect-[3/1]" },
  { id: "logo_lipt", category: "logos", src: "/portfolio/brand-logos/lipt-logo.webp", alt: "Lipt brand logo", grid: "md:col-span-1 md:row-span-2 lg:col-span-6 lg:row-span-2", heightClass: "aspect-[4/3]" },
  { id: "logo_elmsstasy", category: "logos", src: "/portfolio/brand-logos/elmsstasy-logo.webp", alt: "Elms & Stasy brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[4/3]" },
  { id: "logo_oroma", category: "logos", src: "/portfolio/brand-logos/oroma-logo.webp", alt: "Oroma brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[4/3]" },
  { id: "logo_marlowe", category: "logos", src: "/portfolio/brand-logos/marlowe-logo.webp", alt: "Marlowe Music School brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[3/1]" },
  { id: "logo_tacobite", category: "logos", src: "/portfolio/brand-logos/tacobite-logo.webp", alt: "Taco Bite brand logo", grid: "md:col-span-2 md:row-span-2 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[3/2]" },
  { id: "logo_youme", category: "logos", src: "/portfolio/brand-logos/youme-logo.webp", alt: "YouMe brand logo", grid: "md:col-span-full md:row-span-1 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[3/1]" },
  { id: "logo_elfuego", category: "logos", src: "/portfolio/brand-logos/elfuego-logo.webp", alt: "El Fuego brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "logo_realcanadianclub", category: "logos", src: "/portfolio/brand-logos/realcanadianclub-logo.webp", alt: "Real Canadian Club brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[1/1]" },

  // --- Typography & Color Palettes ---
  { id: "typo_deft", category: "logos", src: "/portfolio/typography-kits/deft-fonts.webp", alt: "DEFT typography kit", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "typo_tacobite", category: "logos", src: "/portfolio/typography-kits/tacobite-fonts.webp", alt: "Taco Bite typography kit", grid: "md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2", heightClass: "aspect-[1/1]" },
  { id: "palette_tacobite", category: "logos", src: "/portfolio/color-palettes/tacobite-palette.webp", alt: "Taco Bite color palette", grid: "md:col-span-1 md:row-span-1 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[3/1]" },
  { id: "palette_dolcilimoni", category: "logos", src: "/portfolio/color-palettes/dolcilimoni-palette.webp", alt: "Dolci Limoni color palette", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[9/16]" },
  { id: "palette_deft", category: "logos", src: "/portfolio/color-palettes/deft-palette.webp", alt: "DEFT typography kit", grid: "md:col-span-1 md:row-span-2 lg:col-span-3 lg:row-span-2", heightClass: "aspect-[9/16]" },
  { id: "palette_lipt", category: "logos", src: "/portfolio/color-palettes/lipt-palette.webp", alt: "Lipt color palette", grid: "md:col-span-1 md:row-span-1 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[16/9.7]" },

  // --- Letterheads & One-Pagers ---
  { id: "letter_bluebell", category: "logos", src: "/portfolio/letterheads/bluebell-letterhead.webp", alt: "Blue Bell Laundry Co. letterhead", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9.5/12.2]" },
  { id: "letter_cotto", category: "logos", src: "/portfolio/letterheads/cotto-letterhead.webp", alt: "Cotto Studio letterhead", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9.5/12.2]" },
  { id: "letter_elmsstasy", category: "logos", src: "/portfolio/letterheads/elmsstasy-letterhead.webp", alt: "Elms & Stasy brand logo", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9.5/12.2]" },
  { id: "letter_marlowe_alt", category: "logos", src: "/portfolio/letterheads/marlowe-letterhead.webp", alt: "Marlowe Music School letterhead", grid: "md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[9.5/12.2]" },
  { id: "letter_bluebell_james", category: "logos", src: "/portfolio/letterheads/bluebell-reference-james.webp", alt: "Blue Bell Laundry Co. reference letter for James", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[9.5/12.2]" },
  { id: "letter_bluebell_elena", category: "logos", src: "/portfolio/letterheads/bluebell-reference-elena.webp", alt: "Blue Bell Laundry Co. reference letter for Elena", grid: "md:col-span-full md:row-span-1 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[9.5/12.2]" },
  { id: "onepager_deft", category: "logos", src: "/portfolio/brand-onepagers/deft-onepager.webp", alt: "Deft brand identity one-pager", grid: "md:col-span-full md:row-span-2 lg:col-span-6 lg:row-span-2", heightClass: "aspect-[16/11]" },
  { id: "onepager_tacobite", category: "logos", src: "/portfolio/brand-onepagers/tacobite-onepager.webp", alt: "Taco Bite brand identity one-pager", grid: "md:col-span-full md:row-span-2 lg:col-span-3 lg:row-span-2", heightClass: "aspect-[16/10]" },
  { id: "onepager_lipt", category: "logos", src: "/portfolio/brand-onepagers/lipt-onepager.webp", alt: "Lipt brand identity one-pager", grid: "md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2", heightClass: "aspect-[16/10]" },
  { id: "onepager_dolcilimoni", category: "logos", src: "/portfolio/brand-onepagers/dolcilimoni-onepager.webp", alt: "Dolci Limoni brand identity one-pager", grid: "md:col-span-1 md:row-span-1 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[16/9]" },

  // --- 2D Animation Items ---
  { id: "anim1", category: "animation", src: "/portfolio/animation/anim1.mp4", alt: "Looping animation video", grid: "md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/16]" },
  { id: "anim2", category: "animation", src: "/portfolio/animation/anim2.mp4", alt: "2D animation video", grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/16]" },
  { id: "anim3", category: "animation", src: "/portfolio/animation/anim3.mp4", alt: "Explainer video snippet", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/16]" },
  { id: "anim4", category: "animation", src: "/portfolio/animation/anim4.mp4", alt: "Motion graphic video", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "anim5", category: "animation", src: "/portfolio/animation/anim5.mp4", alt: "Another standard animation", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "anim6", category: "animation", src: "/portfolio/animation/anim6.mp4", alt: "Another wide animation", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[3/4]" },

  // --- Product & Merch Design ---
  { id: "merch1", category: "merch", src: "/portfolio/merch/merch1.webp", alt: "T-shirt mockup", grid: "md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[3/4]" },
  { id: "merch2", category: "merch", src: "/portfolio/merch/merch2.webp", alt: "Tote bag design", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[3/4]" },
  { id: "merch3", category: "merch", src: "/portfolio/merch/merch3.webp", alt: "Product packaging", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[3/4]" },
  { id: "merch4", category: "merch", src: "/portfolio/merch/merch4.webp", alt: "Mug design", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[3/4]" },
  { id: "merch5", category: "merch", src: "/portfolio/merch/merch5.webp", alt: "Desk mat mockup", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[3/4]" },
  { id: "merch6", category: "merch", src: "/portfolio/merch/merch6.webp", alt: "Another tall merch item", grid: "md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2", heightClass: "aspect-[1/1]" },

  // --- NFT & Web3 Visuals ---
  { id: "nft1", category: "nfts", src: "/portfolio/nft/nft1.webp", alt: "NFT collection art", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "nft2", category: "nfts", src: "/portfolio/nft/nft2.webp", alt: "Animated NFT", grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "nft3", category: "nfts", src: "/portfolio/nft/nft3.webp", alt: "Coin icon design", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "nft4", category: "nfts", src: "/portfolio/nft/nft4.webp", alt: "Web3 visual promo", grid: "md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9.5/14]" },
  { id: "nft5", category: "nfts", src: "/portfolio/nft/nft5.webp", alt: "Another wide NFT", grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9.5/14]" },
  { id: "nft6", category: "nfts", src: "/portfolio/nft/nft6.webp", alt: "Another tall NFT", grid: "md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9.5/14]" },
  { id: "nft7", category: "nfts", src: "/portfolio/nft/nft7.webp", alt: "Another wide NFT", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[3/4]" },
  { id: "nft8", category: "nfts", src: "/portfolio/nft/nft8.webp", alt: "Another tall NFT", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[3/4]" },
  { id: "nft9", category: "nfts", src: "/portfolio/nft/nft9.webp", alt: "Another wide NFT", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[3/4]" },

  // --- Social Media Graphics ---
  { id: "social1", category: "social", src: "/portfolio/social/social1.webp", alt: "Static ad post", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[9/15]" },
  { id: "social2", category: "social", src: "/portfolio/social/social2.webp", alt: "Instagram carousel preview", grid: "md:col-span-1 md:row-span-1 lg:col-span-3 lg:row-span-1", heightClass: "aspect-[9/15]" },
  { id: "social3", category: "social", src: "/portfolio/social/social3.webp", alt: "Animated social ad", grid: "md:col-span-2 md:row-span-1 lg:col-span-6 lg:row-span-1", heightClass: "aspect-[1/1]" },
  { id: "social4", category: "social", src: "/portfolio/social/social4.webp", alt: "Story template example", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/14]" },
  { id: "social5", category: "social", src: "/portfolio/social/social5.webp", alt: "Another tall social item", grid: "md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/14]" },
  { id: "social6", category: "social", src: "/portfolio/social/social6.webp", alt: "Another tall social item", grid: "md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/14]" },
  { id: "social7", category: "social", src: "/portfolio/social/social7.webp", alt: "Another wide social item", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/14]" },
  { id: "social8", category: "social", src: "/portfolio/social/social8.webp", alt: "Another wide social item", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/14]" },
  { id: "social9", category: "social", src: "/portfolio/social/social9.webp", alt: "Another wide social item", grid: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1", heightClass: "aspect-[9/14]" },
];

const categories: Category[] = [
  { id: "logos", title: "Brand Identity" },
  { id: "animation", title: "Animation" },
  { id: "merch", title: "Merch Design" },
  { id: "nfts", title: "Web3 Design" },
  { id: "social", title: "Social Media" },
];

/* --- Section component (key lives on the component at call site) --- */
const PortfolioSection: React.FC<{ category: Category }> = ({ category }) => {
  const items = portfolioItems.filter((item) => item.category === category.id);

  return (
    <section
      id={category.id}
      className="w-full px-4 sm:px-6 py-10 text-foreground overflow-hidden"
      style={{ background: sectionTint(category.id) }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`
                relative group overflow-hidden rounded-lg shadow-lg border border-white/10
                transition-all duration-300 ease-in-out
                hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:brightness-110
                min-w-0
                col-span-full
                ${item.grid}
              `}
            >
              {/* Aspect wrapper controls height; keeps your per-item aspect */}
              <div className={`relative w-full ${item.heightClass ?? "aspect-[4/3]"} md:h-full`}>
                {item.category === "animation" ? (
                  <video
                    src={item.src}
                    title={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (min-width: 1025px) 66vw"
                    className="object-cover transition-all duration-500 ease-in-out transform"
                    priority={item.id === "logo_dolcilimoni"}
                  />
                )}

                {/* subtle bottom overlay for readability (category-colored) */}
                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t ${tileTint(
                    item.category
                  )} to-transparent`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-newbery">
      {/* Hero */}
      <section className="relative w-full py-28 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <h1 className="font-industry text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent-pink-dark mb-4">
          Our Creative Portfolio
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
          A curated selection of our best work, showcasing our diverse design capabilities.
        </p>
      </section>

      {/* Category nav */}
      <nav className="w-full bg-secondary-bg/50 backdrop-blur-md border-b border-white/10 py-4 px-6 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`#${cat.id}`}
              className="font-industry text-lg text-foreground hover:text-primary-accent transition-colors px-4 py-2 rounded-full border border-transparent hover:border-primary-accent"
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Sections */}
      {categories.map((category) => (
        <PortfolioSection key={category.id} category={category} />
      ))}

      {/* CTA */}
      <section className="w-full px-6 py-20 bg-transparent text-foreground text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-industry text-3xl font-bold mb-6 text-accent-pink-dark">
            Ready to Start Your Project?
          </h2>
        <p className="font-newbery text-lg text-foreground/80 mb-8">
            Let&apos;s create something remarkable together.
          </p>
          <Link
            href="/contact"
            className="font-industry bg-primary-accent hover:opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
