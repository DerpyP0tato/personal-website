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
});

export const metadata: Metadata = {
  title: "Maxwell Chan | Creative Developer",
  description: "Personal portfolio of Maxwell Chan, a developer building the future of web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${orbitron.variable}`}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
