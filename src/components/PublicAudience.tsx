import Image from 'next/image';
import WomanImg from '@/src/assets/WomanImg.svg';

export default function PublicAudience() {
  return (
    <section id='public-audience' className="flex flex-col px-5 py-6 gap-6 md:py-8">
      <div className="bg-(--color-green-dark) md:relative rounded-2xl flex flex-col gap-5 p-6 pb-0 text-(--color-white) md:flex-row md:items-end">
        <div className="flex flex-col gap-5 md:py-4 md:shrink-0 md:w-1/2">
          <h1 className='text-2xl font-semibold md:text-3xl'>Para quem somos?</h1>
          <p>
            Atendemos servidores das praças atendidas, efetivos, comissionados ou contratados conforme
            convênio da folha. A elegibilidade é confirmada na análise, que considera o vínculo e as
            condições do servidor.
          </p>
        </div>
        <div className="md:flex md:justify-end md:w-1/2">
          <Image
            src={WomanImg.src}
            alt="Ilustração de mulher negra olhando para o lado"
            width={270}
            height={330}
            className="md:max-h-[300px] md:w-auto md:object-contain md:absolute md:bottom-0 md:right-10"
          />
        </div>
      </div>
    </section>
  );
}
