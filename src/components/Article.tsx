import Image from 'next/image';

type ArticleProps = {
  icon: string;
  title: string;
  subtitle: string;
};

export default function Article({ icon, title, subtitle }: ArticleProps) {
  return (
    <div className="bg-(--color-green-light-bg) flex flex-col p-4 gap-2.5 rounded-xl">
      <div className="flex gap-2.5 items-center">
        <div className="bg-(--color-green) rounded-lg p-2">
          <Image src={icon} alt="" width={20} height={20} className='xl:w-[25] 2xl:w-[30]' />
        </div>
        <h2 className="font-semibold text-(--color-green) xl:text-lg">{title}</h2>
      </div>
      <p className="text-sm xl:text-[1rem]">{subtitle}</p>
    </div>
  );
}
