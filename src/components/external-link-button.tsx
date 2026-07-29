"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ExternalLinkButton({ href, children, variant = "primary", className = "", newTab = true }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string; newTab?: boolean }) {
  const reduce = useReducedMotion();
  const styles = variant === "primary" ? "bg-white text-zinc-950 hover:bg-violet-100" : variant === "secondary" ? "bg-violet-500 text-white hover:bg-violet-400" : "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  return <motion.a href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} whileHover={reduce ? {} : { scale: 1.025 }} whileTap={reduce ? {} : { scale: .98 }} transition={{ duration: .18 }} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${styles} ${className}`}>{children}<ArrowUpRight size={16} aria-hidden="true" /></motion.a>;
}
