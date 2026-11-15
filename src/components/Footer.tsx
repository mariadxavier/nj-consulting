import Image from 'next/image';
import SocialMediaList from './SocialMediaList';
import DarkThemeLogo from '@/src/assets/DarkThemeLogo.jpg';

export default function Footer() {
  return (
    <footer className="bg-[#000] text-(--color-white) flex flex-col gap-6 py-8 px-5 text-xs">
      <hr />
      <div className='flex items-center justify-center'>
        <Image src={DarkThemeLogo} alt="NJ Consulting" width={80} height={80} />
      </div>
      <p>Correspondente autorizado · CredBR — Instituição de Pagamentos</p>
      <p>(31) 99779-0975 · (31) 98476-3116 · Instagram @njconsultingbr</p>
      <SocialMediaList />
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
