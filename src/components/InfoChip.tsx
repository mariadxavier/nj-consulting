import Image from "next/image";

type InfoChipProps = {
    text: string;
    icon?: string;
};

export default function InfoChip({text, icon}: InfoChipProps) {
    return (
        <div className="bg-(--color-green) text-(--color-white) flex items-center gap-3 p-3.5 rounded-xl font-semibold xl:text-xl 2xl:p-4">
            {icon && <Image src={icon} width={20} height={20} alt={'icone'} className="xl:w-[30] 2xl:w-[40px]" />}
            {text}
        </div>
    );
}