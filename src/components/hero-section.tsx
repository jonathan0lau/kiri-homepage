"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries";
import { externalLinks } from "@/config/site";
import { ExternalLinkButton } from "./external-link-button";

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="noise" />
      <div className="container grid items-center gap-14 py-16 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <p className="eyebrow">{dict.eyebrow}</p>
          <h1 className="gradient-text mt-5 font-[family-name:var(--font-display)] text-[clamp(4rem,11vw,8.5rem)] leading-[.78] tracking-[-.065em]">
            Kiri
            <br />
            <span className="ml-[.3em]">Universe</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-300">
            {dict.subtitle}
            <br />
            <span className="text-zinc-500">{dict.poeticLine}</span>
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ExternalLinkButton href={externalLinks.x}>
              {dict.followX}
            </ExternalLinkButton>
            <ExternalLinkButton
              href={externalLinks.fantia}
              variant="secondary"
            >
              {dict.visitFantia}
            </ExternalLinkButton>
            <ExternalLinkButton
              href={externalLinks.community}
              variant="ghost"
            >
              {dict.joinCommunity}
            </ExternalLinkButton>
          </div>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[620px]"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-transparent to-pink-500/20 blur-2xl" />
          <div className="glass relative h-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/hero-kiri.jpg"
              alt={dict.imageAlt}
              fill
              priority
              sizes="(max-width:1024px) 90vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 text-xs tracking-[.25em] text-white/70">
              ASTRAL PORTRAIT · 06
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
