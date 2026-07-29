"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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
      color: "from-blue-400/20",
      mark: (
        <Image
          src="/brands/x-logo.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Fantia",
      description: dict.cards.fantia,
      href: externalLinks.fantia,
      color: "from-pink-500/20",
      mark: (
        <Image
          src="/brands/fantia-logo.svg"
          alt="Fantia"
          width={76}
          height={14}
        />
      ),
    },
    {
      title: "Discord",
      description: dict.cards.discord,
      href: externalLinks.discord,
      color: "from-indigo-400/20",
      mark: (
        <Image
          src="/brands/discord-symbol.svg"
          alt=""
          width={26}
          height={20}
          aria-hidden="true"
        />
      ),
    },
  ];

  return (
    <section id="links" className="section bg-[#0c0c11]">
      <div className="container">
        <div className="text-center">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="section-title">{dict.heading}</h2>
          <p className="section-copy mx-auto">{dict.description}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map(({ title, description, href, mark, color }) => (
            <motion.article
              key={title}
              whileHover={reduce ? {} : { y: -8 }}
              transition={{ duration: 0.22 }}
              className={`glass relative overflow-hidden rounded-3xl bg-gradient-to-br ${color} to-transparent p-7`}
            >
              <div className="flex h-12 min-w-12 w-fit items-center justify-center rounded-2xl border border-white/10 bg-white/[.06] px-3">
                {mark}
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
          ))}
        </div>
      </div>
    </section>
  );
}
