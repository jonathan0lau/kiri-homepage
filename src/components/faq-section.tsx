"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export function FAQSection({ dict }: { dict: Dictionary["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="section" id="faq">
      <div className="container grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="section-title">
            {dict.headingLine1}
            <br />
            {dict.headingLine2}
          </h2>
          <p className="section-copy">{dict.description}</p>
        </div>
        <div>
          {dict.items.map((item, index) => {
            const active = open === index;
            return (
              <div key={item.question} className="border-b border-white/10">
                <h3>
                  <button
                    onClick={() => setOpen(active ? null : index)}
                    aria-expanded={active}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium text-zinc-200 md:text-lg"
                  >
                    <span>{item.question}</span>
                    <Plus
                      className={`shrink-0 transition-transform ${
                        active ? "rotate-45 text-violet-300" : "text-zinc-500"
                      }`}
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-8 text-sm leading-7 text-zinc-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
