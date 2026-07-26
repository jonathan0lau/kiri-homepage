"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

const languageCodes = ["zh", "ja", "en"] as const;

export function LanguageSwitcher({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["language"];
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const reduce = useReducedMotion();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function openMenu() {
    setOpen(true);
    requestAnimationFrame(() => {
      optionRefs.current[languageCodes.indexOf(locale)]?.focus();
    });
  }

  async function changeLanguage(nextLocale: Locale) {
    setOpen(false);
    if (nextLocale === locale) {
      triggerRef.current?.focus();
      return;
    }

    await window.cookieStore.set({
      name: "kiri-locale",
      value: nextLocale,
      path: "/",
      sameSite: "lax",
      expires: 1_893_456_000_000,
    });
    router.replace(`/${nextLocale}${window.location.hash}`);
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    const current = optionRefs.current.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    let next = current;

    if (event.key === "Home") next = 0;
    if (event.key === "End") next = languageCodes.length - 1;
    if (event.key === "ArrowDown") next = (current + 1) % languageCodes.length;
    if (event.key === "ArrowUp")
      next = (current - 1 + languageCodes.length) % languageCodes.length;

    optionRefs.current[next]?.focus();
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${dict.label}: ${dict.names[locale]}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            openMenu();
          }
        }}
        className={`group flex h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium transition-all duration-200 ${
          open
            ? "border-violet-400/60 bg-violet-400/10 text-white shadow-[0_0_24px_rgba(139,92,246,.14)]"
            : "border-white/10 bg-white/[.035] text-zinc-300 hover:border-white/20 hover:bg-white/[.07] hover:text-white"
        }`}
      >
        <Globe2
          size={16}
          aria-hidden="true"
          className={open ? "text-violet-300" : "text-zinc-500"}
        />
        <span className="min-w-12 text-left">{dict.names[locale]}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`text-zinc-500 transition-transform duration-200 ${
            open ? "rotate-180 text-violet-300" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={dict.label}
            initial={
              reduce
                ? false
                : { opacity: 0, y: -6, scale: 0.97 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onKeyDown={handleMenuKeyDown}
            className="absolute right-0 top-[calc(100%+10px)] z-50 w-44 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-[#111118]/95 p-1.5 shadow-[0_20px_55px_rgba(0,0,0,.55)] backdrop-blur-xl"
          >
            <div
              className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent"
              aria-hidden="true"
            />
            {languageCodes.map((code, index) => {
              const selected = code === locale;
              return (
                <button
                  key={code}
                  ref={(node) => {
                    optionRefs.current[index] = node;
                  }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => void changeLanguage(code)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    selected
                      ? "bg-violet-500/15 text-white"
                      : "text-zinc-400 hover:bg-white/[.06] hover:text-white"
                  }`}
                >
                  <span
                    className={`w-6 text-[10px] font-bold tracking-[.14em] ${
                      selected ? "text-violet-300" : "text-zinc-600"
                    }`}
                    aria-hidden="true"
                  >
                    {code.toUpperCase()}
                  </span>
                  <span className="flex-1">{dict.names[code]}</span>
                  <Check
                    size={15}
                    aria-hidden="true"
                    className={
                      selected ? "text-violet-300" : "text-transparent"
                    }
                  />
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
