import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { LinksSection } from "@/components/links-section";
import { Navbar } from "@/components/navbar";
import { NewsSection } from "@/components/news-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <NewsSection />
        <LinksSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
