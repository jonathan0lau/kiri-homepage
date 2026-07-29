import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { MotionSection } from "./motion-section";

export function CharacterProfileSection({
  dict,
}: {
  dict: Dictionary["profile"];
}) {
  return (
    <MotionSection id="profile" className="section bg-[#0c0c11]">
      <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/15 via-violet-500/10 to-pink-500/15 blur-2xl"
            aria-hidden="true"
          />
          <div className="glass relative h-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/hero-kiri.jpg"
              alt={dict.imageAlt}
              fill
              sizes="(max-width:1024px) 90vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/85 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.24em] text-violet-300">
                  Character File
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-3xl">
                  Kiri
                </p>
              </div>
              <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 font-mono text-[9px] tracking-[.18em] text-white/60 backdrop-blur-md">
                FILE 001
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="section-title">{dict.heading}</h2>
          <p className="section-copy">{dict.description}</p>

          <blockquote className="mt-9 border-l border-violet-300/40 pl-6">
            <Sparkles
              size={18}
              strokeWidth={1.4}
              className="mb-4 text-violet-300"
              aria-hidden="true"
            />
            <p className="font-[family-name:var(--font-display)] text-2xl italic leading-relaxed text-zinc-100 md:text-3xl">
              “{dict.quote}”
            </p>
          </blockquote>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.08] sm:grid-cols-2">
            {dict.attributes.map((attribute) => (
              <div key={attribute.label} className="bg-[#111118] px-5 py-5">
                <dt className="text-[9px] font-bold uppercase tracking-[.2em] text-zinc-600">
                  {attribute.label}
                </dt>
                <dd className="mt-2 text-sm text-zinc-200">
                  {attribute.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="text-[9px] font-bold uppercase tracking-[.2em] text-zinc-600">
              {dict.keywordsLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {dict.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/[.025] px-3.5 py-2 text-[10px] text-zinc-400"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
