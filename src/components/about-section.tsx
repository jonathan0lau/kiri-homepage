import type { Dictionary } from "@/i18n/dictionaries";
import { MotionSection } from "./motion-section";

export function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <MotionSection id="about" className="section">
      <div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="section-title">{dict.heading}</h2>
        </div>
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
          <span className="absolute right-7 top-3 font-[family-name:var(--font-display)] text-8xl text-white/[.035]">
            K
          </span>
          <p className="max-w-2xl text-lg leading-[2] text-zinc-300 md:text-xl">
            {dict.body}
          </p>
          <div className="mt-10 flex items-center gap-4 text-xs tracking-[.2em] text-zinc-500">
            <span className="h-px w-12 bg-violet-400" />
            ART · STORY · COMMUNITY
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
