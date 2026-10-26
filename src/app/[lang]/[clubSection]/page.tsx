import {ClubRefresh} from '@/components/club-refresh';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {SimplePageShell} from '@/components/simple-page-shell';
import {ClubCards,Plans} from '@/components/club-content';
import {getClubCatalog,upcoming} from '@/lib/club';
import {hasLocale} from '@/i18n/dictionaries';
import {externalLinks} from '@/config/site';

export const dynamic='force-dynamic';
const titles: Record<string,string> = {events:'イベント',news:'お知らせ',works:'作品一覧',series:'シリーズ',membership:'会員プラン・参加方法'};
export default async function ClubList({params,searchParams}:PageProps<'/[lang]/[clubSection]'>) {
  const {lang,clubSection}=await params;
  if (!hasLocale(lang) || !(clubSection in titles)) notFound();
  const query=await searchParams;
  const {data,available}=await getClubCatalog();
  const history=query.history==='1';
  const items=clubSection==='events' ? (history ? data.events.filter(x=>!upcoming([x]).length) : upcoming(data.events)) : data[clubSection as 'works'|'news'|'series'];
  const invite=process.env.CLUB_DISCORD_URL || externalLinks.discord;
  return <SimplePageShell locale={lang} eyebrow="Kiri Fan Club" title={titles[clubSection]} description="Kiri の創作活動とファンのための場所。日時はすべて日本時間です。">
    <ClubRefresh/>
    {!available && <p role="status">現在、最新情報を取得できません。時間をおいて再度ご確認ください。</p>}
    {clubSection==='membership' ? <><Plans items={data.plans}/><section className="mt-10 space-y-5 leading-8"><h2 className="text-2xl">参加の流れ</h2><ol className="list-inside list-decimal"><li>Discord サーバーに参加し、ルールと案内を確認します。</li><li>案内チャンネルから希望のプランを管理者に申請します。</li><li>確認後、対象の会員チャンネルが表示されます。</li></ol><p>更新・延長は管理者にご相談ください。期限が終了すると会員限定ロールが外れ、一般メンバーとして引き続き参加できます。</p><p>プレゼントされた会員資格は、この Discord 社群の特典のみ対象です。Fantia 等の会員資格とは別です。</p><p>チャンネルが見えない場合は、Discord の管理者へユーザー名と申請内容をお知らせください。</p><Link href={`/${lang}/terms`} className="underline">利用規約・ルール</Link><br/>{invite.includes('your-invite-code') ? <p>参加リンクは準備中です。</p> : <a href={invite} rel="noopener noreferrer" className="inline-block rounded-full bg-violet-300 px-6 py-3 text-zinc-950">Discord に参加</a>}</section></> : <>
      {clubSection==='events' && <nav className="mb-8 flex gap-6"><Link href={`/${lang}/events`}>近日開催</Link><Link href={`/${lang}/events?history=1`}>終了・中止したイベント</Link></nav>}
      <ClubCards items={items || []} locale={lang} section={clubSection}/>
      {available && !items?.length && <p>現在、公開されている内容はありません。</p>}
    </>}
  </SimplePageShell>;
}
