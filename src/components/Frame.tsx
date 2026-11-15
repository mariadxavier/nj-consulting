import Image from 'next/image';
import { ReactNode } from 'react';

type FrameProps = {
  icon?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export default function Frame({ icon, title, subtitle, children }: FrameProps) {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-2xl border-2 border-(--color-green)">
      <div className='flex items-center gap-3'>
        {icon && (
          <div className="p-2.5 bg-(--color-green) rounded-xl w-fit shrink-0">
            <Image src={icon} alt="" width={23} height={23} />
          </div>
        )}
        <h1 className="text-(--color-green) text-xl font-semibold">{title}</h1>
      </div>
      <p className="text-sm">{subtitle}</p>
      {children}
    </div>
  );
}
