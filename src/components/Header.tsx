"use client";
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { CollapseMenu } from '@/src/components';
import Data from '../util/Data';
import Scroll from '../util/Scroll';

export default function Header() {
  const items = Data.getSections();

  return (
    <header className="container fixed bg-(--color-green-light) mx-auto px-4 py-4 flex items-center justify-between w-screen z-999">
      <Image src={Logo.src} alt="NJ Consulting" width={52} height={52} className="rounded-sm" onClick={() => {Scroll.scrollToSection("#hero")}} />
      <CollapseMenu items={items} />
    </header>
  );
}
