import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { MotionSection } from "./motion-section";
import { PhotoBookCard } from "./photo-book-card";

export function PhotoBooksSection({
  dict,
  locale,
}: {
  dict: Dictionary["photoBooks"];
  locale: Locale;
}) {
  return (
    <MotionSection id="photo-books" className="section overflow-hidden">
      <div
        className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-pink-600/[.07] blur-[120px]"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="section-title">{dict.heading}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-500">
            {dict.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {dict.items.slice(0, 3).map((item) => (
            <PhotoBookCard
              key={item.number}
              item={item}
              inquiryLabel={dict.open}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/photo-books`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            {dict.viewAll}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p className="mx-auto mt-4 max-w-lg text-xs leading-6 text-zinc-600">
            {dict.purchaseNote}
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
