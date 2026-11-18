import { ContactButton, GoogleReview as GoogleReviewComponent } from '@/src/components';
import Data from '../util/Data';

export default function Reviews() {
  const googleReviews = Data.getGoogleReviews();

  return (
    <section id='reviews' className="flex flex-col p-5 gap-6">
      <h1 className="text-(--color-black) text-3xl font-semibold">O que nossos clientes dizem</h1>
      <p className="text-(--color-gray)">Avaliações publicadas no Google</p>
      {googleReviews &&
        googleReviews.map((review) => <GoogleReviewComponent key={review.id} review={review} />)}
        <ContactButton text='Ver avaliações no Google' link='' theme='clear' />
        <ContactButton />
    </section>
  );
}
