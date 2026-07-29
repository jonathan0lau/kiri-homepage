import Link from "next/link";
import type { LegalDocument } from "@/i18n/legal";
import type { Locale } from "@/i18n/dictionaries";
import { siteConfig } from "@/config/site";

export function LegalPage({
  locale,
  document,
  backHome,
  lastUpdated,
}: {
  locale: Locale;
  document: LegalDocument;
  backHome: string;
  lastUpdated: string;
}) {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="container max-w-4xl">
        <header className="flex items-center justify-between gap-5 border-b border-white/10 pb-7">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 font-semibold tracking-wide"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-xs">
              K
            </span>
            <span>
              KIRI <span className="text-zinc-500">UNIVERSE</span>
            </span>
          </Link>
          <Link
            href={`/${locale}`}
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            ← {backHome}
          </Link>
        </header>

        <article className="py-14 md:py-20">
          <p className="eyebrow">{document.eyebrow}</p>
          <h1 className="section-title gradient-text">{document.title}</h1>
          <p className="mt-5 text-sm text-zinc-500">
            {lastUpdated}: {siteConfig.lastLegalUpdate}
          </p>
          <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
            {document.intro}
          </p>

          <div className="mt-14 space-y-12">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-zinc-100">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-zinc-400 md:text-base md:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
