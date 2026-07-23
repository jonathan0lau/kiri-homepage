import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_JP({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiri-universe.vercel.app"),
  title: "Kiri Universe | Official Fan Portal",
  description: "Explore Kiri Universe, discover the latest works, follow updates on X, visit Fantia, and join the fan community.",
  openGraph: {
    title: "Kiri Universe | Official Fan Portal",
    description: "Enter Kiri's world of art, stories, and community.",
    type: "website",
    images: [{ url: "/og.jpg", width: 1024, height: 1024, alt: "Kiri Universe" }],
  },
  twitter: { card: "summary_large_image", title: "Kiri Universe", description: "Enter Kiri's world of art, stories, and community.", images: ["/og.jpg"] },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" className={`${sans.variable} ${display.variable}`}><body>{children}</body></html>;
}
