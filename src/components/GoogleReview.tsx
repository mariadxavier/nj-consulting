import StarIcon from '@/src/assets/StarIcon.svg';
import Image from 'next/image';
import { GoogleReview } from '../types';

export default function GoogleReviews({ review }: { review: GoogleReview }) {
  const Stars = () => (
    <div className="flex gap-1">
      {Array.from({ length: review.rate }, (_, i) => (
        <Image key={i} src={StarIcon.src} alt="estrela" width={10} height={10} />
      ))}
    </div>
  );
  return (
    <div className="flex flex-col gap-6 p-5 rounded-xl bg-(--color-gray-light) text-(--color-gray)">
      <p className="text-sm font-semibold">{review.text}</p>
      <p className="text-(--color-black)">{review.author || 'Anônimo'}</p>
      <Stars />
    </div>
  );
}
