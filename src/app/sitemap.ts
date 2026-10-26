import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiri-universe.vercel.app";
  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.7 },
    { path: "/universe", priority: 0.7 },
    { path: "/products", priority: 0.9 },
    { path: "/events", priority: 0.8 },
    { path: "/works", priority: 0.9 },
    { path: "/series", priority: 0.7 },
    { path: "/membership", priority: 0.9 },
    { path: "/news", priority: 0.8 },
    { path: "/faq", priority: 0.5 },
    { path: "/community", priority: 0.6 },
    { path: "/photo-books", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return pages.flatMap(({ path, priority }) => {
    const languages = {
      "zh-CN": `${base}/zh${path}`,
      ja: `${base}/ja${path}`,
      en: `${base}/en${path}`,
    };

    return ["zh", "ja", "en"].map((locale) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
