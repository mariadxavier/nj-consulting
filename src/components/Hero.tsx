import { ContactButton, InfoChip } from '@/src/components';
import MoneyBagIcon from '@/src/assets/MoneyBagIcon.svg';
import PixIcon from '@/src/assets/PixIcon.svg';
import CheckIcon from '@/src/assets/CheckIcon.svg';
import NotePadIcon from '@/src/assets/NotePadIcon.svg';
import BRCardIcon from '@/src/assets/BRCardIcon.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div id='hero' className="flex flex-col justify-center px-5 py-5 gap-5 mt-[80px]">
      <h1 className="text-4xl font-extrabold">Aqui, seu nome não é obstáculo.</h1>
      <p className="font-semibold text-(--color-green-dark-text)">
        Cartão de crédito e benefício para servidores públicos, com atendimento digital, humano e
        sem burocracia.
      </p>
      <ContactButton />
      <div className='text-xs text-(--color-green) flex flex-col gap-2'>
        <p className=" font-medium">Correspondente autorizado CredBR</p>
        <p className="text-(--color-green-dark-text)">
          Saque sujeito à análise. Pix em até 2 horas após a liberação
        </p>
        <p className="text-sm font-medium">Ver cidades atendidas →</p>
      </div>
      <Image src={BRCardIcon} alt='Imagem de cartão BRCard' width={350} height={224} />
      <div className='flex flex-col gap-2'>
        <InfoChip text='Lorem ipson' icon={MoneyBagIcon} />
        <InfoChip text='Lorem ipson' icon={PixIcon} />
        <InfoChip text='Lorem ipson' icon={CheckIcon} />
        <InfoChip text='Lorem ipson' icon={NotePadIcon} />
      </div>
    </div>
  );
}
