import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { MotionSection } from "./motion-section";

export function NewsSection({ dict }: { dict: Dictionary["news"] }) {
  return (
    <MotionSection id="news" className="section">
      <div className="container">
        <p className="eyebrow">{dict.eyebrow}</p>
        <h2 className="section-title">{dict.heading}</h2>
        <div className="mt-12 border-t border-white/10">
          {dict.items.map((item, index) => (
            <article
              key={`${item.date}-${item.title}`}
              className="group grid gap-4 border-b border-white/10 py-7 transition-colors hover:bg-white/[.02] md:grid-cols-[140px_1fr_auto] md:items-center md:px-4"
            >
              <time className="font-mono text-sm text-violet-300">
                {item.date}
              </time>
              <div>
                <span className="mb-2 inline-block rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  {item.tag}
                </span>
                <h3 className="text-lg font-medium text-zinc-200">
                  {item.title}
                </h3>
              </div>
              <div className="hidden items-center gap-3 text-xs text-zinc-600 md:flex">
                <span>0{index + 1}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
