import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import { getDictionary, hasLocale, locales } from "@/i18n/dictionaries";
import "../globals.css";

const sans = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiri-universe.vercel.app";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(baseUrl),
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "zh-CN": "/zh",
        ja: "/ja",
        en: "/en",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.socialDescription,
      type: "website",
      locale: lang === "zh" ? "zh_CN" : lang === "ja" ? "ja_JP" : "en_US",
      url: `/${lang}`,
      images: [
        {
          url: "/og.jpg",
          width: 1024,
          height: 1024,
          alt: "Kiri Universe",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.socialDescription,
      images: ["/og.jpg"],
    },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang === "zh" ? "zh-CN" : lang === "ja" ? "ja" : "en"}
      className={`${sans.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
