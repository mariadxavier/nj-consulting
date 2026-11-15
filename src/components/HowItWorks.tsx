import { Frame, Step } from '@/src/components';
import ChatIcon from '@/src/assets/ChatIcon.svg';
import CircleIcon from '@/src/assets/CircleIcon.svg';
import CardSimpleIcon from '@/src/assets/CardSimpleIcon.svg';
import WppChatImg from '@/src/assets/WppChatImg.svg';
import SearchImg from '@/src/assets/SearchImg.svg';
import CardImg from '@/src/assets/CardImg.svg';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="flex flex-col p-5 gap-6">
      <h1 className="text-(--color-black) text-3xl font-semibold">Como funciona</h1>
      <p className="text-(--color-gray) text-sm">
        Três etapas simples, com acompanhamento humano do início ao fim.
      </p>
      <Step title="Passo 1">
        <Frame
          icon={ChatIcon}
          title="Fale com a gente pelo WhatsApp"
          subtitle="Atendimento inicial e orientação sobre o produto."
        >
          <Image
            src={WppChatImg.src}
            alt={'Conversa de exemplo no WhatsApp'}
            width={100}
            height={100}
            className="w-full max-w-[400px]"
          />
        </Frame>
      </Step>
      <Step title="Passo 2">
        <Frame
          icon={CircleIcon}
          title="Envie seus dados para análise"
          subtitle="Verificação do vínculo e das condições do seu caso."
        >
          <Image
            src={SearchImg.src}
            alt={'Ícone de lupa'}
            width={100}
            height={100}
            className="w-full max-w-[400px]"
          />
        </Frame>
      </Step>
      <Step title="Passo 1">
        <Frame
          icon={CardSimpleIcon}
          title="Ative o cartão e use quando precisar"
          subtitle="Após a aprovação, o cartão é liberado e o saque cai por Pix."
        >
          <Image
            src={CardImg.src}
            alt={'Imagem de cartão de crédito'}
            width={100}
            height={100}
            className="w-full max-w-[400px]"
          />
        </Frame>
      </Step>
      <p className='text-xs'>A concessão do cartão está sujeita à análise. Prazos e limites são informados antes da contratação.</p>
    </section>
  );
}
