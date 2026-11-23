import Image from 'next/image';
import WomanImg from '@/src/assets/WomanImg.svg';

export default function PublicAudience() {
  return (
    <section id="public-audience" className="flex flex-col px-5 py-6 gap-6 md:py-8 lg:py-14 xl:py-20 2xl:py-24">
      <div className="lg:hidden bg-(--color-green-dark) rounded-2xl flex flex-col gap-5 p-6 pb-0 text-(--color-white) md:relative md:flex-row md:items-end">
        <div className="flex flex-col gap-5 md:py-4 md:shrink-0 md:w-1/2">
          <h2 className="text-2xl font-semibold md:text-3xl">Para quem somos?</h2>
          <p>
            Atendemos servidores públicos das praças conveniadas, sejam efetivos, comissionados ou
            contratados, de acordo com as regras de cada convênio de folha. Nossa solução é voltada
            a quem busca acesso ao crédito consignado com praticidade, transparência e condições
            adequadas ao seu vínculo funcional. A elegibilidade é confirmada durante a análise.
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
      <div className="hidden lg:block relative pt-10 xl:pt-14 2xl:pt-20 w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4">
        <div className="absolute top-2 left-0 xl:top-3 xl:left-0 2xl:top-4 2xl:left-0 w-24 h-24 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48 bg-(--color-green-dark-text) rounded-3xl z-0" />
        <div className="relative bg-(--color-green-dark) rounded-3xl overflow-visible z-10 shadow-sm">
          <div className="flex items-end">
            <div className="w-[55%] xl:w-[52%] p-8 xl:p-14 2xl:p-20 text-(--color-white) flex flex-col justify-center">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 xl:mb-6 2xl:mb-8 leading-tight">
                Para quem somos?
              </h2>
              <p className="text-base xl:text-lg 2xl:text-2xl leading-relaxed text-(--color-white)/95">
                Atendemos servidores das praças atendidas, efetivos, comissionados ou contratados
                conforme convênio da folha. A elegibilidade é confirmada na análise, que considera o
                vínculo e as condições do servidor.
              </p>
            </div>
            <div className="w-[45%] xl:w-[48%] flex justify-center items-end relative">
              <Image
                src={WomanImg.src}
                alt="Ilustração de mulher negra olhando para o lado"
                width={500}
                height={600}
                className="object-contain w-auto max-h-[380px] xl:max-h-[460px] 2xl:max-h-[580px] 3xl:max-h-[660px] -mt-14 xl:-mt-20 2xl:-mt-28 drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
