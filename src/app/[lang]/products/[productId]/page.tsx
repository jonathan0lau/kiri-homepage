import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SimplePageShell } from "@/components/simple-page-shell";
import { externalLinks } from "@/config/site";
import { getPublicProduct, publicProducts } from "@/data/products";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return publicProducts.flatMap((product) =>
    ["zh", "ja", "en"].map((lang) => ({ lang, productId: product.product_id })),
  );
}

export async function generateMetadata({ params }: PageProps<"/[lang]/products/[productId]">): Promise<Metadata> {
  const { lang, productId } = await params;
  if (!hasLocale(lang)) notFound();
  const product = getPublicProduct(productId);
  if (!product) notFound();
  return { title: `${product.product_name} | Kiri Universe`, description: product.description };
}

export default async function ProductDetailPage({ params }: PageProps<"/[lang]/products/[productId]">) {
  const { lang, productId } = await params;
  if (!hasLocale(lang)) notFound();
  const product = getPublicProduct(productId);
  if (!product) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <SimplePageShell locale={lang} eyebrow={product.product_id} title={product.product_name} description={product.description}>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[.08]">
            <Image src={product.cover_url} alt={product.product_name} fill className="object-cover" />
          </div>
          <div>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase text-zinc-500">Price</dt>
                <dd className="mt-1 text-zinc-100">{product.price_amount.toLocaleString()} {product.price_currency}</dd>
              </div>
              <div className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase text-zinc-500">Contents</dt>
                <dd className="mt-1 text-zinc-100">{product.content_count_label}</dd>
              </div>
              <div className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase text-zinc-500">File Size</dt>
                <dd className="mt-1 text-zinc-100">{product.file_size_label}</dd>
              </div>
              <div className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase text-zinc-500">Status</dt>
                <dd className="mt-1 text-zinc-100">{product.status}</dd>
              </div>
            </dl>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {product.preview_images.slice(0, 6).map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-xl border border-white/[.08]">
                  <Image src={src} alt={`${product.product_name} preview`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <a href={product.discord_url || externalLinks.discord} className="mt-8 inline-flex items-center justify-center rounded-full bg-violet-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white">
              进入 Discord 购买
            </a>
          </div>
        </div>
      </SimplePageShell>
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
