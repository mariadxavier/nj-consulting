import Image from 'next/image';
import WomanImg from '@/src/assets/WomanImg.svg';

export default function PublicAudience() {
  return (
    <section id='public-audience' className="flex flex-col px-5 py-6 gap-6">
      <div className="bg-(--color-green-dark) rounded-2xl flex flex-col gap-5 p-6 pb-0 text-(--color-white)">
        <h1 className='text-2xl font-semibold'>Para quem somos?</h1>
        <p>
          Atendemos servidores das praças atendidas, efetivos, comissionados ou contratados conforme
          convênio da folha. A elegibilidade é confirmada na análise, que considera o vínculo e as
          condições do servidor.
        </p>
        <Image
          src={WomanImg.src}
          alt="Ilustração de mulher negra olhando para o lado"
          width={270}
          height={330}
        />
      </div>
    </section>
  );
}
