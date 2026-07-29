import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Orbit } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { externalLinks, siteConfig } from "@/config/site";
import { ExternalLinkButton } from "./external-link-button";
import { PhotoBookCard } from "./photo-book-card";

export function PhotoBooksCatalog({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const photoBooks = dict.photoBooks;
  const subject = encodeURIComponent("Kiri Universe — Photo Book Inquiry");
  const mailto = `mailto:${siteConfig.purchaseEmail}?subject=${subject}`;

  return (
    <main className="min-h-screen">
      <header className="border-b border-white/[.07] bg-[#09090b]/80 backdrop-blur-xl">
        <div className="container flex min-h-[72px] flex-wrap items-center justify-between gap-4 py-3">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 font-semibold tracking-wide"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-violet-300/25 bg-violet-400/[.06] text-violet-200">
              <Orbit size={18} strokeWidth={1.4} aria-hidden="true" />
            </span>
            <span>
              KIRI <span className="text-zinc-500">UNIVERSE</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav
              aria-label={dict.language.label}
              className="flex items-center gap-3 text-xs text-zinc-500"
            >
              {(["zh", "ja", "en"] as const).map((code) => (
                <Link
                  key={code}
                  href={`/${code}/photo-books`}
                  hrefLang={code === "zh" ? "zh-CN" : code}
                  aria-current={code === locale ? "page" : undefined}
                  className={
                    code === locale
                      ? "text-violet-300"
                      : "transition hover:text-white"
                  }
                >
                  {dict.language.names[code]}
                </Link>
              ))}
            </nav>
            <Link
              href={`/${locale}`}
              className="hidden items-center gap-2 text-sm text-zinc-400 transition hover:text-white sm:flex"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              {photoBooks.backHome}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container text-center">
          <p className="eyebrow">{photoBooks.catalogEyebrow}</p>
          <h1 className="section-title gradient-text">
            {photoBooks.catalogHeading}
          </h1>
          <p className="section-copy mx-auto">
            {photoBooks.catalogDescription}
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {photoBooks.items.map((item) => (
              <PhotoBookCard
                key={item.id}
                item={item}
                inquiryLabel={photoBooks.open}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-[#0c0c11] py-20">
        <div className="container">
          <div className="glass mx-auto max-w-4xl rounded-[2rem] p-8 text-center md:p-12">
            <p className="eyebrow">Purchase Information</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-5xl">
              {photoBooks.inquiryHeading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              {photoBooks.inquiryDescription}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ExternalLinkButton
                href={mailto}
                variant="secondary"
                newTab={false}
              >
                <Mail size={17} aria-hidden="true" />
                {photoBooks.emailInquiry}
              </ExternalLinkButton>
              <ExternalLinkButton
                href={externalLinks.discord}
                variant="ghost"
              >
                <MessageCircle size={17} aria-hidden="true" />
                {photoBooks.discordInquiry}
              </ExternalLinkButton>
            </div>
            <p className="mt-5 text-xs text-zinc-600">
              {siteConfig.purchaseEmail}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-zinc-600">
              {photoBooks.purchaseNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
