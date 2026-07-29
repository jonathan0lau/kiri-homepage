import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { PhotoBooksCatalog } from "@/components/photo-books-catalog";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/photo-books">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return {
    title: `${dict.photoBooks.catalogHeading} | Kiri Universe`,
    description: dict.photoBooks.catalogDescription,
    alternates: {
      canonical: `/${lang}/photo-books`,
      languages: {
        "zh-CN": "/zh/photo-books",
        ja: "/ja/photo-books",
        en: "/en/photo-books",
        "x-default": "/en/photo-books",
      },
    },
    openGraph: {
      title: `${dict.photoBooks.catalogHeading} | Kiri Universe`,
      description: dict.photoBooks.catalogDescription,
      url: `/${lang}/photo-books`,
    },
  };
}

export default async function PhotoBooksPage({
  params,
}: PageProps<"/[lang]/photo-books">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <PhotoBooksCatalog locale={lang} dict={dict} />
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
