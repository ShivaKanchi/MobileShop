import HeroCarousel from "@/components/common/HeroCarousel";
import AboutSection from "@/components/home/About";
import ContactSection from "@/components/home/Contact";
import ServicesSection from "@/components/home/Services";
import styles from "@/styles/page/page.module.scss";
import "@/styles/globals.scss";
export default function Home() {
  return (
    <>
      <h1 className={styles.center}>Home</h1>
      <section>
        <HeroCarousel />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ContactSection />
      </section>
    </>
  );
}
