import {redirect,notFound} from "next/navigation";
import {hasLocale} from "@/i18n/dictionaries";
export default async function Product({params}:PageProps<"/[lang]/products/[productId]">) {
 const {lang,productId}=await params;if(!hasLocale(lang)) notFound();redirect(`/${lang}/works/${encodeURIComponent(productId)}`);
}
