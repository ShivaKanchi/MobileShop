// import HeroCarousel from "@/components/common/HeroCarousel";
// import AboutSection from "@/components/home/About";
// import ContactSection from "@/components/home/Contact";
// import ServicesSection from "@/components/home/Services";
// import styles from "@/styles/page/page.module.scss";
// import "@/styles/globals.scss";
// export default function Home() {
//   return (
//     <>
//       <h1 className={styles.center}>Home</h1>
//       <section>
//         <HeroCarousel />
//       </section>
//       <section>
//         <ServicesSection />
//       </section>
//       <section>
//         <AboutSection />
//       </section>
//       <section>
//         <ContactSection />
//       </section>
//     </>
//   );
// }

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
