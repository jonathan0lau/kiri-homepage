import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { hasLocale } from "@/i18n/dictionaries";
import { getLegalDictionary } from "@/i18n/legal";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const document = getLegalDictionary(lang).terms;

  return {
    title: `${document.title} | Kiri Universe`,
    description: document.intro,
    alternates: {
      canonical: `/${lang}/terms`,
      languages: {
        "zh-CN": "/zh/terms",
        ja: "/ja/terms",
        en: "/en/terms",
        "x-default": "/en/terms",
      },
    },
  };
}

export default async function TermsPage({
  params,
}: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const legal = getLegalDictionary(lang);

  return (
    <LegalPage
      locale={lang}
      document={legal.terms}
      backHome={legal.backHome}
      lastUpdated={legal.lastUpdated}
    />
  );
}
