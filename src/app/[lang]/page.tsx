import {ClubHome} from '@/components/club-content';
import {getClubCatalog} from '@/lib/club';

export const dynamic='force-dynamic';
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/about-section";
import { CharacterProfileSection } from "@/components/character-profile-section";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { LinksSection } from "@/components/links-section";
import { Navbar } from "@/components/navbar";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const club = await getClubCatalog();

  return (
    <>
      <Navbar locale={lang} dict={dict} />
      <main>
        <HeroSection dict={dict.hero} locale={lang} />
        <ClubHome data={club.data} locale={lang} available={club.available}/>
        <AboutSection dict={dict.about} />
        <CharacterProfileSection dict={dict.profile} />
        <GallerySection locale={lang} dict={dict.gallery} />
        <LinksSection dict={dict.links} />
        <ContactSection dict={dict.contact} />
        <FAQSection dict={dict.faq} />
      </main>
      <Footer locale={lang} dict={dict.footer} />
    </>
  );
}
