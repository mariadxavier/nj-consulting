'use client';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { CollapseMenu } from '@/src/components';
import Data from '../util/Data';
import Scroll from '../util/Scroll';
import { useEffect, useState } from 'react';

const sectionsToNav = Data.getSections();

export default function Header() {
  const items = Data.getSections();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = sectionsToNav
      .map((item) => document.getElementById(item.href.replace('#', '')))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed z-999 flex w-full items-center justify-between bg-(--color-green-light) px-4 py-4 shadow">
      <Image
        src={Logo.src}
        alt="NJ Consulting"
        width={62}
        height={62}
        className="shrink-0 cursor-pointer rounded-sm xl:w-[70] 2xl:w-[80]"
        onClick={() => {
          Scroll.scrollToSection('#hero');
        }}
      />
      <nav className="hidden flex-1 items-center justify-evenly px-8 lg:flex" aria-label="Seções">
        {sectionsToNav.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`relative pb-1 lg:text-xs xl:text-sm 2xl:text-[1rem] font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'text-(--color-green)'
                  : 'text-(--color-black) hover:text-(--color-green)'
              }`}
              onClick={(event) => {
                event.preventDefault();
                Scroll.scrollToSection(item.href);
              }}
            >
              {item.name}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full ${
                  isActive ? 'bg-(--color-green)' : 'bg-transparent'
                }`}
              />
            </a>
          );
        })}
      </nav>
      <div className="lg:hidden">
        <CollapseMenu items={items} />
      </div>
    </header>
  );
}
