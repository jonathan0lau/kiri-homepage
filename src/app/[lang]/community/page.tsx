import type { Metadata } from "next";
import { MessageCircle, Vote, CalendarDays, HelpCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SimplePageShell } from "@/components/simple-page-shell";
import { externalLinks } from "@/config/site";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/community">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: "Community | Kiri Universe" };
}

export default async function CommunityPage({ params }: PageProps<"/[lang]/community">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const cards = [
    { title: "Kiri Feed", body: "原创动态、少量预览和 Discord 入口。", icon: MessageCircle },
    { title: "投票企划", body: "主题、封面和企划方向投票。", icon: Vote },
    { title: "提问箱", body: "提交问题并等待公开回答。", icon: HelpCircle },
    { title: "活动", body: "报名、提醒和 Buyer 限定活动。", icon: CalendarDays },
  ];
  return (
    <>
      <SimplePageShell locale={lang} eyebrow="Community" title="Kiri Club Community" description="社区互动功能在 Discord 内运行，网站提供公开说明与入口。">
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map(({ title, body, icon: Icon }) => (
            <div key={title} className="border border-white/[.08] bg-white/[.03] p-6">
              <Icon size={22} className="text-violet-300" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-zinc-100">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{body}</p>
            </div>
          ))}
        </div>
        <a href={externalLinks.discord} className="mt-8 inline-flex rounded-full bg-violet-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white">
          加入 Discord
        </a>
      </SimplePageShell>
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
