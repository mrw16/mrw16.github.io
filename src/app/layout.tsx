import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rifqi — Full-Stack Developer Portfolio",
  description:
    "Personal portfolio of Rifqi, a full-stack developer focused on building simple and intuitive digital experiences.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "Next.js",
    "TypeScript",
    "React",
  ],
  authors: [{ name: "Rifqi" }],
  openGraph: {
    title: "Rifqi — Full-Stack Developer Portfolio",
    description:
      "Full-stack developer focusing on building simple and intuitive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">{children}</body>
    </html>
  );
}
