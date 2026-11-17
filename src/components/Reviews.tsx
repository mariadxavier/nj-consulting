import { GoogleReview } from '../types';
import { ContactButton, GoogleReview as GoogleReviewComponent } from '@/src/components';
import WhatsAppIcon from "@/src/assets/WhatsAppIcon.svg";

export default function Reviews() {
  const googleReviews: GoogleReview[] = [
    {
      id: '1',
      author: '',
      text: 'Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.',
      rate: 4,
    },
  ];

  return (
    <section className="flex flex-col p-5 gap-6">
      <h1 className="text-(--color-black) text-3xl font-semibold">O que nossos clientes dizem</h1>
      <p className="text-(--color-gray)">Avaliações publicadas no Google</p>
      {googleReviews &&
        googleReviews.map((review) => <GoogleReviewComponent key={review.id} review={review} />)}
        <ContactButton text='Ver avaliações no Google' link='' />
        <ContactButton text='Falar no WhatsApp' icon={WhatsAppIcon.src} theme='green' />
    </section>
  );
}
