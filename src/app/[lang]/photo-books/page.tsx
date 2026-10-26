import {redirect,notFound} from "next/navigation";
import {hasLocale} from "@/i18n/dictionaries";
export default async function Books({params}:PageProps<"/[lang]/photo-books">) {
 const {lang}=await params;if(!hasLocale(lang)) notFound();redirect(`/${lang}/works`);
}
