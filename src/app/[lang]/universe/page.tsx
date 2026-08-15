import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SimplePageShell } from "@/components/simple-page-shell";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/universe">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: "Universe | Kiri Universe" };
}

export default async function UniversePage({ params }: PageProps<"/[lang]/universe">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <SimplePageShell locale={lang} eyebrow="Universe" title="Kiri Universe" description={dict.profile.description}>
        <div className="space-y-4 text-sm leading-7 text-zinc-400">
          <p>{dict.about.note}</p>
          <p>{dict.profile.quote}</p>
          <div className="flex flex-wrap gap-2 pt-4">
            {dict.profile.keywords.map((keyword) => (
              <span key={keyword} className="border border-white/[.08] px-3 py-1 text-zinc-300">{keyword}</span>
            ))}
          </div>
        </div>
      </SimplePageShell>
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
