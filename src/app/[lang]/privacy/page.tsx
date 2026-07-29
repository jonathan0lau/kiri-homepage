import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { hasLocale } from "@/i18n/dictionaries";
import { getLegalDictionary } from "@/i18n/legal";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const document = getLegalDictionary(lang).privacy;

  return {
    title: `${document.title} | Kiri Universe`,
    description: document.intro,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        "zh-CN": "/zh/privacy",
        ja: "/ja/privacy",
        en: "/en/privacy",
        "x-default": "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const legal = getLegalDictionary(lang);

  return (
    <LegalPage
      locale={lang}
      document={legal.privacy}
      backHome={legal.backHome}
      lastUpdated={legal.lastUpdated}
    />
  );
}
