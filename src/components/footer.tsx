import Link from "next/link";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { externalLinks, siteConfig } from "@/config/site";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["footer"];
}) {
  const mailto = `mailto:${siteConfig.businessEmail}?subject=${encodeURIComponent(
    "Kiri Universe — Business Inquiry",
  )}`;

  return (
    <footer className="border-t border-white/10 bg-[#070708] py-12">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <Link
            href={`/${locale}#home`}
            className="font-[family-name:var(--font-display)] text-2xl"
          >
            {siteConfig.name}
          </Link>
          <nav
            aria-label={dict.ariaLabel}
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400"
          >
            <a
              href={externalLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              X
            </a>
            <a
              href={externalLinks.fantia}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Fantia
            </a>
            <a
              href={externalLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Discord
            </a>
            <a href={mailto} className="hover:text-white">
              {dict.businessContact}
            </a>
            <Link href={`/${locale}/privacy`} className="hover:text-white">
              {dict.privacy}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-white">
              {dict.terms}
            </Link>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-white/[.07] pt-6 text-xs text-zinc-600 sm:flex-row">
          <p>{dict.copyright}</p>
          <p>{dict.signoff}</p>
        </div>
      </div>
    </footer>
  );
}
