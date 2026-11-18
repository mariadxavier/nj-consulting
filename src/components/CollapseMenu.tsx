"use client";
import { CollapseMenuButton } from "@/src/components";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLinkProps } from "@/src/types";

export default function CollapseMenu({ items }: { items: NavLinkProps[] }) {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleMenuExpanded = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  useEffect(() => {
    const sectionIds = items
      .map((item) => item.href.replace('#', ''))
      .filter((id) => id !== '/');

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, [items]);

  const scrollToSection = useCallback((href: string) => {
    setIsMenuExpanded(false);
    document.body.style.overflow = 'auto';
    requestAnimationFrame(() => {
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const id = href.replace('#', '');
      const section = document.getElementById(id);
      if (!section) return;

      const fixedBar = document.querySelector('header');
      const headerHeight = fixedBar?.getBoundingClientRect().height ?? 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    });
  }, []);

  useEffect(() => {
    if (isMenuExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuExpanded]);

  const isActive = (href: string) => {
    if (href === '/') return activeSection === '/';
    return activeSection === href;
  };

  return (
    <div className="lg:hidden flex items-center bg-(--color-green-light-bg) rounded-xl p-1.5">
      <CollapseMenuButton onClick={toggleMenuExpanded} isOpen={isMenuExpanded} />
      {isMenuExpanded && (
        <div className="fixed inset-x-0 top-15 bottom-0 z-999  py-4">
          <nav className="rounded-xl border-2 border-dashed border-(--color-green-light) bg-white p-2">
            <ul className="flex flex-col divide-y divide-(--color-green-light)/30">
              {items.map((item, idx) => (
                <li key={idx}>
                  <a
                    className={`flex items-center gap-3 px-4 py-4 text-lg font-semibold cursor-pointer transition-colors
                      ${isActive(item.href)
                        ? 'border-l-4 border-(--color-green) text-(--color-green) bg-(--color-green-light)/20'
                        : 'text-(--color-green-dark) hover:text-(--color-green)'
                      }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
