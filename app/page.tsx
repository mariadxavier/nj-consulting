import {
  Header,
  Hero,
  Footer,
  AboutUs,
  BRCardInfo,
  HowItWorks,
  PublicAudience,
  OurPlaces,
  FAQ,
} from '@/src/components';

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-(--color-green-light) text-(--color-green-dark)">
      <Header />
      <Hero />
      <AboutUs />
      <BRCardInfo />
      <HowItWorks />
      <PublicAudience />
      <OurPlaces />
      <FAQ />
      <Footer />
    </main>
  );
}
