"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Item = Dictionary["gallery"]["items"][number];

export function ImageModal({
  item,
  onClose,
  labels,
}: {
  item: Item | null;
  onClose: () => void;
  labels: Pick<Dictionary["gallery"], "modalLabel" | "closeModal">;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!item) return;
    const previous = document.activeElement as HTMLElement | null;
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", key);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${item.label} · ${labels.modalLabel}`}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={reduce ? false : { scale: 0.96, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97 }}
            className="relative h-[86vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={labels.closeModal}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-black/70 text-white transition hover:bg-black"
            >
              <X />
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
              {item.label}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
