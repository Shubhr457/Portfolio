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
  title: "Shubh Rathore | Blockchain & Backend Developer",
  description: "Portfolio of Shubh Rathore - Blockchain & Backend Developer specializing in Smart Contracts, Solidity, Rust (Anchor), Node.js, and Web3 Engineering",
  keywords: ["Blockchain Developer", "Smart Contracts", "Solidity", "Rust", "Anchor", "Web3", "Node.js", "Backend Developer"],
  authors: [{ name: "Shubh Rathore" }],
  openGraph: {
    title: "Shubh Rathore | Blockchain & Backend Developer",
    description: "Building secure, scalable smart contracts and backend systems for Web3",
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
