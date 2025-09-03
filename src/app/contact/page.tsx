// app/contact/page.tsx
import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaFacebook,
} from "react-icons/fa6";

// Your real social URLs
const socials = {
  x: "https://x.com/RossiCreates",
  linkedin: "https://www.linkedin.com/in/marco-rossi-343877381/",
  facebook:
    "https://www.facebook.com/people/Rossi-Creative-Studio/61580093278129/",
  behance: "https://behance.net/your_rossi_profile",
  dribbble: "https://dribbble.com/your_rossi_profile",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-newbery">
      {/* =========================
          HERO – Branding tint
         ========================= */}
      <section
        className="relative w-full py-28 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-branding),0.08) 0%, transparent 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(var(--rcc-branding),0.10),transparent_55%),radial-gradient(120%_80%_at_0%_100%,rgba(var(--rcc-web3),0.10),transparent_55%)]" />
        <h1 className="font-industry text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[color:rgb(var(--rcc-branding))] mb-4">
          Get in Touch with Rossi Creative Studio
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
          We’re excited to hear about your project! Reach out to us through the following channels.
        </p>

        <p className="font-newbery text-sm text-foreground/50 mt-2">
          Last Updated: <span className="font-semibold">July 13, 2025</span>
        </p>
      </section>

      {/* =========================
          CONTACT FORM – Ads tint
         ========================= */}
      <section
        className="w-full px-6 py-20 text-foreground"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-ads),0.08) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-8">
          <h2 className="font-industry text-3xl font-bold mb-6 text-[color:rgb(var(--rcc-ads))] text-center">
            Send Us a Message
          </h2>

          <form className="w-full text-foreground space-y-6" autoComplete="on" noValidate>
            {/* Honeypot (spam guard) */}
            <input
              type="text"
              name="company_hp"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="name"
                className="font-newbery block text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                className="font-newbery shadow appearance-none border rounded w-full py-2 px-3 text-background leading-tight bg-foreground/10 border-foreground/20 placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:rgb(var(--rcc-branding))] focus:border-[color:rgb(var(--rcc-branding))]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-newbery block text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                inputMode="email"
                className="font-newbery shadow appearance-none border rounded w-full py-2 px-3 text-background leading-tight bg-foreground/10 border-foreground/20 placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:rgb(var(--rcc-branding))] focus:border-[color:rgb(var(--rcc-branding))]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-newbery block text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                autoComplete="on"
                className="font-newbery shadow appearance-none border rounded w-full py-2 px-3 text-background leading-tight bg-foreground/10 border-foreground/20 placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:rgb(var(--rcc-branding))] focus:border-[color:rgb(var(--rcc-branding))]"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="font-industry bg-[color:rgb(var(--rcc-branding))] hover:brightness-110 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[color:rgb(var(--rcc-branding))] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =========================
          OTHER CONTACT METHODS – Web3 tint
         ========================= */}
      <section
        className="w-full px-6 py-20 text-foreground"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-web3),0.08) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-industry text-3xl font-bold mb-6 text-[color:rgb(var(--rcc-web3))] text-center">
            Other Ways to Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email card */}
            <div className="text-center bg-white/5 p-6 rounded-lg shadow-md border border-white/10 transition hover:border-[color:rgb(var(--rcc-web3))]">
              <div className="mb-4 w-16 h-16 bg-[color:rgb(var(--rcc-web3))]/20 rounded-full flex items-center justify-center text-3xl mx-auto text-[color:rgb(var(--rcc-web3))]">
                📧
              </div>
              <h3 className="font-industry text-xl font-semibold mb-2 text-foreground">
                Email Us Directly
              </h3>
              <p className="font-newbery text-foreground/80">
                For general inquiries and project discussions.
              </p>
              <a
                href="mailto:marco@rossicreativestudio.com"
                className="font-newbery block text-[color:rgb(var(--rcc-web3))] hover:underline mt-2"
              >
                marco@rossicreativestudio.com
              </a>
            </div>

            {/* Socials card */}
            <div className="text-center bg-white/5 p-6 rounded-lg shadow-md border border-white/10 transition hover:border-[color:rgb(var(--rcc-web3))]">
              <div className="mb-4 w-16 h-16 bg-[color:rgb(var(--rcc-web3))]/20 rounded-full flex items-center justify-center text-3xl mx-auto text-[color:rgb(var(--rcc-web3))]">
                💬
              </div>
              <h3 className="font-industry text-xl font-semibold mb-2 text-foreground">
                Connect on Socials
              </h3>
              <p className="font-newbery text-foreground/80">
                Follow our creative journey and insights.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-foreground">
                <a
                  href={socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-3xl hover:text-[color:rgb(var(--rcc-web3))] transition-colors"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-3xl hover:text-[color:rgb(var(--rcc-web3))] transition-colors"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-3xl hover:text-[color:rgb(var(--rcc-web3))] transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href={socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                  className="text-3xl hover:text-[color:rgb(var(--rcc-web3))] transition-colors"
                >
                  <FaBehance />
                </a>
                <a
                  href={socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                  className="text-3xl hover:text-[color:rgb(var(--rcc-web3))] transition-colors"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LOCATION – Animation tint
         ========================= */}
      <section
        className="w-full px-6 py-20 text-foreground"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-anim),0.08) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-8 text-center">
          <h2 className="font-industry text-3xl font-bold mb-6 text-[color:rgb(var(--rcc-anim))]">
            Our Location
          </h2>
          <p className="font-newbery text-lg text-foreground/80 mb-6">
            Based in Edmonton, Alberta, Canada.
          </p>

          {/* Google Maps embed */}
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="Rossi Creative Studio – Map"
              src="https://www.google.com/maps?q=Edmonton,Alberta&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* =========================
          FAQ CTA – Light branding tint
         ========================= */}
      <section
        className="w-full px-6 py-20 text-foreground text-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-branding),0.06) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-industry text-3xl font-bold mb-6 text-[color:rgb(var(--rcc-branding))]">
            Have More Questions?
          </h2>
          <p className="font-newbery text-lg text-foreground/80 mb-8">
            Find quick answers to common inquiries in our comprehensive FAQ
            section.
          </p>
          <Link
            href="/faq"
            className="font-industry bg-[color:rgb(var(--rcc-branding))] hover:brightness-110 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            View FAQ
          </Link>
        </div>
      </section>
    </main>
  );
}
