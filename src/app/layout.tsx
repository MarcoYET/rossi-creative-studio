import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const siteName = "Rossi Creative Studio";
const siteUrl = "https://rossicreativestudio.com";
const siteDesc =
  "Visionary design for bold brands. Brand identity, ads & campaign creative, 2D animation, and NFT & Web3 solutions. Based in Edmonton, serving clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Visionary Design for Bold Brands`,
    template: `%s | ${siteName}`,
  },
  description: siteDesc,
  keywords: [
    "brand identity",
    "logo design",
    "advertising design",
    "campaign creative",
    "2D animation",
    "NFT design",
    "Web3 design",
    "Edmonton design studio",
  ],
  applicationName: siteName,
  authors: [{ name: "Marco Rossi" }],
  creator: "Marco Rossi",
  publisher: "Rossi Creative Studio",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} – Visionary Design for Bold Brands`,
    description: siteDesc,
    images: [
      {
        url: "/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt:
          "Rossi Creative Studio – Brand Identity, Ads, 2D Animation, NFT & Web3",
      },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    site: "@RossiCreates",
    creator: "@RossiCreates",
    title: `${siteName} – Visionary Design for Bold Brands`,
    description: siteDesc,
    images: ["/og/og-home.jpg"],
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0E1333" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1333" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Nonce from middleware
  const nonce = headers().get("x-nonce") ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Let React/Next carry the nonce onto internal inline scripts */}
        {nonce && <meta property="csp-nonce" content={nonce} />}

        {/* Perf hint for Adobe Fonts */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        {/* Adobe Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/iye8rfv.css" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        {/* ✅ pass the nonce to ThemeProvider so next-themes inline init script is allowed */}
        <ThemeProvider nonce={nonce}>
          <Providers>
            <div className="antialiased font-newbery bg-background text-foreground flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>

        {/* JSON-LD: Organization */}
        <Script
          id="ld-org"
          nonce={nonce}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/apple-touch-icon.png`,
              sameAs: [
                "https://x.com/RossiCreates",
                "https://www.linkedin.com/in/marco-rossi-343877381/",
                "https://www.facebook.com/people/Rossi-Creative-Studio/61580093278129/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "marco@rossicreativestudio.com",
                  contactType: "customer support",
                  areaServed: "CA",
                  availableLanguage: ["English", "Italian"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Edmonton",
                addressCountry: "CA",
              },
            }),
          }}
        />

        {/* JSON-LD: WebSite */}
        <Script
          id="ld-website"
          nonce={nonce}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              name: siteName,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
