import { Header, Hero, Footer } from '@/src/components';

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-(--color-green-light) text-(--color-green-dark)">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
