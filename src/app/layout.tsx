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
  title: "Maxwell Chan | Creative Developer",
  description: "Personal portfolio of Maxwell Chan, a developer building the future of web experiences.",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${orbitron.variable} antialiased bg-[#050505] text-white selection:bg-purple-500/30 selection:text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
