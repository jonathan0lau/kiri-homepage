import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: "FAQ | Kiri Universe" };
}

export default async function FAQPage({ params }: PageProps<"/[lang]/faq">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <main className="min-h-screen pt-12">
        <FAQSection dict={dict.faq} />
      </main>
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
