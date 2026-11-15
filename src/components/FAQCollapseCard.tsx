'use client';

import { useState } from 'react';

type FAQCollapseCardProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FAQCollapseCard({
  question,
  answer,
  defaultOpen = false,
}: FAQCollapseCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="rounded-2xl border border-black/10 bg-(--color-white) px-5 py-4">
      <h2>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="font-semibold text-(--color-black)">{question}</span>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-(--color-green-dark) text-xl leading-none text-(--color-green-dark)">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h2>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed text-(--color-gray)">{answer}</p>
        </div>
      </div>
    </article>
  );
}
