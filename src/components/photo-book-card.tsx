import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { siteConfig } from "@/config/site";
import { ExternalLinkButton } from "./external-link-button";

type PhotoBook = Dictionary["photoBooks"]["items"][number];

export function PhotoBookCard({
  item,
  inquiryLabel,
}: {
  item: PhotoBook;
  inquiryLabel: string;
}) {
  const subject = encodeURIComponent(
    `Kiri Universe — Photo Book Inquiry: ${item.title}`,
  );
  const mailto = `mailto:${siteConfig.purchaseEmail}?subject=${subject}`;

  return (
    <article
      id={item.id}
      className="group scroll-mt-24 overflow-hidden rounded-[1.75rem] border border-white/[.08] bg-[#111118] transition duration-300 hover:-translate-y-1 hover:border-white/15"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width:1024px) 90vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-black/10" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 font-mono text-[9px] tracking-[.18em] text-white/70 backdrop-blur-md">
            {item.number}
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[9px] uppercase tracking-[.14em] text-violet-200 backdrop-blur-md">
            {item.status}
          </span>
        </div>
      </div>
      <div className="relative -mt-12 p-6 pt-0">
        <h3 className="font-[family-name:var(--font-display)] text-3xl text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-xs font-semibold text-violet-300">
          {item.subtitle}
        </p>
        <p className="mt-4 min-h-20 text-sm leading-7 text-zinc-500">
          {item.description}
        </p>
        <ExternalLinkButton
          href={mailto}
          variant="ghost"
          newTab={false}
          className="mt-6 w-full"
        >
          {inquiryLabel}
        </ExternalLinkButton>
      </div>
    </article>
  );
}
