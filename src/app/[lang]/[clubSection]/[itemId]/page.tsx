import {ClubRefresh} from '@/components/club-refresh';
/* eslint-disable @next/next/no-img-element -- Public creator images are served directly from the configured content service. */
import {notFound} from 'next/navigation';
import {SimplePageShell} from '@/components/simple-page-shell';
import {ClubCards} from '@/components/club-content';
import {getClubCatalog,eventState,labels,japanTime,publicLink} from '@/lib/club';
import {hasLocale} from '@/i18n/dictionaries';

export const dynamic='force-dynamic';
export default async function ClubDetail({params}:PageProps<'/[lang]/[clubSection]/[itemId]'>) {
  const {lang,clubSection,itemId}=await params;
  if (!hasLocale(lang) || !['events','works','news','series'].includes(clubSection)) notFound();
  const {data,available}=await getClubCatalog();
  if (!available) return <SimplePageShell locale={lang} eyebrow="Kiri Fan Club" title="ただいま情報を取得できません" description="時間をおいて再度お試しください。"><p>過去のイベントも引き続き公開されます。</p></SimplePageShell>;
  const item=data[clubSection as 'events'|'works'|'news'|'series'].find(x=>x.id===itemId);
  if (!item) notFound();
  const state=clubSection==='events' ? eventState(item) : undefined;
  const booking=state==='OPEN' ? publicLink(item.booking_url) : undefined;
  const purchase=item.sale_status==='SALE' ? publicLink(item.purchase_url) : undefined;
  return <SimplePageShell locale={lang} eyebrow="Kiri Fan Club" title={item.title} description={item.description}>
    <ClubRefresh/>
    {publicLink(item.cover_url) && <img className="mb-8 max-h-[600px] w-full rounded-2xl object-contain" src={publicLink(item.cover_url)} alt={item.title}/>}
    {state && <section className="space-y-4"><p className="text-xl text-violet-200">{labels[state]}</p><p>開始：{japanTime(item.starts_at)}</p><p>終了：{japanTime(item.ends_at)}</p>{item.deadline_at && <p>申込締切：{japanTime(item.deadline_at)}</p>}<p>{item.location}</p><p>{item.price_label}</p>{booking && <a className="inline-block rounded-full bg-violet-300 px-6 py-3 text-zinc-950" href={booking} rel="noopener noreferrer">申し込む</a>}</section>}
    {clubSection==='works' && <section className="space-y-6"><p>{item.price_label} · {item.format}</p><p>{({SALE:'発売中',COMING_SOON:'発売予定',STOP:'販売終了'} as Record<string,string>)[item.sale_status || '']}</p><div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{item.preview_images?.filter(publicLink).map((url,i)=> <img key={i} src={url} alt={`${item.title} プレビュー ${i+1}`} className="w-full rounded-xl"/>)}</div>{purchase && <a href={purchase} rel="noopener noreferrer" className="inline-block rounded-full bg-violet-300 px-6 py-3 text-zinc-950">購入先へ</a>}</section>}
    {clubSection==='series' && <ClubCards items={data.works.filter(x=>x.series_id===item.id)} locale={lang} section="works"/>}
    {clubSection==='news' && publicLink(item.detail_url) && <a href={publicLink(item.detail_url)} className="underline">詳細・元の記事へ</a>}
  </SimplePageShell>;
}
