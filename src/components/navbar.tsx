"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const nav = [
    [dict.nav.home, "home"],
    [dict.nav.about, "about"],
    [dict.nav.gallery, "gallery"],
    [dict.nav.news, "news"],
    [dict.nav.links, "links"],
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[.07] bg-[#09090b]/75 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between gap-3">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3 font-semibold tracking-wide"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-xs">
            K
          </span>
          <span className="hidden sm:inline">
            KIRI <span className="text-zinc-500">UNIVERSE</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex gap-7" aria-label={dict.nav.ariaLabel}>
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <span className="h-5 w-px bg-white/10" aria-hidden="true" />
          <LanguageSwitcher locale={locale} dict={dict.language} />
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher locale={locale} dict={dict.language} />
          <button
            className="grid h-10 w-10 place-items-center"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={dict.nav.mobileAriaLabel}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#09090b]"
          >
            <div className="container flex flex-col py-3">
              {nav.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-4 text-zinc-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
