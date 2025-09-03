// app/about-us/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-newbery">
      {/* =========================
          HERO – text left, 16:9 image right
         ========================= */}
      <section className="relative w-full px-6 py-16 md:py-24 overflow-hidden"
               style={{ background: "linear-gradient(180deg, rgba(var(--rcc-branding),0.08) 0%, transparent 100%)" }}>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(var(--rcc-branding),0.10),transparent_55%),radial-gradient(120%_80%_at_0%_100%,rgba(var(--rcc-web3),0.10),transparent_55%)]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="md:col-span-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-industry font-bold leading-tight mb-4 text-[color:rgb(var(--rcc-branding))]">
              About Rossi Creative Studio
            </h1>
            <p className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90 mx-auto md:mx-0">
              Crafted Identity. Bold Expression. Creativity with a Personal Touch.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="/portfolio"
                className="px-6 py-3 font-medium bg-[color:rgb(var(--rcc-branding))] text-white rounded-full hover:brightness-110 transition-colors shadow-lg"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 font-medium border border-[color:rgb(var(--rcc-branding))] text-[color:rgb(var(--rcc-branding))] rounded-full hover:bg-[color:rgb(var(--rcc-branding))] hover:text-white transition-colors shadow-lg"
              >
                Let’s Talk
              </Link>
            </div>
          </div>

          {/* Right: 16:9 hero image */}
          <div className="md:col-span-6 relative">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/hero-about.webp"
                  alt="Abstract geometric background"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                {/* soft overlay for readability */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(var(--rcc-branding),0.18)] to-transparent" />
              </div>
            </div>
            {/* soft outer glow */}
            <div className="absolute right-2 md:right-6 -bottom-4 -z-10 h-48 w-48 blur-3xl opacity-40 bg-[conic-gradient(from_120deg,rgba(var(--rcc-branding),0.25),rgba(var(--rcc-anim),0.15),rgba(var(--rcc-web3),0.25),transparent_70%)]" />
          </div>
        </div>
      </section>

      {/* =========================
          MEET MARCO – image left (Web3 tint)
         ========================= */}
      <section className="w-full px-6 py-20 text-foreground"
               style={{ background: "linear-gradient(180deg, rgba(var(--rcc-web3),0.08) 0%, transparent 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-industry text-3xl font-bold mb-6 text-center text-[color:rgb(var(--rcc-web3))]">
            Meet Marco Rossi – Founder & Creative Lead
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: portrait */}
            <div className="relative w-full order-1 md:order-none">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(var(--rcc-web3),0.12),transparent_55%),radial-gradient(120%_80%_at_0%_100%,rgba(var(--rcc-anim),0.10),transparent_55%)]" />
                <div className="relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5]">
                  <Image
                    src="/marco-about.webp"
                    alt="Marco Rossi portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              </div>
              <div className="absolute -inset-2 -z-10 rounded-3xl blur-2xl opacity-40 bg-[conic-gradient(from_120deg,rgba(var(--rcc-web3),0.25),rgba(var(--rcc-anim),0.15),rgba(var(--rcc-branding),0.25),transparent_70%)]" />
            </div>

            {/* Right: text */}
            <div className="text-foreground/90 leading-relaxed space-y-4">
              <p>
                I’m Marco Rossi, an artist at heart and a designer by craft. I studied fine arts in Italy, where I first fell in love with drawing, composition, and visual storytelling. That passion naturally evolved into a deep connection with digital arts.
              </p>
              <p>
                At Rossi Creative Studio, I blend handcrafted ideas with modern tools — from Adobe Illustrator and Photoshop to cutting-edge AI platforms. I’m always learning, experimenting, and adapting — because creativity never stands still.
              </p>
              <p>
                For me, creating isn’t work — it’s a way of life. Every project is personal, every detail intentional, and every design rooted in meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT WE STAND FOR – Ads tint
         ========================= */}
      <section className="w-full px-6 py-20 text-foreground"
               style={{ background: "linear-gradient(180deg, rgba(var(--rcc-ads),0.08) 0%, transparent 100%)" }}>
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-8 text-center">
          <h2 className="font-industry text-3xl font-bold mb-4 text-[color:rgb(var(--rcc-ads))]">
            What We Stand For
          </h2>
          <p className="font-newbery text-lg text-foreground/90 leading-relaxed mb-4">
            Rossi Creative Studio is a personal design studio founded by Marco Rossi, offering creative solutions across branding, visual identity, and marketing design. Rooted in artistic craftsmanship and powered by modern design thinking, the studio blends classic tools with bold digital expression. This is not just a design service — it’s a creative signature.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-6">
            <p className="font-newbery text-foreground/80">
              <span className="font-semibold text-[color:rgb(var(--rcc-ads))]">Custom, Premium Design:</span> Everything is tailor-made with intention and care.
            </p>
            <p className="font-newbery text-foreground/80">
              <span className="font-semibold text-[color:rgb(var(--rcc-ads))]">Modern and minimal:</span> Clean aesthetics meet geometric structure.
            </p>
            <p className="font-newbery text-foreground/80">
              <span className="font-semibold text-[color:rgb(var(--rcc-ads))]">Rooted in Identity:</span> Every project reflects your unique brand DNA.
            </p>
            <p className="font-newbery text-foreground/80">
              <span className="font-semibold text-[color:rgb(var(--rcc-ads))]">Balanced Approach:</span> Where strategy meets handcrafted design.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CORE VALUES – Animation tint
         ========================= */}
      <section className="w-full px-6 py-20 text-foreground"
               style={{ background: "linear-gradient(180deg, rgba(var(--rcc-anim),0.08) 0%, transparent 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-industry text-3xl font-bold mb-6 text-center text-[color:rgb(var(--rcc-anim))]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✨", title: "Craftsmanship", text: "Meticulous attention to artistic detail in every step of the process." },
              { icon: "🤝", title: "Client-Centric", text: "Every project is a collaboration — your vision is our blueprint." },
              { icon: "💡", title: "Innovation", text: "We embrace new tools and fresh perspectives to stay ahead of the curve." },
            ].map((c, i) => (
              <div
                key={i}
                className="text-center bg-white/5 p-6 rounded-lg shadow-md border border-white/10 transition-transform hover:scale-[1.015] hover:border-[color:rgb(var(--rcc-anim))]"
              >
                <div className="mb-4 w-16 h-16 bg-[color:rgb(var(--rcc-anim))]/20 rounded-full flex items-center justify-center text-3xl mx-auto text-[color:rgb(var(--rcc-anim))]">
                  {c.icon}
                </div>
                <h3 className="font-industry text-xl font-semibold mb-2 text-foreground">{c.title}</h3>
                <p className="font-newbery text-foreground/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
         ========================= */}
      <section className="w-full px-6 py-20 text-foreground text-center"
               style={{ background: "linear-gradient(180deg, rgba(var(--rcc-branding),0.06) 0%, transparent 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-industry text-3xl font-bold mb-6 text-[color:rgb(var(--rcc-branding))]">
            Ready to Collaborate?
          </h2>
          <p className="font-newbery text-lg text-foreground/80 mb-8">
            Ready to launch something bold? Let’s build a brand that stands out.
          </p>
          <Link
            href="/contact"
            className="font-industry bg-[color:rgb(var(--rcc-branding))] hover:brightness-110 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}
