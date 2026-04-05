import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shubh Rathore | Backend Developer",
  description:
    "Portfolio of Shubh Rathore — Backend Developer building scalable APIs and production systems with Node.js, TypeScript, PostgreSQL, and MongoDB.",
  keywords: [
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "Blockchain",
    "Solana",
    "Solidity",
  ],
  authors: [{ name: "Shubh Rathore" }],
  openGraph: {
    title: "Shubh Rathore | Backend Developer",
    description:
      "Scalable APIs, real-time backends, and production-grade systems — Node.js, TypeScript, and data stores you can ship on.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
