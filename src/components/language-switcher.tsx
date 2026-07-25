"use client";

import { Globe2 } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

export function LanguageSwitcher({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["language"];
}) {
  const router = useRouter();

  function changeLanguage(nextLocale: Locale) {
    document.cookie = `kiri-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.replace(`/${nextLocale}${window.location.hash}`);
  }

  return (
    <label className="relative flex items-center gap-2 text-zinc-400">
      <span className="sr-only">{dict.label}</span>
      <Globe2 size={16} aria-hidden="true" />
      <select
        value={locale}
        onChange={(event) => changeLanguage(event.target.value as Locale)}
        aria-label={dict.label}
        className="cursor-pointer appearance-none bg-transparent py-2 pr-4 text-xs font-semibold tracking-wide text-zinc-300 outline-none"
      >
        {(["zh", "ja", "en"] as const).map((code) => (
          <option key={code} value={code} className="bg-[#111118] text-white">
            {dict.names[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
