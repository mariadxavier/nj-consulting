import ManWithCard from '@/src/assets/ManWithCard.svg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-(--color-green-dark) text-(--color-white) flex flex-col md:flex-row justify-center gap-5 p-5 md:py-8 lg:py-12 lg:px-10 lg:justify-evenly xl:p-20"
    >
      <div className="flex flex-col justify-center gap-5 xl:max-w-[50%]">
        <h2 className="font-semibold text-3xl xl:text-4xl">Quem somos</h2>
        <p className="xl:text-xl">
          A <strong>NJ Consulting</strong> nasceu para tornar o acesso a soluções financeiras mais simples, transparente e humanizado.
          <br/>Somos uma consultoria empresarial que combina tecnologia, inteligência financeira e benefícios exclusivos para ajudar você a alcançar seus objetivos com segurança e confiança.
          <br/>Como <strong>correspondente autorizado da CredBR</strong>, instituição de pagamento especializada em cartões de crédito e cartões de benefício, atuamos com foco no atendimento a servidores municipais e estaduais, oferecendo condições claras, análise responsável e suporte humanizado em todas as etapas do processo digital.
        </p>
      </div>
      <Image
        src={ManWithCard.src}
        alt="Homem segurando cartão de crédito BRCard"
        width={350}
        height={360}
        className="xl:w-[400] 2xl:w-[450]"
      />
    </section>
  );
}
