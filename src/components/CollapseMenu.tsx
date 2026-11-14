"use client";
import Link from "next/link";
import { CollapseMenuButton } from "@/src/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/src/types";

export default function CollapseMenu({ items }: NavLinkProps) {
  const pathname = usePathname();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenuExpanded = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  useEffect(() => {
    setIsMenuExpanded(false);
  }, [pathname]);

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

  return (
    <div className="lg:hidden flex items-center bg-(--color-green-light-bg) rounded-xl p-1.5">
      <CollapseMenuButton onClick={toggleMenuExpanded} isOpen={isMenuExpanded} />
      {isMenuExpanded &&
        <div className="flex flex-col gap-3 w-screen h-dvh absolute z-999 bg-(--color-white-shell) top-16 left-0 p-5 shadow-xl">
          <nav>
            <ul className="flex flex-col gap-6 bg-(--color-white) p-4 divide-b-4 divide-(--color-gray)">
              {items &&
                items.map((item, idx) => (
                  <li key={idx} >
                    <Link className="flex items-center gap-4  justify-between font-bold text-(--color-green) text-sm" href={item.href} onClick={() => setIsMenuExpanded(false)}>
                      <div className="flex items-center gap-4">

                        <p className="bg-(--color-yellow) w-7 h-7 rounded-full flex items-center justify-center text-(--color-green) text-xs">{item.name.toUpperCase().slice(0, 2)}</p>
                        <p>
                          {item.name.toUpperCase()}
                        </p>
                      </div>
                      <p className="text-(--color-gray)">›</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      }
    </div>
  );
}
