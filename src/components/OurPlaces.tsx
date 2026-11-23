import { City } from '../types';
import Data from '../util/Data';
import CityArticle from './CityArticle';
import ContactButton from './ContactButton';

export default function OurPlaces() {
  const supportedCities: City[] = Data.getOurPlaces();

  return (
    <section id='our-places' className="flex flex-col p-5 gap-6 lg:py-12 lg:px-10 xl:p-20">
      <h2 className="text-3xl text-(--color-black) font-semibold xl:text-4xl">Onde atuamos</h2>
      <p className="text-(--color-gray) xl:text-lg">
        Atendemos servidores públicos municipais e estaduais nestas praças.
      </p>
      {supportedCities && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {supportedCities.map((city) => (
            <CityArticle key={city.id} city={city} />
          ))}
        </div>
      )}
      <div className='bg-(--color-green-light-bg) text-(--color-green) text-sm p-5 flex flex-col gap-4 rounded-2xl lg:text-[1rem] xl:text-lg'>
        <p>Não encontrou sua cidade? Fale com a gente para saber quando chegaremos na sua região.</p>
        <div className='md:w-fit'>
          <ContactButton text='Consultar minha cidade' theme="clear" />
        </div>
      </div>
    </section>
  );
}
