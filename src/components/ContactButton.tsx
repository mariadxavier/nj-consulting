import Image from 'next/image';

type ContactButtonProps = {
  text: string;
  theme?: 'clear' | 'green';
  icon?: string;
  link?: string;
};

export default function ContactButton({ text, theme = 'clear', icon, link }: ContactButtonProps) {
  const clearTheme = 'border border-(--color-green) text-(--color-green) bg-(--color-white)';
  const greenTheme = 'bg-(--color-green) text-(--color-white)';
  const phoneNumber = process.env.NEXT_PUBLIC_COMERCIAL_PHONE_NUMBER;
  const target = link ?? `https://wa.me//${phoneNumber}`;
  return (
    <a
      href={target}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full cursor-pointer p-4 w-full flex justify-center items-center gap-2.5 text-sm ${theme === 'clear' ? clearTheme : greenTheme}`}
    >
      {text}
      {icon && <Image src={icon} width={20} height={20} alt={'icone'} />}
    </a>
  );
}
