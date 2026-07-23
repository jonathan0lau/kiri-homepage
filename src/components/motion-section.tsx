"use client";
import { motion, useReducedMotion } from "framer-motion";

export function MotionSection({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return <motion.section id={id} className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .45, ease: "easeOut" }}>{children}</motion.section>;
}
