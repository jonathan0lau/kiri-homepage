/* eslint-disable @next/next/no-img-element -- Public creator images are served directly from the configured content service. */
import Link from 'next/link';
import {ClubRefresh} from '@/components/club-refresh';
import type { ClubItem, ClubCatalog } from '@/lib/club';
import { eventState, labels, japanTime, publicLink, upcoming } from '@/lib/club';

export function ClubCards({items,locale,section}:{items:ClubItem[];locale:string;section:string}) {
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map(item=><article key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
    {/* Public uploaded image origins are configured by the creator; no arbitrary Next image proxy. */}
    {publicLink(item.cover_url) &&  <img src={publicLink(item.cover_url)} alt={item.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />}
    <div className="p-6"><h3 className="text-xl"><Link href={`/${locale}/${section}/${item.id}`}>{item.title}</Link></h3>
      {section==='events' && <p className="mt-3 text-violet-200">{japanTime(item.starts_at)} · {labels[eventState(item)]}</p>}
      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-zinc-300">{item.description}</p>
      <p className="mt-3 text-sm text-zinc-400">{item.price_label}</p>
      <Link className="mt-5 inline-block text-violet-200 underline" href={`/${locale}/${section}/${item.id}`}>詳しく見る</Link>
    </div>
  </article>)}</div>;
}

export function Plans({items}:{items:ClubItem[]}) {
  return <div className="grid gap-6 sm:grid-cols-2">{items.map(item=><article key={item.id} className="rounded-2xl border border-white/10 p-6"><h3 className="text-2xl">{item.title}</h3><p className="my-3 text-violet-200">{item.price_label}</p><p className="whitespace-pre-line text-zinc-300">{item.description}</p><ul className="mt-4 list-inside list-disc space-y-2">{item.benefits?.map((benefit,i)=><li key={i}>{benefit}</li>)}</ul></article>)}</div>;
}
export function ClubHome({data,locale,available}:{data:ClubCatalog;locale:string;available:boolean}) {
  const events=upcoming(data.events);
  return <section className="section" id="club"><ClubRefresh/><div className="container">
    <p className="eyebrow">Kiri Fan Club</p><h2 className="section-title">Kiri と、もっと近くに。</h2>
    <nav className="my-8 flex flex-wrap gap-5 text-violet-200">{[['membership','会員プラン・参加方法'],['events','イベント'],['works','作品'],['series','シリーズ'],['news','お知らせ']].map(([path,label])=><Link key={path} href={`/${locale}/${path}`}>{label} →</Link>)}</nav>
    {!available && <p role="status">現在、最新情報を取得できません。時間をおいて再度ご確認ください。</p>}
    <h3 id="news" className="my-6 text-2xl">最新のお知らせ</h3><ClubCards items={data.news.slice(0,3)} locale={locale} section="news" />
    <h3 className="my-6 text-2xl">近日開催</h3>{events.length ? <ClubCards items={events.slice(0,3)} locale={locale} section="events"/> : available && <p>現在、公開中のイベントはありません。</p>}
    <h3 id="photo-books" className="my-6 text-2xl">作品</h3><ClubCards items={data.works.slice(0,3)} locale={locale} section="works"/>
    <h3 className="my-6 text-2xl">会員プラン</h3><Plans items={data.plans}/>
  </div></section>;
}
