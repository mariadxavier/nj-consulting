import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { CollapseMenu } from '@/src/components';

export default function Header() {
  const items = [
    {
      href: '/',
      name: 'Home',
    },
  ];
  return (
    <header >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image src={Logo.src} alt="NJ Consulting" width={52} height={52} className="rounded-sm" />
        <CollapseMenu items={items} />
      </div>
    </header>
  );
}
