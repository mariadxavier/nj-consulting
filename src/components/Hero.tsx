'use client';

import { ContactButton, InfoChip } from '@/src/components';
import MoneyBagIcon from '@/src/assets/MoneyBagIcon.svg';
import PixIcon from '@/src/assets/PixIcon.svg';
import CheckIcon from '@/src/assets/CheckIcon.svg';
import NotePadIcon from '@/src/assets/NotePadIcon.svg';
import BRCardIcon from '@/src/assets/BRCardIcon.svg';
import Image from 'next/image';
import Scroll from '@/src/util/Scroll';

export default function Hero() {
  return (
    <div id='hero' className="flex flex-col justify-center md:flex-row gap-5 p-5 md:py-8 mt-[110px] lg:relative lg:mt-[160px] lg:py-12 lg:px-10 xl:gap-20 xl:p-20">
      <div className="flex flex-col justify-center gap-5 md:w-[50%] lg:w-[45%] xl:w-[50%] xl:gap-8">
        <h1 className="text-4xl font-extrabold xl:text-6xl">Aqui, seu nome não é obstáculo.</h1>
        <p className="font-semibold text-(--color-green-dark-text) xl:text-lg">
          Cartão de crédito e benefício para servidores públicos, com atendimento digital, simples, transparente e humanizado.
        </p>
        <ContactButton />
        <div className='text-xs text-(--color-green) flex flex-col gap-2 xl:text-lg'>
          <p className="font-medium">Correspondente autorizado CredBR</p>
          <p className="text-(--color-green-dark-text)">
            Saque sujeito à análise de perfil. Pix em até 2 horas após a liberação
          </p>
          <a onClick={() => Scroll.scrollToSection('#our-places')} className="text-sm font-medium cursor-pointe xl:text-[1rem]">Ver locais atendidos →</a>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-5 md:w-[50%]">
        <Image className='md:hidden lg:block lg:absolute lg:right-0 lg:z-1 2xl:w-[450] xl:right-8 3xl:w-[30%]' src={BRCardIcon} alt='Cartão de crédito e benefício BRCard para servidores públicos' width={350} height={224} priority />
        <div className='flex flex-col gap-2 xl:gap-4'>
          <InfoChip text='Saque direto na conta' icon={MoneyBagIcon} />
          <InfoChip text='Pix em até 2h' icon={PixIcon} />
          <InfoChip text='Sem anuidade' icon={CheckIcon} />
          <InfoChip text='Sem consulta ao SPC' icon={NotePadIcon} />
        </div>
      </div>
    </div>
  );
}
