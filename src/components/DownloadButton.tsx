import Image, { type StaticImageData } from "next/image";

type DownloadButtonProps = {
  href: string;
  label: string;
  icon: StaticImageData;
  variant: "dark" | "light";
};

const variants = {
  dark: "bg-ink text-cream hover:bg-mint",
  light: "bg-cream text-ink hover:bg-amber",
};

export default function DownloadButton({
  href,
  label,
  icon,
  variant,
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      className={`flex h-[61px] w-[296px] items-center justify-center gap-2 rounded-xl text-[18px] leading-8 font-bold tracking-[-0.18px] transition-colors lg:w-[333px] ${variants[variant]}`}
    >
      <Image src={icon} alt="" className="h-5 w-auto max-w-none" />
      {label}
    </a>
  );
}
