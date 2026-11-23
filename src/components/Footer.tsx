import Image from 'next/image';
import SocialMediaList from './SocialMediaList';
import DarkThemeLogo from '@/src/assets/DarkThemeLogo.jpg';
import WhatsAppMessage from '../util/WhatsAppMessage';

export default function Footer() {
  const InstagramUrl = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '';
  return (
    <footer className="bg-[#000] text-(--color-white) flex flex-col gap-6 py-8 px-5 text-xs xl:text-sm md:gap-4">
      <hr />
      <div className="flex items-center justify-center">
        <Image
          src={DarkThemeLogo}
          alt="NJ Consulting"
          width={80}
          height={80}
          className="xl:w-[100]"
        />
      </div>
      <p>Correspondente autorizado · CredBR — Instituição de Pagamentos</p>
      <div>
        <a href={WhatsAppMessage.getContactUrl()}>+55 31 9779-0975</a> · Instagram{' '}
        <a href={InstagramUrl}>@njconsultingbr</a>
      </div>
      <div className="md:self-end">
        <SocialMediaList />
      </div>
      <p>
        NJ Consulting — correspondente autorizado da CredBR, instituição de pagamentos. A concessão
        de crédito e cartão está sujeita à análise. Taxas, limites e demais condições são informados
        ao cliente antes da contratação. Este site tem caráter informativo e não constitui oferta de
        crédito.
      </p>
      <p>Copyright © 2026 NJ Consulting. Todos os direitos reservados.</p>
    </footer>
  );
}
