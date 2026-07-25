import type { Dictionary } from "@/i18n/dictionaries";
import { externalLinks, siteConfig } from "@/config/site";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-white/10 bg-[#070708] py-12">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <a
            href="#home"
            className="font-[family-name:var(--font-display)] text-2xl"
          >
            {siteConfig.name}
          </a>
          <nav
            aria-label={dict.ariaLabel}
            className="flex flex-wrap gap-6 text-sm text-zinc-400"
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
              href={externalLinks.community}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Community
            </a>
            <a href="#privacy" className="hover:text-white">
              {dict.privacy}
            </a>
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
