// app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-newbery">
      {/* HERO */}
      <section
        className="relative w-full py-24 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-branding),0.08) 0%, transparent 100%)",
        }}
      >
        <h1 className="font-industry text-4xl sm:text-5xl md:text-6xl font-extrabold text-[color:rgb(var(--rcc-branding))] mb-4">
          Terms & Conditions
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground/90">
          Please read these terms carefully before using our services or
          website.
        </p>
      </section>

      {/* CONTENT */}
      <section
        className="w-full px-6 py-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-ads),0.06) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground/80">
              By accessing or using Rossi Creative Studio’s website or services,
              you agree to be bound by these Terms & Conditions and any policies
              referenced herein.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold text-foreground mb-3">
              2. Services & Deliverables
            </h2>
            <p className="text-foreground/80">
              Project scope, timelines, and deliverables are outlined in writing
              before work begins. Revisions and file formats are provided as
              agreed in the proposal or invoice.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold text-foreground mb-3">
              3. Payments
            </h2>
            <p className="text-foreground/80">
              Unless otherwise stated, a deposit may be required to start a
              project. Final files are delivered upon receipt of full payment.
              Late payments may incur fees.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold text-foreground mb-3">
              4. Intellectual Property
            </h2>
            <p className="text-foreground/80">
              All concepts, drafts, and project files remain the property of
              Rossi Creative Studio until full payment is received. Licensing or
              transfer of source files must be explicitly agreed in writing.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold text-foreground mb-3">
              5. Portfolio Rights
            </h2>
            <p className="text-foreground/80">
              We may showcase completed projects in our portfolio and social
              channels unless otherwise agreed.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold text-foreground mb-3">
              6. Cancellations & Refunds
            </h2>
            <p className="text-foreground/80">
              If a project is cancelled, the client is responsible for work
              completed to date. Deposits are typically non-refundable unless
              otherwise stated.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg p-6">
            <h2 className="font-industry text-2xl font-semibold text-foreground mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-foreground/80">
              Rossi Creative Studio is not liable for any indirect, incidental,
              or consequential damages arising from use of our work or website.
            </p>
          </article>

          <p className="text-sm text-foreground/60 text-center">
            Last updated: <span className="font-semibold">[Aug 31, 2025]</span>
          </p>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block font-industry bg-[color:rgb(var(--rcc-branding))] hover:brightness-110 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
