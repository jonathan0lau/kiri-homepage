import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/dictionaries";

export function SimplePageShell({
  locale,
  eyebrow,
  title,
  description,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <header className="border-b border-white/[.07] bg-[#09090b]/80 backdrop-blur-xl">
        <div className="container flex min-h-[72px] items-center justify-between gap-4 py-3">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft size={16} aria-hidden="true" />
            Kiri Universe
          </Link>
          <Link href={`/${locale}/membership`} className="inline-flex items-center gap-2 text-sm text-violet-200 transition hover:text-white">
            <MessageCircle size={16} aria-hidden="true" />
            参加方法
          </Link>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title max-w-4xl">{title}</h1>
          <p className="section-copy max-w-3xl">{description}</p>
          <div className="mt-12">{children}</div>
        </div>
      </section>
    </main>
  );
}
