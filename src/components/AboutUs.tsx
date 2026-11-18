import ManWithCard from '@/src/assets/ManWithCard.svg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-(--color-green-dark) text-(--color-white) flex flex-col md:flex-row justify-center gap-5 p-5 md:py-8 lg:py-12 lg:px-10 lg:justify-evenly"
    >
      <div className="flex flex-col justify-center gap-5 xl:max-w-[50%]">
        <h1 className="font-semibold text-3xl xl:text-4xl">Quem somos</h1>
        <p className="xl:text-xl">
          A <strong>NJ Consulting</strong> nasceu para facilitar o seu acesso a soluções financeiras de forma
          simples, transparente e humanizada. <br/> Somos uma consultoria empresarial que une tecnologia,
          inteligência financeira e benefícios exclusivos para impulsionar os seus objetivos com
          total segurança. Como <strong>correspondente autorizado da CredBR</strong>, instituição de pagamentos
          especializada em cartões de crédito e cartão benefício, nosso foco é servidores municipais
          e estaduais, com transparência nas condições, análise responsável e atendimento humano em
          todas as etapas do processo digital.
        </p>
      </div>
      <Image
        src={ManWithCard.src}
        alt="Homem segurando cartãocde crédito"
        width={350}
        height={360}
        className="xl:w-[400] 2xl:w-[450]"
      />
    </section>
  );
}
