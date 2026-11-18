import Image from 'next/image';
import WomanImg from '@/src/assets/WomanImg.svg';

export default function PublicAudience() {
  return (
    <section id='public-audience' className="flex flex-col px-5 py-6 gap-6 md:py-8">
      <div className="lg:hidden bg-(--color-green-dark) rounded-2xl flex flex-col gap-5 p-6 pb-0 text-(--color-white) md:relative md:flex-row md:items-end">
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
      <div className="hidden lg:block relative pt-8">
        <div className="absolute top-0 left-6 w-20 h-20 lg:w-50 lg:h-50 xl:w-60 2xl:hidden bg-(--color-green-dark-text) rounded-2xl z-0" />
        <div className="relative bg-(--color-green-dark) lg:w-[80%] lg:m-auto rounded-2xl overflow-visible z-10">
          <div className="flex items-end">
            <div className="w-[55%] xl:w-[50%] p-10 xl:p-14 text-(--color-white)">
              <h1 className='text-3xl xl:text-4xl font-semibold mb-5'>Para quem somos?</h1>
              <p className='xl:text-lg'>
                Atendemos servidores das praças atendidas, efetivos, comissionados ou contratados conforme
                convênio da folha. A elegibilidade é confirmada na análise, que considera o vínculo e as
                condições do servidor.
              </p>
            </div>
            <div className="w-[45%] xl:w-[50%] flex justify-center relative">
              <Image
                src={WomanImg.src}
                alt="Ilustração de mulher negra olhando para o lado"
                width={340}
                height={400}
                className="object-contain w-auto max-h-[350px] xl:max-h-[420px] -mt-12 xl:-mt-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
