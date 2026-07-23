"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [["Home","home"],["About","about"],["Gallery","gallery"],["News","news"],["Links","links"]] as const;
export function Navbar() {
  const [open,setOpen]=useState(false); const reduce=useReducedMotion();
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[.07] bg-[#09090b]/75 backdrop-blur-xl"><div className="container flex h-[72px] items-center justify-between"><a href="#home" className="flex items-center gap-3 font-semibold tracking-wide" onClick={()=>setOpen(false)}><span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-xs">K</span><span>KIRI <span className="text-zinc-500">UNIVERSE</span></span></a><nav className="hidden gap-8 md:flex" aria-label="主要导航">{nav.map(([label,id])=><a key={id} href={`#${id}`} className="text-sm text-zinc-400 transition-colors hover:text-white">{label}</a>)}</nav><button className="grid h-10 w-10 place-items-center md:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"关闭菜单":"打开菜单"}>{open?<X/>:<Menu/>}</button></div><AnimatePresence>{open&&<motion.nav id="mobile-menu" aria-label="移动端导航" initial={reduce?false:{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.25}} className="overflow-hidden border-t border-white/10 bg-[#09090b]"><div className="container flex flex-col py-3">{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)} className="border-b border-white/5 py-4 text-zinc-300">{label}</a>)}</div></motion.nav>}</AnimatePresence></header>;
}
