'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

// Keep an already-open page current as deadlines pass; no dependency on the Bot.
export function ClubRefresh() {
  const router=useRouter();
  useEffect(()=>{
    const refresh=()=>{if(document.visibilityState==='visible') router.refresh();};
    const timer=setInterval(refresh,30000);
    document.addEventListener('visibilitychange',refresh);
    return ()=>{clearInterval(timer);document.removeEventListener('visibilitychange',refresh);};
  },[router]);
  return null;
}
