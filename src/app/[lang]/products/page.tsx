import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SimplePageShell } from "@/components/simple-page-shell";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import { publicProducts } from "@/data/products";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: "Products | Kiri Universe", description: "Kiri Club public product catalog." };
}

export default async function ProductsPage({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <SimplePageShell
        locale={lang}
        eyebrow="Products"
        title="Kiri 写真商品目录"
        description="这里展示公开商品信息。下载链接、密码、用户订单和付款记录不会出现在网站中。"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publicProducts.map((product) => (
            <Link
              key={product.product_id}
              href={`/${lang}/products/${product.product_id}`}
              className="group overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.03]"
            >
              <div className="relative aspect-[4/5]">
                <Image src={product.cover_url} alt={product.product_name} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-violet-300">{product.status}</p>
                <h2 className="mt-2 text-xl font-semibold text-zinc-100">{product.product_name}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{product.description}</p>
                <p className="mt-4 text-sm text-zinc-300">{product.price_amount.toLocaleString()} {product.price_currency}</p>
              </div>
            </Link>
          ))}
        </div>
      </SimplePageShell>
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
