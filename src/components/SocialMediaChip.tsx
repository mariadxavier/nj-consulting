import Image from "next/image";

type SocialMediaChipProps = {
    name: string;
    link: string;
    icon: string;
}

export default function SocialMediaChip({name, link, icon}: SocialMediaChipProps) {
    return (
        <a href={link} className="rounded-full bg-(--color-green) p-2.5">
            <Image src={icon} alt={name} width={21} height={21} />
        </a>
    )
}