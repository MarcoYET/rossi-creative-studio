// app/privacy-policy/page.tsx
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-newbery">
      {/* HERO */}
      <section
        className="relative w-full py-24 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-web3),0.08) 0%, transparent 100%)",
        }}
      >
        <h1 className="font-industry text-4xl sm:text-5xl md:text-6xl font-extrabold text-[color:rgb(var(--rcc-web3))] mb-4">
          Privacy Policy
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground/90">
          Your privacy matters. Here’s how we collect, use, and protect your
          information.
        </p>
      </section>

      {/* CONTENT */}
      <section
        className="w-full px-6 py-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-anim),0.06) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <p className="text-foreground/80">
              We may collect personal information you provide (e.g., name,
              email, message content) when you contact us or request services.
              We may also collect basic usage data (e.g., analytics) to improve
              our website.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-foreground/80">
              To respond to inquiries, provide services, manage projects, and
              improve site performance. We do not sell your personal data.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold mb-3">
              3. Cookies & Analytics
            </h2>
            <p className="text-foreground/80">
              We may use cookies or third-party analytics to understand site
              usage. You can control cookies via your browser settings.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold mb-3">
              4. Data Retention
            </h2>
            <p className="text-foreground/80">
              We retain personal data only as long as necessary for the purposes
              outlined here, or as required by law.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold mb-3">
              5. Your Rights
            </h2>
            <p className="text-foreground/80">
              You may request access, correction, or deletion of your personal
              data. Contact us to exercise these rights.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold mb-3">
              6. Security
            </h2>
            <p className="text-foreground/80">
              We take reasonable measures to protect your data. However, no
              method of transmission or storage is 100% secure.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold mb-3">
              7. Contact
            </h2>
            <p className="text-foreground/80">
              For privacy questions or requests, email{" "}
              <a
                href="mailto:marco@rossicreativestudio.com"
                className="text-[color:rgb(var(--rcc-web3))] hover:underline"
              >
                marco@rossicreativestudio.com
              </a>
              .
            </p>
          </article>

          <p className="text-sm text-foreground/60 text-center">
            Last updated: <span className="font-semibold">[Aug 31, 2025]</span>
          </p>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block font-industry bg-[color:rgb(var(--rcc-web3))] hover:brightness-110 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
