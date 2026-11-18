import { ContactButton, GoogleReview as GoogleReviewComponent } from '@/src/components';
import Data from '../util/Data';

export default function Reviews() {
  const googleReviews = Data.getGoogleReviews();
  const googleReviewsUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS || '';

  return (
    <section id='reviews' className="flex flex-col p-5 gap-6 md:gap-4 md:py-8 lg:py-12 lg:px-10">
      <h1 className="text-(--color-black) text-3xl font-semibold xl:text-4xl">O que nossos clientes dizem</h1>
      <p className="text-(--color-gray) xl:text-lg">Avaliações publicadas no Google</p>
      <div className="grid grid-cols-1 gap-3 md:overflow-x-auto md:flex md:py-2">
        {googleReviews &&
          googleReviews.map((review) => <GoogleReviewComponent key={review.id} review={review} />)}
      </div>
      <div className='flex flex-col gap-6 md:flex-row md:w-fit'>
        <ContactButton text='Ver avaliações no Google' link={googleReviewsUrl} theme='clear' />
        <ContactButton />
      </div>
    </section>
  );
}
