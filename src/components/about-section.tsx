import type { Dictionary } from "@/i18n/dictionaries";
import { MotionSection } from "./motion-section";

export function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <MotionSection id="about" className="section border-y border-white/[.06]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="section-title max-w-xl">{dict.heading}</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
              {dict.note}
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute -left-7 top-0 hidden h-full w-px bg-gradient-to-b from-violet-400/70 via-pink-400/20 to-transparent lg:block"
              aria-hidden="true"
            />
            <p className="max-w-3xl text-xl leading-[1.85] text-zinc-200 md:text-2xl">
              {dict.body}
            </p>
            <div className="mt-9 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.22em] text-zinc-600">
              <span className="h-px w-12 bg-violet-400/70" />
              Kiri Universe · Original Project
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[.08] bg-white/[.08] sm:grid-cols-2 lg:grid-cols-4">
          {dict.pillars.map((pillar, index) => (
            <div
              key={pillar}
              className="bg-[#0d0d12] px-6 py-7 transition-colors hover:bg-white/[.035]"
            >
              <span className="font-mono text-[10px] text-violet-300">
                0{index + 1}
              </span>
              <p className="mt-4 text-sm font-semibold tracking-wide text-zinc-200">
                {pillar}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
