import type { Metadata } from "next";
import { Outfit, Orbitron } from "next/font/google"; // turbo
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxwellchan.me"),
  title: "Maxwell Chan",
  description: "Personal portfolio of Maxwell Chan, a Product Manager & Strategist building the future of web experiences.",
  keywords: ["Maxwell Chan", "Product Manager", "Strategy", "Consultant", "Developer", "Product Strategy", "UX Design"],
  authors: [{ name: "Maxwell Chan" }],
  creator: "Maxwell Chan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxwellchan.me",
    title: "Maxwell Chan | Product & Strategy",
    description: "Personal portfolio of Maxwell Chan, a Product Manager & Strategist building the future of web experiences.",
    siteName: "Maxwell Chan",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or update path
        width: 1200,
        height: 630,
        alt: "Maxwell Chan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell Chan | Product & Strategy",
    description: "Personal portfolio of Maxwell Chan, a Product Manager & Strategist building the future of web experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maxwell Chan",
    url: "https://maxwellchan.me",
    jobTitle: "Product Manager & Strategist",
    sameAs: [
      "https://www.linkedin.com/in/maxwellchan", // Replace with actual
      "https://github.com/maxwellchan" // Replace with actual
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${orbitron.variable} antialiased bg-[#050505] text-white selection:bg-purple-500/30 selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
