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
    <div className="flex flex-col gap-5 p-5 rounded-2xl border-2 border-(--color-green) h-full">
      <div className='flex items-center md:items-start gap-3'>
        {icon && (
          <div className="p-2.5 bg-(--color-green) rounded-xl w-fit shrink-0">
            <Image src={icon} alt="" width={23} height={23} className='xl:w-[25] xl:h-[25] 2xl:w-[30] 2xl:h-[30]' />
          </div>
        )}
        <h1 className="text-(--color-green) text-xl font-semibold md:text-lg lg:text-xl xl:text-2xl">{title}</h1>
      </div>
      <p className="text-sm md:text-xs lg:text-[1rem] xl:text-lg">{subtitle}</p>
      {children}
    </div>
  );
}
