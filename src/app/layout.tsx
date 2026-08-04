import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono.ttf",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Syed Saleh — Computational Modeling & Data Analytics",
  description:
    "Syed Saleh is a Computational Modeling & Data Analytics student at Virginia Tech, building applied AI systems, data pipelines, and analytics tools.",
  metadataBase: new URL("https://syedsaleh.dev"),
  openGraph: {
    title: "Syed Saleh — Computational Modeling & Data Analytics",
    description:
      "Applied AI, data science, and machine learning — student portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-bg text-text font-sans antialiased selection:bg-accent selection:text-[#06100f]`}
      >
        {children}
      </body>
    </html>
  );
}
