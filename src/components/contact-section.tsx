import { Mail } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { siteConfig } from "@/config/site";
import { ExternalLinkButton } from "./external-link-button";
import { MotionSection } from "./motion-section";

export function ContactSection({ dict }: { dict: Dictionary["contact"] }) {
  const subject = encodeURIComponent("Kiri Universe — Business Inquiry");
  const mailto = `mailto:${siteConfig.businessEmail}?subject=${subject}`;

  return (
    <MotionSection id="contact" className="section">
      <div className="container">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-12 lg:p-16">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/15 blur-[90px]"
            aria-hidden="true"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="eyebrow">{dict.eyebrow}</p>
              <h2 className="section-title">{dict.heading}</h2>
              <p className="section-copy">{dict.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="sr-only">{dict.servicesLabel}</span>
                {dict.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-zinc-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <ExternalLinkButton
                href={mailto}
                variant="secondary"
                newTab={false}
                className="w-full sm:w-auto"
              >
                <Mail size={17} aria-hidden="true" />
                {dict.cta}
              </ExternalLinkButton>
              <p className="mt-4 text-xs text-zinc-500">
                {siteConfig.businessEmail}
              </p>
              <p className="mt-2 text-xs text-zinc-600">
                {dict.responseNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
