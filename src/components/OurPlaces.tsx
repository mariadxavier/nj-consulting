import { City } from '../types';
import CityArticle from './CityArticle';
import ContactButton from './ContactButton';

export default function OurPlaces() {
  const supportedCities: City[] = [
    {
      id: '1',
      name: 'Mariana - MG',
      imgSrc: '',
      address: 'Minas Gerais',
    },
    {
        id: '2',
        name: 'Brasília - DF',
        imgSrc: '',
        address: 'Distrito Federal',
      }

  ];

  return (
    <section className="flex flex-col p-5 gap-6">
      <h1 className="text-3xl text-(--color-black) font-semibold">Cidades onde atuamos</h1>
      <p className="text-(--color-gray)">
        Atendemos servidores públicos municipais e estaduais nestas praças.
      </p>
      {supportedCities && (
        <div className="grid grid-cols-1 gap-3">
          {supportedCities.map((city) => (
            <CityArticle key={city.id} city={city} />
          ))}
        </div>
      )}
      <div className='bg-(--color-green-light-bg) text-(--color-green) text-sm p-5 flex flex-col gap-4 rounded-2xl'>
        <p>Não encontrou sua cidade? Fale com a gente para saber quando chegaremos na sua região.</p>
        <ContactButton text='Consultar minha cidade' />
      </div>
    </section>
  );
}
