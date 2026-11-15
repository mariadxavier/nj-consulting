import Image from 'next/image';
import CityPlaceholder from '@/src/assets/CityPlaceholder.png';
import { City } from '../types';

export default function CityArticle({ city }: { city: City }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-(--color-white) shadow-[0_8px_28px_rgba(29,29,31,0.08)]">
      <Image
        src={city.imgSrc || CityPlaceholder}
        alt={city.name}
        width={640}
        height={360}
        className="h-44 w-full object-cover"
      />
      <div className="flex flex-col gap-1 px-4 pt-4 pb-5">
        <h3 className="text-lg font-semibold text-(--color-black)">{city.name}</h3>
        <p className="text-sm text-(--color-gray)">{city.address}</p>
      </div>
    </article>
  );
}
