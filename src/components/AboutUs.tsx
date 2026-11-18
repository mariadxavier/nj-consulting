import ManWithCard from '@/src/assets/ManWithCard.svg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id='about-us' className="bg-(--color-green-dark) text-(--color-white) flex flex-col justify-center gap-5 p-5">
      <h1 className="font-semibold text-3xl">Quem somos</h1>
      <p>
        NJ Consulting atua em inteligência comercial e financeira como correspondente autorizado da
        CredBR, instituição de pagamentos especializada em cartões de crédito e cartão benefício.
        Nosso foco é servidores municipais e estaduais, com transparência nas condições, análise
        responsável e atendimento humano em todas as etapas do processo digital.
      </p>
      <Image
        src={ManWithCard.src}
        alt="Homem segurando cartãocde crédito"
        width={350}
        height={360}
      />
    </section>
  );
}
