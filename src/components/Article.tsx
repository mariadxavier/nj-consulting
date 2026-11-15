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
          <Image src={icon} alt="" width={20} height={20} />
        </div>
        <h2 className="font-semibold text-(--color-green)">{title}</h2>
      </div>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
}
