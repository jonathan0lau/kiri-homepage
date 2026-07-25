"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, LockKeyhole, MessagesSquare } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { externalLinks } from "@/config/site";
import { ExternalLinkButton } from "./external-link-button";

export function LinksSection({ dict }: { dict: Dictionary["links"] }) {
  const reduce = useReducedMotion();
  const cards = [
    {
      title: "X",
      description: dict.cards.x,
      href: externalLinks.x,
      icon: Heart,
      color: "from-blue-400/20",
    },
    {
      title: "Fantia",
      description: dict.cards.fantia,
      href: externalLinks.fantia,
      icon: LockKeyhole,
      color: "from-pink-500/20",
    },
    {
      title: "Community",
      description: dict.cards.community,
      href: externalLinks.community,
      icon: MessagesSquare,
      color: "from-violet-500/20",
    },
  ] as const;

  return (
    <section id="links" className="section bg-[#0c0c11]">
      <div className="container">
        <div className="text-center">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="section-title">{dict.heading}</h2>
          <p className="section-copy mx-auto">{dict.description}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map(
            ({ title, description, href, icon: Icon, color }) => (
              <motion.article
                key={title}
                whileHover={reduce ? {} : { y: -8 }}
                transition={{ duration: 0.22 }}
                className={`glass relative overflow-hidden rounded-3xl bg-gradient-to-br ${color} to-transparent p-7`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[.06]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-10 font-[family-name:var(--font-display)] text-3xl">
                  {title}
                </h3>
                <p className="mt-3 min-h-14 text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
                <ExternalLinkButton
                  href={href}
                  variant="ghost"
                  className="mt-7 w-full"
                >
                  {dict.open} {title}
                </ExternalLinkButton>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
