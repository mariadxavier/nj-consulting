import Image from 'next/image';
import WhatsAppIcon from '@/src/assets/WhatsAppIcon.svg';
import WhatsAppMessage from '../util/WhatsAppMessage';

type ContactButtonProps = {
  text?: string;
  theme?: 'clear' | 'green';
  icon?: string;
  link?: string;
  asSubmit?: boolean;
  className?: string;
};

export default function ContactButton({
  text = 'Falar no WhatsApp',
  theme = 'green',
  icon,
  link,
  asSubmit = false,
  className = "",
}: ContactButtonProps) {
  const clearTheme = 'border border-(--color-green) text-(--color-green) bg-(--color-white)';
  const greenTheme = 'bg-(--color-green) text-(--color-white)';
  const mergedClassName = `rounded-full cursor-pointer w-fit p-4 xl:text-lg flex justify-center items-center gap-2.5 text-sm shrink-0 md:px-8 md:py-3 ${theme === 'clear' ? clearTheme : greenTheme} ` + className;
  const iconSrc = theme === 'green' ? WhatsAppIcon.src : icon;

  if (asSubmit) {
    return (
      <button type="submit" className={mergedClassName}>
        {text}
        {iconSrc && <Image src={iconSrc} width={20} height={20} alt="icone" />}
      </button>
    );
  }

  const target = link ?? WhatsAppMessage.getContactUrl();

  return (
    <a
      href={target}
      target="_blank"
      rel="noopener noreferrer"
      className={mergedClassName}
    >
      {text}
      {iconSrc && <Image src={iconSrc} width={20} height={20} alt="icone" />}
    </a>
  );
}
