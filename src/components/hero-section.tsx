"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen } from "lucide-react";
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
      <div
        className="absolute -left-48 top-32 -z-10 h-[580px] w-[580px] rounded-full border border-white/[.04]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-56 -z-10 h-[340px] w-[340px] rounded-full border border-violet-300/[.08]"
        aria-hidden="true"
      />
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
          <motion.a
            href="#photo-books"
            whileHover={reduce ? {} : { scale: 1.025 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-violet-100"
          >
            <BookOpen size={18} aria-hidden="true" />
            {dict.viewPhotoBooks}
          </motion.a>
          <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-zinc-600">
            <span className="h-px w-8 bg-white/10" />
            {dict.portalsLabel}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <ExternalLinkButton
              href={externalLinks.x}
              variant="ghost"
              className="px-4 py-2.5"
            >
              <Image
                src="/brands/x-logo.svg"
                alt=""
                width={15}
                height={15}
                aria-hidden="true"
                className="brightness-0"
              />
              {dict.followX}
            </ExternalLinkButton>
            <ExternalLinkButton
              href={externalLinks.fantia}
              variant="ghost"
              className="px-4 py-2.5"
            >
              <Image
                src="/brands/fantia-logo.svg"
                alt="Fantia"
                width={65}
                height={12}
              />
              {dict.visitFantia}
            </ExternalLinkButton>
            <ExternalLinkButton
              href={externalLinks.discord}
              variant="ghost"
              className="px-4 py-2.5"
            >
              <Image
                src="/brands/discord-symbol.svg"
                alt=""
                width={20}
                height={15}
                aria-hidden="true"
              />
              {dict.joinDiscord}
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
              CORE CHARACTER · KIRI
            </p>
            <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[9px] font-bold tracking-[.2em] text-white/65 backdrop-blur-md">
              KIRI ORIGINAL
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
