import 'server-only';

export type ClubItem = {
  id: string; title: string; description: string; status: string;
  cover_url?: string; preview_images?: string[]; published_at?: string;
  starts_at?: string; ends_at?: string; deadline_at?: string;
  location?: string; price_label?: string; booking_url?: string;
  display_state?: 'OPEN' | 'CLOSED' | 'FULL' | 'ENDED' | 'CANCELLED';
  ended?: boolean; purchase_url?: string; sale_status?: string;
  series_id?: string; benefits?: string[]; format?: string;
  detail_url?: string; pinned?: boolean;
};
export type ClubCatalog = Record<'events'|'news'|'works'|'series'|'plans', ClubItem[]>;
export const clubConfigured = Boolean(process.env.CLUB_API_URL);
export async function getClubCatalog(): Promise<{data: ClubCatalog; available: boolean}> {
  const empty: ClubCatalog = {events:[],news:[],works:[],series:[],plans:[]};
  if (!process.env.CLUB_API_URL) return {data:empty, available:false};
  try {
    const response = await fetch(`${process.env.CLUB_API_URL.replace(/\/$/,'')}/api/public/catalog`, {cache:'no-store',signal:AbortSignal.timeout(5000)});
    if (!response.ok) throw new Error('Catalog unavailable');
    const data = await response.json() as ClubCatalog;
    if (!Object.keys(empty).every(key=>Array.isArray(data[key as keyof ClubCatalog]))) throw new Error('Invalid catalog');
    return {data,available:true};
  } catch {
    // Fail closed: never replace unavailable content with sample memberships or stale events.
    return {data:empty,available:false};
  }
}
export function upcoming(items: ClubItem[], now = Date.now()) {
  return items.filter(item=>item.ends_at && new Date(item.ends_at).getTime()>now);
}
export function eventState(item: ClubItem, now=Date.now()) {
  if (item.status==='CANCELLED') return 'CANCELLED';
  if (item.ends_at && new Date(item.ends_at).getTime()<=now) return 'ENDED';
  if (item.display_state==='FULL') return 'FULL';
  if (item.deadline_at && new Date(item.deadline_at).getTime()<=now) return 'CLOSED';
  return item.display_state ?? 'CLOSED';
}
export const labels = {OPEN:'受付中',CLOSED:'申込受付終了',FULL:'満員',ENDED:'終了',CANCELLED:'中止'};
export function japanTime(value?: string) {
  return value ? new Intl.DateTimeFormat('ja-JP',{timeZone:'Asia/Tokyo',dateStyle:'medium',timeStyle:'short'}).format(new Date(value)) : '';
}
export function publicLink(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    const localMedia = process.env.CLUB_MEDIA_ORIGIN;
    const allowedLocal = localMedia && url.protocol === 'http:' && url.origin === new URL(localMedia).origin;
    return url.protocol === 'https:' || allowedLocal ? value : undefined;
  } catch { return undefined; }
}
