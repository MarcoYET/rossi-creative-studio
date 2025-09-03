// app/faq/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What services do you offer?",
    a: "Brand identity, social media & ad design, product & merch, Web3/NFT visuals, and 2D animation. Custom packages available on request.",
  },
  {
    q: "How do we start a project?",
    a: "Send a quick brief via the contact form or email. We’ll respond with a few clarifying questions and a proposed scope & timeline.",
  },
  {
    q: "What’s your typical turnaround?",
    a: "Small items (e.g., single social post) can be 2–5 business days. Larger brand/identity packages depend on scope. Rush options are sometimes possible.",
  },
  {
    q: "What files do I receive?",
    a: "Finals are delivered in web and print formats (e.g., PNG/JPG/PDF/SVG). Source files (AI/PSD) available when scoped or licensed accordingly.",
  },
  {
    q: "What payment methods do you accept?",
    a: "E-transfer (Canada), credit/debit via invoice link, and PayPal for international clients.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

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
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(var(--rcc-branding),0.10),transparent_55%),radial-gradient(120%_80%_at_0%_100%,rgba(var(--rcc-anim),0.10),transparent_55%)]" />
        <h1 className="font-industry text-4xl sm:text-5xl md:text-6xl font-extrabold text-[color:rgb(var(--rcc-branding))] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground/90">
          Quick answers to the most common questions about working with us.
        </p>
      </section>

      {/* FAQ LIST */}
      <section
        className="w-full px-6 py-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-ads),0.06) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between text-left px-5 py-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-industry text-lg md:text-xl text-foreground">
                    {item.q}
                  </span>
                  <span className="text-2xl leading-none select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-foreground/80">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="text-center pt-8">
            <Link
              href="/contact"
              className="inline-block font-industry bg-[color:rgb(var(--rcc-branding))] hover:brightness-110 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
            >
              Still need help? Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* SMALL PRINT */}
      <section
        className="w-full px-6 py-14 text-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--rcc-web3),0.06) 0%, transparent 100%)",
        }}
      >
        <p className="text-sm text-foreground/60">
          Last updated: <span className="font-semibold">[Aug 31, 2025]</span>
        </p>
      </section>
    </main>
  );
}
