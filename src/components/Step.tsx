import { ReactNode } from 'react';

type StepProps = {
  title: string;
  children: ReactNode;
};

export default function Step({ title, children }: StepProps) {
  return (
    <div className="bg-(--color-green-light) flex flex-col py-4 gap-3 rounded-xl justify-start">
      <h2 className="font-semibold bg-(--color-green) text-(--color-white) text-sm rounded-full p-2 w-fit">
        {title}
      </h2>
      {children}
    </div>
  );
}
