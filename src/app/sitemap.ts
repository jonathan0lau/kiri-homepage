import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiri-universe.vercel.app";
  const languages = {
    "zh-CN": `${base}/zh`,
    ja: `${base}/ja`,
    en: `${base}/en`,
  };

  return ["zh", "ja", "en"].map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
