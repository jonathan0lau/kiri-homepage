import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SimplePageShell } from "@/components/simple-page-shell";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: "About | Kiri Universe" };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <SimplePageShell locale={lang} eyebrow={dict.about.eyebrow} title={dict.about.heading} description={dict.about.body}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.about.pillars.map((pillar) => (
            <div key={pillar} className="border border-white/[.08] bg-white/[.03] p-6 text-zinc-200">{pillar}</div>
          ))}
        </div>
      </SimplePageShell>
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
