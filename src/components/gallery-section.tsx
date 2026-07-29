"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { ImageModal } from "./image-modal";

type GalleryItem = Dictionary["gallery"]["items"][number];

export function GallerySection({
  dict,
  locale,
}: {
  dict: Dictionary["gallery"];
  locale: Locale;
}) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const reduce = useReducedMotion();

  return (
    <section id="gallery" className="section bg-[#0c0c11]">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="section-title">{dict.heading}</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-500">
            {dict.description}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((item, index) => (
            <motion.button
              key={item.src}
              onClick={() => setSelected(item)}
              whileHover={reduce ? {} : { y: -6, scale: 1.012 }}
              transition={{ duration: 0.22 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-left shadow-2xl shadow-black/20"
              aria-label={`${dict.viewImage}: ${item.label}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-violet-300">
                    {item.collection}
                  </span>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">
                    {item.label}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block font-mono text-[9px] text-white/30">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block text-xs text-white/50">
                    {dict.expand}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/photo-books`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {dict.viewMore}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <ImageModal
        item={selected}
        onClose={close}
        labels={{ modalLabel: dict.modalLabel, closeModal: dict.closeModal }}
      />
    </section>
  );
}
